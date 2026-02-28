"use client"
import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Twitter, Mail, MapPin, Sparkles, Code2, Braces, Terminal } from "lucide-react"
import Button from "@/components/ui/Button"
import { AnimatedLetters } from "@/components/ui/AnimatedText"
import { GradientOrbs, FloatingShapes, GridBackground, ScrollIndicator } from "@/components/ui/BackgroundEffects"
import StatusBadge from "@/components/ui/StatusBadge"
import { personalInfo, socialLinks } from "@/data/navigation"

const socialIcons = { Github, Linkedin, Twitter, Mail }

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <GridBackground />
      <GradientOrbs />
      <FloatingShapes />
      <div className="section-container relative z-10 pt-32 pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6 flex justify-center lg:justify-start">
              <StatusBadge status="available" />
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-dark-400 dark:text-light-400 mb-4 flex items-center justify-center gap-2 text-lg md:text-xl lg:justify-start">
              <span className="animate-bounce-slow inline-block">👋</span>
              Hello, I&apos;m
            </motion.p>
            <h1 className="font-heading mb-4 text-4xl leading-tight font-bold sm:text-5xl md:text-6xl lg:text-7xl">
              <AnimatedLetters text="Emmanuel" className="text-dark dark:text-light" delay={0.2} />
              <br />
              <AnimatedLetters text="Tofunmi" className="gradient-text" delay={0.6} />
            </h1>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1 }} className="mb-6">
              <p className="text-dark dark:text-light flex flex-wrap items-center justify-center gap-2 text-xl font-medium md:text-2xl lg:justify-start">
                <Sparkles className="text-primary-500 h-5 w-5" />
                <span>Frontend</span>
                <span className="text-primary-500">React & Next.js</span>
                <span>Expert</span>
              </p>
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.1 }} className="text-dark-400 dark:text-light-400 mx-auto mb-8 max-w-xl text-base leading-relaxed md:text-lg lg:mx-0">
              Results-driven Frontend Developer with <span className="text-primary-500 font-semibold">4+ years</span> of experience crafting responsive, user-friendly web applications. Passionate about transforming designs into pixel-perfect, performant interfaces that deliver exceptional user experiences.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.2 }} className="text-dark-400 dark:text-light-400 mb-8 flex items-center justify-center gap-2 lg:justify-start">
              <MapPin className="text-primary-500 h-4 w-4" />
              <span className="text-sm">{personalInfo.location}</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.3 }} className="mb-10 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Get in Touch
              </Button>
              <Button variant="secondary" size="lg" icon={Download} href={personalInfo.resumeUrl} download={personalInfo.resumeFileName}>
                Download CV
              </Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.4 }} className="flex items-center justify-center gap-3 lg:justify-start">
              <span className="text-dark-400 dark:text-light-400 text-sm">Find me on:</span>
              <div className="flex items-center gap-2">
                {socialLinks.map((social, index) => {
                  const Icon = socialIcons[social.icon]
                  return (
                    <motion.a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: 1.5 + index * 0.1 }} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }} className="bg-light-200 dark:bg-dark-300 border-light-300 dark:border-dark-400 hover:border-primary-500 hover:shadow-glow group flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300" aria-label={social.name}>
                      <Icon className="text-dark-400 dark:text-light-400 group-hover:text-primary-500 h-4 w-4 transition-colors" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>
          <div className="order-1 flex justify-center lg:order-2">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.5, type: "spring" }} className="relative w-full max-w-md">
              <motion.div
                animate={{
                  boxShadow: ["0 0 30px rgba(16, 185, 129, 0.2)", "0 0 60px rgba(16, 185, 129, 0.4)", "0 0 30px rgba(16, 185, 129, 0.2)"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="from-primary-500 to-primary-600 absolute -inset-1 rounded-2xl bg-linear-to-r opacity-75 blur-sm"
              />
              <div className="border-dark-400 bg-dark-200 relative overflow-hidden rounded-2xl border shadow-2xl">
                <div className="bg-dark-300 border-dark-400 flex items-center justify-between border-b px-4 py-3">
                  <div className="flex items-center gap-2">
                    <motion.div whileHover={{ scale: 1.2 }} className="h-3 w-3 cursor-pointer rounded-full bg-red-500" />
                    <motion.div whileHover={{ scale: 1.2 }} className="h-3 w-3 cursor-pointer rounded-full bg-yellow-500" />
                    <motion.div whileHover={{ scale: 1.2 }} className="h-3 w-3 cursor-pointer rounded-full bg-green-500" />
                  </div>
                  <span className="text-light-400 font-mono text-xs">developer.js</span>
                  <div className="w-16" />
                </div>
                <div className="min-h-80 space-y-3 p-6 font-mono text-sm">
                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="flex items-center gap-2">
                    <span className="text-dark-500 select-none">1</span>
                    <span className="text-purple-400">const</span>
                    <span className="text-light">developer</span>
                    <span className="text-primary-400">=</span>
                    <span className="text-yellow-400">{"{"}</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }} className="flex items-center gap-2 pl-6">
                    <span className="text-dark-500 select-none">2</span>
                    <span className="text-light-400">name:</span>
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="text-green-400">
                      &quot;Emmanuel Tofunmi&quot;
                    </motion.span>
                    <span className="text-light-400">,</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.3 }} className="flex items-center gap-2 pl-6">
                    <span className="text-dark-500 select-none">3</span>
                    <span className="text-light-400">role:</span>
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="text-green-400">
                      &quot;Frontend Developer&quot;
                    </motion.span>
                    <span className="text-light-400">,</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.6 }} className="flex items-start gap-2 pl-6">
                    <span className="text-dark-500 select-none">4</span>
                    <span className="text-light-400">skills:</span>
                    <span className="text-yellow-400">[</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.8 }} className="flex flex-wrap items-center gap-2 pl-12">
                    <span className="text-dark-500 select-none">5</span>
                    {["React", "Next.js", "TypeScript", "Vue"].map((skill, i) => (
                      <motion.span key={skill} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2 + i * 0.15 }} whileHover={{ scale: 1.1, color: "#10b981" }} className="cursor-pointer text-green-400 transition-colors">
                        &quot;{skill}&quot;{i < 3 && ","}
                      </motion.span>
                    ))}
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2.6 }} className="flex items-center gap-2 pl-6">
                    <span className="text-dark-500 select-none">6</span>
                    <span className="text-yellow-400">]</span>
                    <span className="text-light-400">,</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2.8 }} className="flex items-center gap-2 pl-6">
                    <span className="text-dark-500 select-none">7</span>
                    <span className="text-light-400">experience:</span>
                    <motion.span whileHover={{ scale: 1.1 }} className="cursor-pointer text-orange-400">
                      4
                    </motion.span>
                    <span className="text-light-400">,</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 3 }} className="flex items-center gap-2 pl-6">
                    <span className="text-dark-500 select-none">8</span>
                    <span className="text-light-400">available:</span>
                    <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-primary-400">
                      true
                    </motion.span>
                    <span className="text-light-400">,</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 3.2 }} className="flex items-center gap-2">
                    <span className="text-dark-500 select-none">9</span>
                    <span className="text-yellow-400">{"}"}</span>
                    <span className="text-light-400">;</span>
                    <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity }} className="bg-primary-500 ml-1 inline-block h-5 w-2" />
                  </motion.div>
                </div>
                <div className="bg-dark-300 border-dark-400 flex items-center gap-2 border-t px-4 py-2">
                  <Terminal className="text-primary-500 h-4 w-4" />
                  <span className="text-light-400 font-mono text-xs">Ready to collaborate</span>
                  <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} className="text-primary-500">
                    _
                  </motion.span>
                </div>
              </div>
              <motion.div initial={{ opacity: 0, x: -30, y: -20 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 3.5 }} whileHover={{ scale: 1.05, y: -5 }} className="glass absolute -top-4 -left-4 cursor-pointer rounded-xl px-3 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="text-xl">⚛️</span>
                  <span className="text-dark dark:text-light text-sm font-bold">React.js</span>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30, y: -20 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 3.7 }} whileHover={{ scale: 1.05, y: -5 }} className="glass absolute -top-4 -right-4 cursor-pointer rounded-xl px-3 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="text-xl">▲</span>
                  <span className="text-dark dark:text-light text-sm font-bold">Next.js</span>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.9 }} whileHover={{ scale: 1.05, y: -5 }} className="glass absolute -bottom-4 left-1/2 -translate-x-1/2 cursor-pointer rounded-xl px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🚀</span>
                  <span className="text-dark dark:text-light text-sm font-bold">50+ Projects</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 2 }} className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { icon: "🎯", label: "Detail", desc: "Oriented" },
            { icon: "🚀", label: "Fast", desc: "Delivery" },
            { icon: "💡", label: "Creative", desc: "Solutions" },
            { icon: "🤝", label: "Team", desc: "Player" },
          ].map((item, index) => (
            <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 2.1 + index * 0.1 }} whileHover={{ scale: 1.05, y: -5 }} className="glass border-light-300 dark:border-dark-400 hover:border-primary-500/50 hover:shadow-glow cursor-pointer rounded-2xl border p-6 text-center transition-all duration-300">
              <p className="mb-2 text-3xl md:text-4xl">{item.icon}</p>
              <p className="gradient-text text-lg font-bold">{item.label}</p>
              <p className="text-dark-400 dark:text-light-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <ScrollIndicator />
    </section>
  )
}
