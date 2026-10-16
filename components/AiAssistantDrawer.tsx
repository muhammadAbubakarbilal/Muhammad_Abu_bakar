"use client";
import { useEffect, useRef, useState } from "react";
import { Bot, Loader2, RefreshCw, Send, X } from "lucide-react";
import Link from "next/link";
type Message = { role: "user" | "assistant"; content: string };
const greeting: Message = {
  role: "assistant",
  content:
    "Hello! I can help you explore a website, AI assistant or connected workflow. What would you like to build or improve?",
};
const prompts = [
  "I need a business website",
  "I want an AI assistant",
  "I need to connect my CRM",
];
export function AiAssistantDrawer({ onClose }: { onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([greeting]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("Project guidance");
  const requestRef = useRef<AbortController | null>(null);
  useEffect(() => {
    dialog.current?.showModal();
    inputRef.current?.focus();
    return () => {
      requestRef.current?.abort();
    };
  }, []);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "instant", block: "nearest" });
  }, [messages, loading]);
  async function send(text = input) {
    if (!text.trim() || loading) return;
    const next: Message[] = [
      ...messages,
      { role: "user", content: text.trim() },
    ];
    setMessages(next);
    setInput("");
    setLoading(true);
    const controller = new AbortController();
    requestRef.current = controller;
    const timer = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.slice(-6),
          userMessage: text.trim(),
        }),
        signal: controller.signal,
      });
      const data = await response.json();
      if (!response.ok || !data.reply) throw new Error("Unavailable");
      setMessages((previous) => [
        ...previous,
        { role: "assistant", content: data.reply },
      ]);
      setMode(
        data.mode === "ai"
          ? "AI-generated guidance"
          : "Local guidance · AI not connected",
      );
    } catch {
      if (dialog.current?.open)
        setMessages((previous) => [
          ...previous,
          {
            role: "assistant",
            content:
              "The assistant couldn’t respond. Please use Discuss a Project below to contact Muhammad directly.",
          },
        ]);
    } finally {
      clearTimeout(timer);
      setLoading(false);
      inputRef.current?.focus();
    }
  }
  return (
    <dialog
      ref={dialog}
      id="assistant-drawer"
      className="assistant-dialog"
      aria-labelledby="assistant-title"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="assistant-panel">
        <div className="assistant-header">
          <div>
            <h2 id="assistant-title">
              <Bot size={20} aria-hidden="true" />
              Ask about a project
            </h2>
            <p>{mode}</p>
          </div>
          <div>
            <button
              className="icon-button"
              aria-label="Reset conversation"
              disabled={loading}
              onClick={() => {
                setMessages([greeting]);
                setMode("Project guidance");
                inputRef.current?.focus();
              }}
            >
              <RefreshCw size={18} aria-hidden="true" />
            </button>
            <button
              className="icon-button"
              aria-label="Close assistant"
              onClick={onClose}
            >
              <X size={22} aria-hidden="true" />
            </button>
          </div>
        </div>
        <div
          className="assistant-messages"
          role="log"
          aria-live="polite"
          aria-relevant="additions"
        >
          {messages.map((message, i) => (
            <div key={i} className={`chat-message chat-${message.role}`}>
              <span>{message.role === "assistant" ? "Assistant" : "You"}</span>
              <p>{message.content}</p>
            </div>
          ))}
          {loading && (
            <p role="status" className="assistant-thinking">
              <Loader2 size={16} className="loading-icon" aria-hidden="true" />
              Preparing a reply…
            </p>
          )}
          <div ref={endRef} />
        </div>
        <div className="assistant-bottom">
          {messages.length === 1 && (
            <div className="quick-prompts">
              {prompts.map((prompt) => (
                <button
                  key={prompt}
                  disabled={loading}
                  onClick={() => send(prompt)}
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}
          <form
            onSubmit={(event) => {
              event.preventDefault();
              send();
            }}
          >
            <label htmlFor="assistant-input" className="sr-only">
              Your project question
            </label>
            <input
              ref={inputRef}
              id="assistant-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              maxLength={2000}
              placeholder="What would you like to build?"
              disabled={loading}
            />
            <button
              className="icon-button"
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
            >
              <Send size={19} aria-hidden="true" />
            </button>
          </form>
          <div className="assistant-disclaimer">
            <span>Guidance may need verification.</span>
            <Link href="/contact" onClick={onClose}>
              Discuss a Project
            </Link>
          </div>
        </div>
      </div>
    </dialog>
  );
}
