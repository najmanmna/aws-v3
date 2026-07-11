"use client";

import { motion } from "framer-motion";

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
  return (
    <section
      aria-labelledby="process-heading"
      className="bg-background px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto flex w-full max-w-[1600px] flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-20">
        
        {/* 
          Sticky Left Column:
          Locks into place while the steps scroll past on the right.
        */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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

        {/* 
          Scrolling Right Column:
          Massive, full-width rows that break the 3-column monotony of the rest of the site.
        */}
        <div className="mt-16 flex w-full flex-col lg:mt-0 lg:w-2/3">
          {steps.map((step, index) => (
            <motion.div
              key={step.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              // Top border creates a hard structural line for each step
              className="flex flex-col gap-6 border-t border-foreground/15 py-12 sm:py-16 md:flex-row md:items-baseline md:gap-12"
            >
              {/* Massive index number with the brand orange punctuation */}
              <span
                aria-hidden="true"
                className="shrink-0 text-[clamp(3rem,6vw,4.5rem)] font-medium leading-none text-foreground/10 md:w-24"
              >
                {String(index + 1).padStart(2, "0")}
                <span className="text-accent">.</span>
              </span>
              
              <div className="flex flex-col gap-4 md:mt-2">
                <h3 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                  {step.name}
                </h3>
                <p className="max-w-md text-base leading-relaxed text-foreground/60 sm:text-lg">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}