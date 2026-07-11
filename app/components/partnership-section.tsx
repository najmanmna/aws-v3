"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function PartnershipSection() {
  return (
    <section
      aria-label="Agency Partnerships"
      className="border-t border-foreground/10 bg-background px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto flex w-full max-w-[1600px] flex-col">
        
        {/* Everything reveals together: no staggered delays */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40"
        >
          Agency Partnerships
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-5xl text-[clamp(2.5rem,6vw,5.5rem)] font-medium leading-[1.02] tracking-tight text-foreground"
        >
          The quality shouldn&apos;t drop when the design reaches development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex flex-col items-start justify-between gap-12 border-t border-foreground/10 pt-12 lg:flex-row lg:items-end lg:gap-8"
        >
          <div className="flex max-w-2xl flex-col gap-6">
            <p className="text-pretty text-lg leading-relaxed text-foreground/80 sm:text-xl">
              We build exactly what was designed, communicate clearly, hit deadlines, and hand over code your team can confidently maintain.
            </p>
            
            {/* The Proof Point / Secret Sauce */}
            <p className="text-pretty text-sm font-medium leading-relaxed text-foreground/50">
              Many of our strongest builds are delivered under white-label partnerships and remain strictly confidential. That is exactly how we believe agency relationships should work.
            </p>
          </div>
          
          {/* Warmer, conversational CTA */}
          <Link
            href="/partners"
            className="group inline-flex w-fit shrink-0 items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] text-foreground transition-colors hover:text-foreground/70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            See how we work with agencies
            <span className="text-accent transition-transform duration-300 ease-out group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}