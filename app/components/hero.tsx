"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  const slideEase = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="relative flex flex-1 flex-col justify-between overflow-hidden pb-8 pt-10 selection:bg-accent selection:text-background">

      <div className="flex w-full flex-1 flex-col justify-center py-8 md:py-10">
        <h1 className="flex w-full flex-col text-[clamp(3.5rem,8.5vw,9rem)] leading-[0.85] text-foreground">
          
          <motion.span
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: slideEase }}
            className="self-start font-medium tracking-[-0.04em]"
          >
            Great design
          </motion.span>

          <motion.span
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: slideEase }}
            className="mt-4 self-end font-medium tracking-[-0.04em] text-foreground/50 sm:mt-6"
          >
            deserves a website
          </motion.span>

          <motion.span
            initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
            animate={{ clipPath: "inset(0 -10% 0 -10%)", opacity: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: slideEase }}
            className="mt-8 self-start font-bold tracking-[-0.05em] sm:mt-12"
          >
            that lives up to it
            {/* The Brand Anchor: A massive, deliberate dot of your brand orange */}
            <span className="text-accent">.</span>
          </motion.span>

        </h1>
      </div>

      <div className="grid w-full grid-cols-1 items-end gap-12 border-t border-foreground/10 pt-8 md:grid-cols-12 md:gap-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: slideEase }}
          className="md:col-span-5 lg:col-span-4"
        >
          <p className="text-pretty text-sm font-medium leading-relaxed text-foreground/60 sm:text-base">
            We partner with branding agencies and ambitious businesses to design
            and build premium websites that are considered and built to last.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4, ease: slideEase }}
          className="flex flex-col items-start gap-8 md:col-span-7 md:items-end lg:col-span-8"
        >
          <Link
            href="/contact"
            className="group flex w-full max-w-md items-end justify-between border-b border-foreground pb-4 transition-all hover:border-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-8 focus-visible:ring-offset-background"
          >
            <span className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">Start a project</span>
            {/* Brand color used strictly for interaction signals */}
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
            {/* Brand color on hover state arrow */}
            <span className="text-accent transition-transform duration-300 ease-out group-hover:translate-x-1.5 opacity-0 group-hover:opacity-100">&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}