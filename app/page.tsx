"use client"

import { useState, useRef, useEffect } from "react"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { AboutSection } from "@/components/about-section"
import { TracksSection } from "@/components/tracks-section"
import { RoundsSection } from "@/components/rounds-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { LandingScreen } from "@/components/landing-screen"
import { Volume2, VolumeX } from "lucide-react"


export default function Home() {
  const [hasEntered, setHasEntered] = useState(false)
  const [withSound, setWithSound] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const introAudioRef = useRef<HTMLAudioElement>(null)
  const combatAudioRef = useRef<HTMLAudioElement>(null)

  const handleEnter = (soundEnabled: boolean) => {
    setWithSound(soundEnabled)
    setHasEntered(true)
    setIsMuted(!soundEnabled)
    
    // Play audio if sound is enabled
    if (soundEnabled && introAudioRef.current) {
      introAudioRef.current.play().catch(err => {
        console.error("Intro audio error:", err)
      })
      
      // When intro ends, play combat music
      introAudioRef.current.onended = () => {
        if (combatAudioRef.current) {
          combatAudioRef.current.play().catch(err => {
            console.error("Combat audio error:", err)
          })
        }
      }
    }
  }

  const toggleMute = () => {
    if (combatAudioRef.current) {
      if (isMuted) {
        // Unmute - start playing combat music
        combatAudioRef.current.play().catch(err => {
          console.error("Combat audio error:", err)
        })
        setIsMuted(false)
      } else {
        // Mute - pause combat music
        combatAudioRef.current.pause()
        setIsMuted(true)
      }
    }
    
    // Also mute/unmute intro if it's still playing
    if (introAudioRef.current && !introAudioRef.current.ended) {
      if (isMuted) {
        introAudioRef.current.play().catch(err => console.error("Intro audio error:", err))
      } else {
        introAudioRef.current.pause()
      }
    }
  }

  if (!hasEntered) {
    return (
      <>
        <main className="min-h-screen bg-[#0a1628] text-white overflow-x-hidden">
          <Navbar />
          <HeroSection />
          <AboutSection />
          <StatsSection />
          <TracksSection />
          <RoundsSection />
          <SponsorsSection />
          <FAQSection />
          <Footer />
        </main>
        <LandingScreen onEnter={handleEnter} />
        
        {/* Audio elements - kept in parent to prevent removal */}
        <audio ref={introAudioRef} preload="auto">
          <source src="/audio/01. Clash of Clans Intro.mp3" type="audio/mpeg" />
        </audio>
        <audio ref={combatAudioRef} loop preload="auto">
          <source src="/audio/26. Combat Music.mp3" type="audio/mpeg" />
        </audio>
      </>
    )
  }
 
  return (
    <>
      <main className="min-h-screen bg-[#0a1628] text-white overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <TracksSection />
        <RoundsSection />
        <SponsorsSection />
        <FAQSection />
        <Footer />
      </main>
      
      {/* Floating Audio Control Button */}
      <button
        onClick={toggleMute}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-br from-[#f1c33a] to-[#d1a31a] rounded-full shadow-2xl border-4 border-black hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label={isMuted ? "Unmute audio" : "Mute audio"}
      >
        {isMuted ? (
          <VolumeX className="w-8 h-8 text-black" />
        ) : (
          <Volume2 className="w-8 h-8 text-black animate-pulse" />
        )}
        <div className="absolute inset-0 rounded-full border-4 border-[#f1c33a] animate-ping opacity-20"></div>
      </button>
      
      {/* Audio elements - persist after entering */}
      <audio ref={introAudioRef} preload="auto">
        <source src="/audio/01. Clash of Clans Intro.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={combatAudioRef} loop preload="auto">
        <source src="/audio/26. Combat Music.mp3" type="audio/mpeg" />
      </audio>
    </>
  )
}
