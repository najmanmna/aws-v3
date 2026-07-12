import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteNav } from "@/app/components/site-nav";
import { caseStudies, getCaseStudy } from "@/app/lib/case-studies";
import { pageMetadata } from "@/app/lib/metadata";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return pageMetadata({
    title: study.name,
    description: study.tagline,
    path: `/work/${study.slug}`,
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const nextStudy = getCaseStudy(study.nextSlug);

  return (
    <>
      <div className="px-6 sm:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-[1600px]">
          <SiteNav />
        </div>
      </div>

      <main className="px-6 sm:px-10 lg:px-16">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col">
          {/* Hero — massive, nothing else */}
          <header className="pt-24 sm:pt-32 lg:pt-40">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
              {study.year}
            </p>
            <h1 className="mt-6 max-w-4xl text-[clamp(2.5rem,6vw,5.5rem)] font-medium leading-[1.02] tracking-tight text-foreground">
              {study.name}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/60 sm:text-xl">
              {study.tagline}
            </p>

            <div className="relative mt-14 w-full overflow-hidden bg-foreground/5 sm:mt-20">
              <Image
                src={study.heroImage}
                alt={`${study.name} website, full view`}
                width={1600}
                height={1000}
                priority
                className="h-auto w-full"
              />
            </div>
          </header>

          {/* Overview — one paragraph, nothing labeled "Overview" */}
          <p className="mx-auto max-w-2xl py-20 text-pretty text-center text-2xl leading-relaxed text-foreground sm:py-28 sm:text-3xl">
            {study.overview}
          </p>

          {/* Full-width image */}
          <div className="relative w-full overflow-hidden bg-foreground/5">
            <Image
              src={study.fullWidthImage}
              alt={`${study.name}, additional page view`}
              width={1600}
              height={1000}
              className="h-auto w-full"
            />
          </div>

          {/* The Brand */}
          <section className="py-20 sm:py-28">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40 md:col-span-3">
                The Brand
              </h2>
              <p className="max-w-2xl text-xl leading-relaxed text-foreground/80 md:col-span-8 md:col-start-5 sm:text-2xl">
                {study.brand}
              </p>
            </div>
          </section>

          {/* Detail moment — responsive, shown rather than claimed */}
          <div className="grid grid-cols-1 items-end gap-8 pb-20 sm:grid-cols-12 sm:pb-28">
            <div className="sm:col-span-6">
              <div className="relative w-full overflow-hidden bg-foreground/5">
                <Image
                  src={study.responsive.desktop}
                  alt={`${study.name}, desktop view`}
                  width={1600}
                  height={1000}
                  className="h-auto w-full"
                />
              </div>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
                Desktop
              </p>
            </div>
            <div className="sm:col-span-3">
              <div className="relative w-full overflow-hidden bg-foreground/5">
                <Image
                  src={study.responsive.tablet}
                  alt={`${study.name}, tablet view`}
                  width={834}
                  height={1194}
                  className="h-auto w-full"
                />
              </div>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
                Tablet
              </p>
            </div>
            <div className="sm:col-span-3">
              <div className="relative w-full overflow-hidden bg-foreground/5">
                <Image
                  src={study.responsive.mobile}
                  alt={`${study.name}, mobile view`}
                  width={390}
                  height={844}
                  className="h-auto w-full"
                />
              </div>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
                Mobile
              </p>
            </div>
          </div>

          {/* The Experience */}
          <section className="pb-20 sm:pb-28">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40 md:col-span-3">
                The Experience
              </h2>
              <p className="max-w-2xl text-xl leading-relaxed text-foreground/80 md:col-span-8 md:col-start-5 sm:text-2xl">
                {study.experience}
              </p>
            </div>
          </section>

          {/* A quiet image, no text */}
          <div className="relative w-full overflow-hidden bg-foreground/5">
            <Image
              src={study.detailImage}
              alt={`${study.name}, a further detail`}
              width={1600}
              height={1000}
              className="h-auto w-full"
            />
          </div>

          {/* Craft — decisions, not a tech stack */}
          <section className="border-t border-foreground/10 py-20 sm:py-28">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
              Craft
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 sm:mt-12 md:grid-cols-2">
              {study.craft.map((point) => (
                <div key={point.label} className="flex flex-col gap-2">
                  <h3 className="text-base font-medium text-foreground">{point.label}</h3>
                  <p className="max-w-md text-base leading-relaxed text-foreground/60">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* One Detail We Obsessed Over */}
          <section className="border-t border-foreground/10 py-20 text-center sm:py-28">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
              One Detail We Obsessed Over
            </p>
            <p className="mx-auto mt-8 max-w-2xl text-pretty text-2xl leading-relaxed tracking-tight text-foreground sm:text-3xl">
              {study.obsessedOver}
            </p>
          </section>

          {/* Outcome */}
          <section className="border-t border-foreground/10 py-20 sm:py-28">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40 md:col-span-3">
                The Outcome
              </h2>
              <p className="max-w-2xl text-xl leading-relaxed text-foreground/80 md:col-span-8 md:col-start-5 sm:text-2xl">
                {study.outcome}
              </p>
            </div>
          </section>

          {/* Testimonial */}
          <section className="border-t border-foreground/10 py-20 sm:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <blockquote className="text-pretty text-2xl font-medium leading-[1.3] tracking-tight text-foreground sm:text-3xl">
                <span className="text-foreground/30">&ldquo;</span>
                {study.testimonial.quote}
                <span className="text-foreground/30">&rdquo;</span>
              </blockquote>
              <figcaption className="mt-8 flex flex-col items-center gap-1">
                <span className="text-sm font-bold uppercase tracking-[0.15em] text-foreground">
                  {study.testimonial.name}
                </span>
                <span className="text-sm font-medium text-foreground/50">
                  {study.testimonial.role}
                </span>
              </figcaption>
            </div>
          </section>

          {/* Final gallery — images only */}
          <div className="flex flex-col gap-6 pb-20 sm:gap-8 sm:pb-28">
            {study.gallery.map((image, index) => (
              <div key={image + index} className="relative w-full overflow-hidden bg-foreground/5">
                <Image
                  src={image}
                  alt={`${study.name}, gallery view ${index + 1}`}
                  width={1600}
                  height={1000}
                  className="h-auto w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Next project */}
      {nextStudy && (
        <div className="border-t border-foreground/10 px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
          <Link
            href={`/work/${nextStudy.slug}`}
            className="group mx-auto flex w-full max-w-[1600px] flex-col items-start gap-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
              Next Project
            </span>
            <span className="inline-flex items-center gap-3 text-[clamp(2rem,5vw,4rem)] font-medium tracking-tight text-foreground transition-colors group-hover:text-foreground/70">
              {nextStudy.name}
              <span className="text-accent transition-transform duration-300 ease-out group-hover:translate-x-2">
                &rarr;
              </span>
            </span>
          </Link>
        </div>
      )}
    </>
  );
}
