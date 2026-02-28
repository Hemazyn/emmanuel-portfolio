"use client"
import { motion } from "framer-motion"
import { Mail, Phone, MessageCircle, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const iconMap = { Mail, Phone, MessageCircle }

export default function ContactCard({ title, description, icon, value, href, cta, primary = false, index = 0 }) {
  const Icon = iconMap[icon]

  return (
    <motion.a href={href} target={href.startsWith("http") ? "_blank" : "_self"} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ scale: 1.02, y: -5 }} whileTap={{ scale: 0.98 }} className={cn("group relative block overflow-hidden rounded-2xl p-6", "border transition-all duration-300", primary ? "from-primary-500 to-primary-600 border-primary-400 shadow-glow bg-linear-to-br text-white" : "glass border-light-300 dark:border-dark-400 hover:border-primary-500/50 hover:shadow-glow")}>
      {primary && (
        <>
          <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-white/5 blur-xl" />
        </>
      )}
      <div className="relative z-10">
        <div className={cn("mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110", primary ? "bg-white/20" : "bg-primary-500/10")}>
          <Icon className={cn("h-6 w-6", primary ? "text-white" : "text-primary-500")} />
        </div>
        <h3 className={cn("font-heading mb-1 text-lg font-bold", primary ? "text-white" : "text-dark dark:text-light")}>{title}</h3>
        <p className={cn("mb-3 text-sm", primary ? "text-white/80" : "text-dark-400 dark:text-light-400")}>{description}</p>
        <p className={cn("mb-4 font-medium", primary ? "text-white" : "text-dark dark:text-light")}>{value}</p>
        <div className={cn("inline-flex items-center gap-2 text-sm font-medium", primary ? "text-white" : "text-primary-500 group-hover:text-primary-600")}>
          {cta}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </motion.a>
  )
}
