import { SiteNav } from "@/app/components/site-nav";
import { WorkIndex } from "@/app/components/work-index";
import { caseStudies } from "@/app/lib/case-studies";
import { pageMetadata } from "@/app/lib/metadata";

export const metadata = pageMetadata({
  title: "Work",
  description:
    "A short, selective portfolio of projects designed, built, and shipped end to end.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <div className="px-6 sm:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-[1600px]">
          <SiteNav />
        </div>
      </div>

      <main>
        <WorkIndex studies={caseStudies} />
      </main>
    </>
  );
}
