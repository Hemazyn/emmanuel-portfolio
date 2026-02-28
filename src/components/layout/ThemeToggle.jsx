"use client"
import { useTheme } from "next-themes"
import { useSyncExternalStore } from "react"
import { motion } from "framer-motion"
import { Sun, Moon, Monitor } from "lucide-react"
import { cn } from "@/lib/utils"

function useIsMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )
}

export default function ThemeToggle({ className }) {
  const { theme, setTheme } = useTheme()
  const isMounted = useIsMounted()

  if (!isMounted) {
    return <div className={cn("bg-light-200 dark:bg-dark-300 border-light-300 dark:border-dark-400 h-10 w-28 animate-pulse rounded-xl border", className)} />
  }

  const themes = [
    { id: "system", icon: Monitor, label: "System" },
    { id: "light", icon: Sun, label: "Light" },
    { id: "dark", icon: Moon, label: "Dark" },
  ]

  return (
    <div className={cn("flex items-center gap-1 rounded-xl p-1", "bg-light-200 dark:bg-dark-300", "border-light-300 dark:border-dark-400 border", className)}>
      {themes.map(({ id, icon: Icon, label }) => {
        const isActive = theme === id
        return (
          <motion.button key={id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setTheme(id)} className={cn("relative flex cursor-pointer h-8 w-8 items-center justify-center rounded-lg transition-all duration-300", isActive ? "bg-primary-500 shadow-glow text-white" : "text-dark-400 dark:text-light-400 hover:text-dark dark:hover:text-light hover:bg-light-300 dark:hover:bg-dark-400")} aria-label={`Set theme to ${label}`} title={label}>
            <Icon className="h-4 w-4" />
          </motion.button>
        )
      })}
    </div>
  )
}
