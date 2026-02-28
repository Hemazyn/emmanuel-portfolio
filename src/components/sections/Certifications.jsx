"use client"
import { motion } from "framer-motion"
import { Award, GraduationCap, BookOpen, TrendingUp, Sparkles } from "lucide-react"
import SectionHeader from "@/components/ui/SectionHeader"
import CertificateCard from "@/components/ui/CertificateCard"
import LearningPlatformCard from "@/components/ui/LearningPlatformCard"
import { certificationsData, certificationStats, learningPlatforms } from "@/data/certifications"

export default function Certifications() {
  const certifications = certificationsData.filter((cert) => cert.type === "certification")
  const achievements = certificationsData.filter((cert) => cert.type === "achievement")

  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      <div className="dot-pattern absolute inset-0 opacity-30" />
      <div className="bg-primary-500/10 absolute top-1/4 -right-32 h-96 w-96 rounded-full blur-3xl" />
      <div className="bg-primary-500/5 absolute bottom-1/4 -left-32 h-96 w-96 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <SectionHeader badge="Credentials" title={{ main: "Certifications &", highlight: "Achievements" }} subtitle="Professional certifications and recognition that validate my skills and expertise" />

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {certificationStats.map((stat, index) => (
            <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.1 }} className="glass border-light-300 dark:border-dark-400 rounded-xl border p-4 text-center">
              <div className="mb-2 text-2xl">{stat.icon}</div>
              <p className="gradient-text mb-1 text-2xl font-bold md:text-3xl">{stat.value}</p>
              <p className="text-dark-400 dark:text-light-400 text-xs md:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-8 flex items-center justify-center gap-3">
          <div className="to-primary-500/50 h-px flex-1 bg-linear-to-r from-transparent" />
          <div className="glass border-light-300 dark:border-dark-400 flex items-center gap-2 rounded-full border px-4 py-2">
            <GraduationCap className="text-primary-500 h-4 w-4" />
            <span className="text-dark dark:text-light text-sm font-medium">Professional Certifications</span>
          </div>
          <div className="to-primary-500/50 h-px flex-1 bg-linear-to-l from-transparent" />
        </motion.div>

        <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <CertificateCard key={cert.id} title={cert.title} issuer={cert.issuer} issuerLogo={cert.issuerLogo} issueDate={cert.issueDate} credentialId={cert.credentialId} credentialUrl={cert.credentialUrl} description={cert.description} skills={cert.skills} type={cert.type} featured={cert.featured} index={index} />
          ))}
        </div>

        {achievements.length > 0 && (
          <>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-8 flex items-center justify-center gap-3">
              <div className="h-px flex-1 bg-linear-to-r from-transparent to-yellow-500/50" />
              <div className="glass border-light-300 dark:border-dark-400 flex items-center gap-2 rounded-full border px-4 py-2">
                <Award className="h-4 w-4 text-yellow-500" />
                <span className="text-dark dark:text-light text-sm font-medium">Awards & Recognition</span>
              </div>
              <div className="h-px flex-1 bg-linear-to-l from-transparent to-yellow-500/50" />
            </motion.div>

            <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {achievements.map((achievement, index) => (
                <CertificateCard key={achievement.id} title={achievement.title} issuer={achievement.issuer} issuerLogo={achievement.issuerLogo} issueDate={achievement.issueDate} credentialId={achievement.credentialId} credentialUrl={achievement.credentialUrl} description={achievement.description} skills={achievement.skills} type={achievement.type} featured={achievement.featured} index={index} />
              ))}
            </div>
          </>
        )}

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="mb-8 flex items-center justify-center gap-3">
            <div className="to-primary-500/50 h-px flex-1 bg-linear-to-r from-transparent" />
            <div className="glass border-light-300 dark:border-dark-400 flex items-center gap-2 rounded-full border px-4 py-2">
              <BookOpen className="text-primary-500 h-4 w-4" />
              <span className="text-dark dark:text-light text-sm font-medium">Learning Platforms</span>
            </div>
            <div className="to-primary-500/50 h-px flex-1 bg-linear-to-l from-transparent" />
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {learningPlatforms.map((platform, index) => (
              <LearningPlatformCard key={platform.name} name={platform.name} icon={platform.icon} url={platform.url} description={platform.description} index={index} />
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-16">
          <div className="glass border-light-300 dark:border-dark-400 relative overflow-hidden rounded-2xl border p-8">
            <div className="bg-primary-500/10 absolute top-0 right-0 h-64 w-64 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex items-center gap-4">
                <div className="bg-primary-500/10 flex h-16 w-16 items-center justify-center rounded-2xl">
                  <TrendingUp className="text-primary-500 h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-dark dark:text-light font-heading mb-1 text-xl font-bold">Committed to Continuous Learning</h3>
                  <p className="text-dark-400 dark:text-light-400 max-w-md text-sm">Currently pursuing a degree in Computer Science at University of the People while constantly expanding my technical skills.</p>
                </div>
              </div>

              <div className="bg-primary-500/10 border-primary-500/20 flex items-center gap-2 rounded-xl border px-4 py-2">
                <Sparkles className="text-primary-500 h-5 w-5" />
                <span className="text-primary-500 text-sm font-medium">2023 - Present</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-12 text-center">
          <div className="glass border-light-300 dark:border-dark-400 inline-flex items-center gap-3 rounded-2xl border px-6 py-3">
            <Sparkles className="text-primary-500 h-5 w-5" />
            <p className="text-dark-400 dark:text-light-400">
              <span className="text-dark dark:text-light font-semibold">More certifications coming soon</span> — Always learning, always growing
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
