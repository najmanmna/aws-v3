import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_ALT = "Ahamed Web Studio";

const BACKGROUND = "#fffcf4";
const FOREGROUND = "#0e2c54";

export async function renderOgImage() {
  const markData = await readFile(join(process.cwd(), "public/mark.png"), "base64");
  const markSrc = `data:image/png;base64,${markData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: BACKGROUND,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={markSrc} width={200} height={200} alt="" />
        <div
          style={{
            marginTop: 32,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              letterSpacing: "0.02em",
              color: FOREGROUND,
              lineHeight: 1,
            }}
          >
            AHAMED
          </div>
          <div
            style={{
              marginTop: 10,
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: "0.3em",
              color: FOREGROUND,
              lineHeight: 1,
            }}
          >
            WEB STUDIO
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
