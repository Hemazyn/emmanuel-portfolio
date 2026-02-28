"use client"
import { cn } from "@/lib/utils"

const variants = {
  primary: "bg-primary-500 hover:bg-primary-600 text-white shadow-lg hover:shadow-glow",
  secondary: "bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white",
  ghost: "bg-transparent hover:bg-primary-500/10 text-primary-500",
  outline: "bg-transparent border border-light-300 dark:border-dark-400 hover:border-primary-500 text-dark dark:text-light hover:text-primary-500",
}

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
}

export default function Button({ children, variant = "primary", size = "md", className, href, disabled, onClick, icon: Icon, iconPosition = "left", ...props }) {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-light dark:focus:ring-offset-dark disabled:opacity-50 disabled:cursor-not-allowed"

  const classes = cn(baseStyles, variants[variant], sizes[size], className)

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="h-5 w-5" />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="h-5 w-5" />}
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button className={classes} disabled={disabled} onClick={onClick} {...props}>
      {content}
    </button>
  )
}
