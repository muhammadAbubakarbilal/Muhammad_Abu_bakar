"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MoreHorizontal, X } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const reduced = useReducedMotion();
  return (
    <motion.header
      layout
      transformTemplate={(_, transform) =>
        `translateX(-50%) ${transform === "none" ? "" : transform}`
      }
      transition={{ type: "spring", duration: reduced ? 0 : 0.4, bounce: 0 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`lf-nav ${open ? "is-open" : ""} ${hovered ? "is-hovered" : ""}`}
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false);
      }}
    >
      <Link className="lf-brand" href="/" onClick={() => setOpen(false)}>
        <Image src="/assets/abu_bakar.jpg" width={32} height={32} alt="" />
        Muhammad Abu Bakar
      </Link>
      <nav aria-label="Main navigation">
        {[
          ["Work", "/work"],
          ["Services", "/systems"],
          ["About", "/about"],
          ["Blog", "/insights"],
          ["Contact", "/contact"],
        ].map(([label, url]) => (
          <Link key={url} href={url} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
      </nav>
      <button
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={22} /> : <MoreHorizontal size={26} />}
      </button>
    </motion.header>
  );
}
