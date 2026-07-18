"use client"
import { motion } from "framer-motion"
import { ArrowRight, Download, Mail, MapPin } from "lucide-react"
import { fadeUp } from "@/lib/animations"

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
      {/* Main card */}
      <motion.div custom={0.05} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="glass rounded-3xl p-6 sm:p-8">
        <p className="text-primary-600 dark:text-primary-400 font-mono text-[11px] tracking-[0.3em] uppercase">About me</p>

        <h3 className="font-heading text-dark dark:text-light mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">I build product interfaces that are clear, scalable, and easy to use.</h3>

        <div className="text-dark-400 dark:text-light-400 mt-5 space-y-4 text-sm leading-relaxed sm:text-base">
          <p>I&apos;m a frontend engineer focused on building polished user interfaces for modern digital products. My work covers CRM systems, admin dashboards, internal tools, high-end websites, and embedded widgets.</p>
          <p>I care about clean implementation, thoughtful motion, strong usability, and the details that make products feel reliable and well crafted.</p>
        </div>

        <div className="mt-7">
          <p className="text-dark-400 dark:text-light-400 font-mono text-[11px] tracking-[0.28em] uppercase">What I build</p>
          <div className="mt-3 flex flex-wrap gap-2.5">
            {serviceAreas.map((item, index) => (
              <motion.span key={item} custom={0.12 + index * 0.04} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="border-primary-500/15 bg-primary-500/8 text-primary-600 dark:text-primary-400 rounded-full border px-3 py-1.5 text-sm">
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
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="group bg-primary-600 hover:bg-primary-700 hover:shadow-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition-all duration-300"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a href={resumeUrl} download={resumeFileName} className="border-dark/10 text-dark hover:border-primary-500/40 hover:text-primary-600 dark:border-light/10 dark:text-light dark:hover:border-primary-500/40 dark:hover:text-primary-400 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300">
            <Download className="h-4 w-4" />
            Resume
          </a>
        </div>
      </motion.div>

      {/* Side card */}
      <motion.div custom={0.12} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="glass rounded-3xl p-6 sm:p-7">
        <p className="text-primary-600 dark:text-primary-400 font-mono text-[11px] tracking-[0.3em] uppercase">Snapshot</p>

        <div className="mt-5 space-y-4">
          <div className="border-dark/8 dark:border-light/8 flex items-start justify-between gap-4 border-b pb-4">
            <span className="text-dark-400 dark:text-light-400 text-sm">Focus</span>
            <span className="text-dark dark:text-light text-right text-sm font-medium">Product UI & Frontend Systems</span>
          </div>

          <div className="border-dark/8 dark:border-light/8 flex items-start justify-between gap-4 border-b pb-4">
            <span className="text-dark-400 dark:text-light-400 text-sm">Location</span>
            <span className="text-dark dark:text-light text-sm font-medium">{location}</span>
          </div>

          <a href={`mailto:${email}`} className="group text-dark-400 hover:text-primary-600 dark:text-light-400 dark:hover:text-primary-400 flex items-center gap-3 pt-1 text-sm transition-colors duration-300">
            <Mail className="h-4 w-4" />
            <span className="truncate">{email}</span>
          </a>

          <div className="text-dark-400 dark:text-light-400 flex items-center gap-3 text-sm">
            <MapPin className="text-primary-500 h-4 w-4" />
            <span>{location}</span>
          </div>
        </div>

        <div className="border-dark/8 dark:border-light/8 mt-7 border-t pt-6">
          <p className="text-dark-400 dark:text-light-400 font-mono text-[11px] tracking-[0.28em] uppercase">Selected stack</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {selectedStack.map((tech, index) => (
              <motion.span key={tech} custom={0.18 + index * 0.02} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="border-dark/10 bg-light-100 text-dark-400 dark:border-light/10 dark:bg-dark-200 dark:text-light-400 rounded-full border px-3 py-1.5 text-sm">
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
