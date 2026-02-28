"use client"
import { motion } from "framer-motion"

export default function Loading() {
  return (
    <div className="bg-light dark:bg-dark flex min-h-screen items-center justify-center">
      <div className="text-center">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="mb-8">
          <h1 className="font-heading text-4xl font-bold">
            <span className="text-dark dark:text-light">Dev</span>
            <span className="gradient-text">Emma</span>
          </h1>
        </motion.div>
        <div className="flex items-center justify-center gap-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.15,
              }}
              className="bg-primary-500 h-3 w-3 rounded-full"
            />
          ))}
        </div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-dark-400 dark:text-light-400 mt-4 text-sm">
          Loading amazing things...
        </motion.p>
      </div>
    </div>
  )
}
