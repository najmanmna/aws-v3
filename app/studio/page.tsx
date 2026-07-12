import { SiteNav } from "@/app/components/site-nav";
import { StudioContent } from "@/app/components/studio-content";
import { pageMetadata } from "@/app/lib/metadata";

export const metadata = pageMetadata({
  title: "Studio",
  description:
    "Why Ahamed Web Studio exists, how we work, and what we refuse to compromise on.",
  path: "/studio",
});

export default function StudioPage() {
  return (
    <>
      <div className="px-6 sm:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-[1600px]">
          <SiteNav />
        </div>
      </div>

      <main>
        <StudioContent />
      </main>
    </>
  );
}
