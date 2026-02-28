"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowUpRight, Eye, Calendar, Layers } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ProjectCard({ title, shortDescription, image, liveUrl, githubUrl, technologies, category, year, size = "medium", index = 0, onViewDetails }) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageError, setImageError] = useState(false)

  const sizeClasses = {
    large: "md:col-span-2 md:row-span-2",
    medium: "md:col-span-1 md:row-span-1",
    small: "md:col-span-1 md:row-span-1",
  }

  const imageHeightClasses = {
    large: "h-64 md:h-80",
    medium: "h-48 md:h-56",
    small: "h-40 md:h-48",
  }

  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={cn("group relative overflow-hidden rounded-2xl", "glass border-light-300 dark:border-dark-400 border", "hover:border-primary-500/50 hover:shadow-glow", "transition-all duration-500", sizeClasses[size])}>
      <div className={cn("relative overflow-hidden", imageHeightClasses[size])}>
        {imageError || !image ? (
          <div className="from-primary-500/20 to-primary-600/20 absolute inset-0 flex items-center justify-center bg-linear-to-br">
            <div className="text-center">
              <Layers className="text-primary-500/50 mx-auto mb-2 h-12 w-12" />
              <span className="text-primary-500/70 font-medium">{title}</span>
            </div>
          </div>
        ) : (
          <img src={image} alt={title} onError={() => setImageError(true)} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
        )}

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: isHovered ? 1 : 0 }} transition={{ duration: 0.3 }} className="from-dark via-dark/80 absolute inset-0 bg-linear-to-t to-transparent" />

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }} transition={{ duration: 0.3 }} className="absolute inset-0 flex items-center justify-center gap-3">
          {liveUrl && (
            <motion.a href={liveUrl} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="bg-primary-500 hover:shadow-glow flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg transition-all" aria-label="View Live Site">
              <ExternalLink className="h-5 w-5" />
            </motion.a>
          )}
          {githubUrl && (
            <motion.a href={githubUrl} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="bg-dark-300 hover:bg-dark-400 flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg transition-all" aria-label="View Source Code">
              <Github className="h-5 w-5" />
            </motion.a>
          )}
          <motion.button onClick={onViewDetails} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white shadow-lg backdrop-blur-sm transition-all hover:bg-white/30" aria-label="View Details">
            <Eye className="h-5 w-5" />
          </motion.button>
        </motion.div>

        <div className="absolute top-4 left-4">
          <span className="dark:bg-dark-300/90 text-dark dark:text-light rounded-full bg-white/90 px-3 py-1 text-xs font-medium capitalize backdrop-blur-sm">{category.replace("-", " ")}</span>
        </div>

        <div className="absolute top-4 right-4">
          <span className="bg-primary-500/90 flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            <Calendar className="h-3 w-3" />
            {year}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="text-dark dark:text-light font-heading group-hover:text-primary-500 text-lg font-bold transition-colors">{title}</h3>
          <motion.div animate={{ x: isHovered ? 0 : -5, opacity: isHovered ? 1 : 0 }} transition={{ duration: 0.3 }}>
            <ArrowUpRight className="text-primary-500 h-5 w-5" />
          </motion.div>
        </div>

        <p className="text-dark-400 dark:text-light-400 mb-4 line-clamp-2 text-sm">{shortDescription}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.slice(0, 3).map((tech, i) => (
            <span key={i} className="bg-primary-500/10 text-primary-600 dark:text-primary-400 border-primary-500/20 rounded-lg border px-2 py-1 text-xs font-medium">
              {tech}
            </span>
          ))}
          {technologies.length > 3 && <span className="bg-light-200 dark:bg-dark-300 text-dark-400 dark:text-light-400 rounded-lg px-2 py-1 text-xs font-medium">+{technologies.length - 3}</span>}
        </div>
      </div>
    </motion.div>
  )
}
