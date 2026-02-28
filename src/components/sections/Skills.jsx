"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Code2, Palette, Wrench, Sparkles, Brain, Zap, LayoutGrid, List } from "lucide-react"
import SectionHeader from "@/components/ui/SectionHeader"
import SkillCategoryCard from "@/components/ui/SkillCategoryCard"
import { SkillBarCompact } from "@/components/ui/SkillBar"
import Marquee, { MarqueeItem } from "@/components/ui/Marquee"
import { skillCategories, softSkills, toolsAndTech, skillStats } from "@/data/skills"
import { cn } from "@/lib/utils"

export default function Skills() {
  const [viewMode, setViewMode] = useState("cards") 

  return (
    <section id="skills" className="section-padding bg-light-100 dark:bg-dark-100 relative overflow-hidden">
      <div className="grid-pattern absolute inset-0 opacity-30" />
      <div className="bg-primary-500/10 absolute top-1/3 -left-32 h-96 w-96 rounded-full blur-3xl" />
      <div className="bg-primary-500/5 absolute -right-32 bottom-1/3 h-96 w-96 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <SectionHeader badge="Skills" title={{ main: "Technical", highlight: "Skills" }} subtitle="A comprehensive overview of my technical expertise and the technologies I work with" />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {skillStats.map((stat, index) => (
            <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.1 }} className="glass border-light-300 dark:border-dark-400 rounded-xl border p-4 text-center">
              <p className="gradient-text mb-1 text-2xl font-bold md:text-3xl">{stat.value}</p>
              <p className="text-dark-400 dark:text-light-400 text-xs md:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-8 flex justify-center">
          <div className="bg-light-200 dark:bg-dark-300 border-light-300 dark:border-dark-400 inline-flex items-center gap-1 rounded-xl border p-1">
            <button onClick={() => setViewMode("cards")} className={cn("flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300", viewMode === "cards" ? "bg-primary-500 text-white shadow-lg" : "text-dark-400 dark:text-light-400 hover:text-dark dark:hover:text-light")}>
              <List className="h-4 w-4" />
              Detailed
            </button>
            <button onClick={() => setViewMode("grid")} className={cn("flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300", viewMode === "grid" ? "bg-primary-500 text-white shadow-lg" : "text-dark-400 dark:text-light-400 hover:text-dark dark:hover:text-light")}>
              <LayoutGrid className="h-4 w-4" />
              Grid
            </button>
          </div>
        </motion.div>
        {viewMode === "cards" ? (
          <div className="mb-16 grid gap-6 md:grid-cols-2">
            {skillCategories.map((category, index) => (
              <SkillCategoryCard key={category.id} title={category.title} icon={category.icon} description={category.description} skills={category.skills} index={index} defaultExpanded={index < 2} />
            ))}
          </div>
        ) : (
          <div className="mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div key={category.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: categoryIndex * 0.1 }} className="mb-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-dark dark:text-light font-heading text-lg font-bold">{category.title}</h3>
                </div>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBarCompact key={skill.name} name={skill.name} level={skill.level} icon={skill.icon} index={skillIndex} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16">
          <div className="mb-6 flex items-center justify-center gap-3">
            <Zap className="text-primary-500 h-5 w-5" />
            <h3 className="text-dark dark:text-light font-heading text-xl font-bold">Tools & Technologies</h3>
          </div>

          <Marquee direction="left" speed={30} className="mb-4">
            {toolsAndTech.slice(0, 6).map((tool, index) => (
              <MarqueeItem key={`${tool.name}-${index}`}>
                <span className="text-xl">{tool.icon}</span>
                <span className="text-dark dark:text-light text-sm font-medium">{tool.name}</span>
                <span className="text-dark-400 dark:text-light-400 bg-light-300 dark:bg-dark-400 rounded-full px-2 py-0.5 text-xs">{tool.category}</span>
              </MarqueeItem>
            ))}
          </Marquee>

          <Marquee direction="right" speed={25}>
            {toolsAndTech.slice(6).map((tool, index) => (
              <MarqueeItem key={`${tool.name}-${index}`}>
                <span className="text-xl">{tool.icon}</span>
                <span className="text-dark dark:text-light text-sm font-medium">{tool.name}</span>
                <span className="text-dark-400 dark:text-light-400 bg-light-300 dark:bg-dark-400 rounded-full px-2 py-0.5 text-xs">{tool.category}</span>
              </MarqueeItem>
            ))}
          </Marquee>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="mb-6 flex items-center justify-center gap-3">
            <Brain className="text-primary-500 h-5 w-5" />
            <h3 className="text-dark dark:text-light font-heading text-xl font-bold">Soft Skills</h3>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, index) => (
              <motion.div key={skill.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.05 }} whileHover={{ scale: 1.05, y: -2 }} className="bg-light-200 dark:bg-dark-300 border-light-300 dark:border-dark-400 hover:border-primary-500/50 hover:shadow-glow flex items-center gap-2 rounded-xl border px-4 py-2 transition-all duration-300">
                <span className="text-lg">{skill.icon}</span>
                <span className="text-dark dark:text-light text-sm font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-16 text-center">
          <div className="glass border-light-300 dark:border-dark-400 inline-flex items-center gap-3 rounded-2xl border px-6 py-3">
            <Sparkles className="text-primary-500 h-5 w-5" />
            <p className="text-dark-400 dark:text-light-400">
              <span className="text-dark dark:text-light font-semibold">Always learning</span> — Currently exploring new technologies and best practices
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
