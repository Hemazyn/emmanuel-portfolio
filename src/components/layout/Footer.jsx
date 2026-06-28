"use client"
import { motion } from "framer-motion"
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react"
import { navLinks, socialLinks, personalInfo } from "@/data/navigation"

const iconMap = {
  Github,
  Linkedin,
  Twitter,
  Mail,
}

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 16,
    filter: "blur(8px)",
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)

    if (element) {
      const offset = 80
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-light-100 dark:bg-dark-100 border-light-300 dark:border-dark-400 relative overflow-hidden border-t">
      <div className="pointer-events-none absolute inset-0">
        <div className="grid-pattern absolute inset-0 opacity-[0.03] dark:opacity-[0.06]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 xl:px-0">
        <div className="py-14">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:gap-8">
            {/* Brand */}
            <motion.div custom={0.05} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="inline-block">
                <span className="font-heading text-2xl font-bold">
                  <span className="text-dark dark:text-light">Dev</span>
                  <span className="gradient-text">Emma</span>
                </span>
              </a>

              <p className="text-dark-400 dark:text-light-400 mt-4 max-w-sm text-sm leading-relaxed">Frontend engineer building clean, scalable interfaces for modern products, dashboards, and high-quality web experiences.</p>

              <a href={`mailto:${personalInfo.email}`} className="text-primary-600 dark:text-primary-400 mt-5 inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300 hover:opacity-80">
                {personalInfo.email}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>

            {/* Navigation */}
            <motion.div custom={0.1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="text-dark-400 dark:text-light-400 font-mono text-[11px] tracking-[0.28em] uppercase">Navigation</p>

              <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-dark dark:text-light hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors duration-300">
                    {link.name}
                  </a>
                ))}

                <a href={personalInfo.resumeUrl} download={personalInfo.resumeFileName} className="text-dark dark:text-light hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors duration-300">
                  Resume
                </a>
              </div>
            </motion.div>

            {/* Contact / socials */}
            <motion.div custom={0.15} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="text-dark-400 dark:text-light-400 font-mono text-[11px] tracking-[0.28em] uppercase">Presence</p>

              <div className="mt-4 space-y-3">
                <div className="text-dark-400 dark:text-light-400 flex items-center gap-2 text-sm">
                  <MapPin className="text-primary-500 h-4 w-4" />
                  <span>{personalInfo.location}</span>
                </div>

                <div className="flex items-center gap-2">
                  {socialLinks.map((social) => {
                    const Icon = iconMap[social.icon]
                    if (!Icon) return null

                    return (
                      <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="border-light-300 text-dark-400 hover:border-primary-500/25 hover:text-primary-600 dark:border-dark-400 dark:bg-dark-200/70 dark:text-light-400 dark:hover:text-primary-400 flex h-9 w-9 items-center justify-center rounded-xl border bg-white/70 transition-all duration-300" aria-label={social.name}>
                        <Icon className="h-4 w-4" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <motion.div custom={0.2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="border-light-300 dark:border-dark-400 mt-12 flex flex-col items-start justify-between gap-4 border-t pt-6 sm:flex-row sm:items-center">
            <p className="text-dark-400 dark:text-light-400 text-sm">© {currentYear} Emmanuel Tofunmi. Designed and built with care.</p>

            <button type="button" onClick={scrollToTop} className="text-dark dark:text-light hover:text-primary-600 dark:hover:text-primary-400 inline-flex items-center gap-2 text-sm transition-colors duration-300">
              Back to top
              <span className="border-light-300 dark:border-dark-400 dark:bg-dark-200/70 flex h-8 w-8 items-center justify-center rounded-lg border bg-white/70">
                <ArrowUpRight className="h-4 w-4 -rotate-45" />
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
