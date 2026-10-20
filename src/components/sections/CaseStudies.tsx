"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, CheckCircle2, ChevronDown, Building2, Clock, Users } from "lucide-react"
import SectionHeader from "@/components/ui/SectionHeader"
import SectionBackground from "@/components/ui/SectionBackground"
import { caseStudies } from "@/data/case-studies"
import { fadeUp } from "@/lib/animations"
import { smoothScrollTo } from "@/lib/utils"

export default function CaseStudies() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="case-studies" className="relative overflow-hidden border-t border-rule-soft bg-bg-surface py-20">
      <SectionBackground />

      <div className="relative z-10 mx-auto max-w-[1200px] px-7">
        <SectionHeader
          title={{ main: "How I've", highlight: "solved real problems" }}
          subtitle="The problem, the approach, and the result — for each product I've shipped."
        />

        <div className="mx-auto max-w-4xl space-y-4">
          {caseStudies.map((study, index) => {
            const isExpanded = expandedId === study.id

            return (
              <motion.article
                key={study.id}
                custom={0.05 + index * 0.05}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="overflow-hidden border border-rule-soft bg-bg transition-all duration-200"
              >
                {/* Card header — summary and impact always visible */}
                <button
                  type="button"
                  onClick={() => toggleExpand(study.id)}
                  aria-expanded={isExpanded}
                  aria-controls={`case-study-panel-${study.id}`}
                  className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-6"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="border border-accent-tint-strong bg-accent-tint px-2.5 py-0.5 font-mono text-[10px] font-medium text-accent">
                        {study.category}
                      </span>
                      <span className="inline-flex items-center gap-1 border border-accent-tint-strong bg-accent-tint px-2.5 py-0.5 font-mono text-[10px] font-medium text-accent">
                        <CheckCircle2 className="h-3 w-3" />
                        Case Study
                      </span>
                    </div>

                    <h3
                      id={`case-study-heading-${study.id}`}
                      className="mt-2 font-display text-lg uppercase tracking-wide text-ink sm:text-xl"
                    >
                      {study.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-accent">{study.subtitle}</p>

                    {/* One-line summary — always visible */}
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
                      {study.summary}
                    </p>

                    {/* Impact stats — visible without expanding */}
                    <div className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-3">
                      {study.impactStats.map((stat) => (
                        <div key={stat.label}>
                          <p className="font-display text-xl leading-none text-accent">
                            {stat.value}
                          </p>
                          <p className="mt-1.5 font-mono text-[11px] leading-snug tracking-[0.08em] text-ink-mute">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Meta info — mono labels */}
                    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-ink-mute">
                      <span className="inline-flex items-center gap-1.5">
                        <Building2 className="h-3.5 w-3.5" />
                        {study.role}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {study.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5" />
                        {study.team}
                      </span>
                    </div>
                  </div>

                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-ink-mute"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </button>

                {/* Expandable detail */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      id={`case-study-panel-${study.id}`}
                      role="region"
                      aria-labelledby={`case-study-heading-${study.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-6 border-t border-rule-soft px-5 pb-6 sm:px-6 sm:pb-7">
                        {/* Problem */}
                        <div className="pt-5">
                          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
                            The Problem
                          </p>
                          <p className="text-sm leading-relaxed text-ink sm:text-[15px]">
                            {study.problem}
                          </p>
                        </div>

                        {/* Approach */}
                        <div>
                          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
                            The Approach
                          </p>
                          <p className="text-sm leading-relaxed text-ink sm:text-[15px]">
                            {study.approach}
                          </p>
                        </div>

                        {/* Solution */}
                        <div>
                          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
                            The Solution
                          </p>
                          <p className="text-sm leading-relaxed text-ink sm:text-[15px]">
                            {study.solution}
                          </p>
                        </div>

                        {/* Architecture — hard edge tags */}
                        {study.architecture.length > 0 && (
                          <div>
                            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
                              Architecture Decisions
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {study.architecture.map((item) => (
                                <span
                                  key={item}
                                  className="border border-rule-soft bg-bg-surface px-2.5 py-1 font-mono text-[11px] text-ink-mute"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Impact */}
                        <div>
                          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
                            Impact &amp; Results
                          </p>
                          <ul className="space-y-2">
                            {study.impact.map((item, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-sm text-ink">
                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech stack — accent tags */}
                        <div>
                          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
                            Technologies Used
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="border border-accent-tint-strong bg-accent-tint px-2.5 py-1 font-mono text-[11px] font-medium text-accent"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Link to project */}
                        <div className="pt-1">
                          <a
                            href="#projects"
                            onClick={(e) => {
                              e.preventDefault()
                              smoothScrollTo("projects")
                            }}
                            className="btn btn-secondary inline-flex items-center gap-2 text-sm"
                          >
                            View project details
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
