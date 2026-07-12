import type { MetadataRoute } from "next";
import { caseStudies } from "@/app/lib/case-studies";
import { SITE_URL } from "@/app/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/work`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/studio`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/partners`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.6 },
  ];

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${SITE_URL}/work/${study.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...caseStudyRoutes];
}
