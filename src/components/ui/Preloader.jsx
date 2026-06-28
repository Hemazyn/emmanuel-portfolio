"use client"
import { useState, useEffect, useMemo, useCallback } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"

const headlineWords = "Every great product starts with a single interaction.".split(" ")
const sublineWords = "Preparing yours...".split(" ")

function useRandomDelays(words, base, step, jitter) {
  return useMemo(() => words.map((_, i) => base + i * step + Math.random() * jitter), [words.length])
}

const corners = [
  {
    id: "top-left",
    horizontal: "top-8 left-8 sm:top-12 sm:left-12 origin-left",
    vertical: "top-8 left-8 sm:top-12 sm:left-12 origin-top",
    scaleDir: { h: "scaleX", v: "scaleY" },
  },
  {
    id: "top-right",
    horizontal: "top-8 right-8 sm:top-12 sm:right-12 origin-right",
    vertical: "top-8 right-8 sm:top-12 sm:right-12 origin-top",
    scaleDir: { h: "scaleX", v: "scaleY" },
  },
  {
    id: "bottom-left",
    horizontal: "bottom-8 left-8 sm:bottom-12 sm:left-12 origin-left",
    vertical: "bottom-8 left-8 sm:bottom-12 sm:left-12 origin-bottom",
    scaleDir: { h: "scaleX", v: "scaleY" },
  },
  {
    id: "bottom-right",
    horizontal: "bottom-8 right-8 sm:bottom-12 sm:right-12 origin-right",
    vertical: "bottom-8 right-8 sm:bottom-12 sm:right-12 origin-bottom",
    scaleDir: { h: "scaleX", v: "scaleY" },
  },
]

export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState("enter")
  const shouldReduceMotion = useReducedMotion()

  const headlineDelays = useRandomDelays(headlineWords, 0.1, 0.06, 0.1)
  const sublineDelays = useRandomDelays(sublineWords, 0.85, 0.09, 0.06)

  const handleExit = useCallback(() => {
    setPhase("exit")
  }, [])

  useEffect(() => {
    const minDuration = shouldReduceMotion ? 800 : 2800
    const timer = setTimeout(handleExit, minDuration)
    return () => clearTimeout(timer)
  }, [shouldReduceMotion, handleExit])

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: "0.8em",
      filter: "blur(10px)",
    },
    visible: (delay) => ({
      opacity: 1,
      y: "0em",
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
    exit: (delay) => ({
      opacity: 0,
      y: "-0.4em",
      filter: "blur(8px)",
      transition: {
        duration: 0.45,
        delay: delay * 0.3,
        ease: [0.36, 0, 0.66, -0.56],
      },
    }),
  }

  const cornerTransition = {
    duration: 0.8,
    delay: 0.05,
    ease: [0.22, 1, 0.36, 1],
  }

  return (
    <AnimatePresence mode="wait" onExitComplete={onComplete}>
      {phase === "enter" && (
        <motion.div key="preloader" exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="bg-light dark:bg-dark fixed inset-0 z-9999 flex items-center overflow-hidden px-6">
          {/* Background atmosphere */}
          <div className="pointer-events-none absolute inset-0">
            <div className="grid-pattern absolute inset-0 opacity-[0.03] dark:opacity-[0.06]" />
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(ellipse at 50% 40%, rgba(16,185,129,0.07), transparent 50%)",
              }}
            />
          </div>

          {/* Four corner accents */}
          {corners.map((corner) => (
            <div key={corner.id}>
              {/* Horizontal line */}
              <motion.div initial={{ [corner.scaleDir.h]: 0 }} animate={{ [corner.scaleDir.h]: 1 }} transition={cornerTransition} className={`bg-primary-500/40 absolute h-px w-12 ${corner.horizontal}`} />
              {/* Vertical line */}
              <motion.div initial={{ [corner.scaleDir.v]: 0 }} animate={{ [corner.scaleDir.v]: 1 }} transition={cornerTransition} className={`bg-primary-500/40 absolute h-12 w-px ${corner.vertical}`} />
            </div>
          ))}

          {/* Main content */}
          <div className="relative mx-auto w-full max-w-4xl">
            <div className="max-w-3xl">
              {/* Status indicator */}
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.02,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-6 flex items-center gap-3"
              >
                <motion.span
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: [0.4, 1, 0.4] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="bg-primary-500 h-1.5 w-1.5 rounded-full"
                />
                <span className="text-dark-400 dark:text-light-400 font-mono text-[10px] tracking-[0.35em] uppercase sm:text-[11px]">Portfolio</span>
              </motion.div>

              {/* Headline */}
              <div className="overflow-hidden">
                <h1 className="font-heading text-dark dark:text-light text-3xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                  {headlineWords.map((word, i) => (
                    <motion.span key={`h-${i}`} custom={headlineDelays[i]} variants={wordVariants} initial="hidden" animate="visible" exit="exit" className="mr-[0.28em] inline-block will-change-transform">
                      {word === "interaction." ? <span className="text-primary-600 dark:text-primary-400">{word}</span> : word}
                    </motion.span>
                  ))}
                </h1>
              </div>

              {/* Subline */}
              <div className="mt-5 overflow-hidden sm:mt-6">
                <p className="text-dark-400 dark:text-light-400 text-sm font-medium tracking-[0.04em] sm:text-base">
                  {sublineWords.map((word, i) => (
                    <motion.span key={`s-${i}`} custom={sublineDelays[i]} variants={wordVariants} initial="hidden" animate="visible" exit="exit" className="mr-[0.3em] inline-block will-change-transform">
                      {word === "yours..." ? <span className="text-primary-600 dark:text-primary-400">{word}</span> : word}
                    </motion.span>
                  ))}
                </p>
              </div>

              {/* Progress line */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }} className="mt-10 sm:mt-12">
                <div className="bg-dark/8 dark:bg-light/8 relative h-px w-full max-w-sm overflow-hidden">
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: [0.65, 0, 0.35, 1],
                    }}
                    className="via-primary-500 absolute top-0 left-0 h-full w-1/3 bg-linear-to-r from-transparent to-transparent"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
