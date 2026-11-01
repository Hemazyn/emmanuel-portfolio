"use client"
import { motion } from "framer-motion"
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react"
import { FaDiscord } from "react-icons/fa6"
import { fadeUp } from "@/lib/animations"
import { smoothScrollTo } from "@/lib/utils"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  Linkedin,
  Twitter,
  FaDiscord,
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

export default function FooterContent({ socialLinks, email, resumeUrl, resumeFileName, location, navLinks, currentYear }: FooterContentProps) {
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    smoothScrollTo(href.replace("#", ""))
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <div className="relative z-10 mx-auto max-w-300 px-7">
        <div className="py-14">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:gap-8">
            {/* Brand */}
            <motion.div custom={0.05} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="inline-block">
                <span className="flex items-center gap-2">
                  <span className="bg-accent inline-block h-3 w-3" />
                  <span className="font-display text-ink text-2xl tracking-wide uppercase">DevEmma</span>
                </span>
              </a>

              <p className="text-ink-soft mt-4 max-w-sm text-sm leading-relaxed">Frontend engineer building clean, scalable interfaces for modern products, dashboards, and high-quality web experiences.</p>

              <a href={`mailto:${email}`} className="text-accent mt-5 inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 hover:opacity-80">
                {email}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>

            {/* Navigation */}
            <motion.div custom={0.1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="text-ink-mute font-mono text-[11px] tracking-[0.28em] uppercase">Navigation</p>

              <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-ink hover:text-accent text-sm transition-colors duration-200">
                    {link.name}
                  </a>
                ))}

                <a href={resumeUrl} download={resumeFileName} className="text-ink hover:text-accent text-sm transition-colors duration-200">
                  Resume
                </a>
              </div>
            </motion.div>

            {/* Contact / socials */}
            <motion.div custom={0.15} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="text-ink-mute font-mono text-[11px] tracking-[0.28em] uppercase">Presence</p>

              <div className="mt-4 space-y-3">
                <div className="text-ink-soft flex items-center gap-2 text-sm">
                  <MapPin className="text-accent h-4 w-4" />
                  <span>{location}</span>
                </div>

                <div className="flex items-center gap-2">
                  {socialLinks.map((social) => {
                    const Icon = iconMap[social.icon]
                    if (!Icon) return null

                    return (
                      <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="border-rule-soft bg-bg-surface text-ink-mute hover:border-accent hover:text-accent flex h-9 w-9 items-center justify-center border transition-all duration-200" aria-label={social.name}>
                        <Icon className="h-4 w-4" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom bar — hard edge */}
          <motion.div custom={0.2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="border-rule-soft mt-12 flex flex-col items-start justify-between gap-4 border-t pt-6 sm:flex-row sm:items-center">
            <p className="text-ink-mute text-sm">© {currentYear} Emmanuel Tofunmi. All rights reserved.</p>

            <button type="button" onClick={scrollToTop} className="text-ink hover:text-accent inline-flex items-center gap-2 text-sm transition-colors duration-200">
              Back to top
              <span className="border-rule-soft bg-bg-surface flex h-8 w-8 items-center justify-center border">
                <ArrowUpRight className="h-4 w-4 -rotate-45" />
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </>
  )
}
