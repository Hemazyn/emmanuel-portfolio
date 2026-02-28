"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function Marquee({ children, direction = "left", speed = 25, pauseOnHover = true, className }) {
  return (
    <div className={cn("flex overflow-hidden mask-[linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]", className)}>
      <motion.div
        className="flex gap-4 pr-4"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        {...(pauseOnHover && {
          whileHover: { animationPlayState: "paused" },
        })}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}

export function MarqueeItem({ children, className }) {
  return <div className={cn("bg-light-200 dark:bg-dark-300 border-light-300 dark:border-dark-400 hover:border-primary-500/50 flex items-center gap-2 rounded-xl border px-4 py-2 whitespace-nowrap transition-all duration-300", className)}>{children}</div>
}
