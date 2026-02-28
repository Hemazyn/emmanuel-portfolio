"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Download, FileText, Check, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { personalInfo } from "@/data/navigation"

export default function ResumeButton({ variant = "primary", size = "md", showIcon = true, className }) {
  const [downloadState, setDownloadState] = useState("idle")

  const variants = {
    primary: "bg-primary-500 hover:bg-primary-600 text-white shadow-lg hover:shadow-glow",
    secondary: "bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white",
    outline: "bg-transparent border border-light-300 dark:border-dark-400 hover:border-primary-500 text-dark dark:text-light hover:text-primary-500",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm gap-2",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-3",
  }

  const handleDownload = async () => {
    setDownloadState("downloading")

    await new Promise((resolve) => setTimeout(resolve, 500))

    const link = document.createElement("a")
    link.href = personalInfo.resumeUrl
    link.download = personalInfo.resumeFileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    setDownloadState("success")

    setTimeout(() => {
      setDownloadState("idle")
    }, 2000)
  }

  return (
    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleDownload} disabled={downloadState === "downloading"} className={cn("inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300", "focus:ring-primary-500 focus:ring-2 focus:ring-offset-2 focus:outline-none", "disabled:cursor-not-allowed disabled:opacity-70", variants[variant], sizes[size], className)}>
      <AnimatePresence mode="wait">
        {downloadState === "idle" && showIcon && (
          <motion.span key="download" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} transition={{ duration: 0.2 }}>
            <Download className="h-5 w-5" />
          </motion.span>
        )}

        {downloadState === "downloading" && (
          <motion.span key="loading" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} transition={{ duration: 0.2 }}>
            <Loader2 className="h-5 w-5 animate-spin" />
          </motion.span>
        )}

        {downloadState === "success" && (
          <motion.span key="success" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} transition={{ duration: 0.2 }}>
            <Check className="h-5 w-5" />
          </motion.span>
        )}
      </AnimatePresence>

      <span>
        {downloadState === "idle" && "Download Resume"}
        {downloadState === "downloading" && "Downloading..."}
        {downloadState === "success" && "Downloaded!"}
      </span>
    </motion.button>
  )
}

export function FloatingResumeButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useState(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} transition={{ duration: 0.3 }} className="fixed right-6 bottom-6 z-40" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <motion.a href={personalInfo.resumeUrl} download={personalInfo.resumeFileName} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-primary-500 shadow-glow hover:bg-primary-600 flex items-center gap-2 rounded-xl px-4 py-3 text-white transition-all duration-300">
            <FileText className="h-5 w-5" />
            <AnimatePresence>
              {isHovered && (
                <motion.span initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: "auto" }} exit={{ opacity: 0, width: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden whitespace-nowrap">
                  Download Resume
                </motion.span>
              )}
            </AnimatePresence>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
