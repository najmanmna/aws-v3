import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/app/lib/metadata";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/logo.png`,
    description: SITE_DESCRIPTION,
    email: "hello@ahamedwebstudio.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Boralesgamuwa",
      addressRegion: "Colombo",
      addressCountry: "LK",
    },
    founder: {
      "@type": "Person",
      name: "Najman",
    },
    sameAs: [
      "https://www.linkedin.com/in/najman-nizam/",
      "https://github.com/najmanmna",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
