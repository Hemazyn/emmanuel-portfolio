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

export default function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const isMounted = useIsMounted()

  if (!isMounted) {
    return <div className={cn("border-rule-soft bg-bg-surface h-10 w-28 animate-pulse border", className)} />
  }

  const themes = [
    { id: "system", icon: Monitor, label: "System" },
    { id: "light", icon: Sun, label: "Light" },
    { id: "dark", icon: Moon, label: "Dark" },
  ]

  return (
    <div className={cn("border-rule-soft bg-bg-surface flex items-center gap-1 border p-1", className)}>
      {themes.map(({ id, icon: Icon, label }) => {
        const isActive = theme === id
        return (
          <motion.button key={id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setTheme(id)} className={cn("relative flex h-8 w-8 cursor-pointer items-center justify-center transition-all duration-200", isActive ? "bg-accent text-white" : "text-ink-mute hover:bg-bg-surface-hover hover:text-ink")} aria-label={`Set theme to ${label}`} title={label}>
            <Icon className="h-4 w-4" />
          </motion.button>
        )
      })}
    </div>
  )
}
