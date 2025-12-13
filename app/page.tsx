import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TracksSection } from "@/components/tracks-section"
import { RoundsSection } from "@/components/rounds-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a1628] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TracksSection />
      <RoundsSection />
      <SponsorsSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
