"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Download } from "lucide-react"
import { cn } from "@/lib/utils"
import ThemeToggle from "./ThemeToggle"
import { navLinks, personalInfo } from "@/data/navigation"
import useScrollspy from "@/hooks/useScrollspy"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const sectionIds = navLinks.map((link) => link.href.replace("#", ""))
  const activeSection = useScrollspy(sectionIds, 150)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

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
    setIsOpen(false)
  }

  return (
    <>
      <motion.header initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className={cn("fixed top-0 right-0 left-0 z-50 transition-all duration-300", isScrolled ? "glass py-3 shadow-lg" : "bg-transparent py-5")}>
        <nav className="section-container">
          <div className="flex items-center justify-between">
            <motion.a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="group relative" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <span className="font-heading text-2xl font-bold">
                <span className="text-dark dark:text-light">Dev</span>
                <span className="gradient-text">Emma</span>
              </span>
              <span className="bg-primary-500 absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full" />
            </motion.a>

            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.replace("#", "")
                return (
                  <motion.a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.05 }} className={cn("relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300", isActive ? "text-primary-500" : "text-dark-400 dark:text-light-400 hover:text-dark dark:hover:text-light")}>
                    {link.name}
                    {isActive && <motion.span layoutId="activeNav" className="bg-primary-500/10 absolute inset-0 -z-10 rounded-lg" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
                  </motion.a>
                )
              })}
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <ThemeToggle />
              <motion.a href={personalInfo.resumeUrl} download={personalInfo.resumeFileName} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="glow-button flex items-center gap-2 text-sm">
                <Download className="h-4 w-4" />
                Resume
              </motion.a>
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              <ThemeToggle />
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setIsOpen(!isOpen)} className={cn("relative flex h-10 w-10 items-center justify-center rounded-xl", "bg-light-200 dark:bg-dark-300", "border-light-300 dark:border-dark-400 border", "hover:border-primary-500 transition-all duration-300")} aria-label="Toggle menu">
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <X className="text-dark dark:text-light h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Menu className="text-dark dark:text-light h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="bg-dark/60 fixed inset-0 z-40 backdrop-blur-sm lg:hidden" onClick={() => setIsOpen(false)} />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="glass-strong fixed top-0 right-0 bottom-0 z-50 w-70 lg:hidden">
              <div className="flex h-full flex-col p-6">
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-heading text-xl font-bold">
                    <span className="text-dark dark:text-light">Dev</span>
                    <span className="gradient-text">Emma</span>
                  </span>
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setIsOpen(false)} className="bg-light-200 dark:bg-dark-300 border-light-300 dark:border-dark-400 flex h-10 w-10 items-center justify-center rounded-xl border">
                    <X className="text-dark dark:text-light h-5 w-5" />
                  </motion.button>
                </div>

                <nav className="flex-1">
                  <ul className="space-y-2">
                    {navLinks.map((link, index) => {
                      const isActive = activeSection === link.href.replace("#", "")
                      return (
                        <motion.li key={link.name} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: index * 0.05 }}>
                          <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className={cn("block rounded-xl px-4 py-3 font-medium transition-all duration-300", isActive ? "bg-primary-500/10 text-primary-500 border-primary-500/20 border" : "text-dark-400 dark:text-light-400 hover:bg-light-200 dark:hover:bg-dark-300 hover:text-dark dark:hover:text-light")}>
                            {link.name}
                          </a>
                        </motion.li>
                      )
                    })}
                  </ul>
                </nav>
                <motion.a href={personalInfo.resumeUrl} download={personalInfo.resumeFileName} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.4 }} className="glow-button mt-4 flex items-center justify-center gap-2">
                  <Download className="h-4 w-4" />
                  Download Resume
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
