"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function TechBadge({ name, icon, level, index = 0, showLevel = false }) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.05 }} whileHover={{ scale: 1.05, y: -2 }} className={cn("group relative flex items-center gap-2 rounded-xl px-4 py-2", "bg-light-200 dark:bg-dark-300", "border-light-300 dark:border-dark-400 border", "hover:border-primary-500 hover:shadow-glow", "cursor-default transition-all duration-300")}>
      <span className="text-lg">{icon}</span>
      <span className="text-dark dark:text-light text-sm font-medium">{name}</span>

      {showLevel && <div className="bg-dark dark:bg-light text-light dark:text-dark absolute -top-8 left-1/2 -translate-x-1/2 rounded-lg px-2 py-1 text-xs font-medium whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100">{level}% Proficiency</div>}
    </motion.div>
  )
}

export function TechProgress({ name, icon, level, index = 0 }) {
  return (
    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg">{icon}</span>
          <span className="text-dark dark:text-light text-sm font-medium">{name}</span>
        </div>
        <span className="text-primary-500 text-sm font-semibold">{level}%</span>
      </div>

      <div className="bg-light-300 dark:bg-dark-400 h-2 overflow-hidden rounded-full">
        <motion.div initial={{ width: 0 }} whileInView={{ width: `${level}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }} className="from-primary-500 to-primary-400 h-full rounded-full bg-linear-to-r" />
      </div>
    </motion.div>
  )
}
