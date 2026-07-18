"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, CheckCircle2, ChevronDown, Building2, Clock, Users } from "lucide-react"
import SectionHeader from "@/components/ui/SectionHeader"
import SectionBackground from "@/components/ui/SectionBackground"
import { caseStudies, type CaseStudy } from "@/data/case-studies"
import { fadeUp } from "@/lib/animations"

export default function CaseStudies() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="case-studies" className="bg-light-100 dark:bg-dark-100 relative overflow-hidden py-20">
      <SectionBackground />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 30% 20%, rgba(16,185,129,0.05), transparent 35%), radial-gradient(ellipse at 70% 80%, rgba(16,185,129,0.04), transparent 35%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 xl:px-0">
        <SectionHeader title={{ main: "How I've", highlight: "solved real problems" }} subtitle="Detailed case studies showing my process — from understanding the problem to shipping the solution." />

        <div className="mx-auto max-w-4xl space-y-4">
          {caseStudies.map((study, index) => (
            <motion.article key={study.id} custom={0.05 + index * 0.05} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="border-light-300 dark:border-dark-400 dark:bg-dark-200/75 overflow-hidden rounded-[22px] border bg-white/75 transition-all duration-300">
              {/* Card header — always visible */}
              <button type="button" onClick={() => toggleExpand(study.id)} className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-6">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full px-2.5 py-0.5 text-[10px] font-medium">{study.category}</span>

                    {study.impact.length > 0 && (
                      <span className="bg-primary-500/10 text-primary-600 dark:text-primary-400 inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-medium">
                        <CheckCircle2 className="h-3 w-3" />
                        Case Study
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading text-dark dark:text-light mt-2 text-lg font-semibold sm:text-xl">{study.title}</h3>

                  <p className="text-primary-600 dark:text-primary-400 mt-0.5 text-sm">{study.subtitle}</p>

                  {/* Meta info */}
                  <div className="text-dark-400 dark:text-light-400 mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs">
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

                <motion.div animate={{ rotate: expandedId === study.id ? 180 : 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="text-dark-400 dark:text-light-400 mt-1 shrink-0">
                  <ChevronDown className="h-5 w-5" />
                </motion.div>
              </button>

              {/* Expandable content */}
              <AnimatePresence>
                {expandedId === study.id && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                    <div className="border-dark/6 dark:border-light/6 space-y-6 border-t px-5 pb-6 sm:px-6 sm:pb-7">
                      {/* Problem */}
                      <div className="pt-5">
                        <p className="text-dark-400 dark:text-light-400 mb-2 font-mono text-[10px] tracking-[0.22em] uppercase">The Problem</p>
                        <p className="text-dark dark:text-light text-sm leading-relaxed sm:text-[15px]">{study.problem}</p>
                      </div>

                      {/* Approach */}
                      <div>
                        <p className="text-dark-400 dark:text-light-400 mb-2 font-mono text-[10px] tracking-[0.22em] uppercase">The Approach</p>
                        <p className="text-dark dark:text-light text-sm leading-relaxed sm:text-[15px]">{study.approach}</p>
                      </div>

                      {/* Solution */}
                      <div>
                        <p className="text-dark-400 dark:text-light-400 mb-2 font-mono text-[10px] tracking-[0.22em] uppercase">The Solution</p>
                        <p className="text-dark dark:text-light text-sm leading-relaxed sm:text-[15px]">{study.solution}</p>
                      </div>

                      {/* Architecture */}
                      {study.architecture.length > 0 && (
                        <div>
                          <p className="text-dark-400 dark:text-light-400 mb-2 font-mono text-[10px] tracking-[0.22em] uppercase">Architecture Decisions</p>
                          <div className="flex flex-wrap gap-2">
                            {study.architecture.map((item) => (
                              <span key={item} className="border-dark/6 bg-light-200/80 text-dark-400 dark:border-light/6 dark:bg-dark-300/80 dark:text-light-400 rounded-full border px-2.5 py-1 text-[11px]">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Impact */}
                      <div>
                        <p className="text-dark-400 dark:text-light-400 mb-3 font-mono text-[10px] tracking-[0.22em] uppercase">Impact & Results</p>
                        <ul className="space-y-2">
                          {study.impact.map((item, i) => (
                            <li key={i} className="text-dark dark:text-light flex items-start gap-2.5 text-sm">
                              <CheckCircle2 className="text-primary-500 mt-0.5 h-4 w-4 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech stack */}
                      <div>
                        <p className="text-dark-400 dark:text-light-400 mb-2 font-mono text-[10px] tracking-[0.22em] uppercase">Technologies Used</p>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech) => (
                            <span key={tech} className="border-primary-500/15 bg-primary-500/8 text-primary-600 dark:text-primary-400 rounded-full border px-2.5 py-1 text-[11px] font-medium">
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
                            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                          }}
                          className="border-dark/10 text-dark hover:border-primary-500/30 hover:text-primary-600 dark:border-light/10 dark:text-light dark:hover:text-primary-400 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300"
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
