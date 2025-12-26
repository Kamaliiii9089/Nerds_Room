"use client"

import { Volume2, VolumeX } from "lucide-react"

interface LandingScreenProps {
  onEnter: (withSound: boolean) => void
}

export function LandingScreen({ onEnter }: LandingScreenProps) {

  const handleEnterWithSound = () => {
    onEnter(true)
  }

  const handleEnterWithoutSound = () => {
    onEnter(false)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xl bg-white/30">
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-center justify-center">
        {/* Enter with Music */}
        <button
          onClick={handleEnterWithSound}
          className="group px-12 py-6 bg-white/90 hover:bg-white text-black text-xl md:text-2xl font-black rounded-2xl border-4 border-black shadow-2xl hover:scale-110 transition-all duration-300 backdrop-blur-sm"
          suppressHydrationWarning
        >
          <div className="flex items-center gap-3">
            <Volume2 className="w-6 h-6" />
            <span>Enter with music</span>
          </div>
        </button>

        {/* Enter without Music */}
        <button
          onClick={handleEnterWithoutSound}
          className="group px-12 py-6 bg-white/90 hover:bg-white text-black text-xl md:text-2xl font-black rounded-2xl border-4 border-black shadow-2xl hover:scale-110 transition-all duration-300 backdrop-blur-sm"
          suppressHydrationWarning
        >
          <div className="flex items-center gap-3">
            <VolumeX className="w-6 h-6" />
            <span>Enter without music</span>
          </div>
        </button>
      </div>
    </div>
  )
}
