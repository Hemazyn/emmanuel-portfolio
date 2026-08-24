"use client"
import { motion } from "framer-motion"
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react"
import { fadeUp } from "@/lib/animations"
import { smoothScrollTo } from "@/lib/utils"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  Linkedin,
  Twitter,
  Mail,
}

interface FooterContentProps {
  socialLinks: { name: string; href: string; icon: string }[]
  email: string
  resumeUrl: string
  resumeFileName: string
  location: string
  navLinks: { name: string; href: string }[]
  currentYear: number
}

export default function FooterContent({
  socialLinks,
  email,
  resumeUrl,
  resumeFileName,
  location,
  navLinks,
  currentYear,
}: FooterContentProps) {
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    smoothScrollTo(href.replace("#", ""))
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <div className="relative z-10 mx-auto max-w-[1200px] px-7">
        <div className="py-14">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:gap-8">
            {/* Brand */}
            <motion.div custom={0.05} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="inline-block">
                <span className="flex items-center gap-2">
                  <span className="inline-block h-3 w-3 bg-accent" />
                  <span className="font-display text-2xl uppercase tracking-wide text-ink">
                    DevEmma
                  </span>
                </span>
              </a>

              <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
                Frontend engineer building clean, scalable interfaces for modern products,
                dashboards, and high-quality web experiences.
              </p>

              <a
                href={`mailto:${email}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors duration-200 hover:opacity-80"
              >
                {email}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>

            {/* Navigation */}
            <motion.div custom={0.1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink-mute">
                Navigation
              </p>

              <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-ink transition-colors duration-200 hover:text-accent"
                  >
                    {link.name}
                  </a>
                ))}

                <a
                  href={resumeUrl}
                  download={resumeFileName}
                  className="text-sm text-ink transition-colors duration-200 hover:text-accent"
                >
                  Resume
                </a>
              </div>
            </motion.div>

            {/* Contact / socials */}
            <motion.div custom={0.15} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink-mute">
                Presence
              </p>

              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-2 text-sm text-ink-soft">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>{location}</span>
                </div>

                <div className="flex items-center gap-2">
                  {socialLinks.map((social) => {
                    const Icon = iconMap[social.icon]
                    if (!Icon) return null

                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 w-9 items-center justify-center border border-rule-soft bg-bg-surface text-ink-mute transition-all duration-200 hover:border-accent hover:text-accent"
                        aria-label={social.name}
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom bar — hard edge */}
          <motion.div
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-rule-soft pt-6 sm:flex-row sm:items-center"
          >
            <p className="text-sm text-ink-mute">
              © {currentYear} Emmanuel Tofunmi. All rights reserved.
            </p>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-sm text-ink transition-colors duration-200 hover:text-accent"
            >
              Back to top
              <span className="flex h-8 w-8 items-center justify-center border border-rule-soft bg-bg-surface">
                <ArrowUpRight className="h-4 w-4 -rotate-45" />
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </>
  )
}
