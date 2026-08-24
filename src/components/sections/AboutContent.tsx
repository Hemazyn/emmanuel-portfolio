"use client"
import { motion } from "framer-motion"
import { ArrowRight, Download, Mail, MapPin } from "lucide-react"
import { fadeUp } from "@/lib/animations"
import { smoothScrollTo } from "@/lib/utils"

interface AboutContentProps {
  email: string
  location: string
  resumeUrl: string
  resumeFileName: string
  serviceAreas: string[]
  selectedStack: string[]
}

export default function AboutContent({
  email,
  location,
  resumeUrl,
  resumeFileName,
  serviceAreas,
  selectedStack,
}: AboutContentProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
      {/* Main card — hard edge */}
      <motion.div
        custom={0.05}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="glass p-6 sm:p-8"
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
          About me
        </p>

        <h3 className="mt-4 font-display text-2xl uppercase tracking-wide text-ink sm:text-3xl">
          I build product interfaces that are clear, scalable, and easy to use.
        </h3>

        <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink-soft sm:text-base">
          <p>
            I&apos;m a frontend engineer focused on building polished user interfaces for modern
            digital products. My work covers CRM systems, admin dashboards, internal tools,
            high-end websites, and embedded widgets.
          </p>
          <p>
            I care about clean implementation, thoughtful motion, strong usability, and the
            details that make products feel reliable and well crafted.
          </p>
        </div>

        <div className="mt-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink-mute">
            What I build
          </p>
          <div className="mt-3 flex flex-wrap gap-2.5">
            {serviceAreas.map((item, index) => (
              <motion.span
                key={item}
                custom={0.12 + index * 0.04}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="border border-accent-tint-strong bg-accent-tint px-3 py-1.5 text-sm font-mono text-accent"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              smoothScrollTo("projects")
            }}
            className="group btn btn-primary inline-flex items-center gap-2"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          <a
            href={resumeUrl}
            download={resumeFileName}
            className="btn btn-secondary inline-flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </div>
      </motion.div>

      {/* Side card — hard edge */}
      <motion.div
        custom={0.12}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="glass p-6 sm:p-7"
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
          Snapshot
        </p>

        <div className="mt-5 space-y-4">
          <div className="flex items-start justify-between gap-4 border-b border-rule-soft pb-4">
            <span className="text-sm text-ink-mute">Focus</span>
            <span className="text-right text-sm font-medium text-ink">
              Product UI & Frontend Systems
            </span>
          </div>

          <div className="flex items-start justify-between gap-4 border-b border-rule-soft pb-4">
            <span className="text-sm text-ink-mute">Location</span>
            <span className="text-sm font-medium text-ink">{location}</span>
          </div>

          <a
            href={`mailto:${email}`}
            className="group flex items-center gap-3 pt-1 text-sm text-ink-soft transition-colors duration-200 hover:text-accent"
          >
            <Mail className="h-4 w-4" />
            <span className="truncate">{email}</span>
          </a>

          <div className="flex items-center gap-3 text-sm text-ink-soft">
            <MapPin className="h-4 w-4 text-accent" />
            <span>{location}</span>
          </div>
        </div>

        <div className="mt-7 border-t border-rule-soft pt-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink-mute">
            Selected stack
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {selectedStack.map((tech, index) => (
              <motion.span
                key={tech}
                custom={0.18 + index * 0.02}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="border border-rule-soft bg-bg-surface px-3 py-1.5 text-sm text-ink-soft"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
