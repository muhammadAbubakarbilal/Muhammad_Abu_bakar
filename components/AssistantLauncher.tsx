"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Bot } from "lucide-react";
const Drawer = dynamic(
  () =>
    import("./AiAssistantDrawer").then((module) => module.AiAssistantDrawer),
  {
    ssr: false,
    loading: () => (
      <p className="assistant-loading" role="status">
        Opening assistant…
      </p>
    ),
  },
);
export function AssistantLauncher() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        id="open-assistant-btn"
        className="assistant-trigger"
        aria-label="Ask about a project"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <Bot size={20} aria-hidden="true" />
        <span>Ask a question</span>
      </button>
      {open && (
        <Drawer
          onClose={() => {
            setOpen(false);
            // Restore focus after the modal has unmounted and the page is no longer inert.
            requestAnimationFrame(() =>
              document.getElementById("open-assistant-btn")?.focus(),
            );
          }}
        />
      )}
    </>
  );
}
