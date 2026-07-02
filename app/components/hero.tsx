import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex flex-1 flex-col justify-between px-6 pb-10 pt-12 selection:bg-foreground selection:text-background sm:px-10 lg:px-16">
      {/*
        Typographic Core.
        Emphasis carried entirely by weight and color-mix within one sans family —
        no second typeface, per the locked type system.
      */}
      <div className="flex flex-1 flex-col justify-center py-12 md:py-20">
        <h1 className="animate-fade-up text-[clamp(3rem,7.5vw,7.5rem)] leading-[0.95] tracking-[-0.03em] text-foreground">
          <span className="block font-medium">Great design</span>
          <span className="block font-medium text-foreground/70">deserves a website</span>
          <span className="mt-3 block font-semibold md:mt-1">that lives up to it.</span>
        </h1>
      </div>

      {/*
        Structural Footer Area.
        Separates the pitch and the CTAs into a strict architectural grid.
      */}
      <div className="grid w-full grid-cols-1 items-end gap-10 border-t border-foreground/15 py-8 md:grid-cols-12 md:gap-8">
        <div className="animate-fade-up md:col-span-5 lg:col-span-4 [animation-delay:200ms]">
          {/* text-pretty prevents typographic widows on varying screen sizes */}
          <p className="text-pretty text-base leading-relaxed text-foreground/70 sm:text-lg">
            We partner with branding agencies and ambitious businesses to design
            and build premium websites — considered, and built to last.
          </p>
        </div>

        <div className="animate-fade-up flex flex-wrap items-center gap-8 md:col-span-7 md:justify-end lg:col-span-8 [animation-delay:300ms]">
          <Link
            href="/work"
            className="group flex items-center gap-3 rounded-sm text-sm font-medium tracking-wide text-foreground/60 transition-all hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          >
            <span>See our work</span>
            {/* Added an ease-out timing function and slightly wider translation for a smoother feel */}
            <span className="text-accent transition-transform duration-300 ease-out group-hover:translate-x-1.5">→</span>
          </Link>

          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-sm bg-foreground px-8 py-4 text-sm font-medium text-background transition-all duration-300 hover:scale-[1.02] hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-4 focus-visible:ring-offset-background active:scale-[0.98]"
          >
            {/* Added active:scale-[0.98] for a premium, tactile click state */}
            <span>Start a project</span>
          </Link>
        </div>
      </div>
    </section>
  );
}