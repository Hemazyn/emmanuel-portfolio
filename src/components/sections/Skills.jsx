"use client"
import { motion } from "framer-motion"
import SectionHeader from "@/components/ui/SectionHeader"
import { skillNarrative, skillHighlights } from "@/data/skills"

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(8px)",
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export default function Skills() {
  return (
    <section id="skills" className="bg-light-100 dark:bg-dark-100 relative overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="grid-pattern absolute inset-0 opacity-[0.03] dark:opacity-[0.06]" />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 15% 20%, rgba(16,185,129,0.05), transparent 35%), radial-gradient(ellipse at 85% 80%, rgba(16,185,129,0.04), transparent 35%)",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 xl:px-0">
        <SectionHeader title={{ main: "How I turn", highlight: "ideas into products" }} subtitle="More than a list of tools — this is the frontend process I use to build clear, scalable, and production-ready digital experiences." />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          {/* Left summary */}
          <motion.div custom={0.05} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="glass h-fit rounded-3xl p-5 sm:p-6 lg:sticky lg:top-24">
            <p className="text-primary-600 dark:text-primary-400 font-mono text-[11px] tracking-[0.3em] uppercase">Frontend approach</p>

            <h3 className="text-dark dark:text-light font-heading mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">I build product-ready frontend systems, not just screens.</h3>

            <p className="text-dark-400 dark:text-light-400 mt-4 text-sm leading-relaxed sm:text-base">My work sits between product thinking, interface design, and engineering execution. The goal is always the same: build experiences that are usable, scalable, and ready for real users.</p>

            <div className="border-dark/8 dark:border-light/8 mt-6 border-t pt-6">
              <p className="text-dark-400 dark:text-light-400 font-mono text-[11px] tracking-[0.28em] uppercase">What that looks like</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {skillHighlights.map((item, index) => (
                  <motion.span key={item} custom={0.1 + index * 0.04} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="border-dark/6 bg-light-200/80 text-dark-400 dark:border-light/6 dark:bg-dark-300/80 dark:text-light-400 rounded-full border px-2.5 py-1 text-[11px]">
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right narrative */}
          <div className="space-y-4">
            {skillNarrative.map((item, index) => (
              <motion.article key={item.id} custom={0.08 + index * 0.06} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="glass rounded-3xl p-5 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
                  <div className="shrink-0">
                    <span className="text-primary-600 dark:text-primary-400 font-mono text-[11px] tracking-[0.3em] uppercase">{item.number}</span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-dark dark:text-light font-heading text-lg font-semibold tracking-tight sm:text-xl">{item.title}</h3>

                    <p className="text-dark-400 dark:text-light-400 mt-2 text-sm leading-relaxed sm:text-[15px]">{item.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.stack.map((tech) => (
                        <span key={tech} className="border-primary-500/15 bg-primary-500/8 text-primary-600 dark:text-primary-400 rounded-full border px-2.5 py-1 text-[11px]">
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
      </div>
    </section>
  )
}
