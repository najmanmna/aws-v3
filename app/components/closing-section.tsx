"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function ClosingSection() {
  return (
    <section
      aria-label="Start a project"
      className="border-t border-foreground/15 bg-background px-6 pt-24 pb-16 sm:px-10 sm:pt-32 sm:pb-24 lg:px-16 lg:pt-40 lg:pb-32"
    >
      <div className="mx-auto flex w-full max-w-[1600px] flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start"
        >
          {/* 
            Massive, left-aligned, uppercase typography.
            Fading the second line gives it an editorial, print-like texture.
          */}
          <h2 className="text-[clamp(2.5rem,7vw,6.5rem)] font-medium uppercase leading-[0.9] tracking-[-0.02em] text-foreground">
            <span className="block">Let&apos;s build something</span>
            <span className="block text-foreground/40">worth remembering.</span>
          </h2>

          {/* 
            The final grid lockup.
            A hard top border grounds the text and naturally pre-frames the footer.
          */}
          <div className="mt-16 flex w-full flex-col gap-10 border-t border-foreground/15 pt-10 sm:mt-24 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
            
            <p className="max-w-md text-pretty text-base leading-relaxed text-foreground/70 sm:text-lg">
              If you&apos;re planning a new website, or looking for a development
              partner that values craft as much as design, we&apos;d love to hear
              from you.
            </p>

            <div className="flex flex-col items-start gap-3 sm:items-end">
              <Link
                href="/contact"
                className="group flex items-center gap-3 text-xl font-medium tracking-tight text-foreground transition-colors hover:text-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-8 focus-visible:ring-offset-background sm:text-2xl"
              >
                Start a project
                <span className="text-accent transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                  &rarr;
                </span>
              </Link>
              <a
                href="mailto:hello@ahamedwebstudio.com"
                className="text-sm font-medium tracking-widest uppercase text-foreground/40 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:underline"
              >
                hello@ahamedwebstudio.com
              </a>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}