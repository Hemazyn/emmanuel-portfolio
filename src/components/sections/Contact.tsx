"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Check, Copy, Mail, MapPin, MessageCircle } from "lucide-react"
import SectionHeader from "@/components/ui/SectionHeader"
import SectionBackground from "@/components/ui/SectionBackground"
import { contactInfo, contactMethods, socialLinks } from "@/data/contact"
import { fadeUp } from "@/lib/animations"

export default function Contact() {
  const [emailCopied, setEmailCopied] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email)
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000)
    } catch (err: unknown) {
      console.error("Copy failed:", err)
    }
  }

  return (
    <section id="contact" className="bg-light-100 dark:bg-dark-100 relative overflow-hidden py-20">
      <SectionBackground />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 15% 20%, rgba(16,185,129,0.05), transparent 35%), radial-gradient(ellipse at 85% 80%, rgba(16,185,129,0.04), transparent 35%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 xl:px-0">
        <SectionHeader title={{ main: "Let's build", highlight: "something useful" }} subtitle="If you're working on a dashboard, product website, admin platform, or internal tool — I'd be glad to hear about it." />

        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left — CTA */}
          <motion.div custom={0.05} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="glass flex flex-col justify-between rounded-[28px] p-6 sm:p-8">
            <div>
              {/* Status badges */}
              <div className="mb-6 flex flex-wrap gap-2.5">
                <span className="border-primary-500/15 bg-primary-500/8 text-primary-600 dark:text-primary-400 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="bg-primary-500 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                    <span className="bg-primary-500 relative inline-flex h-1.5 w-1.5 rounded-full" />
                  </span>
                  {contactInfo.availability}
                </span>

                <span className="border-dark/8 dark:border-light/8 text-dark-400 dark:text-light-400 inline-flex rounded-full border px-3 py-1.5 text-xs">{contactInfo.responseTime}</span>
              </div>

              {/* Headline */}
              <h3 className="font-heading text-dark dark:text-light text-2xl leading-[1.15] font-semibold tracking-tight sm:text-3xl">If you have a product in motion, I can help bring the frontend to life.</h3>

              <p className="text-dark-400 dark:text-light-400 mt-4 text-sm leading-relaxed sm:text-[15px]">I work with founders, teams, and businesses building dashboards, fintech products, websites, and admin systems. If you need a frontend engineer who cares about usability and clean implementation — let&apos;s talk.</p>
            </div>

            {/* Actions */}
            <div className="mt-8 space-y-4">
              <div className="flex flex-wrap gap-3">
                <a href={`mailto:${contactInfo.email}?subject=Project Inquiry`} className="bg-primary-600 hover:bg-primary-700 hover:shadow-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition-all duration-300">
                  <Mail className="h-4 w-4" />
                  Send an email
                </a>

                <a href={contactMethods.find((m) => m.id === "whatsapp")?.href} target="_blank" rel="noopener noreferrer" className="border-dark/10 text-dark hover:border-primary-500/30 hover:text-primary-600 dark:border-light/10 dark:text-light dark:hover:border-primary-500/30 dark:hover:text-primary-400 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>

              {/* Copy email */}
              <button type="button" onClick={handleCopyEmail} className="border-dark/8 dark:border-light/8 hover:border-primary-500/25 group flex w-full items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300">
                <span className="text-dark-400 dark:text-light-400 text-sm">{contactInfo.email}</span>
                <span className="text-dark-400 dark:text-light-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 flex items-center gap-1.5 text-xs transition-colors duration-300">
                  {emailCopied ? (
                    <>
                      <Check className="h-3.5 w-3.5" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      Copy
                    </>
                  )}
                </span>
              </button>
            </div>
          </motion.div>

          {/* Right — compact info */}
          <motion.div custom={0.12} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="glass flex flex-col rounded-[28px] p-6 sm:p-7">
            {/* Location */}
            <div className="border-dark/8 dark:border-light/8 flex items-center gap-3 border-b pb-5">
              <div className="bg-primary-500/10 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl">
                <MapPin className="text-primary-500 h-4 w-4" />
              </div>
              <div>
                <p className="text-dark dark:text-light text-sm font-medium">{contactInfo.location}</p>
                <p className="text-dark-400 dark:text-light-400 text-xs">{contactInfo.timezone} · Remote worldwide</p>
              </div>
            </div>

            {/* Contact methods */}
            <div className="border-dark/8 dark:border-light/8 mt-5 space-y-2 border-b pb-5">
              <p className="text-dark-400 dark:text-light-400 mb-3 font-mono text-[10px] tracking-[0.28em] uppercase">Contact</p>

              {contactMethods.map((method) => {
                const isExternal = method.href.startsWith("http")
                return (
                  <a key={method.id} href={method.href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} className="border-dark/6 hover:border-primary-500/15 dark:border-light/6 group flex items-center justify-between rounded-xl border px-3.5 py-2.5 transition-all duration-300">
                    <div>
                      <span className="text-dark dark:text-light text-xs font-medium">{method.title}</span>
                      <span className="text-dark-400 dark:text-light-400 ml-2 text-xs">{method.value}</span>
                    </div>
                    <ArrowUpRight className="text-dark-400 dark:text-light-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 h-3.5 w-3.5 transition-colors duration-300" />
                  </a>
                )
              })}
            </div>

            {/* Socials */}
            <div className="mt-5 space-y-2">
              <p className="text-dark-400 dark:text-light-400 mb-3 font-mono text-[10px] tracking-[0.28em] uppercase">Presence</p>

              {socialLinks.map((social) => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="border-dark/6 hover:border-primary-500/15 dark:border-light/6 group flex items-center justify-between rounded-xl border px-3.5 py-2.5 transition-all duration-300">
                  <div>
                    <span className="text-dark dark:text-light text-xs font-medium">{social.name}</span>
                    <span className="text-dark-400 dark:text-light-400 ml-2 text-xs">{social.username}</span>
                  </div>
                  <ArrowUpRight className="text-dark-400 dark:text-light-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 h-3.5 w-3.5 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
