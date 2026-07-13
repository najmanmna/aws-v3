import type { Metadata } from "next";

export const SITE_NAME = "Ahamed Web Studio";
export const SITE_URL = "https://www.ahamedwebstudio.com";
export const SITE_DESCRIPTION =
  "A boutique studio that partners with branding agencies and ambitious businesses to design and build premium websites.";

export function pageMetadata({
  title,
  description,
  path = "/",
}: {
  title?: string;
  description: string;
  path?: string;
}): Metadata {
  const resolvedTitle = title ? `${title} · ${SITE_NAME}` : SITE_NAME;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: resolvedTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
    },
  };
}
