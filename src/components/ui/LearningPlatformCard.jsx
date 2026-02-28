"use client"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

export default function LearningPlatformCard({ name, icon, url, description, index = 0 }) {
  return (
    <motion.a href={url} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.1 }} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.98 }} className="group bg-light-200 dark:bg-dark-300 border-light-300 dark:border-dark-400 hover:border-primary-500/50 hover:shadow-glow flex flex-col items-center rounded-2xl border p-6 transition-all duration-300">
      <div className="dark:bg-dark-200 mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-4xl shadow-lg transition-transform duration-300 group-hover:scale-110">{icon}</div>
      <h4 className="text-dark dark:text-light font-heading group-hover:text-primary-500 mb-1 text-lg font-bold transition-colors">{name}</h4>
      <p className="text-dark-400 dark:text-light-400 mb-3 text-center text-xs">{description}</p>
      <div className="text-primary-500 flex items-center gap-1 text-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        Visit Profile
        <ExternalLink className="h-3 w-3" />
      </div>
    </motion.a>
  )
}
