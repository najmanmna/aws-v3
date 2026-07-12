"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * DESIGN_SYSTEM.md §12 — The Hand-Marked System.
 * A bespoke, hand-authored underline stroke, not a generic "sketchy" library effect.
 * Sparing by design: at most one or two of these per page.
 */
export function HandMarkUnderline({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block">
      {children}
      <svg
        aria-hidden="true"
        viewBox="0 0 300 20"
        preserveAspectRatio="none"
        className="pointer-events-none absolute -bottom-1 left-0 h-[0.24em] w-full sm:-bottom-2"
        style={{ mixBlendMode: "multiply" }}
      >
        <defs>
          <filter id="hand-mark-ink-bleed" x="-20%" y="-150%" width="140%" height="400%">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="7" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" />
          </filter>
        </defs>
        <motion.path
          d="M4 12 C 55 5, 125 16, 178 9 C 222 3, 258 15, 296 8"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="7"
          strokeLinecap="round"
          opacity="0.55"
          filter="url(#hand-mark-ink-bleed)"
          className="motion-reveal-path"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease, delay: 0.25 }}
        />
        <motion.path
          d="M6 10 C 65 15, 135 6, 188 11 C 228 15, 262 7, 294 12"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.4"
          filter="url(#hand-mark-ink-bleed)"
          className="motion-reveal-path"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease, delay: 0.38 }}
        />
      </svg>
    </span>
  );
}
