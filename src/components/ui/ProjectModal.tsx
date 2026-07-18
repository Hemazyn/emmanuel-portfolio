"use client"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Github, ChevronLeft, ChevronRight, Layers } from "lucide-react"

interface ProjectData {
  id: number
  title: string
  slug: string
  category: string
  subtitle?: string
  description: string
  fullDescription?: string
  images?: string[]
  liveUrl?: string | null
  githubUrl?: string | null
  technologies?: string[]
  featured?: boolean
}

interface ProjectModalProps {
  project: ProjectData | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    setActiveImage(0)
  }, [project])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      window.addEventListener("keydown", handleEsc)
      document.body.style.overflow = "hidden"
    }
    return () => {
      window.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  if (!project) return null

  const images = project.images ?? []
  const technologies = project.technologies ?? []
  const description = project.fullDescription || project.description || ""
  const hasMultipleImages = images.length > 1

  const nextImage = () => setActiveImage((prev) => (prev + 1) % images.length)
  const prevImage = () => setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-200 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="bg-dark/60 dark:bg-dark/80 absolute inset-0 backdrop-blur-sm" onClick={onClose} />

          {/* Modal */}
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.97 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }} className="border-light-300 dark:border-dark-400 dark:bg-dark-200 relative z-10 max-h-[80vh] w-full max-w-2xl overflow-hidden rounded-[22px] border bg-white shadow-2xl">
            {/* Close */}
            <button type="button" onClick={onClose} className="text-dark-400 hover:text-dark dark:border-dark-400 dark:bg-dark-300/90 dark:text-light-400 dark:hover:text-light absolute top-3 right-3 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/80 backdrop-blur-sm transition-colors">
              <X className="h-4 w-4" />
            </button>

            <div className="max-h-[80vh] overflow-y-auto">
              {/* Image carousel */}
              <div className="border-light-300 bg-light-100 dark:border-dark-400 dark:bg-dark-300 relative aspect-16/10 overflow-hidden border-b">
                {images.length > 0 ? (
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImage}
                      src={images[activeImage]}
                      alt={`${project.title} — ${activeImage + 1}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="h-full w-full object-contain"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        e.currentTarget.style.display = "none"
                      }}
                    />
                  </AnimatePresence>
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <Layers className="text-primary-500/30 h-12 w-12" />
                  </div>
                )}

                {/* Carousel controls */}
                {hasMultipleImages && (
                  <>
                    <button type="button" onClick={prevImage} className="text-dark-400 hover:text-dark dark:border-light/10 dark:bg-dark/70 dark:text-light-400 dark:hover:text-light absolute top-1/2 left-3 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/80 backdrop-blur-sm transition-colors">
                      <ChevronLeft className="h-4 w-4" />
                    </button>

                    <button type="button" onClick={nextImage} className="text-dark-400 hover:text-dark dark:border-light/10 dark:bg-dark/70 dark:text-light-400 dark:hover:text-light absolute top-1/2 right-3 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/80 backdrop-blur-sm transition-colors">
                      <ChevronRight className="h-4 w-4" />
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
                      {images.map((_, i) => (
                        <button key={i} type="button" onClick={() => setActiveImage(i)} className={`h-1.5 rounded-full transition-all duration-300 ${i === activeImage ? "bg-primary-500 w-5" : "w-1.5 bg-white/50 hover:bg-white/70"}`} />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2 className="font-heading text-dark dark:text-light text-lg font-semibold sm:text-xl">{project.title}</h2>

                    {project.subtitle && <p className="text-primary-600 dark:text-primary-400 mt-1 text-sm">{project.subtitle}</p>}
                  </div>

                  {project.featured && <span className="bg-primary-500/10 text-primary-600 dark:text-primary-400 shrink-0 rounded-full px-2.5 py-1 text-[10px] font-medium">Featured</span>}
                </div>

                {/* Description */}
                {description && <p className="text-dark-400 dark:text-light-400 mt-4 text-sm leading-relaxed">{description}</p>}

                {/* Tech */}
                {technologies.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <span key={tech} className="border-primary-500/15 bg-primary-500/8 text-primary-600 dark:text-primary-400 rounded-full border px-2.5 py-1 text-[11px] font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Links */}
                {(project.liveUrl || project.githubUrl) && (
                  <div className="border-dark/6 dark:border-light/6 mt-5 flex flex-wrap gap-3 border-t pt-4">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-primary-600 hover:bg-primary-700 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white transition-all duration-300">
                        <ExternalLink className="h-4 w-4" />
                        Visit Site
                      </a>
                    )}

                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="border-dark/10 text-dark hover:border-primary-500/30 hover:text-primary-600 dark:border-light/10 dark:text-light dark:hover:text-primary-400 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300">
                        <Github className="h-4 w-4" />
                        Source
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}