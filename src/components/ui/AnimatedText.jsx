"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function AnimatedLetters({ text, className, delay = 0 }) {
  const letters = Array.from(text)

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: delay,
      },
    },
  }

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  }

  return (
    <motion.span variants={container} initial="hidden" animate="visible" className={cn("inline-block", className)}>
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child} className="inline-block">
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  )
}

export function AnimatedWords({ text, className, delay = 0 }) {
  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: delay,
      },
    },
  }

  const child = {
    hidden: {
      opacity: 0,
      y: 30,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
      },
    },
  }

  return (
    <motion.span variants={container} initial="hidden" animate="visible" className={cn("inline-block", className)} style={{ perspective: "1000px" }}>
      {words.map((word, index) => (
        <motion.span key={index} variants={child} className="mr-[0.25em] inline-block" style={{ transformOrigin: "center bottom" }}>
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}

export function TypewriterText({ texts, className }) {
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0)
  const [currentText, setCurrentText] = React.useState("")
  const [isDeleting, setIsDeleting] = React.useState(false)

  React.useEffect(() => {
    const timeout = setTimeout(
      () => {
        const fullText = texts[currentTextIndex]

        if (!isDeleting) {
          setCurrentText(fullText.substring(0, currentText.length + 1))

          if (currentText === fullText) {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          setCurrentText(fullText.substring(0, currentText.length - 1))

          if (currentText === "") {
            setIsDeleting(false)
            setCurrentTextIndex((prev) => (prev + 1) % texts.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentTextIndex, texts])

  return (
    <span className={cn("", className)}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

import React from "react"
