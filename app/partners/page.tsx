import { SiteNav } from "@/app/components/site-nav";
import { PartnersContent } from "@/app/components/partners-content";
import { pageMetadata } from "@/app/lib/metadata";

export const metadata = pageMetadata({
  title: "For Agencies",
  description:
    "A white-label execution partner for branding agencies: your design, built exactly as handed off.",
  path: "/partners",
});

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
