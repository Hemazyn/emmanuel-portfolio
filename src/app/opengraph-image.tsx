import { ImageResponse } from "next/og"
import { loadBrutalistFonts } from "@/lib/og"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const alt = "Emmanuel Tofunmi — Frontend Engineer"
export const runtime = "nodejs"

export default async function OpenGraphImage() {
  const fonts = await loadBrutalistFonts()

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#fafaf5",
        color: "#1a1a1a",
        padding: 72,
        position: "relative",
      }}
    >
      {/* Dot grid background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "radial-gradient(circle, rgba(26,26,26,0.08) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Green accent top bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "#10b981",
        }}
      />

      {/* Green accent left border */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: 3,
          background: "#10b981",
        }}
      />

      {/* Top row: logo + status */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* Green square logo — matches icon.tsx pattern */}
          <div
            style={{
              width: 40,
              height: 40,
              background: "#fafaf5",
              border: "2px solid #10b981",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* Green accent corner */}
            <div
              style={{
                position: "absolute",
                top: -2,
                left: -2,
                width: 10,
                height: 10,
                background: "#10b981",
              }}
            />
            <span
              style={{
                fontFamily: "JetBrains Mono",
                fontWeight: 500,
                fontSize: 14,
                color: "#1a1a1a",
                letterSpacing: 1,
              }}
            >
              DE
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <span
              style={{
                fontFamily: "Source Serif 4",
                fontWeight: 700,
                fontSize: 18,
                color: "#1a1a1a",
              }}
            >
              Emmanuel Tofunmi
            </span>
            <span
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#7a7a78",
              }}
            >
              Frontend Engineer
            </span>
          </div>
        </div>

        {/* Status badge — hard edge, no border-radius */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "JetBrains Mono",
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#10b981",
            border: "1px solid rgba(16,185,129,0.3)",
            padding: "8px 16px",
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              background: "#10b981",
            }}
          />
          Available for work
        </div>
      </div>

      {/* ASCII rule — matches globals.css .ascii-rule */}
      <div
        style={{
          display: "flex",
          width: "100%",
          height: 6,
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: "100%",
            height: 3,
            backgroundImage: "repeating-linear-gradient(to right, #10b981 0, #10b981 4px, transparent 4px, transparent 8px)",
            marginTop: 1,
          }}
        />
        <div
          style={{
            width: "100%",
            height: 3,
            backgroundImage: "repeating-linear-gradient(to right, transparent 0, transparent 8px, rgba(16,185,129,0.18) 8px, rgba(16,185,129,0.18) 14px)",
            marginTop: 1,
          }}
        />
      </div>

      {/* Headline — VT323 display font, uppercase, matches Hero */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 80,
            fontFamily: "VT323",
            fontWeight: 400,
            letterSpacing: "0.02em",
            lineHeight: 0.9,
            textTransform: "uppercase",
            color: "#1a1a1a",
          }}
        >
          I build fast, polished
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 80,
            fontFamily: "VT323",
            fontWeight: 400,
            letterSpacing: "0.02em",
            lineHeight: 0.9,
            textTransform: "uppercase",
            color: "#10b981",
          }}
        >
          frontend systems.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 18,
            fontFamily: "Source Serif 4",
            color: "#4a4a4a",
            marginTop: 16,
            maxWidth: 700,
            lineHeight: 1.5,
          }}
        >
          Product-grade interfaces for fintech, CRM, dashboards &amp; SaaS — with performance, accessibility, and clean TypeScript at the core.
        </div>
      </div>

      {/* Bottom row: tech tags + copyright */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (
            <span
              key={tech}
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#10b981",
                background: "rgba(16,185,129,0.08)",
                border: "1px solid rgba(16,185,129,0.18)",
                padding: "5px 12px",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "JetBrains Mono",
            fontSize: 11,
            letterSpacing: "0.1em",
            color: "#7a7a78",
          }}
        >
          © {new Date().getFullYear()} Emmanuel Tofunmi
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts,
    }
  )
}
