"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Download } from "lucide-react"
import { cn, smoothScrollTo } from "@/lib/utils"
import ThemeToggle from "./ThemeToggle"
import { navLinks, personalInfo } from "@/data/navigation"
import useScrollspy from "@/hooks/useScrollspy"
import { overlayVariants, navItemVariants, EASE_OUT } from "@/lib/animations"

const currentYear = new Date().getFullYear()

const menuLineVariants = {
  closed: {
    rotate: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: EASE_OUT,
    },
  },
  open: (i: number) => {
    if (i === 0)
      return {
        rotate: 45,
        y: 6.5,
        transition: { duration: 0.35, ease: EASE_OUT },
      }
    if (i === 1)
      return {
        opacity: 0,
        transition: { duration: 0.2, ease: EASE_OUT },
      }
    return {
      rotate: -45,
      y: -6.5,
      transition: { duration: 0.35, ease: EASE_OUT },
    }
  },
}

const footerVariants = {
  closed: { opacity: 0, y: 20 },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.45,
      ease: EASE_OUT,
    },
  },
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const sectionIds = navLinks.map((link) => link.href.replace("#", ""))
  const activeSection = useScrollspy(sectionIds, 150)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    smoothScrollTo(href.replace("#", ""))
    setIsOpen(false)
  }

  return (
    <>
      {/* Header bar */}
      <motion.header initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }} className={cn("fixed inset-x-0 top-0 z-100 transition-all duration-300", isScrolled ? "glass py-3 shadow-lg" : "bg-transparent py-5")}>
        <div className="container mx-auto px-4 xl:px-0">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="group relative z-101" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <span className="font-heading text-2xl font-bold">
                <span className="text-dark dark:text-light transition-colors duration-300">Dev</span>
                <span className={cn("transition-colors duration-300", isOpen ? "text-primary-600 dark:text-primary-400" : "gradient-text")}>Emma</span>
              </span>
            </motion.a>

            {/* Right controls */}
            <div className="relative z-101 flex items-center gap-2 sm:gap-3">
              <ThemeToggle />

              <motion.a
                href={personalInfo.resumeUrl}
                download={personalInfo.resumeFileName}
                animate={{
                  opacity: isOpen ? 0 : 1,
                  scale: isOpen ? 0.8 : 1,
                }}
                transition={{ duration: 0.25 }}
                className={cn("glow-button hidden items-center gap-2 text-sm sm:flex", isOpen && "pointer-events-none")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download className="h-4 w-4" />
                Resume
              </motion.a>

              {/* Menu trigger */}
              <motion.button onClick={() => setIsOpen(!isOpen)} className={cn("cursor-pointer relative flex h-10 w-10 flex-col items-center justify-center gap-1.25 rounded-xl transition-colors duration-300", isOpen ? "bg-dark-300/50 dark:bg-light/10" : "border-light-300 bg-light-200 hover:border-primary-500/50 dark:border-dark-400 dark:bg-dark-300 border")} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} aria-label="Toggle navigation" aria-expanded={isOpen}>
                {[0, 1, 2].map((i) => (
                  <motion.span key={i} custom={i} variants={menuLineVariants} animate={isOpen ? "open" : "closed"} className={cn("bg-dark dark:bg-light block h-[1.5px] rounded-full transition-colors duration-300", i === 1 ? "w-4" : "w-5")} />
                ))}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Fullscreen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div key="nav-overlay" variants={overlayVariants} initial="closed" animate="open" exit="closed" className="bg-light-100/97 dark:bg-dark/97 fixed inset-0 z-99 backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0">
              <div
                className="absolute inset-0"
                style={{
                  background: "radial-gradient(ellipse at 70% 20%, rgba(16,185,129,0.06), transparent 50%)",
                }}
              />
              <div className="grid-pattern absolute inset-0 opacity-[0.03] dark:opacity-[0.04]" />
            </div>

            <div className="flex h-full flex-col justify-between pt-24 pb-10">
              <nav className="container mx-auto flex flex-1 flex-col justify-center px-4 xl:px-0">
                <ul className="space-y-1 sm:space-y-2">
                  {navLinks.map((link, i) => {
                    const isActive = activeSection === link.href.replace("#", "")
                    return (
                      <motion.li key={link.name} custom={i} variants={navItemVariants} initial="closed" animate="open" exit="exit">
                        <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="group flex items-center gap-4 py-3 sm:gap-6 sm:py-4">
                          <span className={cn("font-mono text-[11px] tracking-[0.2em] transition-colors duration-300", isActive ? "text-primary-600 dark:text-primary-400" : "text-dark-400/30 group-hover:text-primary-500/60 dark:text-light-400/30")}>{String(i + 1).padStart(2, "0")}</span>

                          <span className={cn("font-heading text-3xl font-semibold tracking-tight transition-all duration-300 sm:text-4xl lg:text-5xl", isActive ? "text-primary-600 dark:text-primary-400" : "text-dark/70 group-hover:text-dark dark:text-light/70 dark:group-hover:text-light group-hover:translate-x-2")}>{link.name}</span>

                          {isActive && (
                            <motion.span
                              layoutId="activeOverlayNav"
                              className="bg-primary-500 h-1.5 w-1.5 rounded-full"
                              transition={{
                                type: "spring",
                                bounce: 0.2,
                                duration: 0.5,
                              }}
                            />
                          )}

                          <span className={cn("hidden h-px flex-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 sm:block", isActive ? "bg-primary-500/30" : "bg-dark/10 dark:bg-light/10")} />
                        </a>
                      </motion.li>
                    )
                  })}
                </ul>
              </nav>

              <motion.div variants={footerVariants} initial="closed" animate="open" className="border-dark/10 dark:border-light/10 container mx-auto flex flex-col gap-6 border-t px-4 pt-6 sm:flex-row sm:items-center sm:justify-between xl:px-0">
                <motion.a href={personalInfo.resumeUrl} download={personalInfo.resumeFileName} className="glow-button flex w-fit items-center gap-2 text-sm sm:hidden" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Download className="h-4 w-4" />
                  Download Resume
                </motion.a>

                <div className="flex flex-col gap-1">
                  <span className="text-dark-400/40 dark:text-light-400/40 font-mono text-[10px] tracking-[0.35em] uppercase">Get in touch</span>
                  <a href={`mailto:${personalInfo.email}`} className="text-dark-400/70 hover:text-primary-600 dark:text-light-400/70 dark:hover:text-primary-400 text-sm transition-colors duration-300">
                    {personalInfo.email}
                  </a>
                </div>

                {personalInfo.socials && (
                  <div className="flex items-center gap-4">
                    {personalInfo.socials.map((social) => (
                      <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-dark-400/40 hover:text-primary-600 dark:text-light-400/40 dark:hover:text-primary-400 font-mono text-[10px] tracking-[0.25em] uppercase transition-colors duration-300">
                        {social.name}
                      </a>
                    ))}
                  </div>
                )}

                <span className="text-dark-400/25 dark:text-light-400/25 font-mono text-[10px] tracking-[0.3em]">©{currentYear}</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
