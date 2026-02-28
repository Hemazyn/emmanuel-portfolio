"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function SkillBar({ name, level, icon, index = 0, showPercentage = true }) {
  return (
    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="group">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg">{icon}</span>
          <span className="text-dark dark:text-light group-hover:text-primary-500 text-sm font-medium transition-colors">{name}</span>
        </div>
        {showPercentage && <span className="text-primary-500 text-sm font-semibold">{level}%</span>}
      </div>

      <div className="bg-light-300 dark:bg-dark-400 relative h-2.5 overflow-hidden rounded-full">
        <motion.div initial={{ width: 0 }} whileInView={{ width: `${level}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: index * 0.1 + 0.2, ease: "easeOut" }} className="bg-primary-500/20 absolute inset-y-0 left-0 rounded-full blur-sm" />
        <motion.div initial={{ width: 0 }} whileInView={{ width: `${level}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: index * 0.1 + 0.2, ease: "easeOut" }} className="from-primary-600 via-primary-500 to-primary-400 relative h-full rounded-full bg-linear-to-r">
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-transparent via-white/20 to-transparent" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export function SkillBarCompact({ name, level, icon, index = 0 }) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.05 }} whileHover={{ scale: 1.02 }} className="bg-light-200 dark:bg-dark-300 border-light-300 dark:border-dark-400 hover:border-primary-500/50 hover:shadow-glow rounded-xl border p-4 transition-all duration-300">
      <div className="mb-3 flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        <div className="min-w-0 flex-1">
          <h4 className="text-dark dark:text-light truncate text-sm font-medium">{name}</h4>
        </div>
        <span className="text-primary-500 bg-primary-500/10 rounded-full px-2 py-1 text-xs font-bold">{level}%</span>
      </div>

      <div className="bg-light-300 dark:bg-dark-400 h-1.5 overflow-hidden rounded-full">
        <motion.div initial={{ width: 0 }} whileInView={{ width: `${level}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.05 + 0.2, ease: "easeOut" }} className="from-primary-500 to-primary-400 h-full rounded-full bg-linear-to-r" />
      </div>
    </motion.div>
  )
}
