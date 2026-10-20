"use client"
import { useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Home, RefreshCw, AlertTriangle } from "lucide-react"
import ThemeToggle from "@/components/layout/ThemeToggle"
import { fadeUp } from "@/lib/animations"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="bg-bg relative flex min-h-screen flex-col overflow-hidden">
      {/* Background — paper dot grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="dot-pattern absolute inset-0 opacity-[0.04] dark:opacity-[0.06]" />
        <div className="bg-accent/40 absolute top-1/3 left-0 hidden h-px w-32 lg:block" />
        <div className="bg-accent/40 absolute right-0 bottom-1/3 hidden h-px w-32 lg:block" />
      </div>

      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="relative z-10 flex flex-1 items-center justify-center px-6 py-20">
        <div className="mx-auto max-w-lg text-center">
          {/* Status — mono label */}
          <motion.div
            custom={0.05}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-8 inline-flex items-center gap-3"
          >
            <span className="bg-warn h-1.5 w-1.5" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-mute sm:text-[11px]">
              Unexpected error
            </span>
          </motion.div>

          {/* Alert — hard edge */}
          <motion.div
            custom={0.15}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mx-auto mb-8 flex h-20 w-20 items-center justify-center border border-warn/30 bg-warn/10"
          >
            <AlertTriangle className="h-9 w-9 text-warn" />
          </motion.div>

          <motion.div
            custom={0.3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <div className="ascii-rule mx-auto my-6 w-48" />

            <h1 className="font-display text-3xl uppercase tracking-wide text-ink sm:text-4xl">
              Something went wrong
            </h1>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-soft sm:text-base">
              An unexpected error occurred. These things happen — let&apos;s
              try to get you back on track.
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            custom={0.45}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <button type="button" onClick={() => reset()} className="btn btn-primary inline-flex items-center gap-2">
              <RefreshCw className="h-4 w-4" />
              Try again
            </button>

            <Link href="/" className="btn btn-secondary inline-flex items-center gap-2">
              <Home className="h-4 w-4" />
              Go home
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
