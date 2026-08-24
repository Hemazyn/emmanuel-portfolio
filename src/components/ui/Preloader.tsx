"use client"
import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"

const headlineWords = "Building interfaces that perform at scale.".split(" ")
const sublineWords = "Preparing your experience...".split(" ")

const headlineDelays = headlineWords.map((_, i) => 0.1 + i * 0.06 + Math.random() * 0.1)
const sublineDelays = sublineWords.map((_, i) => 0.85 + i * 0.09 + Math.random() * 0.06)

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

const PRELOADER_KEY = "preloader-seen"

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState("enter")
  const shouldReduceMotion = useReducedMotion()

  const handleExit = useCallback(() => {
    setPhase("exit")
  }, [])

  useEffect(() => {
    let hasSeen = false
    try {
      hasSeen = typeof window !== "undefined" && sessionStorage.getItem(PRELOADER_KEY) === "1"
    } catch {
      // sessionStorage may be unavailable
    }

    if (hasSeen) {
      onComplete()
      return
    }

    try {
      sessionStorage.setItem(PRELOADER_KEY, "1")
    } catch {
      // Ignore storage failures
    }

    const minDuration = shouldReduceMotion ? 400 : 1600
    const timer = setTimeout(handleExit, minDuration)
    return () => clearTimeout(timer)
  }, [shouldReduceMotion, handleExit, onComplete])

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: "0.8em",
      filter: "blur(10px)",
    },
    visible: (delay: number) => ({
      opacity: 1,
      y: "0em",
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
    exit: (delay: number) => ({
      opacity: 0,
      y: "-0.4em",
      filter: "blur(8px)",
      transition: {
        duration: 0.45,
        delay: delay * 0.3,
        ease: [0.36, 0, 0.66, -0.56] as const,
      },
    }),
  }

  const cornerTransition = {
    duration: 0.8,
    delay: 0.05,
    ease: [0.22, 1, 0.36, 1] as const,
  }

  return (
    <AnimatePresence mode="wait" onExitComplete={onComplete}>
      {phase === "enter" && (
        <motion.div
          key="preloader"
          aria-hidden="true"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
          className="fixed inset-0 z-9999 flex items-center overflow-hidden bg-bg px-6"
        >
          {/* Background — paper dot grid */}
          <div className="pointer-events-none absolute inset-0">
            <div className="dot-pattern absolute inset-0 opacity-[0.04] dark:opacity-[0.06]" />
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(ellipse at 50% 40%, rgba(16,185,129,0.05), transparent 50%)",
              }}
            />
          </div>

          {/* Four corner accent lines */}
          {corners.map((corner) => (
            <div key={corner.id}>
              <motion.div
                initial={{ [corner.scaleDir.h]: 0 }}
                animate={{ [corner.scaleDir.h]: 1 }}
                transition={cornerTransition}
                className={`absolute h-px w-12 bg-accent/40 ${corner.horizontal}`}
              />
              <motion.div
                initial={{ [corner.scaleDir.v]: 0 }}
                animate={{ [corner.scaleDir.v]: 1 }}
                transition={cornerTransition}
                className={`absolute h-12 w-px bg-accent/40 ${corner.vertical}`}
              />
            </div>
          ))}

          {/* Main content */}
          <div className="relative mx-auto w-full max-w-4xl">
            <div className="max-w-3xl">
              {/* Status indicator — mono label */}
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.02,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="mb-6 flex items-center gap-3"
              >
                <motion.span
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="h-1.5 w-1.5 bg-accent"
                />
                <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-mute sm:text-[11px]">
                  Portfolio
                </span>
              </motion.div>

              {/* Headline — VT323 display font */}
              <div className="overflow-hidden">
                <div className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.08] uppercase tracking-wide text-ink">
                  {headlineWords.map((word, i) => (
                    <motion.span
                      key={`h-${i}`}
                      custom={headlineDelays[i]}
                      variants={wordVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="mr-[0.28em] inline-block will-change-transform"
                    >
                      {word === "scale." ? <span className="text-accent">{word}</span> : word}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Subline */}
              <div className="mt-5 overflow-hidden sm:mt-6">
                <p className="text-sm font-medium tracking-[0.04em] text-ink-soft sm:text-base">
                  {sublineWords.map((word, i) => (
                    <motion.span
                      key={`s-${i}`}
                      custom={sublineDelays[i]}
                      variants={wordVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="mr-[0.3em] inline-block will-change-transform"
                    >
                      {word === "yours..." ? <span className="text-accent">{word}</span> : word}
                    </motion.span>
                  ))}
                </p>
              </div>

              {/* ASCII Rule as progress indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-10 sm:mt-12"
              >
                <div className="relative h-px w-full max-w-sm overflow-hidden bg-ink/8">
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: [0.65, 0, 0.35, 1] as const,
                    }}
                    className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-accent to-transparent"
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
