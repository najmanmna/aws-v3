"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const caseStudies = [
  {
    slug: "elda",
    name: "ELDA",
    outcome: "A heritage block-print studio, brought online.",
    image: "/work/elda.png",
  },
  {
    slug: "the-balanced-pantry",
    name: "The Balanced Pantry",
    outcome: "Curated wellness products, made simple to shop.",
    image: "/work/thebalancedpantry.png",
  },
  {
    slug: "elvyn",
    name: "Elvyn",
    outcome: "Premium leather goods, styled with intent.",
    image: "/work/elvynstore.png",
  },
  {
    slug: "hedone",
    name: "Hedone",
    outcome: "Natural skincare, presented with quiet confidence.",
    image: "/work/hedoneskincare.png",
  },
];

function IndexNumber({ index }: { index: number }) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none select-none text-[clamp(2.5rem,5vw,3.5rem)] font-medium leading-none text-foreground/10"
    >
      {String(index + 1).padStart(2, "0")}
    </span>
  );
}

export function CaseStudyShowcase() {
  return (
    <section aria-label="Selected work" className="bg-background px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-baseline justify-between border-b border-foreground/15 pb-6"
        >
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
            Selected Work
          </h2>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
            04 Projects
          </span>
        </motion.div>

        {/* 
          The Staggered Grid:
          Returns to the 2-column layout to avoid viewport-hogging, 
          but integrates your new high-end typography.
        */}
        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-20 sm:mt-24 md:grid-cols-2 md:gap-y-32">
          {caseStudies.map((project, index) => {
            const isStaggered = index % 2 !== 0;

            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`group flex flex-col gap-6 ${isStaggered ? "md:mt-32" : ""}`}
              >
                {/* 
                  Portrait aspect ratio for a curated, gallery feel. 
                */}
                <Link
                  href={`/work/${project.slug}`}
                  className="relative block aspect-[4/5] w-full overflow-hidden bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-8 focus-visible:ring-offset-background"
                >
                  <Image
                    src={project.image}
                    alt={`Screenshot of the ${project.name} digital experience`}
                    fill
                    className="object-cover object-top transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-background/5 transition-opacity duration-700 group-hover:opacity-0" />
                </Link>

                {/* 
                  Your exact typographic lockup, adapted for the 2-column flow.
                */}
                <div className="flex items-start justify-between gap-4 pt-2">
                  <div className="flex items-baseline gap-4">
                    <IndexNumber index={index} />
                    <div>
                      <h3 className="text-xl font-medium tracking-tight text-foreground sm:text-2xl">
                        {project.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/60 sm:text-base">
                        {project.outcome}
                      </p>
                    </div>
                  </div>
                  
                  <Link
                    href={`/work/${project.slug}`}
                    className="group/link mt-2 flex shrink-0 items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-widest text-foreground/40 transition-colors hover:text-foreground"
                  >
                    <span className="text-accent transition-transform duration-300 ease-out group-hover/link:translate-x-1">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}