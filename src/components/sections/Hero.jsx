"use client"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { personalInfo } from "@/data/navigation"

const revealVariants = {
  hidden: {
    y: "100%",
  },
  visible: (delay) => ({
    y: "0%",
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(8px)",
  },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export default function Hero() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.6], [0, -60])
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.97])

  const handleScroll = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  return (
    <section ref={sectionRef} id="home" className="relative flex min-h-[max(600px,30vh)] items-center overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="grid-pattern absolute inset-0 opacity-[0.03] dark:opacity-[0.06]" />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 30% 50%, rgba(16,185,129,0.08), transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(16,185,129,0.04), transparent 40%)",
          }}
        />

        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }} className="from-primary-500/40 absolute top-1/3 left-0 hidden h-px w-32 origin-left bg-linear-to-r to-transparent lg:block" />
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }} className="from-primary-500/40 absolute right-0 bottom-1/3 hidden h-px w-32 origin-right bg-linear-to-l to-transparent lg:block" />
      </div>

      {/* Content */}
      <motion.div style={{ opacity, y, scale }} className="relative z-10 container mx-auto px-4 py-32 sm:py-36 lg:py-40 xl:px-0">
        <div className="mx-auto max-w-5xl">
          {/* Status */}
          <motion.div custom={0.1} variants={fadeUp} initial="hidden" animate="visible" className="mb-6 flex items-center gap-3 sm:mb-8">
            <span className="relative flex h-2 w-2">
              <span className="bg-primary-400 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
              <span className="bg-primary-500 relative inline-flex h-2 w-2 rounded-full" />
            </span>
            <span className="text-dark-400 dark:text-light-400 font-mono text-[10px] tracking-[0.3em] uppercase sm:text-[11px]">Available for work</span>
          </motion.div>

          {/* Headline */}
          <div className="mb-4 space-y-0.5 sm:mb-6 sm:space-y-1">
            <div className="overflow-hidden">
              <motion.h1 custom={0.2} variants={revealVariants} initial="hidden" animate="visible" className="font-heading text-dark dark:text-light text-[clamp(2rem,6vw,5.5rem)] leading-[1.05] font-semibold tracking-tight">
                I&apos;m Emmanuel
              </motion.h1>
            </div>

            <div className="overflow-hidden">
              <motion.h2 custom={0.35} variants={revealVariants} initial="hidden" animate="visible" className="font-heading text-[clamp(2rem,6vw,5.5rem)] leading-[1.05] font-semibold tracking-tight">
                <span className="text-primary-600 dark:text-primary-400">Frontend Engineer</span>
                <span className="text-dark/30 dark:text-light/30"> for modern web products</span>
              </motion.h2>
            </div>
          </div>

          {/* Description */}
          <motion.p custom={0.55} variants={fadeUp} initial="hidden" animate="visible" className="text-dark-400 dark:text-light-400 mb-8 max-w-2xl text-sm leading-relaxed sm:text-base">
            I design and build product-grade interfaces for CRM systems, admin dashboards, high-end websites, and embedded widgets — focused on performance, usability, and polished user experience.
          </motion.p>

          {/* CTAs */}
          <motion.div custom={0.7} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="group bg-primary-600 hover:bg-primary-700 hover:shadow-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 sm:px-6 sm:py-3">
              Let&apos;s work together
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a href={personalInfo.resumeUrl} download={personalInfo.resumeFileName} className="border-dark/10 text-dark hover:border-primary-500/50 hover:text-primary-600 dark:border-light/10 dark:text-light dark:hover:border-primary-500/50 dark:hover:text-primary-400 inline-flex items-center gap-2 rounded-full border bg-transparent px-5 py-2.5 text-sm font-medium transition-all duration-300 sm:px-6 sm:py-3">
              <Download className="h-4 w-4" />
              Resume
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }} className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 sm:bottom-8">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-dark-400/40 dark:text-light-400/40 font-mono text-[9px] tracking-[0.35em] uppercase">Scroll</span>
          <div className="from-primary-500/60 h-6 w-px bg-linear-to-b to-transparent sm:h-8" />
        </motion.div>
      </motion.div>
    </section>
  )
}
