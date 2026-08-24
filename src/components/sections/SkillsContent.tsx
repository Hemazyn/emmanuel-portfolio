"use client"
import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"

interface SkillNarrativeItem {
  id: string
  number: string
  title: string
  description: string
  stack: string[]
}

interface SkillsContentProps {
  narrative: SkillNarrativeItem[]
  highlights: string[]
}

export default function SkillsContent({ narrative, highlights }: SkillsContentProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
      {/* Left summary — hard edge card */}
      <motion.div
        custom={0.05}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="glass h-fit p-5 sm:p-6 lg:sticky lg:top-24"
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
          Frontend approach
        </p>

        <h3 className="mt-4 font-display text-2xl uppercase tracking-wide text-ink sm:text-3xl">
          I build product-ready frontend systems, not just screens.
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base">
          My work sits between product thinking, interface design, and engineering execution.
          The goal is always the same: build experiences that are usable, scalable, and ready
          for real users.
        </p>

        <div className="mt-6 border-t border-rule-soft pt-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink-mute">
            What that looks like
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {highlights.map((item, index) => (
              <motion.span
                key={item}
                custom={0.1 + index * 0.04}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="border border-rule-soft bg-bg-surface px-2.5 py-1 font-mono text-[11px] text-ink-mute"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Right narrative — numbered cards */}
      <div className="space-y-4">
        {narrative.map((item, index) => (
          <motion.article
            key={item.id}
            custom={0.08 + index * 0.06}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="glass p-5 sm:p-6"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
              <div className="shrink-0">
                <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
                  {item.number}
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-display text-lg uppercase tracking-wide text-ink sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:text-[15px]">
                  {item.description}
                </p>

                {/* Tech tags — accent tint */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="border border-accent-tint-strong bg-accent-tint px-2.5 py-1 font-mono text-[11px] text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
