import { ImageResponse } from "next/og"
import { loadInterFont } from "@/lib/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"
export const runtime = "nodejs"

export default async function AppleIcon() {
  const fonts = await loadInterFont([700])

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          borderRadius: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 140,
            height: 140,
            borderRadius: 36,
            background: "linear-gradient(135deg, #047857, #10b981)",
            color: "#ffffff",
            fontFamily: "Inter",
            fontWeight: 700,
            fontSize: 72,
          }}
        >
          E
        </div>
      </div>
    ),
    { ...size, fonts }
  )
}
