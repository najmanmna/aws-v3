import { SiteNav } from "./components/site-nav";
import { Hero } from "./components/hero";
import { CaseStudyShowcase } from "./components/case-study-showcase";
import { TrustSection } from "./components/trust-section";
import { PartnershipSection } from "./components/partnership-section";
import { ProcessSection } from "./components/process-section";
import { AboutSection } from "./components/about-section";
import { ClosingSection } from "./components/closing-section";
import { SITE_DESCRIPTION, pageMetadata } from "./lib/metadata";

export const metadata = pageMetadata({
  description: SITE_DESCRIPTION,
  path: "/",
});

export default function Home() {
  return (
    <>
      <header className="flex flex-col px-6 sm:min-h-[90vh] sm:px-10 lg:px-16">
        <div className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col">
          <SiteNav />
          <Hero />
        </div>
      </header>
      <main>
        <CaseStudyShowcase />
        <TrustSection />
        <PartnershipSection />
        <ProcessSection />
        <AboutSection />
        <ClosingSection />
      </main>
    </>
  );
}
