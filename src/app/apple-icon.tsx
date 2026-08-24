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
          background: "#fafaf5",
          borderRadius: 40,
          position: "relative",
        }}
      >
        {/* Green border */}
        <div
          style={{
            position: "absolute",
            top: 8,
            left: 8,
            right: 8,
            bottom: 8,
            border: "2px solid #10b981",
          }}
        />
        {/* Green accent square */}
        <div
          style={{
            position: "absolute",
            top: 8,
            left: 8,
            width: 12,
            height: 12,
            background: "#10b981",
          }}
        />
        {/* Mono text */}
        <span
          style={{
            fontFamily: "Inter",
            fontWeight: 700,
            fontSize: 64,
            color: "#1a1a1a",
            letterSpacing: 2,
          }}
        >
          DE
        </span>
      </div>
    ),
    { ...size, fonts }
  )
}
