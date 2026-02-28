"use client"
import { useMemo } from "react"
import { motion } from "framer-motion"

export function GridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="grid-pattern absolute inset-0 opacity-30 dark:opacity-20" />
    </div>
  )
}

export function GradientOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -left-20 h-72 w-72 rounded-full md:h-96 md:w-96"
        style={{
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute -right-20 bottom-1/4 h-72 w-72 rounded-full md:h-96 md:w-96"
        style={{
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full md:h-125 md:w-125"
        style={{
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  )
}

export function FloatingShapes() {
  const shapes = useMemo(
    () => [
      { size: 60, x: "10%", y: "20%", delay: 0 },
      { size: 40, x: "85%", y: "15%", delay: 1 },
      { size: 80, x: "75%", y: "70%", delay: 2 },
      { size: 50, x: "15%", y: "75%", delay: 1.5 },
      { size: 30, x: "50%", y: "10%", delay: 0.5 },
      { size: 45, x: "90%", y: "50%", delay: 2.5 },
    ],
    []
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
          className="border-primary-500/20 absolute rounded-xl border"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, transparent 100%)",
          }}
        />
      ))}
    </div>
  )
}

export function ParticlesBackground() {
  const particles = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: (i * 17) % 100,
      y: (i * 23) % 100,
      size: (i % 4) + 1,
      duration: (i % 20) + 10,
      delay: i % 5,
    }))
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, -100],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
            delay: particle.delay,
          }}
          className="bg-primary-500/30 absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
        />
      ))}
    </div>
  )
}

export function ScrollIndicator() {
  return (
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2, duration: 0.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="group flex cursor-pointer flex-col items-center gap-2"
        onClick={() => {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }}
      >
        <span className="text-dark-400 dark:text-light-400 group-hover:text-primary-500 text-xs transition-colors">Scroll Down</span>
        <div className="border-dark-400 dark:border-light-400 group-hover:border-primary-500 flex h-10 w-6 items-start justify-center rounded-full border-2 p-1 transition-colors">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="bg-primary-500 h-3 w-1.5 rounded-full"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}
