"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Home, ArrowLeft, Compass, Search, FileQuestion } from "lucide-react"
import ThemeToggle from "@/components/layout/ThemeToggle"
import { fadeUp } from "@/lib/animations"

const quickLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Projects", href: "/#projects", icon: Compass },
  { name: "Contact", href: "/#contact", icon: Search },
]

export default function NotFound() {
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
        <div className="mx-auto max-w-2xl text-center">
          {/* Status — mono label */}
          <motion.div
            custom={0.05}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-8 inline-flex items-center gap-3"
          >
            <span className="h-1.5 w-1.5 bg-accent" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-mute sm:text-[11px]">
              Error 404 — Page not found
            </span>
          </motion.div>

          {/* Display number */}
          <motion.div
            custom={0.15}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="relative inline-block"
          >
            <h1 className="font-display text-[clamp(5rem,18vw,10rem)] leading-none tracking-wide text-ink">
              4<span className="text-accent">0</span>4
            </h1>
            <div className="border-accent-tint-strong bg-accent-tint absolute -top-3 -right-6 flex h-12 w-12 items-center justify-center border md:-right-10 md:h-16 md:w-16">
              <FileQuestion className="h-6 w-6 text-accent md:h-8 md:w-8" />
            </div>
          </motion.div>

          <motion.div
            custom={0.3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <div className="ascii-rule mx-auto my-6 w-48" />

            <h2 className="font-display text-2xl uppercase tracking-wide text-ink sm:text-3xl">
              This route doesn&apos;t exist
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-soft sm:text-base">
              The page you&apos;re looking for was moved, renamed, or never
              shipped. Let&apos;s get you back to something that works.
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
            <Link href="/" className="btn btn-primary inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>

            {quickLinks.slice(1).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="btn btn-secondary inline-flex items-center gap-2"
              >
                <link.icon className="h-4 w-4" />
                {link.name}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="relative z-10 pb-8 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-ink-mute/50"
      >
        Lost? Try refreshing or head back home
      </motion.p>
    </div>
  )
}
