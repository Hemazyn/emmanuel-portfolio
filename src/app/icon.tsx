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
          borderRadius: 8,
          background: "linear-gradient(135deg, #047857, #10b981)",
          color: "#ffffff",
          fontFamily: "Inter",
          fontWeight: 700,
          fontSize: 18,
        }}
      >
        E
      </div>
    ),
    { ...size, fonts }
  )
}
