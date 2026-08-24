"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, CheckCircle2, ChevronDown, Building2, Clock, Users } from "lucide-react"
import SectionHeader from "@/components/ui/SectionHeader"
import SectionBackground from "@/components/ui/SectionBackground"
import { caseStudies, type CaseStudy } from "@/data/case-studies"
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
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 30% 20%, rgba(16,185,129,0.03), transparent 35%), radial-gradient(ellipse at 70% 80%, rgba(16,185,129,0.02), transparent 35%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-7">
        <SectionHeader
          title={{ main: "How I've", highlight: "solved real problems" }}
          subtitle="Detailed case studies showing my process — from understanding the problem to shipping the solution."
        />

        <div className="mx-auto max-w-4xl space-y-4">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              custom={0.05 + index * 0.05}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="overflow-hidden border border-rule-soft bg-bg transition-all duration-200"
            >
              {/* Card header — always visible */}
              <button
                type="button"
                onClick={() => toggleExpand(study.id)}
                className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-6"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="border border-accent-tint-strong bg-accent-tint px-2.5 py-0.5 font-mono text-[10px] font-medium text-accent">
                      {study.category}
                    </span>
                    {study.impact.length > 0 && (
                      <span className="inline-flex items-center gap-1 border border-accent-tint-strong bg-accent-tint px-2.5 py-0.5 font-mono text-[10px] font-medium text-accent">
                        <CheckCircle2 className="h-3 w-3" />
                        Case Study
                      </span>
                    )}
                  </div>

                  <h3 className="mt-2 font-display text-lg uppercase tracking-wide text-ink sm:text-xl">
                    {study.title}
                  </h3>
                  <p className="mt-0.5 text-sm text-accent">{study.subtitle}</p>

                  {/* Meta info — mono labels */}
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-ink-mute">
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
                  animate={{ rotate: expandedId === study.id ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-1 shrink-0 text-ink-mute"
                >
                  <ChevronDown className="h-5 w-5" />
                </motion.div>
              </button>

              {/* Expandable content */}
              <AnimatePresence>
                {expandedId === study.id && (
                  <motion.div
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
                          Impact & Results
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
          ))}
        </div>
      </div>
    </section>
  )
}
