import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, SITE_NAME } from "@/app/lib/metadata";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Ahamed",
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#fffcf4",
    theme_color: "#fffcf4",
    icons: [
      { src: "/mark-192.png", sizes: "192x192", type: "image/png" },
      { src: "/mark.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
