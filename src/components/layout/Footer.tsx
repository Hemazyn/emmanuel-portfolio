import { navLinks, socialLinks, personalInfo } from "@/data/navigation"
import FooterContent from "./FooterContent"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-rule-soft bg-bg-surface relative overflow-hidden border-t">
      <div className="pointer-events-none absolute inset-0">
        <div className="dot-pattern absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" />
      </div>

      <FooterContent navLinks={navLinks} socialLinks={socialLinks} email={personalInfo.email} resumeUrl={personalInfo.resumeUrl} resumeFileName={personalInfo.resumeFileName} location={personalInfo.location} currentYear={currentYear} />
    </footer>
  )
}
