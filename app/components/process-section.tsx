"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    name: "Understand",
    description:
      "A focused conversation to understand your brand, define the technical requirements, and set the standard for execution.",
  },
  {
    name: "Build Together",
    description:
      "We build in the open. No black boxes, no radio silence. You see the fidelity of the design translate into code week by week.",
  },
  {
    name: "Launch Confidently",
    description:
      "We deploy the site, then hand over the documentation and clean architecture your team needs to scale it confidently.",
  },
];

export function ProcessSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      aria-labelledby="process-heading"
      className="bg-background px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto flex w-full max-w-[1600px] flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col gap-6 border-b border-foreground/15 pb-10 lg:sticky lg:top-32 lg:w-1/3 lg:border-none lg:pb-0"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
            How We Work
          </p>
          <h2
            id="process-heading"
            className="text-pretty text-2xl font-medium leading-[1.3] tracking-tight text-foreground sm:text-3xl lg:text-4xl"
          >
            Structured enough to feel reliable. Simple enough to stay out of your way.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease }}
          className="mt-16 flex w-full flex-col lg:mt-0 lg:w-2/3"
        >
          {/* All three steps visible at once — no scrolling required to see them */}
          <div className="flex border-b border-foreground/15">
            {steps.map((step, index) => {
              const isActive = active === index;
              return (
                <button
                  key={step.name}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActive(index)}
                  className={`group flex-1 border-t-2 py-5 pr-3 text-left transition-colors sm:py-6 sm:pr-6 ${
                    isActive ? "border-accent" : "border-transparent"
                  }`}
                >
                  <span
                    className={`block text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-none transition-colors ${
                      isActive ? "text-foreground" : "text-foreground/15 group-hover:text-foreground/30"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                    <span className="text-accent">.</span>
                  </span>
                  <span
                    className={`mt-3 block text-pretty text-xs font-bold uppercase tracking-[0.1em] transition-colors sm:text-sm ${
                      isActive ? "text-foreground" : "text-foreground/40 group-hover:text-foreground/60"
                    }`}
                  >
                    {step.name}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative mt-10 min-h-[7.5rem] sm:mt-12 sm:min-h-[5.5rem]">
            <AnimatePresence mode="wait">
              <motion.p
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease }}
                className="max-w-lg text-base leading-relaxed text-foreground/60 sm:text-lg"
              >
                {steps[active].description}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
