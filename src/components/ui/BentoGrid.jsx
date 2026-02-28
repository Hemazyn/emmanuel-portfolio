"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function BentoGrid({ children, className }) {
  return <div className={cn("grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3", className)}>{children}</div>
}

export function BentoItem({ children, className, colSpan = 1, rowSpan = 1, index = 0 }) {
  const colSpanClasses = {
    1: "md:col-span-1",
    2: "md:col-span-2",
    3: "md:col-span-3 lg:col-span-3",
  }

  const rowSpanClasses = {
    1: "row-span-1",
    2: "row-span-2",
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className={cn("bento-item", colSpanClasses[colSpan], rowSpanClasses[rowSpan], className)}>
      {children}
    </motion.div>
  )
}
