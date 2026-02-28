"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Calendar, Award, BadgeCheck, ChevronDown, ChevronUp, Copy, Check } from "lucide-react"
import { cn } from "@/lib/utils"

export default function CertificateCard({ title, issuer, issuerLogo, issueDate, credentialId, credentialUrl, description, skills, type, featured, index = 0 }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopyId = () => {
    navigator.clipboard.writeText(credentialId)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const isAchievement = type === "achievement"

  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className={cn("group glass relative overflow-hidden rounded-2xl", "border-light-300 dark:border-dark-400 border", "hover:border-primary-500/50 hover:shadow-glow", "transition-all duration-300")}>
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: index * 0.1 + 0.3, type: "spring" }} className="bg-primary-500 flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium text-white">
            <BadgeCheck className="h-3 w-3" />
            Verified
          </motion.div>
        </div>
      )}
      <div className={cn("relative p-6 pb-4", isAchievement ? "bg-linear-to-br from-yellow-500/10 to-orange-500/10" : "from-primary-500/10 to-primary-600/10 bg-linear-to-br")}>
        <div className="flex items-start gap-4">
          <div className={cn("flex h-14 w-14 items-center justify-center rounded-xl text-3xl", "dark:bg-dark-300 bg-white shadow-lg", "border-light-300 dark:border-dark-400 border")}>{issuerLogo}</div>
          <div className="min-w-0 flex-1">
            <div className="mb-1 flex items-center gap-2">
              {isAchievement ? <Award className="h-4 w-4 text-yellow-500" /> : <BadgeCheck className="text-primary-500 h-4 w-4" />}
              <span className={cn("text-xs font-medium tracking-wider uppercase", isAchievement ? "text-yellow-600 dark:text-yellow-400" : "text-primary-600 dark:text-primary-400")}>{isAchievement ? "Achievement" : "Certification"}</span>
            </div>
            <h3 className="text-dark dark:text-light font-heading group-hover:text-primary-500 line-clamp-2 text-lg font-bold transition-colors">{title}</h3>
            <p className="text-dark-400 dark:text-light-400 mt-1 text-sm">{issuer}</p>
          </div>
        </div>
        <div className="text-dark-400 dark:text-light-400 mt-4 flex items-center gap-2 text-sm">
          <Calendar className="h-4 w-4" />
          <span>Issued {issueDate}</span>
        </div>
      </div>
      <div className="p-6 pt-4">
        <p className="text-dark-400 dark:text-light-400 mb-4 text-sm leading-relaxed">{description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {skills.slice(0, isExpanded ? skills.length : 3).map((skill, i) => (
            <span key={i} className="bg-primary-500/10 text-primary-600 dark:text-primary-400 border-primary-500/20 rounded-lg border px-2 py-1 text-xs font-medium">
              {skill}
            </span>
          ))}
          {!isExpanded && skills.length > 3 && <span className="bg-light-200 dark:bg-dark-300 text-dark-400 dark:text-light-400 rounded-lg px-2 py-1 text-xs font-medium">+{skills.length - 3} more</span>}
        </div>
        <button onClick={() => setIsExpanded(!isExpanded)} className="text-primary-500 hover:text-primary-600 mb-4 flex items-center gap-1 text-sm font-medium transition-colors">
          {isExpanded ? (
            <>
              Show Less <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              Show More <ChevronDown className="h-4 w-4" />
            </>
          )}
        </button>
        {isExpanded && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="border-light-300 dark:border-dark-400 mb-4 border-t pt-4">
            <div className="bg-light-200 dark:bg-dark-300 mb-3 flex items-center justify-between rounded-xl p-3">
              <div>
                <p className="text-dark-400 dark:text-light-400 mb-1 text-xs">Credential ID</p>
                <p className="text-dark dark:text-light font-mono text-sm">{credentialId}</p>
              </div>
              <button onClick={handleCopyId} className="hover:bg-light-300 dark:hover:bg-dark-400 rounded-lg p-2 transition-colors" aria-label="Copy credential ID">
                {copied ? <Check className="text-primary-500 h-4 w-4" /> : <Copy className="text-dark-400 dark:text-light-400 h-4 w-4" />}
              </button>
            </div>
            <div>
              <p className="text-dark-400 dark:text-light-400 mb-2 text-xs tracking-wider uppercase">Skills Covered</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span key={i} className="bg-light-200 dark:bg-dark-300 text-dark dark:text-light border-light-300 dark:border-dark-400 rounded-lg border px-2 py-1 text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
        {credentialUrl && credentialUrl !== "#" && (
          <motion.a href={credentialUrl} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={cn("flex w-full items-center justify-center gap-2 rounded-xl py-3", "text-sm font-medium transition-all duration-300", isAchievement ? "bg-linear-to-r from-yellow-500 to-orange-500 text-white hover:shadow-lg" : "from-primary-600 to-primary-500 hover:shadow-glow bg-linear-to-r text-white")}>
            View Credential
            <ExternalLink className="h-4 w-4" />
          </motion.a>
        )}
      </div>
    </motion.div>
  )
}
