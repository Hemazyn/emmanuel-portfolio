"use client"
import { motion } from "framer-motion"
import { Briefcase, TrendingUp } from "lucide-react"
import SectionHeader from "@/components/ui/SectionHeader"
import { Timeline, TimelineItem } from "@/components/ui/Timeline"
import ExperienceCard from "@/components/ui/ExperienceCard"
import { experienceData, experienceStats } from "@/data/experience"

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-light-100 dark:bg-dark-100 relative overflow-hidden">
      <div className="grid-pattern absolute inset-0 opacity-30" />

      <div className="bg-primary-500/10 absolute top-0 right-0 h-96 w-96 rounded-full blur-3xl" />
      <div className="bg-primary-500/5 absolute bottom-0 left-0 h-96 w-96 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <SectionHeader badge="Experience" title={{ main: "Work", highlight: "Experience" }} subtitle="My professional journey and the companies I&apos;ve had the pleasure to work with" />

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {experienceStats.map((stat, index) => (
            <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.1 }} className="glass border-light-300 dark:border-dark-400 rounded-xl border p-4 text-center">
              <p className="gradient-text mb-1 text-2xl font-bold md:text-3xl">{stat.value}</p>
              <p className="text-dark-400 dark:text-light-400 text-xs md:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12 flex items-center justify-center gap-3">
          <div className="to-primary-500/50 h-px flex-1 bg-linear-to-r from-transparent" />
          <div className="glass border-light-300 dark:border-dark-400 flex items-center gap-2 rounded-full border px-4 py-2">
            <TrendingUp className="text-primary-500 h-4 w-4" />
            <span className="text-dark dark:text-light text-sm font-medium">Career Journey</span>
          </div>
          <div className="to-primary-500/50 h-px flex-1 bg-linear-to-l from-transparent" />
        </motion.div>

        <Timeline>
          {experienceData.map((experience, index) => (
            <TimelineItem key={experience.id} index={index} isLeft={index % 2 === 0} isActive={experience.isCurrentRole}>
              <ExperienceCard role={experience.role} company={experience.company} companyUrl={experience.companyUrl} location={experience.location} type={experience.type} startDate={experience.startDate} endDate={experience.endDate} isCurrentRole={experience.isCurrentRole} description={experience.description} responsibilities={experience.responsibilities} technologies={experience.technologies} achievements={experience.achievements} logo={experience.logo} isLeft={index % 2 === 0} index={index} />
            </TimelineItem>
          ))}
        </Timeline>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-16 text-center">
          <div className="glass border-light-300 dark:border-dark-400 inline-flex items-center gap-3 rounded-2xl border px-6 py-3">
            <Briefcase className="text-primary-500 h-5 w-5" />
            <p className="text-dark-400 dark:text-light-400">
              <span className="text-dark dark:text-light font-semibold">Open to opportunities</span> — Let&apos;s build something amazing together!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
