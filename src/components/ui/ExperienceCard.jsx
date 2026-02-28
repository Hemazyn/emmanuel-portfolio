"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Briefcase, MapPin, Calendar, ChevronDown, ChevronUp, ExternalLink, CheckCircle2, Trophy } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ExperienceCard({ role, company, companyUrl, location, type, startDate, endDate, isCurrentRole, description, responsibilities, technologies, achievements, logo, isLeft = true, index = 0 }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div initial={{ opacity: 0, x: isLeft ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className={cn("group glass relative rounded-2xl p-6 transition-all duration-300", "hover:shadow-glow hover:border-primary-500/50", isLeft ? "md:mr-0" : "md:ml-0")}>
      <div className={cn("flex items-start gap-4", isLeft ? "md:flex-row-reverse md:text-right" : "")}>
        <div className="bg-primary-500/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl">{logo}</div>
        <div className="min-w-0 flex-1">
          <div className={cn("mb-1 flex flex-wrap items-center gap-2", isLeft ? "md:justify-end" : "")}>
            <h3 className="text-dark dark:text-light font-heading text-lg font-bold">{role}</h3>
            {isCurrentRole && (
              <span className="bg-primary-500/10 text-primary-500 border-primary-500/20 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium">
                <span className="bg-primary-500 h-1.5 w-1.5 animate-pulse rounded-full" />
                Current
              </span>
            )}
          </div>
          <div className={cn("flex flex-wrap items-center gap-2", isLeft ? "md:justify-end" : "")}>
            {companyUrl && companyUrl !== "#" ? (
              <a href={companyUrl} target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 flex items-center gap-1 font-medium transition-colors">
                {company}
                <ExternalLink className="h-3 w-3" />
              </a>
            ) : (
              <span className="text-primary-500 font-medium">{company}</span>
            )}
            <span className="text-dark-400 dark:text-light-400">•</span>
            <span className="text-dark-400 dark:text-light-400 text-sm">{type}</span>
          </div>
        </div>
      </div>
      <div className={cn("text-dark-400 dark:text-light-400 mt-4 flex flex-wrap items-center gap-4 text-sm", isLeft ? "md:justify-end" : "")}>
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          <span>
            {startDate} - {endDate}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>
      </div>

      <p className={cn("text-dark-400 dark:text-light-400 mt-4 text-sm leading-relaxed", isLeft ? "md:text-right" : "")}>{description}</p>

      <div className={cn("mt-4 flex flex-wrap gap-2", isLeft ? "md:justify-end" : "")}>
        {technologies.slice(0, 5).map((tech, i) => (
          <span key={i} className="bg-primary-500/10 text-primary-500 border-primary-500/20 rounded-lg border px-2 py-1 text-xs font-medium">
            {tech}
          </span>
        ))}
        {technologies.length > 5 && <span className="bg-light-200 dark:bg-dark-300 text-dark-400 dark:text-light-400 rounded-lg px-2 py-1 text-xs font-medium">+{technologies.length - 5} more</span>}
      </div>

      <button onClick={() => setIsExpanded(!isExpanded)} className={cn("text-primary-500 hover:text-primary-600 mt-4 flex items-center gap-1 text-sm font-medium transition-colors", isLeft ? "md:ml-auto" : "")}>
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

      <AnimatePresence>
        {isExpanded && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <div className="border-light-300 dark:border-dark-400 mt-4 space-y-4 border-t pt-4">
              <div>
                <h4 className={cn("text-dark dark:text-light mb-2 flex items-center gap-2 text-sm font-semibold", isLeft ? "md:justify-end" : "")}>
                  <Briefcase className="text-primary-500 h-4 w-4" />
                  Key Responsibilities
                </h4>
                <ul className={cn("space-y-2", isLeft ? "md:text-right" : "")}>
                  {responsibilities.map((item, i) => (
                    <motion.li key={i} initial={{ opacity: 0, x: isLeft ? 10 : -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: i * 0.05 }} className={cn("text-dark-400 dark:text-light-400 flex items-start gap-2 text-sm", isLeft ? "md:flex-row-reverse" : "")}>
                      <CheckCircle2 className="text-primary-500 mt-0.5 h-4 w-4 shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {achievements && achievements.length > 0 && (
                <div>
                  <h4 className={cn("text-dark dark:text-light mb-2 flex items-center gap-2 text-sm font-semibold", isLeft ? "md:justify-end" : "")}>
                    <Trophy className="text-primary-500 h-4 w-4" />
                    Key Achievements
                  </h4>
                  <ul className={cn("space-y-2", isLeft ? "md:text-right" : "")}>
                    {achievements.map((item, i) => (
                      <motion.li key={i} initial={{ opacity: 0, x: isLeft ? 10 : -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: i * 0.05 }} className={cn("text-dark-400 dark:text-light-400 flex items-start gap-2 text-sm", isLeft ? "md:flex-row-reverse" : "")}>
                        <span className="text-primary-500">★</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              {technologies.length > 5 && (
                <div>
                  <h4 className={cn("text-dark dark:text-light mb-2 text-sm font-semibold", isLeft ? "md:text-right" : "")}>All Technologies</h4>
                  <div className={cn("flex flex-wrap gap-2", isLeft ? "md:justify-end" : "")}>
                    {technologies.map((tech, i) => (
                      <span key={i} className="bg-light-200 dark:bg-dark-300 text-dark dark:text-light border-light-300 dark:border-dark-400 rounded-lg border px-2 py-1 text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
