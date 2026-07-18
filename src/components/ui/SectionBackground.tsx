import { cn } from "@/lib/utils"

interface SectionBackgroundProps {
  variant?: "grid" | "dots"
  className?: string
}

export default function SectionBackground({ variant = "grid", className }: SectionBackgroundProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0", className)}>
      <div
        className={cn(
          "absolute inset-0",
          variant === "grid"
            ? "grid-pattern opacity-[0.03] dark:opacity-[0.06]"
            : "dot-pattern opacity-[0.08] dark:opacity-[0.05]"
        )}
      />
    </div>
  )
}
