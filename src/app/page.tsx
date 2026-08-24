import HomeContent from "@/components/sections/HomeContent"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-bg transition-colors duration-200">
        <HomeContent />
      </main>
      <Footer />
    </>
  )
}
