"use client"
import { motion } from "framer-motion"
import { User, GraduationCap, MapPin, Mail, Phone, Calendar, Code2, Heart, Target, Sparkles, ArrowRight, Download } from "lucide-react"
import SectionHeader from "@/components/ui/SectionHeader"
import TechBadge, { TechProgress } from "@/components/ui/TechBadge"
import Button from "@/components/ui/Button"
import { aboutData } from "@/data/about"
import { personalInfo } from "@/data/navigation"

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="dot-pattern absolute inset-0 opacity-30" />

      <div className="section-container relative z-10">
        <SectionHeader badge="About Me" title={{ main: "Get to Know", highlight: "Me Better" }} subtitle="A passionate developer who loves creating beautiful and functional web experiences" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bento-item row-span-2 md:col-span-2 lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <div className="bg-primary-500/10 flex h-10 w-10 items-center justify-center rounded-xl">
                <User className="text-primary-500 h-5 w-5" />
              </div>
              <h3 className="text-dark dark:text-light font-heading text-xl font-bold">Who I Am</h3>
            </div>

            <h4 className="text-primary-500 mb-4 text-lg font-semibold">{aboutData.intro.title}</h4>

            <div className="text-dark-400 dark:text-light-400 space-y-4 text-sm leading-relaxed">
              {aboutData.intro.description.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {aboutData.intro.highlights.map((highlight, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }} className="flex items-center gap-2 text-sm">
                  <Sparkles className="text-primary-500 h-4 w-4 shrink-0" />
                  <span className="text-dark dark:text-light">{highlight}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                variant="primary"
                size="sm"
                icon={ArrowRight}
                iconPosition="right"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Let&apos;s Talk
              </Button>
              <Button variant="outline" size="sm" icon={Download} href={personalInfo.resumeUrl} download>
                Resume
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bento-item">
            <div className="mb-4 flex items-center gap-2">
              <div className="bg-primary-500/10 flex h-8 w-8 items-center justify-center rounded-lg">
                <Mail className="text-primary-500 h-4 w-4" />
              </div>
              <h3 className="text-dark dark:text-light font-heading text-lg font-bold">Contact Info</h3>
            </div>

            <div className="space-y-3">
              <a href={`mailto:${aboutData.personalInfo.email}`} className="text-dark-400 dark:text-light-400 hover:text-primary-500 group flex items-center gap-3 text-sm transition-colors">
                <Mail className="group-hover:text-primary-500 h-4 w-4" />
                <span className="truncate">{aboutData.personalInfo.email}</span>
              </a>
              <a href={`tel:${aboutData.personalInfo.phone}`} className="text-dark-400 dark:text-light-400 hover:text-primary-500 group flex items-center gap-3 text-sm transition-colors">
                <Phone className="group-hover:text-primary-500 h-4 w-4" />
                <span>{aboutData.personalInfo.phone}</span>
              </a>
              <div className="text-dark-400 dark:text-light-400 flex items-center gap-3 text-sm">
                <MapPin className="text-primary-500 h-4 w-4" />
                <span>{aboutData.personalInfo.location}</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="bento-item">
            <div className="mb-4 flex items-center gap-2">
              <div className="bg-primary-500/10 flex h-8 w-8 items-center justify-center rounded-lg">
                <GraduationCap className="text-primary-500 h-4 w-4" />
              </div>
              <h3 className="text-dark dark:text-light font-heading text-lg font-bold">Education</h3>
            </div>

            <div className="space-y-2">
              <h4 className="text-dark dark:text-light font-semibold">{aboutData.education.degree}</h4>
              <p className="text-dark-400 dark:text-light-400 text-sm">{aboutData.education.institution}</p>
              <div className="text-primary-500 flex items-center gap-2 text-xs">
                <Calendar className="h-3 w-3" />
                <span>{aboutData.education.period}</span>
              </div>
              <span className="bg-primary-500/10 text-primary-500 mt-2 inline-block rounded-full px-2 py-1 text-xs">{aboutData.education.status}</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="bento-item md:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <div className="bg-primary-500/10 flex h-8 w-8 items-center justify-center rounded-lg">
                <Code2 className="text-primary-500 h-4 w-4" />
              </div>
              <h3 className="text-dark dark:text-light font-heading text-lg font-bold">Tech Stack</h3>
            </div>

            <div className="mb-4">
              <p className="text-dark-400 dark:text-light-400 mb-2 text-xs font-medium tracking-wider uppercase">Frontend</p>
              <div className="flex flex-wrap gap-2">
                {aboutData.techStack.frontend.map((tech, index) => (
                  <TechBadge key={tech.name} name={tech.name} icon={tech.icon} level={tech.level} index={index} showLevel />
                ))}
              </div>
            </div>

            <div className="mb-4">
              <p className="text-dark-400 dark:text-light-400 mb-2 text-xs font-medium tracking-wider uppercase">Styling</p>
              <div className="flex flex-wrap gap-2">
                {aboutData.techStack.styling.map((tech, index) => (
                  <TechBadge key={tech.name} name={tech.name} icon={tech.icon} level={tech.level} index={index} showLevel />
                ))}
              </div>
            </div>
            <div>
              <p className="text-dark-400 dark:text-light-400 mb-2 text-xs font-medium tracking-wider uppercase">Tools & Platforms</p>
              <div className="flex flex-wrap gap-2">
                {aboutData.techStack.tools.map((tech, index) => (
                  <TechBadge key={tech.name} name={tech.name} icon={tech.icon} level={tech.level} index={index} showLevel />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="bento-item lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <div className="bg-primary-500/10 flex h-8 w-8 items-center justify-center rounded-lg">
                <Target className="text-primary-500 h-4 w-4" />
              </div>
              <h3 className="text-dark dark:text-light font-heading text-lg font-bold">Core Values</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {aboutData.coreValues.map((value, index) => (
                <motion.div key={value.title} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }} className="bg-light-200 dark:bg-dark-300 border-light-300 dark:border-dark-400 hover:border-primary-500/50 rounded-xl border p-3 transition-all duration-300">
                  <span className="mb-2 block text-2xl">{value.icon}</span>
                  <h4 className="text-dark dark:text-light mb-1 text-sm font-semibold">{value.title}</h4>
                  <p className="text-dark-400 dark:text-light-400 text-xs">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }} className="bento-item">
            <div className="mb-4 flex items-center gap-2">
              <div className="bg-primary-500/10 flex h-8 w-8 items-center justify-center rounded-lg">
                <Heart className="text-primary-500 h-4 w-4" />
              </div>
              <h3 className="text-dark dark:text-light font-heading text-lg font-bold">Fun Facts</h3>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {aboutData.funFacts.map((fact, index) => (
                <motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.2, delay: 0.6 + index * 0.05 }} whileHover={{ scale: 1.05 }} className="bg-light-200 dark:bg-dark-300 flex items-center gap-2 rounded-lg p-2 text-sm">
                  <span>{fact.emoji}</span>
                  <span className="text-dark-400 dark:text-light-400 text-xs">{fact.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }} className="bento-item">
            <div className="mb-4 flex items-center gap-2">
              <div className="bg-primary-500/10 flex h-8 w-8 items-center justify-center rounded-lg">
                <Target className="text-primary-500 h-4 w-4" />
              </div>
              <h3 className="text-dark dark:text-light font-heading text-lg font-bold">Current Focus</h3>
            </div>

            <ul className="space-y-2">
              {aboutData.currentFocus.map((focus, index) => (
                <motion.li key={index} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }} className="text-dark-400 dark:text-light-400 flex items-start gap-2 text-sm">
                  <ArrowRight className="text-primary-500 mt-0.5 h-4 w-4 shrink-0" />
                  <span>{focus}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.7 }} className="bento-item md:col-span-2 lg:col-span-2">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-dark dark:text-light font-heading mb-2 text-lg font-bold">Languages I Speak</h3>
                <div className="flex flex-wrap gap-2">
                  {aboutData.personalInfo.languages.map((language, index) => (
                    <span key={index} className="bg-primary-500/10 text-primary-500 border-primary-500/20 rounded-full border px-3 py-1 text-sm">
                      {language}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-dark dark:text-light font-heading mb-2 text-lg font-bold">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {aboutData.personalInfo.interests.map((interest, index) => (
                    <span key={index} className="bg-light-200 dark:bg-dark-300 text-dark-400 dark:text-light-400 border-light-300 dark:border-dark-400 rounded-full border px-3 py-1 text-sm">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
