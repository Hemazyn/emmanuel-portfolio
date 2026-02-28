"use client"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, MessageCircle, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const iconMap = { Github, Linkedin, Twitter, MessageCircle }

export default function SocialLinkCard({ name, url, icon, username, description, color, index = 0 }) {
  const Icon = iconMap[icon]

  return (
    <motion.a href={url} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.1 }} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} className={cn("group relative flex items-center gap-4 rounded-2xl p-4", "bg-light-200 dark:bg-dark-300", "border-light-300 dark:border-dark-400 border", "transition-all duration-300", color)}>
      <div className="bg-light-100 dark:bg-dark-200 flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 group-hover:bg-transparent">
        <Icon className="text-dark-400 dark:text-light-400 h-6 w-6 transition-colors duration-300 group-hover:text-current" />
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="text-dark dark:text-light font-bold transition-colors duration-300 group-hover:text-current">{name}</h4>
        <p className="text-dark-400 dark:text-light-400 truncate text-sm transition-colors duration-300 group-hover:text-current/80">{username}</p>
      </div>
      <ArrowUpRight className="text-dark-400 dark:text-light-400 h-5 w-5 transform opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-current group-hover:opacity-100" />
    </motion.a>
  )
}
