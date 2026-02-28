import HomeContent from "@/components/sections/HomeContent"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-light dark:bg-dark min-h-screen transition-colors duration-300">
        <HomeContent />
      </main>
      <Footer />
    </>
  )
}
