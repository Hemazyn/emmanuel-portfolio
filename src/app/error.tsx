"use client"
import { useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Home, RefreshCw, AlertTriangle } from "lucide-react"
import ThemeToggle from "@/components/layout/ThemeToggle"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
//   useEffect(() => {
//     console.error(error)
//   }, [error])

  return (
    <div className="bg-light dark:bg-dark relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      <div className="grid-pattern absolute inset-0 opacity-30" />
      <div className="absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />
      <div className="absolute -right-32 bottom-1/3 h-96 w-96 rounded-full bg-red-500/5 blur-3xl" />

      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="relative z-10 mx-auto max-w-lg text-center">
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, type: "spring" }} className="mb-8">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10">
            <AlertTriangle className="h-12 w-12 text-red-500" />
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <h1 className="text-ink font-heading mb-4 text-3xl font-bold md:text-4xl">Something Went Wrong</h1>
          <p className="text-ink-soft mb-8">An unexpected error occurred. Don&apos;t worry, these things happen! Let&apos;s try to fix it.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-wrap justify-center gap-4">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => reset()} className="bg-primary-500 hover:bg-primary-600 flex items-center gap-2 rounded-xl px-6 py-3 font-medium text-white transition-all duration-300">
            <RefreshCw className="h-5 w-5" />
            Try Again
          </motion.button>

          <Link href="/">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-light-200 dark:bg-dark-300 border-light-300 dark:border-dark-400 text-ink hover:border-primary-500 flex items-center gap-2 rounded-xl border px-6 py-3 font-medium transition-all duration-300">
              <Home className="h-5 w-5" />
              Go Home
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
