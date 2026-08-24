import { ImageResponse } from "next/og"
import { loadInterFont } from "@/lib/og"

export const size = { width: 32, height: 32 }
export const contentType = "image/png"
export const runtime = "nodejs"

export default async function Icon() {
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
          position: "relative",
        }}
      >
        {/* Green border */}
        <div
          style={{
            position: "absolute",
            top: 2,
            left: 2,
            right: 2,
            bottom: 2,
            border: "1.5px solid #10b981",
          }}
        />
        {/* Green accent square */}
        <div
          style={{
            position: "absolute",
            top: 2,
            left: 2,
            width: 6,
            height: 6,
            background: "#10b981",
          }}
        />
        {/* Mono text */}
        <span
          style={{
            fontFamily: "Inter",
            fontWeight: 700,
            fontSize: 11,
            color: "#1a1a1a",
            letterSpacing: 1,
          }}
        >
          DE
        </span>
      </div>
    ),
    { ...size, fonts }
  )
}
