"use client"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, MapPin, Phone, ArrowUpRight, Heart } from "lucide-react"
import { navLinks, socialLinks, personalInfo } from "@/data/navigation"

const iconMap = { Github, Linkedin, Twitter, Mail }

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-light-100 dark:bg-dark-100 border-light-300 dark:border-dark-400 relative border-t">
      <div className="grid-pattern absolute inset-0 opacity-50" />

      <div className="section-container relative">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="lg:col-span-1">
              <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="mb-4 inline-block">
                <span className="font-heading text-2xl font-bold">
                  <span className="text-dark dark:text-light">Dev</span>
                  <span className="gradient-text">Emma</span>
                </span>
              </a>
              <p className="text-dark-400 dark:text-light-400 mb-6 text-sm leading-relaxed">Results-driven Frontend Developer with 4+ years of experience building scalable web applications using React.js and Next.js.</p>

              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = iconMap[social.icon]
                  return (
                    <motion.a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.1 }} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }} className="bg-light-200 dark:bg-dark-300 border-light-300 dark:border-dark-400 hover:border-primary-500 hover:shadow-glow group flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300" aria-label={social.name}>
                      <Icon className="text-dark-400 dark:text-light-400 group-hover:text-primary-500 h-4 w-4 transition-colors" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <h3 className="text-dark dark:text-light font-heading mb-4 text-lg font-bold">Quick Links</h3>
              <ul className="space-y-3">
                {navLinks.slice(0, 5).map((link) => (
                  <li key={link.name}>
                    <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-dark-400 dark:text-light-400 hover:text-primary-500 group inline-flex items-center gap-1 text-sm transition-colors duration-300">
                      {link.name}
                      <ArrowUpRight className="h-3 w-3 translate-x-1 -translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <h3 className="text-dark dark:text-light font-heading mb-4 text-lg font-bold">Explore</h3>
              <ul className="space-y-3">
                {navLinks.slice(5).map((link) => (
                  <li key={link.name}>
                    <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-dark-400 dark:text-light-400 hover:text-primary-500 group inline-flex items-center gap-1 text-sm transition-colors duration-300">
                      {link.name}
                      <ArrowUpRight className="h-3 w-3 translate-x-1 -translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
                <li>
                  <a href={personalInfo.resumeUrl} download className="text-dark-400 dark:text-light-400 hover:text-primary-500 group inline-flex items-center gap-1 text-sm transition-colors duration-300">
                    Download Resume
                    <ArrowUpRight className="h-3 w-3 translate-x-1 -translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
              <h3 className="text-dark dark:text-light font-heading mb-4 text-lg font-bold">Contact</h3>
              <ul className="space-y-4">
                <li>
                  <a href={`mailto:${personalInfo.email}`} className="text-dark-400 dark:text-light-400 hover:text-primary-500 group flex items-start gap-3 text-sm transition-colors duration-300">
                    <Mail className="group-hover:text-primary-500 mt-0.5 h-4 w-4 transition-colors" />
                    <span>{personalInfo.email}</span>
                  </a>
                </li>
                <li>
                  <a href={`tel:${personalInfo.phone}`} className="text-dark-400 dark:text-light-400 hover:text-primary-500 group flex items-start gap-3 text-sm transition-colors duration-300">
                    <Phone className="group-hover:text-primary-500 mt-0.5 h-4 w-4 transition-colors" />
                    <span>{personalInfo.phone}</span>
                  </a>
                </li>
                <li className="text-dark-400 dark:text-light-400 flex items-start gap-3 text-sm">
                  <MapPin className="mt-0.5 h-4 w-4" />
                  <span>{personalInfo.location}</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="border-light-300 dark:border-dark-400 border-t py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-dark-400 dark:text-light-400 text-center text-sm md:text-left">
              © {currentYear} Emmanuel Tofunmi. Built with <Heart className="inline h-3 w-3 fill-red-500 text-red-500" /> and Next.js
            </motion.p>

            <motion.button initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} onClick={scrollToTop} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-dark-400 dark:text-light-400 hover:text-primary-500 group flex items-center gap-2 text-sm transition-colors duration-300">
              Back to Top
              <span className="bg-light-200 dark:bg-dark-300 border-light-300 dark:border-dark-400 group-hover:border-primary-500 group-hover:shadow-glow flex h-8 w-8 items-center justify-center rounded-lg border transition-all duration-300">
                <ArrowUpRight className="h-4 w-4 -rotate-45" />
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
