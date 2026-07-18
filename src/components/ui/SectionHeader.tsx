"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  badge?: string
  title: { main: string; highlight?: string }
  subtitle?: string
  align?: "left" | "center" | "right"
  className?: string
}

export default function SectionHeader({ badge, title, subtitle, align = "center", className }: SectionHeaderProps) {
  const alignClasses: Record<string, string> = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className={cn("mb-12 md:mb-16", alignClasses[align], className)}>
      {badge && (
        <motion.span initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.1 }} className="tag mb-4 inline-block">
          {badge}
        </motion.span>
      )}

      <h2 className="section-title mb-4">
        <span className="text-dark dark:text-light">{title.main} </span>
        {title.highlight && <span className="gradient-text">{title.highlight}</span>}
      </h2>

      {subtitle && <p className={cn("section-subtitle", align === "center" && "mx-auto")}>{subtitle}</p>}
    </motion.div>
  )
}
