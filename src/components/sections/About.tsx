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
    <section id="about" className="relative overflow-hidden border-t border-rule-soft py-20">
      <SectionBackground variant="dots" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-7">
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
