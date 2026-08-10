"use client"
import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Github, ChevronLeft, ChevronRight, Layers, Lock } from "lucide-react"
import Image from "next/image"

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

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [activeImage, setActiveImage] = useState(0)
  const dialogRef = useRef<HTMLDivElement>(null)

  // Active image resets to the first slide whenever the modal opens with a new
  // project (the component is remounted with a key from the parent).

  useEffect(() => {
    if (!isOpen) return

    const previouslyFocused = document.activeElement as HTMLElement | null
    const dialog = dialogRef.current

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
        return
      }
      if (e.key !== "Tab" || !dialog) return

      // Trap focus inside the dialog.
      const focusables = Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR))
      if (focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    dialog?.focus()
    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
      previouslyFocused?.focus?.()
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

          {/* Dialog */}
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            tabIndex={-1}
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
            className="border-light-300 dark:border-dark-400 dark:bg-dark-200 relative z-10 max-h-[80vh] w-full max-w-2xl overflow-hidden rounded-[22px] border bg-white shadow-2xl outline-none"
          >
            {/* Close */}
            <button type="button" onClick={onClose} aria-label="Close project details" className="text-dark-400 hover:text-dark dark:border-dark-400 dark:bg-dark-300/90 dark:text-light-400 dark:hover:text-light absolute top-3 right-3 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/80 backdrop-blur-sm transition-colors">
              <X className="h-4 w-4" />
            </button>

            <div className="max-h-[80vh] overflow-y-auto">
              {/* Image carousel */}
              <div className="border-light-300 bg-light-100 dark:border-dark-400 dark:bg-dark-300 relative aspect-16/10 overflow-hidden border-b">
                {images.length > 0 ? (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeImage}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="relative h-full w-full"
                    >
                      <Image
                        src={images[activeImage]}
                        alt={`${project.title} — screenshot ${activeImage + 1}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 672px"
                      />
                    </motion.div>
                  </AnimatePresence>
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <Layers className="text-primary-500/30 h-12 w-12" />
                  </div>
                )}

                {/* Carousel controls */}
                {hasMultipleImages && (
                  <>
                    <button type="button" onClick={prevImage} aria-label="Previous image" className="text-dark-400 hover:text-dark dark:border-light/10 dark:bg-dark/70 dark:text-light-400 dark:hover:text-light absolute top-1/2 left-3 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/80 backdrop-blur-sm transition-colors">
                      <ChevronLeft className="h-4 w-4" />
                    </button>

                    <button type="button" onClick={nextImage} aria-label="Next image" className="text-dark-400 hover:text-dark dark:border-light/10 dark:bg-dark/70 dark:text-light-400 dark:hover:text-light absolute top-1/2 right-3 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/80 backdrop-blur-sm transition-colors">
                      <ChevronRight className="h-4 w-4" />
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
                      {images.map((_, i) => (
                        <button key={i} type="button" onClick={() => setActiveImage(i)} aria-label={`Go to image ${i + 1}`} aria-current={i === activeImage} className={`h-1.5 rounded-full transition-all duration-300 ${i === activeImage ? "bg-primary-500 w-5" : "w-1.5 bg-white/50 hover:bg-white/70"}`} />
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
                    <h2 id="project-modal-title" className="font-heading text-dark dark:text-light text-lg font-semibold sm:text-xl">{project.title}</h2>

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

                    {!project.githubUrl && (
                      <p className="text-dark-400/70 dark:text-light-400/60 flex items-center gap-1.5 text-[11px]">
                        <Lock aria-hidden="true" className="h-3 w-3 shrink-0" />
                        Company project — source code not public
                      </p>
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
