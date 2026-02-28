"use client"
import { motion } from "framer-motion"
import { Mail, MapPin, Clock, Sparkles, Heart, Send, ArrowUpRight, Copy, Check } from "lucide-react"
import { useState } from "react"
import SectionHeader from "@/components/ui/SectionHeader"
import ContactCard from "@/components/ui/ContactCard"
import SocialLinkCard from "@/components/ui/SocialLinkCard"
import Button from "@/components/ui/Button"
import { contactInfo, socialLinks, contactMethods } from "@/data/contact"

export default function Contact() {
  const [emailCopied, setEmailCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email)
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  return (
    <section id="contact" className="section-padding bg-light-100 dark:bg-dark-100 relative overflow-hidden">
      <div className="grid-pattern absolute inset-0 opacity-30" />
      <div className="bg-primary-500/10 absolute top-1/4 -left-32 h-96 w-96 rounded-full blur-3xl" />
      <div className="bg-primary-500/5 absolute -right-32 bottom-1/4 h-96 w-96 rounded-full blur-3xl" />
      <div className="section-container relative z-10">
        <SectionHeader badge="Contact" title={{ main: "Let&apos;s Work", highlight: "Together" }} subtitle="Have a project in mind or just want to say hello? I&apos;d love to hear from you!" />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <div className="glass border-light-300 dark:border-dark-400 flex items-center gap-2 rounded-full border px-4 py-2">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
            </span>
            <span className="text-dark dark:text-light text-sm font-medium">{contactInfo.availability}</span>
          </div>
          <div className="glass border-light-300 dark:border-dark-400 flex items-center gap-2 rounded-full border px-4 py-2">
            <Clock className="text-primary-500 h-4 w-4" />
            <span className="text-dark-400 dark:text-light-400 text-sm">{contactInfo.responseTime}</span>
          </div>
        </motion.div>
        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {contactMethods.map((method, index) => (
            <ContactCard key={method.title} title={method.title} description={method.description} icon={method.icon} value={method.value} href={method.href} cta={method.cta} primary={method.primary} index={index} />
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16 flex flex-col items-center justify-center">
          <p className="text-dark-400 dark:text-light-400 mb-3 text-sm">Or copy my email address directly</p>
          <button onClick={handleCopyEmail} className="group glass border-light-300 dark:border-dark-400 hover:border-primary-500/50 hover:shadow-glow flex items-center gap-3 rounded-xl border px-6 py-3 transition-all duration-300">
            <Mail className="text-primary-500 h-5 w-5" />
            <span className="text-dark dark:text-light font-medium">{contactInfo.email}</span>
            <div className="bg-light-200 dark:bg-dark-300 group-hover:bg-primary-500 flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-300">{emailCopied ? <Check className="text-primary-500 h-4 w-4 group-hover:text-white" /> : <Copy className="text-dark-400 dark:text-light-400 h-4 w-4 group-hover:text-white" />}</div>
          </button>
          {emailCopied && (
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-primary-500 mt-2 text-sm">
              Email copied to clipboard!
            </motion.p>
          )}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-8 flex items-center justify-center gap-3">
          <div className="to-primary-500/50 h-px flex-1 bg-linear-to-r from-transparent" />
          <div className="glass border-light-300 dark:border-dark-400 flex items-center gap-2 rounded-full border px-4 py-2">
            <Sparkles className="text-primary-500 h-4 w-4" />
            <span className="text-dark dark:text-light text-sm font-medium">Connect With Me</span>
          </div>
          <div className="to-primary-500/50 h-px flex-1 bg-linear-to-l from-transparent" />
        </motion.div>
        <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socialLinks.map((social, index) => (
            <SocialLinkCard key={social.name} name={social.name} url={social.url} icon={social.icon} username={social.username} description={social.description} color={social.color} index={index} />
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="glass border-light-300 dark:border-dark-400 relative overflow-hidden rounded-2xl border p-8">
          <div className="bg-primary-500/10 absolute top-0 right-0 h-64 w-64 rounded-full blur-3xl" />
          <div className="relative z-10 flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-4">
              <div className="bg-primary-500/10 flex h-16 w-16 items-center justify-center rounded-2xl">
                <MapPin className="text-primary-500 h-8 w-8" />
              </div>
              <div>
                <h3 className="text-dark dark:text-light font-heading mb-1 text-xl font-bold">Based in {contactInfo.location}</h3>
                <p className="text-dark-400 dark:text-light-400 text-sm">Available for remote work worldwide & local projects</p>
              </div>
            </div>
            <div className="bg-primary-500/10 border-primary-500/20 flex items-center gap-2 rounded-xl border px-4 py-2">
              <span className="text-2xl">🌍</span>
              <span className="text-primary-500 text-sm font-medium">GMT+1 (WAT)</span>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-16 text-center">
          <div className="glass border-light-300 dark:border-dark-400 inline-flex flex-col items-center gap-4 rounded-2xl border p-8">
            <div className="bg-primary-500/10 flex h-16 w-16 items-center justify-center rounded-full">
              <Heart className="text-primary-500 h-8 w-8" />
            </div>
            <div>
              <h3 className="text-dark dark:text-light font-heading mb-2 text-xl font-bold">Let&apos;s Create Something Amazing</h3>
              <p className="text-dark-400 dark:text-light-400 mb-4 max-w-md">Whether you have a project idea, a question, or just want to connect, I&apos;m always excited to hear from fellow developers and potential collaborators.</p>
            </div>
            <Button variant="primary" size="lg" icon={Send} iconPosition="right" href={`mailto:${contactInfo.email}?subject=Hello Emmanuel!&body=Hi Emmanuel,%0D%0A%0D%0AI&apos;d like to discuss...`}>
              Start a Conversation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
