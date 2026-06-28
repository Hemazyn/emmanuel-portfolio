"use client"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import SectionHeader from "@/components/ui/SectionHeader"
import { experienceData, experienceStats } from "@/data/experience"

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
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const cardVariants = {
  initial: {
    opacity: 0,
    y: 18,
    filter: "blur(10px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -18,
    filter: "blur(8px)",
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)

  const activeExperience = experienceData[activeIndex]
  const total = experienceData.length

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1))
  }

  const goNext = () => {
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1))
  }

  return (
    <section id="experience" className="bg-light-100 dark:bg-dark-100 lg:py28 sm:py24 relative overflow-hidden py-20">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="grid-pattern absolute inset-0 opacity-[0.03] dark:opacity-[0.06]" />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 70% 0%, rgba(16,185,129,0.06), transparent 40%)",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 xl:px-0">
        <SectionHeader title={{ main: "Where I've", highlight: "worked" }} subtitle="Selected roles across fintech, product platforms, and freelance client work." />

        {/* Compact stats */}
        <motion.div custom={0.05} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10 flex flex-wrap gap-3">
          {experienceStats.map((stat, index) => (
            <motion.div key={stat.label} custom={0.08 + index * 0.05} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass inline-flex items-center gap-3 rounded-full px-4 py-2.5">
              <span className="font-heading text-primary-600 dark:text-primary-400 text-base font-semibold sm:text-lg">{stat.value}</span>
              <span className="text-dark-400 dark:text-light-400 text-xs sm:text-sm">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile company pills */}
        <div className="scrollbar-hide mb-6 flex gap-2 overflow-x-auto pb-1 lg:hidden">
          {experienceData.map((item, index) => (
            <button key={item.id} type="button" onClick={() => setActiveIndex(index)} className={cn("shrink-0 rounded-full border px-3 py-1.5 text-xs transition-all duration-300", activeIndex === index ? "border-primary-500/20 bg-primary-500/10 text-primary-600 dark:text-primary-400" : "border-light-300 text-dark-400 dark:border-dark-400 dark:bg-dark-200/70 dark:text-light-400 bg-white/70")}>
              {item.company}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[240px_1fr] lg:gap-8">
          {/* Desktop vertical rail */}
          <motion.aside custom={0.1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative hidden lg:block">
            <div className="bg-dark/8 dark:bg-light/8 absolute top-2 bottom-2 left-2.5 w-px" />

            <div className="space-y-2">
              {experienceData.map((item, index) => {
                const isActive = activeIndex === index

                return (
                  <button key={item.id} type="button" onClick={() => setActiveIndex(index)} className="group relative block w-full pl-8 text-left">
                    <span className={cn("absolute top-4 left-1.5 h-2.25 w-2.25 rounded-full border-2 transition-all duration-300", isActive ? "border-primary-500 bg-primary-500 shadow-[0_0_0_4px_rgba(16,185,129,0.10)]" : "border-dark/15 bg-light-100 dark:border-light/15 dark:bg-dark-100")} />

                    <div className={cn("rounded-2xl px-4 py-3 transition-all duration-300", isActive ? "bg-primary-500/8" : "hover:bg-black/2 dark:hover:bg-white/2")}>
                      <p className={cn("font-heading text-sm font-medium transition-colors duration-300", isActive ? "text-dark dark:text-light" : "text-dark-400 dark:text-light-400")}>{item.company}</p>

                      <p className="text-dark-400/60 dark:text-light-400/60 mt-1 font-mono text-[10px] tracking-[0.14em] uppercase">
                        {item.startDate} — {item.endDate}
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>
          </motion.aside>

          {/* Active card */}
          <motion.div custom={0.16} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="border-light-300 dark:border-dark-400 dark:bg-dark-200/75 overflow-hidden rounded-[28px] border bg-white/75">
              <AnimatePresence mode="wait">
                <motion.article key={activeExperience.id} variants={cardVariants} initial="initial" animate="animate" exit="exit" className="p-5 sm:p-6">
                  {/* Header */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2.5">
                        {activeExperience.companyUrl && activeExperience.companyUrl !== "#" ? (
                          <a href={activeExperience.companyUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5">
                            <h3 className="font-heading text-dark dark:text-light text-xl font-semibold tracking-tight sm:text-2xl">{activeExperience.company}</h3>
                            <ArrowUpRight className="text-primary-600 dark:text-primary-400 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </a>
                        ) : (
                          <h3 className="font-heading text-dark dark:text-light text-xl font-semibold tracking-tight sm:text-2xl">{activeExperience.company}</h3>
                        )}

                        {activeExperience.isCurrentRole && (
                          <span className="bg-primary-500/10 text-primary-600 dark:text-primary-400 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium">
                            <span className="bg-primary-500 h-1.5 w-1.5 rounded-full" />
                            Current
                          </span>
                        )}
                      </div>

                      <p className="text-primary-600 dark:text-primary-400 mt-1 text-sm font-medium sm:text-base">{activeExperience.role}</p>

                      <div className="text-dark-400 dark:text-light-400 mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" />
                          {activeExperience.location}
                        </span>

                        <span className="bg-dark/15 dark:bg-light/15 hidden h-1 w-1 rounded-full sm:block" />

                        <span>{activeExperience.type}</span>

                        <span className="bg-dark/15 dark:bg-light/15 hidden h-1 w-1 rounded-full sm:block" />

                        <span className="font-mono text-[11px] tracking-[0.14em] uppercase">
                          {activeExperience.startDate} — {activeExperience.endDate}
                        </span>
                      </div>
                    </div>

                    <div className="text-dark-400/50 dark:text-light-400/50 font-mono text-[11px] tracking-[0.18em] uppercase">
                      {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-dark-400 dark:text-light-400 mt-5 max-w-3xl text-sm leading-relaxed sm:text-[15px]">{activeExperience.description}</p>

                  {/* Tech */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {activeExperience.technologies.map((tech) => (
                      <span key={tech} className="border-dark/6 bg-light-200/80 text-dark-400 dark:border-light/6 dark:bg-dark-300/80 dark:text-light-400 rounded-full border px-3 py-1 text-[11px]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Achievements */}
                  {activeExperience.achievements && activeExperience.achievements.length > 0 && (
                    <div className="border-dark/6 dark:border-light/6 bg-light-100/70 dark:bg-dark-300/30 mt-5 rounded-2xl border p-4">
                      <p className="text-dark-400 dark:text-light-400 font-mono text-[10px] tracking-[0.22em] uppercase">Highlights</p>

                      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                        {activeExperience.achievements.map((achievement, i) => (
                          <li key={i} className="text-dark-400 dark:text-light-400 flex items-start gap-2.5 text-sm">
                            <span className="bg-primary-500 mt-1.75 h-1 w-1 shrink-0 rounded-full" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Controls */}
                  <div className="border-dark/6 dark:border-light/6 mt-5 flex items-center justify-between border-t pt-4">
                    <button type="button" onClick={goPrev} className="border-dark/8 text-dark-400 hover:text-primary-600 dark:border-light/8 dark:text-light-400 dark:hover:text-primary-400 inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm transition-colors duration-300">
                      <ArrowLeft className="h-4 w-4" />
                      Previous
                    </button>

                    <button type="button" onClick={goNext} className="border-dark/8 text-dark-400 hover:text-primary-600 dark:border-light/8 dark:text-light-400 dark:hover:text-primary-400 inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm transition-colors duration-300">
                      Next
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
