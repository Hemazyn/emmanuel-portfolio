import SectionHeader from "@/components/ui/SectionHeader"
import SectionBackground from "@/components/ui/SectionBackground"
import { personalInfo } from "@/data/navigation"
import AboutContent from "./AboutContent"

const serviceAreas = [
  "Fintech & Payment Systems",
  "E-Commerce Platforms",
  "CRM & Admin Dashboards",
  "Crypto-to-Fiat Dashboards",
  "Design Systems",
  "Accessible Interfaces (WCAG 2.1 AA)",
  "Performance Optimization",
]

const selectedStack = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript (ES6+)",
  "Tailwind CSS",
  "Zustand",
  "TanStack Query",
  "Context API",
  "Framer Motion",
  "Storybook",
  "Jest",
  "React Testing Library",
  "REST APIs",
  "Git",
  "Figma",
]

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20">
      <SectionBackground variant="dots" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 20% 20%, rgba(16,185,129,0.05), transparent 40%), radial-gradient(ellipse at 80% 80%, rgba(16,185,129,0.04), transparent 40%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 xl:px-0">
        <SectionHeader title={{ main: "A quick look at", highlight: "what I do" }} />

        <AboutContent
          email={personalInfo.email}
          location={personalInfo.location}
          resumeUrl={personalInfo.resumeUrl}
          resumeFileName={personalInfo.resumeFileName}
          serviceAreas={serviceAreas}
          selectedStack={selectedStack}
        />
      </div>
    </section>
  )
}
