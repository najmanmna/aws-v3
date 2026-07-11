"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { CaseStudy } from "@/app/lib/case-studies";

const ease = [0.16, 1, 0.3, 1] as const;

export function WorkIndex({ studies }: { studies: CaseStudy[] }) {
  return (
    <>
      {/* 
        Header Section:
        Massive typography, strict architectural grid lines. 
      */}
      <section className="px-6 pt-24 sm:px-10 sm:pt-32 lg:px-16 lg:pt-40">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease }}
          >
            <div className="flex items-baseline justify-between border-b border-foreground/15 pb-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
                Selected Work
              </p>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
                {studies.length.toString().padStart(2, "0")} Projects
              </span>
            </div>

            <h1 className="mt-16 text-[clamp(3.5rem,8vw,7.5rem)] font-medium leading-[0.9] tracking-[-0.02em] text-foreground sm:mt-24">
              Work
            </h1>
            <p className="mt-10 max-w-xl text-pretty text-lg leading-relaxed text-foreground/60 sm:text-xl">
              A short list, on purpose. Every project here was designed, built, and shipped by the same studio, start to finish.
            </p>
          </motion.header>
        </div>
      </section>

      {/* 
        The Exhibition Grid:
        Staggered 2-column layout. Kills the "billboard scroll" and returns to the boutique studio aesthetic. 
      */}
      <section className="px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col">
          <div className="grid grid-cols-1 gap-x-12 gap-y-24 md:grid-cols-2 md:gap-y-32">
            {studies.map((study, index) => {
              // Push the even-indexed items down on desktop to create the stagger
              const isStaggered = index % 2 !== 0;

              return (
                <motion.div
                  key={study.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 1, delay: index * 0.1, ease }}
                  className={`group flex flex-col ${isStaggered ? "md:mt-32" : ""}`}
                >
                  <Link
                    href={`/work/${study.slug}`}
                    className="flex flex-col gap-6 focus-visible:outline-none"
                  >
                    {/* Portrait aspect ratio for an editorial, print-like feel */}
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-foreground/5">
                      <Image
                        src={study.heroImage}
                        alt={`${study.name}, digital experience`}
                        fill
                        className="object-cover object-top transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                        sizes="(min-width: 768px) 50vw, 100vw"
                        quality={90}
                        priority={index < 2} // Prioritize first row
                      />
                    </div>

                    <div className="flex flex-col items-start justify-between gap-4 pt-2 sm:flex-row sm:items-start">
                      <div className="flex items-baseline gap-4 sm:gap-5">
                        <span className="shrink-0 text-sm font-medium text-foreground/30">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="flex flex-col gap-2">
                          <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                            {study.name}
                          </h2>
                          <p className="max-w-xs text-sm leading-relaxed text-foreground/60 sm:text-base">
                            {study.tagline}
                          </p>
                        </div>
                      </div>

                      <span className="mt-1 shrink-0 text-accent transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                        &rarr;
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Elevated Architectural Closing */}
          <div className="mt-32 flex w-full flex-col gap-10 border-t border-foreground/15 pt-10 sm:mt-48 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
            <p className="max-w-md text-pretty text-lg text-foreground/70 sm:text-xl">
              Have a project in mind?
            </p>
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
        </div>
      </section>
    </>
  );
}