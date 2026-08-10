"use client"
import { useState } from "react"
import { MotionConfig, motion } from "framer-motion"
import { ThemeProvider } from "./ThemeProvider"
import Preloader from "@/components/ui/Preloader"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

        {!isLoading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}>
            {children}
          </motion.div>
        )}
      </ThemeProvider>
    </MotionConfig>
  )
}
