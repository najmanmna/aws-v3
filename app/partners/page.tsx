import type { Metadata } from "next";
import { SiteNav } from "@/app/components/site-nav";
import { PartnersContent } from "@/app/components/partners-content";

export const metadata: Metadata = {
  title: "For Agencies · Ahamed Web Studio",
  description:
    "A white-label execution partner for branding agencies: your design, built exactly as handed off.",
};

export default function PartnersPage() {
  return (
    <>
      <div className="px-6 sm:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-[1600px]">
          <SiteNav />
        </div>
      </div>

      <main>
        <PartnersContent />
      </main>
    </>
  );
}
