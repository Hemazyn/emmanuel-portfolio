"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slideUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  },
  slideDown: {
    initial: { opacity: 0, y: -40 },
    animate: { opacity: 1, y: 0 },
  },
  slideLeft: {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
  },
  slideRight: {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
  },
}

export default function AnimatedSection({ children, animation = "slideUp", delay = 0, duration = 0.5, className, ...props }) {
  return (
    <motion.div initial={animations[animation].initial} whileInView={animations[animation].animate} viewport={{ once: true, margin: "-100px" }} transition={{ duration, delay, ease: "easeOut" }} className={cn(className)} {...props}>
      {children}
    </motion.div>
  )
}
