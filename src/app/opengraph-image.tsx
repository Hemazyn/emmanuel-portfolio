import { ImageResponse } from "next/og"
import { loadInterFont } from "@/lib/og"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const alt = "Emmanuel Tofunmi — Frontend Engineer"
export const runtime = "nodejs"

export default async function OpenGraphImage() {
  const fonts = await loadInterFont([400, 700])

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          color: "#ffffff",
          fontFamily: "Inter",
          padding: 72,
          position: "relative",
        }}
      >
        {/* Emerald glow accents */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -160,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(16,185,129,0.28) 0%, rgba(16,185,129,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            left: -120,
            width: 480,
            height: 480,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(16,185,129,0.16) 0%, rgba(16,185,129,0) 70%)",
          }}
        />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "#10b981" }} />

        {/* Top row: monogram + URL */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                background: "linear-gradient(135deg, #059669, #10b981)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: 20,
                color: "#ffffff",
              }}
            >
              DE
            </div>
            <div style={{ display: "flex", flexDirection: "column", fontSize: 14, color: "#94a3b8" }}>
              <span style={{ fontWeight: 700, color: "#e2e8f0", fontSize: 16 }}>Emmanuel Tofunmi</span>
              <span>iamtofunmi.vercel.app</span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 14,
              color: "#6ee7b7",
              border: "1px solid rgba(16,185,129,0.35)",
              borderRadius: 999,
              padding: "8px 18px",
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: 9999, background: "#10b981" }} />
            Available for work
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>
            I build fast, polished
          </div>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05, color: "#10b981" }}>
            frontend systems.
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#cbd5e1", marginTop: 12, maxWidth: 720 }}>
            Product-grade interfaces for fintech, CRM, dashboards & SaaS — with performance, accessibility, and clean
            TypeScript at the core.
          </div>
        </div>

        {/* Bottom row: stack */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", width: "100%" }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (
              <span
                key={tech}
                style={{
                  fontSize: 15,
                  color: "#94a3b8",
                  border: "1px solid rgba(148,163,184,0.25)",
                  borderRadius: 999,
                  padding: "6px 14px",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
          <div style={{ display: "flex", fontSize: 14, color: "#64748b" }}>© {new Date().getFullYear()} Emmanuel Tofunmi</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts,
    }
  )
}
