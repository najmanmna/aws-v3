import type { Metadata } from "next";
import { generalSans, caveat, patrickHand } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahamed Web Studio",
  description:
    "A boutique studio that partners with branding agencies and ambitious businesses to design and build premium websites.",
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
      <body className="min-h-full">{children}</body>
    </html>
  );
}
