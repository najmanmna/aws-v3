import type { Metadata, Viewport } from "next";
import { generalSans, caveat, patrickHand } from "./fonts";
import { SiteFooter } from "./components/site-footer";
import { StructuredData } from "./components/structured-data";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./lib/metadata";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s · ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Najman", url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#fffcf4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${generalSans.variable} ${caveat.variable} ${patrickHand.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <StructuredData />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
