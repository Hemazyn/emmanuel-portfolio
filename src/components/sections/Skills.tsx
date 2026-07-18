import SectionHeader from "@/components/ui/SectionHeader"
import SectionBackground from "@/components/ui/SectionBackground"
import { skillNarrative, skillHighlights } from "@/data/skills"
import SkillsContent from "./SkillsContent"

export default function Skills() {
  return (
    <section id="skills" className="bg-light-100 dark:bg-dark-100 relative overflow-hidden py-20">
      <SectionBackground />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 15% 20%, rgba(16,185,129,0.05), transparent 35%), radial-gradient(ellipse at 85% 80%, rgba(16,185,129,0.04), transparent 35%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 xl:px-0">
        <SectionHeader title={{ main: "How I turn", highlight: "ideas into products" }} subtitle="Type-safe components, tested interfaces, optimized performance, and accessible design — this is the engineering process I follow to ship reliable frontend systems." />

        <SkillsContent narrative={skillNarrative} highlights={skillHighlights} />
      </div>
    </section>
  )
}
