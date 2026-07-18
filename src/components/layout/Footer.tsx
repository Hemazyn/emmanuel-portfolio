import { navLinks, socialLinks, personalInfo } from "@/data/navigation"
import FooterContent from "./FooterContent"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-light-100 dark:bg-dark-100 border-light-300 dark:border-dark-400 relative overflow-hidden border-t">
      <div className="pointer-events-none absolute inset-0">
        <div className="grid-pattern absolute inset-0 opacity-[0.03] dark:opacity-[0.06]" />
      </div>

      <FooterContent
        navLinks={navLinks}
        socialLinks={socialLinks}
        email={personalInfo.email}
        resumeUrl={personalInfo.resumeUrl}
        resumeFileName={personalInfo.resumeFileName}
        location={personalInfo.location}
        currentYear={currentYear}
      />
    </footer>
  )
}
