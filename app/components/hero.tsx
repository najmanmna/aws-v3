"use client"; // Required for Framer Motion

import Link from "next/link";
import { motion } from "framer-motion";

/**
 * A highly custom highlight using SVG filters to simulate ink bleed
 * and paper texture.
 */
function MarkerHighlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block w-fit">
      {/*
        The Marker Background:
        Because this is a closed path with a `fill`, we cannot use `pathLength`.
        Instead, we use a `clipPath` wipe from left to right to simulate it being dragged.
      */}
      <motion.svg
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 -10% 0 -10%)" }}
        transition={{ duration: 0.5, delay: 2.2, ease: "circOut" }}
        aria-hidden="true"
        viewBox="0 0 200 40"
        preserveAspectRatio="none"
        className="motion-reveal-clip pointer-events-none absolute inset-x-[-4%] inset-y-[-10%] -z-10 h-[120%] w-[108%] text-accent mix-blend-multiply"
      >
        <defs>
          <filter id="ink-bleed" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
        <path d="M5,25 C45,12 110,15 195,18 C192,30 130,35 10,38 Z" fill="currentColor" opacity="0.6" filter="url(#ink-bleed)" />
        <path d="M8,18 C60,5 140,8 190,14 C185,28 90,30 15,32 Z" fill="currentColor" opacity="0.8" filter="url(#ink-bleed)" />
      </motion.svg>

      {/*
        The Handwritten Text:
        Wipes in from left to right right before the marker highlight hits.
      */}
      <motion.span
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 -10% 0 -10%)" }}
        transition={{ duration: 0.8, delay: 1.3, ease: "linear" }}
        className="motion-reveal-clip relative z-10 inline-block px-1"
      >
        {children}
      </motion.span>
    </span>
  );
}

/**
 * Retained the subtle hand-underline, but placed it deliberately
 * so it doesn't fight with the CTA or the marker highlight.
 */
function HandUnderline({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block w-fit">
      {children}
      <svg
        aria-hidden="true"
        viewBox="0 0 100 12"
        preserveAspectRatio="none"
        className="pointer-events-none absolute -bottom-1 left-0 h-3 w-full text-accent"
      >
        {/*
          Because this is a stroked path (no fill), we can use the elegant
          pathLength animation to literally draw the line.
        */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.75 }}
          transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
          className="motion-reveal-path"
          d="M2,6 C22,2 48,9 71,4 C86,1 95,6 98,5"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export function Hero() {
  // A premium cubic-bezier ease for the typographic slides
  const slideEase = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="relative flex flex-1 flex-col justify-between overflow-hidden px-6 pb-10 pt-6 selection:bg-foreground selection:text-background sm:px-10 lg:px-16">
      <div className="flex w-full flex-1 flex-col justify-center py-8 md:py-10">
        <h1 className="flex w-full flex-col text-[clamp(3.5rem,8.5vw,9rem)] font-medium leading-[0.85] tracking-[-0.04em] text-foreground">
          <motion.span
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: slideEase }}
            className="motion-reveal self-start"
          >
            Great design
          </motion.span>

          <motion.span
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: slideEase }}
            className="motion-reveal mt-4 self-end text-foreground/70 sm:mt-6"
          >
            deserves a <HandUnderline>website</HandUnderline>
          </motion.span>

          <span className="mt-6 self-center -rotate-2 font-handwritten text-[clamp(4.5rem,10.5vw,11.5rem)] font-normal tracking-normal md:mt-8">
            <MarkerHighlight>that lives up to it.</MarkerHighlight>
          </span>
        </h1>
      </div>

      <div className="grid w-full grid-cols-1 items-end gap-12 border-t border-foreground/15 pt-8 md:grid-cols-12 md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8, ease: slideEase }}
          className="motion-reveal md:col-span-5 lg:col-span-4"
        >
          <p className="text-pretty text-sm font-medium leading-relaxed text-foreground/60 sm:text-base">
            We partner with branding agencies and ambitious businesses to design
            and build premium websites that are considered and built to last.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.0, ease: slideEase }}
          className="motion-reveal flex flex-col items-start gap-8 md:col-span-7 md:items-end lg:col-span-8"
        >
          <Link
            href="/contact"
            className="group flex w-full max-w-md items-end justify-between border-b border-foreground pb-4 transition-all hover:border-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-8 focus-visible:ring-offset-background"
          >
            <span className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">Start a project</span>
            <span className="mb-1 text-accent transition-transform duration-500 ease-out group-hover:translate-x-2">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
                <path d="M4 12h16M13 5l7 7-7 7" />
              </svg>
            </span>
          </Link>

          <Link
            href="/work"
            className="group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.1em] text-foreground/40 transition-colors hover:text-foreground"
          >
            <span>Explore selected works</span>
            <span className="transition-transform duration-300 ease-out group-hover:translate-x-1.5">&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
