"use client"
import { motion } from "framer-motion"

export default function StatusBadge({ status = "available" }) {
  const statuses = {
    available: {
      text: "Available for Work",
      color: "bg-green-500",
      pulse: true,
    },
    busy: {
      text: "Currently Busy",
      color: "bg-yellow-500",
      pulse: false,
    },
    unavailable: {
      text: "Not Available",
      color: "bg-red-500",
      pulse: false,
    },
  }

  const currentStatus = statuses[status]

  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2 }} className="glass border-light-300 dark:border-dark-400 inline-flex items-center gap-2 rounded-full border px-4 py-2">
      <span className="relative flex h-2.5 w-2.5">
        {currentStatus.pulse && <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${currentStatus.color} opacity-75`} />}
        <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${currentStatus.color}`} />
      </span>
      <span className="text-dark-400 dark:text-light-400 text-sm font-medium">{currentStatus.text}</span>
    </motion.div>
  )
}
