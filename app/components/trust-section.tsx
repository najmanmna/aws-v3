"use client";

import { motion } from "framer-motion";

const featured = {
  quote:
    "We are getting loads of compliments for the sites, people love it and it makes our reputation look incredibly strong",
  name: "Agency Director", // Kept anonymous to reinforce the white-label trust
  role: "White-Label Partner",
};

const supporting = [
  {
    quote:
      "My jaw was literally dropped, he had done the website up to international level. Worth every penny.",
    name: "Uthpala Pathirana",
    role: "Founder, Hedone Skincare",
    reviewUrl: "#", 
  },
  {
    quote:
      "Ahamed did an excellent job crafting the website exactly to our expectations. He's very responsive, detail-oriented, and fully committed to delivering on time without compromising quality.",
    name: "Sajid Ifham",
    role: "Founder, Elvyn",
    reviewUrl: "#",
  },
];

export function TrustSection() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="border-t border-foreground/10 bg-background px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-[1600px]">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-baseline justify-between border-b border-foreground/15 pb-10"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
            In Their Words
          </p>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
            Trusted by Agencies & Founders
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-16 sm:mt-20 lg:grid-cols-12 lg:gap-12">
          
          {/* Featured Quote (White-Label) */}
          <motion.figure
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <blockquote className="text-pretty text-[clamp(1.75rem,3vw,3rem)] font-medium leading-[1.15] tracking-tight text-foreground">
              <span className="text-foreground/40">&ldquo;</span>
              {featured.quote}
              <span className="text-accent">.</span>
              <span className="text-foreground/40">&rdquo;</span>
            </blockquote>
            
            <figcaption className="mt-12 flex flex-col items-start gap-1">
              {/* Rendered as a pure text div instead of a link to respect confidentiality */}
              <div className="text-sm font-bold uppercase tracking-[0.15em] text-foreground">
                {featured.name}
              </div>
              <p className="text-sm font-medium text-foreground/50">{featured.role}</p>
            </figcaption>
          </motion.figure>

          {/* Supporting Quotes (Public Founders) */}
          <div className="flex flex-col gap-12 lg:col-span-5 lg:pl-4">
            {supporting.map((testimonial, index) => (
              <motion.figure
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={index > 0 ? "border-t border-foreground/10 pt-12" : ""}
              >
                <blockquote className="max-w-[34rem] text-pretty text-base leading-[1.6] text-foreground/80 sm:text-lg">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                
                <figcaption className="mt-6 flex flex-col items-start gap-1">
                  <a 
                    href={testimonial.reviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.15em] text-foreground transition-colors hover:text-foreground/70"
                  >
                    <span>{testimonial.name}</span>
                    <span className="text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </a>
                  <p className="text-sm font-medium text-foreground/50">{testimonial.role}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}