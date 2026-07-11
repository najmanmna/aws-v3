"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const worries: { question: string; answer: ReactNode }[] = [
  {
    question: "Will we be kept in the loop?",
    answer:
      "You get a single point of contact for the entire build, and real visibility into progress as it happens. We build in the open: no black boxes, no radio silence between kickoff and launch.",
  },
  {
    question: "Will this derail our client’s timeline?",
    answer:
      "We’d rather give you a realistic timeline once than an optimistic one twice. Reliability is the standard we hold ourselves to, not speed for its own sake.",
  },
  {
    question: "Will our design survive execution?",
    answer: (
      <>
        This is the reason the studio exists. Most of our white-label work is confidential by
        agreement, exactly how we believe these partnerships should work, but the standard of
        execution is the same one visible in{" "}
        <Link
          href="/work"
          className="text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground"
        >
          every public case study
        </Link>
        .
      </>
    ),
  },
  {
    question: "Will you still be here in six months?",
    answer:
      "You’re working with an ongoing studio, not a single freelancer who might go quiet after launch. If something needs attention later, we’re still reachable.",
  },
  {
    question: "Will the next developer be able to pick this up?",
    answer:
      "Every build is typed, documented, and free of the shortcuts that make a codebase unpickupable. Whoever inherits this after us should be able to read it cleanly, not reverse-engineer it.",
  },
];

export function PartnersContent() {
  return (
    <>
      {/* Header */}
      <section className="px-6 pt-24 pb-20 sm:px-10 sm:pt-32 sm:pb-28 lg:px-16 lg:pt-40">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease }}
          >
            <div className="flex items-baseline justify-between border-b border-foreground/15 pb-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
                For Agencies
              </p>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
                White-Label Partnerships
              </span>
            </div>

            <h1 className="mt-16 max-w-4xl text-[clamp(2.5rem,6vw,5.5rem)] font-medium leading-[1.02] tracking-tight text-foreground sm:mt-24">
              We execute your design. We don’t reinterpret it.
            </h1>

            <div className="mt-12 max-w-2xl text-lg leading-relaxed text-foreground/60 sm:text-xl">
              <p>
                When you bring us a design system, a full brand guideline or a single Figma file, our
                job is to protect what you meant, especially in the situations the file never
                anticipated. We become an extension of your team, not another vendor to manage.
              </p>
            </div>
          </motion.header>
        </div>
      </section>

      {/* The Worries: Editorial Q&A Layout */}
      <section className="border-t border-foreground/15 bg-foreground/5 px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-20">
          
          {/* Sticky Context Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease }}
            className="mb-16 lg:sticky lg:top-32 lg:mb-0 lg:w-1/3"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
              The Unasked Questions
            </p>
            <p className="mt-6 text-pretty text-lg font-medium leading-relaxed text-foreground/70 sm:text-xl">
              Outsourcing development usually means trading control for capacity. We structure our partnerships to ensure you keep both.
            </p>
          </motion.div>

          {/* Scrolling Q&A Column */}
          <div className="flex w-full flex-col lg:w-2/3">
            {worries.map((worry, index) => (
              <motion.div
                key={worry.question}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease }}
                // Swapped the massive numbers for a tight Q&A typographic layout
                className="flex flex-col gap-6 border-t border-foreground/15 py-12 first:border-t-0 sm:py-16"
              >
                <div className="flex gap-6">
                  <span className="text-lg font-bold text-foreground/30 sm:text-xl">Q.</span>
                  <h2 className="text-xl font-medium tracking-tight text-foreground sm:text-2xl">
                    {worry.question}
                  </h2>
                </div>
                
                <div className="flex gap-6">
                  <span className="text-lg font-bold text-foreground/30 sm:text-xl">A.</span>
                  <p className="max-w-2xl text-base leading-relaxed text-foreground/60 sm:text-lg">
                    {worry.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </section>

      {/* Elevated Architectural Closing */}
      <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col items-start gap-10 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <Link
            href="/studio"
            className="group flex items-center gap-3 text-xl font-medium tracking-tight text-foreground transition-colors hover:text-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-8 focus-visible:ring-offset-background sm:text-2xl"
          >
            Read more about how we work
            <span className="text-accent transition-transform duration-300 ease-out group-hover:translate-x-1.5">
              &rarr;
            </span>
          </Link>

          <Link
            href="/contact"
            className="group flex items-center gap-3 text-xl font-medium tracking-tight text-foreground transition-colors hover:text-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-8 focus-visible:ring-offset-background sm:text-2xl"
          >
            Start a conversation
            <span className="text-accent transition-transform duration-300 ease-out group-hover:translate-x-1.5">
              &rarr;
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}