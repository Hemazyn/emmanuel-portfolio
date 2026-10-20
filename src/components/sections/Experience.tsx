"use client"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import SectionHeader from "@/components/ui/SectionHeader"
import SectionBackground from "@/components/ui/SectionBackground"
import { fadeUp, cardVariants } from "@/lib/animations"
import { experienceData, experienceStats } from "@/data/experience"

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

  /** Arrow-key navigation for the tablists — activation follows focus. */
  const handleTabKeyDown = (e: React.KeyboardEvent, index: number) => {
    let next: number | null = null
    switch (e.key) {
      case "ArrowDown":
      case "ArrowRight":
        next = (index + 1) % total
        break
      case "ArrowUp":
      case "ArrowLeft":
        next = (index - 1 + total) % total
        break
      case "Home":
        next = 0
        break
      case "End":
        next = total - 1
        break
      default:
        return
    }
    e.preventDefault()
    setActiveIndex(next)
    document.getElementById(`experience-tab-${experienceData[next].id}`)?.focus()
  }

  return (
    <section id="experience" className="relative overflow-hidden border-t border-rule-soft py-20 sm:py-24 lg:py-28">
      {/* Background */}
      <SectionBackground />

      <div className="relative z-10 mx-auto max-w-[1200px] px-7">
        <SectionHeader
          title={{ main: "Where I've", highlight: "worked" }}
          subtitle="Selected roles across fintech, product platforms, and freelance client work."
        />

        {/* Stats — hard edge pills */}
        <motion.div custom={0.05} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10 flex flex-wrap gap-3">
          {experienceStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              custom={0.08 + index * 0.05}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="panel inline-flex items-center gap-3 px-4 py-2.5"
            >
              <span className="font-display text-lg text-accent sm:text-xl">{stat.value}</span>
              <span className="text-xs text-ink-mute sm:text-sm">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile company pills */}
        <div role="tablist" aria-label="Work experience" className="scrollbar-hide mb-6 flex gap-2 overflow-x-auto pb-1 lg:hidden">
          {experienceData.map((item, index) => (
            <button
              key={item.id}
              id={`experience-tab-${item.id}`}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              aria-controls="experience-panel"
              tabIndex={activeIndex === index ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(e) => handleTabKeyDown(e, index)}
              className={cn(
                "shrink-0 border px-3 py-1.5 text-xs transition-all duration-200",
                activeIndex === index
                  ? "border-accent bg-accent-tint text-accent"
                  : "border-rule-soft bg-bg-surface text-ink-soft hover:border-accent/40"
              )}
            >
              {item.company}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[240px_1fr] lg:gap-8">
          {/* Desktop vertical rail */}
          <motion.aside custom={0.1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative hidden lg:block">
            <div className="absolute top-2 bottom-2 left-2.5 w-px bg-ink/8" />

            <div role="tablist" aria-label="Work experience" className="space-y-2">
              {experienceData.map((item, index) => {
                const isActive = activeIndex === index

                return (
                  <button
                    key={item.id}
                    id={`experience-tab-${item.id}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="experience-panel"
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveIndex(index)}
                    onKeyDown={(e) => handleTabKeyDown(e, index)}
                    className="group relative block w-full pl-8 text-left"
                  >
                    <span
                      className={cn(
                        "absolute top-4 left-1.5 h-2.25 w-2.25 border-2 transition-all duration-200",
                        isActive
                          ? "border-accent bg-accent shadow-[0_0_0_4px_var(--color-accent-tint)]"
                          : "border-ink/15 bg-bg"
                      )}
                    />

                    <div
                      className={cn(
                        "px-4 py-3 transition-all duration-200",
                        isActive ? "bg-accent-tint" : "hover:bg-ink/2"
                      )}
                    >
                      <p className={cn(
                        "text-sm font-medium transition-colors duration-200",
                        isActive ? "text-ink" : "text-ink-mute"
                      )}>
                        {item.company}
                      </p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-mute/60">
                        {item.startDate} — {item.endDate}
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>
          </motion.aside>

          {/* Active card — hard edge */}
          <motion.div custom={0.16} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div
              id="experience-panel"
              role="tabpanel"
              aria-labelledby={`experience-tab-${activeExperience.id}`}
              tabIndex={0}
              className="overflow-hidden border border-rule-soft bg-bg"
            >
              <AnimatePresence mode="wait">
                <motion.article
                  key={activeExperience.id}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="p-5 sm:p-6"
                >
                  {/* Header */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2.5">
                        {activeExperience.companyUrl && activeExperience.companyUrl !== "#" ? (
                          <a href={activeExperience.companyUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5">
                            <h3 className="font-display text-xl uppercase tracking-wide text-ink sm:text-2xl">
                              {activeExperience.company}
                            </h3>
                            <ArrowUpRight className="h-4 w-4 text-accent transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </a>
                        ) : (
                          <h3 className="font-display text-xl uppercase tracking-wide text-ink sm:text-2xl">
                            {activeExperience.company}
                          </h3>
                        )}

                        {activeExperience.isCurrentRole && (
                          <span className="inline-flex items-center gap-1.5 border border-accent-tint-strong bg-accent-tint px-2.5 py-1 text-[11px] font-mono font-medium text-accent">
                            <span className="h-1.5 w-1.5 bg-accent" />
                            Current
                          </span>
                        )}
                      </div>

                      <p className="mt-1 text-sm font-medium text-accent sm:text-base">
                        {activeExperience.role}
                      </p>

                      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm text-ink-mute">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" />
                          {activeExperience.location}
                        </span>

                        <span className="hidden h-1 w-1 bg-ink/15 sm:block" />

                        <span>{activeExperience.type}</span>

                        <span className="hidden h-1 w-1 bg-ink/15 sm:block" />

                        <span className="font-mono text-[11px] uppercase tracking-[0.14em]">
                          {activeExperience.startDate} — {activeExperience.endDate}
                        </span>
                      </div>
                    </div>

                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute/50">
                      {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-5 max-w-3xl text-sm leading-relaxed text-ink-soft sm:text-[15px]">
                    {activeExperience.description}
                  </p>

                  {/* Tech tags — hard edge */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {activeExperience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="border border-rule-soft bg-bg-surface px-3 py-1 text-[11px] text-ink-mute"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Achievements */}
                  {activeExperience.achievements && activeExperience.achievements.length > 0 && (
                    <div className="mt-5 border border-rule-soft bg-bg-surface p-4">
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
                        Highlights
                      </p>

                      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                        {activeExperience.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-ink-soft">
                            <span className="mt-1.75 h-1 w-1 shrink-0 bg-accent" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Controls — hard edge */}
                  <div className="mt-5 flex items-center justify-between border-t border-rule-soft pt-4">
                    <button
                      type="button"
                      onClick={goPrev}
                      className="inline-flex items-center gap-2 border border-rule-soft px-3 py-2 text-sm text-ink-mute transition-colors duration-200 hover:border-accent hover:text-accent"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Previous
                    </button>

                    <button
                      type="button"
                      onClick={goNext}
                      className="inline-flex items-center gap-2 border border-rule-soft px-3 py-2 text-sm text-ink-mute transition-colors duration-200 hover:border-accent hover:text-accent"
                    >
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
