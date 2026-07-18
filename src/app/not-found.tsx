"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Home, ArrowLeft, Search, FileQuestion, Compass, RefreshCw } from "lucide-react"
import { ThemeProvider } from "@/components/layout/ThemeProvider"
import ThemeToggle from "@/components/layout/ThemeToggle"

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const quickLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Projects", href: "/#projects", icon: Compass },
    { name: "Contact", href: "/#contact", icon: Search },
  ]

  return (
    <div className="bg-light dark:bg-dark relative min-h-screen overflow-hidden">
      <div className="grid-pattern absolute inset-0 opacity-30" />
      <motion.div
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="absolute top-1/4 -left-20 h-96 w-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <motion.div
        animate={{
          x: -mousePosition.x,
          y: -mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="absolute -right-20 bottom-1/4 h-96 w-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, type: "spring" }} className="mb-8">
            <div className="relative inline-block">
              <motion.h1
                className="font-heading gradient-text text-[150px] leading-none font-bold md:text-[200px]"
                animate={{
                  textShadow: ["0 0 20px rgba(16, 185, 129, 0.3)", "0 0 40px rgba(16, 185, 129, 0.5)", "0 0 20px rgba(16, 185, 129, 0.3)"],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                404
              </motion.h1>
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 md:-top-8 md:-right-8"
              >
                <div className="bg-primary-500/10 border-primary-500/20 flex h-16 w-16 items-center justify-center rounded-2xl border md:h-20 md:w-20">
                  <FileQuestion className="text-primary-500 h-8 w-8 md:h-10 md:w-10" />
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <h2 className="text-dark dark:text-light font-heading mb-4 text-2xl font-bold md:text-3xl">Oops! Page Not Found</h2>
            <p className="text-dark-400 dark:text-light-400 mx-auto mb-8 max-w-md">The page you&apos;re looking for seems to have wandered off into the digital void. Don&apos;t worry, let&apos;s get you back on track!</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="mb-8 flex flex-wrap justify-center gap-4">
            {quickLinks.map((link, index) => (
              <motion.div key={link.name} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}>
                <Link href={link.href} className="bg-light-200 dark:bg-dark-300 border-light-300 dark:border-dark-400 hover:border-primary-500 hover:shadow-glow text-dark dark:text-light flex items-center gap-2 rounded-xl border px-5 py-3 font-medium transition-all duration-300 hover:scale-105">
                  <link.icon className="text-primary-500 h-5 w-5" />
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
            <Link href="/">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="from-primary-600 to-primary-500 shadow-glow hover:shadow-glow-lg inline-flex items-center gap-2 rounded-xl bg-linear-to-r px-8 py-4 font-medium text-white transition-all duration-300">
                <ArrowLeft className="h-5 w-5" />
                Back to Home
              </motion.button>
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }} className="mt-12">
            <p className="text-dark-400 dark:text-light-400 flex items-center justify-center gap-2 text-sm">
              <RefreshCw className="h-4 w-4" />
              Lost? Try refreshing or head back home
            </p>
          </motion.div>
          <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -5, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="bg-primary-500 h-2 w-2 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-64 w-64 opacity-10">
        <svg viewBox="0 0 200 200" className="text-primary-500 h-full w-full">
          <path fill="currentColor" d="M0,200 L0,100 Q0,0 100,0 L200,0 L200,200 Z" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 h-64 w-64 rotate-180 opacity-10">
        <svg viewBox="0 0 200 200" className="text-primary-500 h-full w-full">
          <path fill="currentColor" d="M0,200 L0,100 Q0,0 100,0 L200,0 L200,200 Z" />
        </svg>
      </div>
    </div>
  )
}
