"use client";
import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Bot,
  CalendarClock,
  Globe,
  Layers,
  RotateCcw,
  UserRound,
} from "lucide-react";
import { motionTokens } from "@/lib/motion";
const nodes = [
  {
    title: "Website inquiry",
    icon: Globe,
    text: "A visitor finds your business and shares what they need.",
  },
  {
    title: "AI assistance",
    icon: Bot,
    text: "An assistant answers routine questions and gathers useful details.",
  },
  {
    title: "CRM",
    icon: Layers,
    text: "The inquiry becomes an organized contact with context for your team.",
  },
  {
    title: "Follow-up",
    icon: CalendarClock,
    text: "Defined rules send the right message or booking invitation.",
  },
  {
    title: "Human conversation",
    icon: UserRound,
    text: "A person takes over with the information needed for a useful conversation.",
  },
];
export function SystemConnection() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { once: true, amount: 0.4 });
  const reduced = useReducedMotion();
  const [selected, setSelected] = useState(0);
  const [run, setRun] = useState(0);
  const [ready, setReady] = useState(false);
  const animate = (visible || ready) && !reduced;
  return (
    <div ref={ref} className="connection-diagram">
      <div className="connection-top">
        <span>One connected customer journey</span>
        <button
          type="button"
          className="replay-button"
          onClick={() => {
            setReady(true);
            setRun((value) => value + 1);
          }}
        >
          <RotateCcw size={14} aria-hidden="true" />
          Replay
        </button>
      </div>
      <div className="connection-nodes" key={run}>
        {nodes.map((node, index) => (
          <div className="connection-stage" key={node.title}>
            <motion.button
              type="button"
              className={`connection-node ${selected === index ? "node-selected" : ""}`}
              aria-pressed={selected === index}
              onClick={() => setSelected(index)}
              initial={false}
              animate={
                animate
                  ? {
                      scale: [1, 1.035, 1],
                      borderColor: ["#2b313a", "#efb45d", "#2b313a"],
                    }
                  : { scale: 1 }
              }
              transition={{
                delay: index * 0.55,
                duration: 0.55,
                ease: motionTokens.ease,
              }}
            >
              <node.icon size={27} strokeWidth={1.4} aria-hidden="true" />
              <span>{node.title}</span>
            </motion.button>
            {index < nodes.length - 1 && (
              <div className="connection-connector" aria-hidden="true">
                <svg viewBox="0 0 60 12">
                  <motion.path
                    d="M0 6 H56 M51 1 L56 6 L51 11"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    initial={false}
                    animate={
                      animate ? { pathLength: [0, 1] } : { pathLength: 1 }
                    }
                    transition={{ delay: index * 0.55 + 0.2, duration: 0.5 }}
                  />
                </svg>
                <ArrowRight className="mobile-connector" size={16} />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="connection-detail" aria-live="polite">
        <span>{String(selected + 1).padStart(2, "0")}</span>
        <p>{nodes[selected].text}</p>
      </div>
      <p className="diagram-note">
        Illustrative process. Select a stage to explore.
      </p>
    </div>
  );
}
