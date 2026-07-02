import localFont from "next/font/local";

export const generalSans = localFont({
  src: [
    { path: "./fonts/GeneralSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/GeneralSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/GeneralSans-Semibold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/GeneralSans-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-general-sans",
  display: "swap",
});

// Scoped to text inside hand-marked elements only (DESIGN_SYSTEM.md §12) —
// never the site's primary typeface.
export const caveat = localFont({
  src: [{ path: "./fonts/Caveat-Variable.woff2", weight: "400 700", style: "normal" }],
  variable: "--font-caveat",
  display: "swap",
});

// The "middle" candidate: print-style handwriting (individual letters, not
// joined/cursive like Caveat) — warmer than General Sans, more composed than Caveat.
export const patrickHand = localFont({
  src: [{ path: "./fonts/PatrickHand-Regular.woff2", weight: "400", style: "normal" }],
  variable: "--font-patrick-hand",
  display: "swap",
});
