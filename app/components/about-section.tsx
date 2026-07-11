"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section
      aria-label="About the founder"
      className="bg-background px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-[1600px]">
        
        {/* 
          The Asymmetrical Split:
          Breaks the horizontal stacking we used in previous sections.
        */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          
          {/* Left Column: The Founder Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            {/* A stark, 3:4 aspect ratio portrait slot */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-foreground/5 grayscale filter transition-all duration-700 hover:grayscale-0">
              {/* 
                Replace with a high-end, black-and-white or muted portrait.
                <Image src="/najman-portrait.jpg" alt="Najman, Founder of AWS" fill className="object-cover" /> 
              */}
              <div className="absolute inset-0 flex items-center justify-center text-xs font-bold uppercase tracking-widest text-foreground/20">
                Portrait
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Manifesto */}
          <div className="flex flex-col justify-center lg:col-span-7 lg:col-start-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="border-b border-foreground/15 pb-6"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
                The Studio
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-col gap-8"
            >
              {/* Elevated the greeting to a definitive statement */}
              <h2 className="text-balance text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.1] tracking-tight text-foreground">
                Too much good design gets lost between the file and the browser.
              </h2>
              
              <div className="max-w-xl text-pretty text-lg leading-relaxed text-foreground/70 sm:text-xl">
                <p>
                  I founded Ahamed Web Studio on a single premise: to build the websites that don&apos;t let that happen.
                </p>
                <p className="mt-6">
                  Whether we are operating as an extension of a branding agency or working directly with a founder, our job is to ensure the original design intent survives the build process intact.
                </p>
              </div>

              <div className="mt-4 flex items-center gap-6">
                <Link
                  href="/studio"
                  className="group inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-foreground transition-colors hover:text-foreground/70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  Read our philosophy
                  <span className="text-accent transition-transform duration-300 ease-out group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
                
                {/* A subtle sign-off reinforces the personal, boutique feel */}
                <div className="hidden h-px w-12 bg-foreground/20 sm:block" />
                <span className="hidden text-sm font-medium text-foreground/40 sm:block">
                  Najman &mdash; Founder
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}