"use client"
import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Github, Calendar, Layers, CheckCircle2, ArrowRight } from "lucide-react"
import Button from "./Button"
import { cn } from "@/lib/utils"

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="bg-dark/80 fixed inset-0 z-50 backdrop-blur-sm" />

          <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} transition={{ type: "spring", damping: 25, stiffness: 300 }} className="glass-strong border-light-300 dark:border-dark-400 fixed inset-4 z-50 overflow-hidden rounded-2xl border shadow-2xl md:inset-10 lg:inset-20">
            <button onClick={onClose} className="bg-light-200 dark:bg-dark-300 hover:bg-light-300 dark:hover:bg-dark-400 absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-xl transition-colors" aria-label="Close modal">
              <X className="text-dark dark:text-light h-5 w-5" />
            </button>

            <div className="h-full overflow-y-auto">
              <div className="grid min-h-full lg:grid-cols-2">
                <div className="from-primary-500/20 to-primary-600/20 relative h-64 bg-linear-to-br lg:h-full">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none"
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Layers className="text-primary-500/50 mx-auto mb-4 h-20 w-20" />
                        <span className="text-primary-500/70 text-2xl font-bold">{project.title}</span>
                      </div>
                    </div>
                  )}

                  <div className="from-light dark:from-dark absolute inset-0 bg-linear-to-t via-transparent to-transparent lg:bg-linear-to-r" />

                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="dark:bg-dark-300/90 text-dark dark:text-light rounded-full bg-white/90 px-3 py-1 text-xs font-medium capitalize backdrop-blur-sm">{project.category.replace("-", " ")}</span>
                    <span className="bg-primary-500/90 flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      <Calendar className="h-3 w-3" />
                      {project.year}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col p-6 lg:p-10">
                  <h2 className="text-dark dark:text-light font-heading mb-4 text-3xl font-bold lg:text-4xl">{project.title}</h2>

                  <p className="text-dark-400 dark:text-light-400 mb-6 leading-relaxed">{project.fullDescription}</p>

                  <div className="mb-6">
                    <h3 className="text-dark dark:text-light mb-3 flex items-center gap-2 text-lg font-semibold">
                      <CheckCircle2 className="text-primary-500 h-5 w-5" />
                      Key Features
                    </h3>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {project.features.map((feature, index) => (
                        <motion.li key={index} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="text-dark-400 dark:text-light-400 flex items-center gap-2 text-sm">
                          <ArrowRight className="text-primary-500 h-4 w-4 shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-dark dark:text-light mb-3 flex items-center gap-2 text-lg font-semibold">
                      <Layers className="text-primary-500 h-5 w-5" />
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <motion.span key={index} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.05 }} className="bg-primary-500/10 text-primary-600 dark:text-primary-400 border-primary-500/20 rounded-lg border px-3 py-1.5 text-sm font-medium">
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3">
                    {project.liveUrl && (
                      <Button variant="primary" icon={ExternalLink} iconPosition="right" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        View Live Site
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button variant="outline" icon={Github} href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        Source Code
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
