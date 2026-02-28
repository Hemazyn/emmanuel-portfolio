"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function Timeline({ children, className }) {
  return (
    <div className={cn("relative", className)}>
      <div className="from-primary-500 via-primary-500/50 absolute top-0 bottom-0 left-0 w-px transform bg-linear-to-b to-transparent md:left-1/2 md:-translate-x-1/2" />

      <div className="space-y-12">{children}</div>
    </div>
  )
}

export function TimelineItem({ children, index = 0, isLeft = true, isActive = false }) {
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: index * 0.1 }} className={cn("relative flex flex-col gap-8 md:flex-row md:gap-0", isLeft ? "md:flex-row" : "md:flex-row-reverse")}>
      <div className="absolute top-0 left-0 z-10 -translate-x-1/2 transform md:left-1/2">
        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }} className={cn("h-4 w-4 rounded-full border-4", isActive ? "bg-primary-500 border-primary-300 shadow-glow" : "bg-light dark:bg-dark border-primary-500")} />

        {isActive && <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="bg-primary-500 absolute inset-0 rounded-full" />}
      </div>

      <div className={cn("w-full pl-8 md:w-1/2 md:pl-0", isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left")}>{children}</div>

      <div className="hidden md:block md:w-1/2" />
    </motion.div>
  )
}

export function TimelineConnector({ delay = 0 }) {
  return <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay }} className="from-primary-500 to-primary-500/20 absolute left-0 h-full w-px origin-top transform bg-linear-to-b md:left-1/2 md:-translate-x-1/2" />
}
