"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import SkillBar from "./SkillBar"
import { cn } from "@/lib/utils"

export default function SkillCategoryCard({ title, icon, description, skills, index = 0, defaultExpanded = true }) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="glass border-light-300 dark:border-dark-400 hover:border-primary-500/30 overflow-hidden rounded-2xl border transition-all duration-300">
      <button onClick={() => setIsExpanded(!isExpanded)} className="hover:bg-light-200/50 dark:hover:bg-dark-300/50 flex w-full items-center justify-between p-6 text-left transition-colors">
        <div className="flex items-center gap-4">
          <div className="bg-primary-500/10 flex h-12 w-12 items-center justify-center rounded-xl text-2xl">{icon}</div>
          <div>
            <h3 className="text-dark dark:text-light font-heading text-lg font-bold">{title}</h3>
            <p className="text-dark-400 dark:text-light-400 text-sm">{description}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="bg-primary-500/10 text-primary-500 rounded-full px-3 py-1 text-xs font-medium">{skills.length} skills</span>
          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }} className="bg-light-200 dark:bg-dark-300 flex h-8 w-8 items-center justify-center rounded-lg">
            <ChevronDown className="text-dark-400 dark:text-light-400 h-4 w-4" />
          </motion.div>
        </div>
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <div className="border-light-300 dark:border-dark-400 space-y-4 border-t px-6 pt-4 pb-6">
              {skills.map((skill, skillIndex) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} icon={skill.icon} index={skillIndex} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
