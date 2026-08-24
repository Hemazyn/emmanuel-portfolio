"use client"
import { useMemo, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import SectionHeader from "@/components/ui/SectionHeader"
import SectionBackground from "@/components/ui/SectionBackground"
import ProjectModal from "@/components/ui/ProjectModal"
import { projectsData, projectCategories } from "@/data/projects"
import { fadeUp } from "@/lib/animations"

function getCategoryValue(category: string | { id?: string; value?: string; slug?: string }): string {
  if (typeof category === "string") return category
  return category.id || category.value || category.slug || "all"
}

function getCategoryLabel(category: string | { name?: string; label?: string }): string {
  if (typeof category === "string") return category === "all" ? "All" : category
  return category.name || category.label || "Category"
}

function getCategoryName(categoryId: string) {
  const match = projectCategories.find((cat) => getCategoryValue(cat) === categoryId)
  return match ? getCategoryLabel(match) : categoryId
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[number] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const closeTimer = useRef<number | null>(null)

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projectsData
    return projectsData.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6)

  const handleViewDetails = (project: typeof projectsData[number]) => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    closeTimer.current = window.setTimeout(() => {
      setSelectedProject(null)
      closeTimer.current = null
    }, 400)
  }

  return (
    <section id="projects" className="relative overflow-hidden border-t border-rule-soft py-20">
      <SectionBackground variant="dots" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 20% 20%, rgba(16,185,129,0.03), transparent 35%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-7">
        <SectionHeader
          title={{ main: "Selected", highlight: "work" }}
          subtitle="Product interfaces, platforms, and websites I've built for clients and companies."
        />

        {/* Category filters — hard edge */}
        <motion.div custom={0.05} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="scrollbar-hide mb-8 flex gap-2 overflow-x-auto pb-1">
          {projectCategories.map((category) => {
            const value = getCategoryValue(category)
            const label = getCategoryLabel(category)
            const isActive = activeCategory === value

            return (
              <button
                key={value}
                type="button"
                onClick={() => {
                  setActiveCategory(value)
                  setShowAll(false)
                }}
                className={`shrink-0 border px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? "border-accent bg-accent-tint text-accent"
                    : "border-rule-soft bg-bg-surface text-ink-soft hover:border-accent/40 hover:text-accent"
                }`}
              >
                {label}
              </button>
            )
          })}
        </motion.div>

        {/* Project grid — 3 columns on lg, more compact */}
        <motion.div layout className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 14, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.3, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] as const }}
                onClick={() => handleViewDetails(project)}
                className="group relative cursor-pointer border border-rule-soft bg-bg transition-all duration-200 hover:border-accent"
              >
                {/* Keyboard-accessible trigger */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleViewDetails(project)
                  }}
                  aria-label={`View details for ${project.title}`}
                  aria-haspopup="dialog"
                  className="absolute inset-0 z-10 cursor-pointer"
                />

                {/* Green accent left border */}
                <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-accent/0 transition-colors duration-200 group-hover:bg-accent" />

                {/* Image — shorter aspect ratio */}
                <div className="relative aspect-[16/8] overflow-hidden border-b border-rule-soft bg-bg-surface">
                  {project.images?.[0] ? (
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-mute/40">
                        Preview
                      </span>
                    </div>
                  )}

                  {/* Category badge — green accent */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="bg-accent px-2 py-0.5 font-mono text-[9px] font-medium uppercase tracking-wider text-white">
                      {getCategoryName(project.category)}
                    </span>
                  </div>

                  {/* Action buttons */}
                  <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1.5 opacity-100 transition-opacity duration-200 sm:opacity-0 sm:group-hover:opacity-100">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex h-7 w-7 items-center justify-center border border-rule-soft bg-bg/90 text-ink-mute transition-colors hover:border-accent hover:text-accent"
                        aria-label={`Visit ${project.title}`}
                      >
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex h-7 w-7 items-center justify-center border border-rule-soft bg-bg/90 text-ink-mute transition-colors hover:border-accent hover:text-accent"
                        aria-label={`${project.title} repository`}
                      >
                        <Github className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Card content — compact */}
                <div className="p-3.5">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h3 className="font-display text-base uppercase leading-tight tracking-wide text-ink">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p className="mt-0.5 text-[11px] leading-snug text-accent">
                          {project.subtitle}
                        </p>
                      )}
                    </div>

                    {project.featured && (
                      <span className="shrink-0 font-mono text-[8px] uppercase tracking-[0.18em] text-accent">
                        ★
                      </span>
                    )}
                  </div>

                  <p className="mt-2 line-clamp-2 text-[12px] leading-relaxed text-ink-mute">
                    {project.description}
                  </p>

                  {/* Tech tags — compact */}
                  {!!project.technologies?.length && (
                    <div className="mt-2.5 flex flex-wrap gap-1">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className="border border-rule-soft bg-bg-surface px-1.5 py-0.5 font-mono text-[9px] text-ink-mute"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="border border-accent-tint-strong bg-accent-tint px-1.5 py-0.5 font-mono text-[9px] text-accent">
                          +{project.technologies.length - 2}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-10 text-center text-sm text-ink-mute">
            No projects in this category.
          </motion.p>
        )}

        {filteredProjects.length > 6 && (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="btn btn-secondary inline-flex items-center gap-2"
            >
              {showAll ? "Show less" : `View all (${filteredProjects.length})`}
            </button>
          </div>
        )}
      </div>

      <ProjectModal key={selectedProject?.id ?? "closed"} project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  )
}
