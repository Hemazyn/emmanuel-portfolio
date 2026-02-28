"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function CategoryFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {categories.map((category, index) => {
        const isActive = activeCategory === category.id

        return (
          <motion.button key={category.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.05 }} onClick={() => onCategoryChange(category.id)} className={cn("relative rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300", isActive ? "text-white" : "text-dark-400 dark:text-light-400 hover:text-dark dark:hover:text-light bg-light-200 dark:bg-dark-300 hover:bg-light-300 dark:hover:bg-dark-400")}>
            {isActive && <motion.span layoutId="activeCategory" className="bg-primary-500 absolute inset-0 rounded-xl" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
            <span className="relative z-10">{category.name}</span>
          </motion.button>
        )
      })}
    </div>
  )
}
