"use client"
import { cn } from "@/lib/utils"

export default function Card({ children, className, hover = true, gradient = false, ...props }) {
  return (
    <div className={cn("glass rounded-2xl p-6 transition-all duration-300", hover && "hover:shadow-glow hover:border-primary-500/50 hover:scale-[1.02]", gradient && "gradient-border", className)} {...props}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className }) {
  return <div className={cn("mb-4", className)}>{children}</div>
}

export function CardTitle({ children, className }) {
  return <h3 className={cn("text-dark dark:text-light font-heading text-xl font-bold", className)}>{children}</h3>
}

export function CardDescription({ children, className }) {
  return <p className={cn("text-dark-400 dark:text-light-400 mt-1", className)}>{children}</p>
}

export function CardContent({ children, className }) {
  return <div className={cn("", className)}>{children}</div>
}

export function CardFooter({ children, className }) {
  return <div className={cn("border-light-300 dark:border-dark-400 mt-4 border-t pt-4", className)}>{children}</div>
}
