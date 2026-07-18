"use client"
import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
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

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projectsData
    return projectsData.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4)

  const handleViewDetails = (project: typeof projectsData[number]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <section id="projects" className="relative overflow-hidden py-20">
      <SectionBackground variant="dots" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 20% 20%, rgba(16,185,129,0.04), transparent 35%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 xl:px-0">
        <SectionHeader title={{ main: "Selected", highlight: "work" }} subtitle="Product interfaces, platforms, and websites I've built for clients and companies." />

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
                className={`shrink-0 rounded-full border px-3.5 py-1.5 text-xs transition-all duration-300 ${isActive ? "border-primary-500/20 bg-primary-500/10 text-primary-600 dark:text-primary-400" : "border-light-300 text-dark-400 hover:border-primary-500/20 hover:text-primary-600 dark:border-dark-400 dark:bg-dark-200/70 dark:text-light-400 dark:hover:text-primary-400 bg-white/70"}`}
              >
                {label}
              </button>
            )
          })}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => (
              <motion.article key={project.id} layout initial={{ opacity: 0, y: 14, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.98 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }} onClick={() => handleViewDetails(project)} className="group border-light-300 hover:border-primary-500/20 dark:border-dark-400 dark:bg-dark-200/75 cursor-pointer overflow-hidden rounded-2xl border bg-white/75 transition-all duration-300">
                <div className="border-light-300 bg-light-100 dark:border-dark-400 dark:bg-dark-300 relative aspect-video overflow-hidden border-b">
                  {project.images?.[0] ? (
                    <img src={project.images[0]} alt={project.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_40%)]">
                      <span className="text-dark-400/40 dark:text-light-400/35 font-mono text-[10px] tracking-[0.28em] uppercase">Preview</span>
                    </div>
                  )}

                  <div className="absolute top-3 left-3">
                    <span className="text-dark-400 dark:border-light/10 dark:bg-dark/70 dark:text-light-400 rounded-full border border-white/20 bg-white/80 px-2.5 py-1 text-[10px] font-medium backdrop-blur-sm">{getCategoryName(project.category)}</span>
                  </div>

                  <div className="absolute top-3 right-3 flex items-center gap-2 opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-dark-400 hover:text-primary-600 dark:border-light/10 dark:bg-dark/70 dark:text-light-400 dark:hover:text-primary-400 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/80 backdrop-blur-sm transition-colors" aria-label={`Visit ${project.title}`}>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-dark-400 hover:text-primary-600 dark:border-light/10 dark:bg-dark/70 dark:text-light-400 dark:hover:text-primary-400 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/80 backdrop-blur-sm transition-colors" aria-label={`${project.title} repository`}>
                        <Github className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="font-heading text-dark dark:text-light text-sm font-semibold sm:text-base">{project.title}</h3>

                      {project.subtitle && <p className="text-primary-600 dark:text-primary-400 mt-1 text-[11px] sm:text-xs">{project.subtitle}</p>}
                    </div>

                    {project.featured && <span className="text-primary-600/60 dark:text-primary-400/60 shrink-0 font-mono text-[9px] tracking-[0.2em] uppercase">Featured</span>}
                  </div>

                  <p className="text-dark-400 dark:text-light-400 mt-2 line-clamp-2 text-xs leading-relaxed sm:text-sm">{project.description}</p>

                  {!!project.technologies?.length && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="border-dark/6 bg-light-200/80 text-dark-400 dark:border-light/6 dark:bg-dark-300/80 dark:text-light-400 rounded-full border px-2 py-0.5 text-[10px]">
                          {tech}
                        </span>
                      ))}

                      {project.technologies.length > 3 && <span className="border-primary-500/15 bg-primary-500/8 text-primary-600 dark:text-primary-400 rounded-full border px-2 py-0.5 text-[10px]">+{project.technologies.length - 3}</span>}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-dark-400 dark:text-light-400 py-10 text-center text-sm">
            No projects in this category.
          </motion.p>
        )}

        {filteredProjects.length > 4 && (
          <div className="mt-8 text-center">
            <button type="button" onClick={() => setShowAll((prev) => !prev)} className="border-dark/10 text-dark hover:border-primary-500/30 hover:text-primary-600 dark:border-light/10 dark:text-light dark:hover:border-primary-500/30 dark:hover:text-primary-400 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300">
              {showAll ? "Show less" : `View all (${filteredProjects.length})`}
            </button>
          </div>
        )}
      </div>

      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  )
}
