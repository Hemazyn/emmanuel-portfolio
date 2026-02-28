"use client"
import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Rocket } from "lucide-react"
import SectionHeader from "@/components/ui/SectionHeader"
import ProjectCard from "@/components/ui/ProjectCard"
import ProjectModal from "@/components/ui/ProjectModal"
import CategoryFilter from "@/components/ui/CategoryFilter"
import Button from "@/components/ui/Button"
import { projectsData, projectCategories, projectStats } from "@/data/projects"

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showAll, setShowAll] = useState(false)

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") {
      return projectsData
    }
    return projectsData.filter((project) => project.category === activeCategory)
  }, [activeCategory])

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6)

  const handleViewDetails = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="dot-pattern absolute inset-0 opacity-30" />
      <div className="bg-primary-500/10 absolute top-1/4 -right-32 h-96 w-96 rounded-full blur-3xl" />
      <div className="bg-primary-500/5 absolute bottom-1/4 -left-32 h-96 w-96 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <SectionHeader badge="Portfolio" title={{ main: "Featured", highlight: "Projects" }} subtitle="A showcase of my recent work and creative projects that demonstrate my skills and expertise" />

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {projectStats.map((stat, index) => (
            <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.1 }} className="glass border-light-300 dark:border-dark-400 rounded-xl border p-4 text-center">
              <p className="gradient-text mb-1 text-2xl font-bold md:text-3xl">{stat.value}</p>
              <p className="text-dark-400 dark:text-light-400 text-xs md:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-10">
          <CategoryFilter
            categories={projectCategories}
            activeCategory={activeCategory}
            onCategoryChange={(category) => {
              setActiveCategory(category)
              setShowAll(false)
            }}
          />
        </motion.div>

        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div key={project.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }} className={project.size === "large" ? "md:col-span-2" : ""}>
                <ProjectCard {...project} index={index} onViewDetails={() => handleViewDetails(project)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-12 text-center">
            <Sparkles className="text-primary-500/50 mx-auto mb-4 h-12 w-12" />
            <p className="text-dark-400 dark:text-light-400">No projects found in this category.</p>
          </motion.div>
        )}

        {filteredProjects.length > 6 && !showAll && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-10 text-center">
            <Button variant="secondary" onClick={() => setShowAll(true)} icon={Rocket}>
              Show All Projects ({filteredProjects.length})
            </Button>
          </motion.div>
        )}

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-16 text-center">
          <div className="glass border-light-300 dark:border-dark-400 inline-flex flex-col items-center gap-4 rounded-2xl border px-6 py-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <Sparkles className="text-primary-500 h-5 w-5" />
              <p className="text-dark dark:text-light font-medium">Interested in working together?</p>
            </div>
            <Button
              variant="primary"
              size="sm"
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Let&apos;s Talk
            </Button>
          </div>
        </motion.div>
      </div>
      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  )
}
