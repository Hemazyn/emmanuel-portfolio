"use client"
import { useState } from "react"
import { ThemeProvider } from "./ThemeProvider"
import Preloader from "@/components/ui/Preloader"
import { motion } from "framer-motion"

export default function ClientLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <ThemeProvider>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
          {children}
        </motion.div>
      )}
    </ThemeProvider>
  )
}
