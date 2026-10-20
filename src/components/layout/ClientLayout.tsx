"use client"
import { MotionConfig } from "framer-motion"
import { ThemeProvider } from "./ThemeProvider"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider>{children}</ThemeProvider>
    </MotionConfig>
  )
}
