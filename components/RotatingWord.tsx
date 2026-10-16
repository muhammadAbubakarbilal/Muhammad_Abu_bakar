"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
export function RotatingWord() {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % 3), 2500);
    return () => clearInterval(timer);
  }, [reduced]);
  return (
    <><span className="sr-only">build</span><span className="lf-rotating-word" aria-hidden="true">
      <span aria-hidden="true">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={reduced ? 0 : index}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.68, 0, 0.22, 0.83] }}
          >
            {["build", "design", "create"][reduced ? 0 : index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span></>
  );
}
