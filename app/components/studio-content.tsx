"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HandMarkUnderline } from "@/app/components/hand-mark-underline";

const ease = [0.16, 1, 0.3, 1] as const;

const beliefs = [
  {
    label: "For agencies",
    description: "It isn’t pixel-perfect implementation they’re buying. It’s confidence that a client relationship built over months won’t be undone by a mediocre build.",
  },
  {
    label: "For founders",
    description: "It isn’t spacing values or performance scores. It’s the feeling that their brand will finally be represented properly.",
  },
  {
    label: "For designers",
    description: "It isn’t vouching for our code. It’s the fact that what they intended is what actually ships.",
  },
];

const principles = [
  {
    name: "We don’t approximate",
    description: "If it was considered in the design, from spacing to easing curves to line height, it survives into the browser unchanged, because close enough means shipping something worse.",
  },
  {
    name: "We preserve intent, not just pixels",
    description: "When we execute someone else’s design, our job is to protect what they meant, especially in the situations the original file never anticipated: a longer headline, a missing image, a screen size nobody mocked up.",
  },
  {
    name: "We obsess over the details nobody asked about",
    description: "The hover state on the fourth footer link, how a heading wraps on a tablet, the alt text on the sixth case-study image: the part a client actually lives with for years, long after the exciting part of the brief is forgotten.",
  },
  {
    name: "We don’t compete with the client’s brand",
    description: "Our win condition is never “look what we built,” it’s whether a visitor notices the business behind the site, and nothing else.",
  },
  {
    name: "We build for longevity, not a launch screenshot",
    description: "Everything we build has to survive real content, future edits, and years of use, not just the exact words and images that happened to be in the mockup.",
  },
];

const wontDo = [
  "Cheap websites or rush-turnaround builds.",
  "Templated or AI-generated sites.",
  "SEO packages, social media management, or long service menus.",
  "More projects than we can give this level of attention to.",
];

export function StudioContent() {
  return (
    <>
      {/* 
        PART 1: THE MANIFESTO
        Header, Beliefs, and Principles now flow together as one continuous thought 
        without hard section breaks stopping the eye.
      */}
      <section className="px-6 pt-24 pb-32 sm:px-10 sm:pt-32 lg:px-16 lg:pt-40">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col">
          
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease }}
          >
            <div className="flex items-baseline justify-between border-b border-foreground/15 pb-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
                The Studio
              </p>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
                Colombo, Sri Lanka
              </span>
            </div>

            <h1 className="mt-16 max-w-4xl text-[clamp(2.5rem,6vw,5.5rem)] font-medium leading-[1.02] tracking-tight text-foreground sm:mt-24">
              Most of what makes a brand feel considered gets lost after the design file is done.
            </h1>

            <div className="mt-12 flex max-w-2xl flex-col gap-6 text-lg leading-relaxed text-foreground/60 sm:text-xl">
              <p>
                Softened by a template. Approximated by a developer working from a static mockup. Eroded by a hundred small decisions nobody thought was worth arguing about. Ahamed Web Studio exists to close that gap.
              </p>
              <p>
                We are not a branding agency, and we are not a generalist development shop. We work specifically in the space between the two, because that is where quality most often gets lost.
              </p>
            </div>
          </motion.header>

          {/* Beliefs seamlessly follow the intro paragraph */}
          <div className="mt-24 grid grid-cols-1 gap-x-12 gap-y-12 sm:mt-32 md:grid-cols-3">
            {beliefs.map((belief, index) => (
              <motion.div
                key={belief.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease }}
                className="flex flex-col gap-4 md:border-t md:border-foreground/15 md:pt-8"
              >
                <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-foreground">{belief.label}</h3>
                <p className="text-base leading-relaxed text-foreground/60">{belief.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Principles follow immediately after */}
          <div className="mt-32 flex flex-col sm:mt-48">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease }}
              className="max-w-3xl text-pretty text-[clamp(2rem,4.5vw,4rem)] font-medium leading-[1.1] tracking-tight text-foreground"
            >
              Nothing is finished until it{" "}
              <HandMarkUnderline>survives the browser</HandMarkUnderline>.
            </motion.p>

            <div className="mt-16 flex flex-col sm:mt-24">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8, ease }}
                  className="group flex flex-col gap-6 border-t border-foreground/15 py-12 sm:flex-row sm:items-baseline sm:gap-16 sm:py-16"
                >
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-[clamp(2.5rem,5vw,3.5rem)] font-medium leading-none text-foreground/10 transition-colors duration-500 group-hover:text-foreground/30 sm:w-24"
                  >
                    {String(index + 1).padStart(2, "0")}
                    <span className="text-accent">.</span>
                  </span>

                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-medium tracking-tight text-foreground sm:text-2xl">
                      {principle.name}
                    </h3>
                    <p className="max-w-2xl text-base leading-relaxed text-foreground/60 sm:text-lg">
                      {principle.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 
        PART 2: WHAT WE DON'T DO
        Shifted to a massive, aggressive typographic block to command attention.
      */}
      <section className="border-y border-foreground/15 bg-foreground/5 px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col lg:flex-row lg:justify-between lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease }}
            className="lg:w-1/3"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
              What We Don’t Do
            </p>
            <p className="mt-6 text-pretty text-lg font-medium leading-relaxed text-foreground/70 sm:text-xl">
              This isn’t a hedge. It’s the reason the projects we do take on get this much attention.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease }}
            className="mt-12 flex flex-col gap-6 lg:mt-0 lg:w-2/3"
          >
            {wontDo.map((item) => (
              <h3
                key={item}
                className="text-[clamp(1.5rem,3vw,2.5rem)] font-medium leading-[1.2] tracking-tight text-foreground"
              >
                We don’t do {item.toLowerCase()}
              </h3>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PART 3: THE FOUNDER & CLOSING */}
      <section className="px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease }}
              className="lg:col-span-4"
            >
              <div className="relative aspect-[3/4] w-full max-w-60 overflow-hidden bg-foreground/5 grayscale filter transition-all duration-700 hover:grayscale-0 sm:max-w-xs lg:max-w-none">
                <Image
                  src="/najman-portrait.jpg"
                  alt="Najman, founder of Ahamed Web Studio"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, 240px"
                />
              </div>
            </motion.div>

            <div className="flex flex-col justify-center lg:col-span-7 lg:col-start-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease }}
                className="border-b border-foreground/15 pb-6"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
                  The Founder
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, ease }}
                className="mt-10 flex flex-col gap-8 text-lg leading-relaxed text-foreground/70 sm:text-xl"
              >
                <p>
                  I founded Ahamed Web Studio on a single premise: to build the websites that don’t let good design get lost on its way to the browser.
                </p>
                <p>
                  Whether we’re operating as an extension of a branding agency or working directly with a founder, the job hasn’t changed. Make sure the design intent survives the build, unchanged, indistinguishable from the file it came from.
                </p>

                <div className="mt-4 flex items-center gap-4">
                  <div className="h-px w-8 bg-foreground/30" />
                  <span className="text-sm font-bold uppercase tracking-[0.15em] text-foreground/60">
                    Najman
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Elevated Architectural Closing */}
          <div className="mt-32 flex w-full flex-col gap-10 border-t border-foreground/15 pt-10 sm:mt-48 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
            <Link
              href="/work"
              className="group flex items-center gap-3 text-xl font-medium tracking-tight text-foreground transition-colors hover:text-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-8 focus-visible:ring-offset-background sm:text-2xl"
            >
              Examine the work
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
        </div>
      </section>
    </>
  );
}