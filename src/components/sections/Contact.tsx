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
    <section id="contact" className="relative overflow-hidden border-t border-rule-soft bg-bg-surface py-20">
      <SectionBackground />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 15% 20%, rgba(16,185,129,0.03), transparent 35%), radial-gradient(ellipse at 85% 80%, rgba(16,185,129,0.02), transparent 35%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-7">
        <SectionHeader
          title={{ main: "Let's build", highlight: "something useful" }}
          subtitle="If you're working on a dashboard, product website, admin platform, or internal tool — I'd be glad to hear about it."
        />

        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left — CTA card */}
          <motion.div
            custom={0.05}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="glass flex flex-col justify-between p-6 sm:p-8"
          >
            <div>
              {/* Status badges — hard edge */}
              <div className="mb-6 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-2 border border-accent-tint-strong bg-accent-tint px-3 py-1.5 font-mono text-xs font-medium text-accent">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                  {contactInfo.availability}
                </span>

                <span className="inline-flex border border-rule-soft px-3 py-1.5 font-mono text-xs text-ink-mute">
                  {contactInfo.responseTime}
                </span>
              </div>

              {/* Headline — VT323 */}
              <h3 className="font-display text-2xl uppercase leading-[1.15] tracking-wide text-ink sm:text-3xl">
                If you have a product in motion, I can help bring the frontend to life.
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-[15px]">
                I work with founders, teams, and businesses building dashboards, fintech
                products, websites, and admin systems. If you need a frontend engineer who
                cares about usability and clean implementation — let&apos;s talk.
              </p>
            </div>

            {/* Actions — brutalist buttons */}
            <div className="mt-8 space-y-4">
              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${contactInfo.email}?subject=Project Inquiry`}
                  className="btn btn-primary inline-flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Send an email
                </a>

                <a
                  href={contactMethods.find((m) => m.id === "whatsapp")?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary inline-flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>

              {/* Copy email — hard edge */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="group flex w-full items-center justify-between border border-rule-soft bg-bg-surface px-4 py-3 transition-all duration-200 hover:border-accent"
              >
                <span className="text-sm text-ink-soft">{contactInfo.email}</span>
                <span aria-live="polite" className="flex items-center gap-1.5 text-xs text-ink-mute transition-colors duration-200 group-hover:text-accent">
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
          <motion.div
            custom={0.12}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="glass flex flex-col p-6 sm:p-7"
          >
            {/* Location */}
            <div className="flex items-center gap-3 border-b border-rule-soft pb-5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-accent-tint">
                <MapPin className="h-4 w-4 text-accent" />
              </div>
              <div>
                <p className="text-sm font-medium text-ink">{contactInfo.location}</p>
                <p className="text-xs text-ink-mute">
                  {contactInfo.timezone} · Remote worldwide
                </p>
              </div>
            </div>

            {/* Contact methods */}
            <div className="mt-5 space-y-2 border-b border-rule-soft pb-5">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.28em] text-ink-mute">
                Contact
              </p>

              {contactMethods.map((method) => {
                const isExternal = method.href.startsWith("http")
                return (
                  <a
                    key={method.id}
                    href={method.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between border border-rule-soft bg-bg-surface px-3.5 py-2.5 transition-all duration-200 hover:border-accent"
                  >
                    <div>
                      <span className="text-xs font-medium text-ink">{method.title}</span>
                      <span className="ml-2 text-xs text-ink-mute">{method.value}</span>
                    </div>
                    <ArrowUpRight className="h-3.5 w-3.5 text-ink-mute transition-colors duration-200 group-hover:text-accent" />
                  </a>
                )
              })}
            </div>

            {/* Socials */}
            <div className="mt-5 space-y-2">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.28em] text-ink-mute">
                Presence
              </p>

              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border border-rule-soft bg-bg-surface px-3.5 py-2.5 transition-all duration-200 hover:border-accent"
                >
                  <div>
                    <span className="text-xs font-medium text-ink">{social.name}</span>
                    <span className="ml-2 text-xs text-ink-mute">{social.username}</span>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 text-ink-mute transition-colors duration-200 group-hover:text-accent" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
