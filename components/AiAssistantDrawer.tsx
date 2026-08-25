'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Loader2, 
  Sparkles, 
  ArrowRight,
  MessageSquare,
  RefreshCw,
  User,
  Zap
} from 'lucide-react';
import Link from 'next/link';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const QUICK_PROMPTS = [
  'I want to automate lead follow-up',
  'My team uses too many tools',
  'I need an AI website chatbot',
  'I want to automate customer onboarding',
  'We need custom internal software',
  'Where should my business use AI?'
];

export function AiAssistantDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hello. I'm Muhammad Abu Bakar Bilal's AI Systems Assistant. I help business owners diagnose operational bottlenecks before writing a single line of code.\n\nTell me: What repetitive process or manual handoff in your business is currently costing the most time?"
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const messageText = textToSend || input;
    if (!messageText.trim() || loading) return;

    const newMessages: Message[] = [
      ...messages,
      { role: 'user', content: messageText }
    ];

    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.slice(-6),
          userMessage: messageText
        })
      });

      const data = await response.json();
      if (data.reply) {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: data.reply }
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: "To diagnose your workflow: How is information currently captured in that process, and where does it get delayed or copied manually?"
          }
        ]);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "Let's diagnose that bottleneck: What tools are currently involved, and what does a team member have to do manually to move each task forward?"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        role: 'assistant',
        content: "Resetting diagnosis. What specific operational workflow would you like to examine?"
      }
    ]);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          id="open-assistant-btn"
          onClick={() => setIsOpen(true)}
          aria-label="Open AI Workflow Diagnostic Assistant"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-zinc-900 border border-amber-500/40 hover:border-amber-400 text-zinc-100 shadow-2xl transition-all duration-200 hover:scale-105 hover:bg-zinc-850"
        >
          <div className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/60 flex items-center justify-center text-amber-400">
            <Bot className="w-3.5 h-3.5" />
          </div>
          <div className="text-left font-mono text-xs hidden sm:block">
            <span className="font-semibold text-zinc-200 group-hover:text-amber-400 block transition-colors">
              Ask about your workflow
            </span>
            <span className="text-[10px] text-zinc-300">
              Interactive Diagnostic
            </span>
          </div>
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse sm:ml-1" />
        </button>
      </div>

      {/* Slide-over Drawer / Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            id="assistant-drawer"
            className="w-full max-w-lg h-full bg-[#0d1017] border-l border-zinc-800 shadow-2xl flex flex-col justify-between overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-zinc-800 flex items-center justify-between bg-[#090b0e]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-zinc-100 font-mono flex items-center gap-2">
                    <span>Workflow Diagnostic Assistant</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                      LIVE
                    </span>
                  </h3>
                  <p className="text-[11px] text-zinc-400">
                    Grounded in Muhammad&apos;s 3-Tier Systems Philosophy
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleReset}
                  title="Reset conversation"
                  className="p-2 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  id="close-assistant-btn"
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Conversation Stream */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 text-xs ${
                    msg.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-7 h-7 rounded-md bg-zinc-800 border border-zinc-700 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`rounded-xl p-3.5 max-w-[85%] leading-relaxed whitespace-pre-wrap ${
                      msg.role === 'user'
                        ? 'bg-amber-500 text-zinc-950 font-medium'
                        : 'bg-[#141822] border border-zinc-800 text-zinc-200'
                    }`}
                  >
                    {msg.content}
                  </div>

                  {msg.role === 'user' && (
                    <div className="w-7 h-7 rounded-md bg-amber-500 text-zinc-950 flex items-center justify-center shrink-0 mt-0.5 font-mono text-[10px] font-bold">
                      YOU
                    </div>
                  )}
                </div>
              ))}

              {loading && (
                <div className="flex items-center gap-3 text-xs text-zinc-400">
                  <div className="w-7 h-7 rounded-md bg-zinc-800 border border-zinc-700 flex items-center justify-center text-amber-400 shrink-0">
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  </div>
                  <div className="bg-[#141822] border border-zinc-800 rounded-xl p-3 text-zinc-400 font-mono text-[11px] flex items-center gap-2">
                    <span>Analyzing bottleneck & mapping workflow...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Diagnostic Prompts */}
            <div className="p-3 bg-[#090b0e] border-t border-zinc-800/80">
              <span className="text-[10px] font-mono text-zinc-300 uppercase tracking-wider block mb-2">
                Sample Operational Challenges:
              </span>
              <div className="flex gap-1.5 overflow-x-auto pb-1">
                {QUICK_PROMPTS.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(prompt)}
                    disabled={loading}
                    className="shrink-0 text-[11px] font-mono px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-amber-400 hover:border-amber-500/40 transition-colors whitespace-nowrap"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Box */}
            <div className="p-4 border-t border-zinc-800 bg-[#0b0e14]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  id="assistant-input-box"
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Describe where your business gets slowed down..."
                  disabled={loading}
                  className="flex-1 bg-[#090b0e] border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  aria-label="Send message to assistant"
                  className="p-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 disabled:opacity-40 transition-colors shrink-0 font-bold"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-zinc-300">
                <span>Want to map your system directly?</span>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 font-semibold"
                >
                  <span>Submit Diagnostic Intake</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
