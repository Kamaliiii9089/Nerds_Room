"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Swords, Trophy, Users, MapPin, Heart, TrendingUp } from "lucide-react"

export function StatsSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const targetDate = new Date("2025-01-14T00:00:00").getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
        setIsLoaded(true)
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        setIsLoaded(true)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-[#f8f4ff] relative overflow-hidden">
      {/* Thick black separator */}
      <div className="h-3 bg-black w-full absolute top-0 left-0"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          
          {/* Row 1 - Title Banner */}
          <div className="md:col-span-4 lg:col-span-6 bg-gradient-to-r from-[#073f90] to-[#c648d7] rounded-3xl px-6 md:px-10 py-6 md:py-8 shadow-2xl border-4 border-black hover:scale-[1.01] transition-all duration-300">
            <p className="text-lg md:text-2xl lg:text-3xl text-white font-bold leading-relaxed text-center">
              India&apos;s Premier <span className="text-[#f1c33a] drop-shadow-sm">AI Battleground</span>. Build, Deploy, and Conquer across <span className="text-[#f1c33a] drop-shadow-sm">30+ Venues</span>.
            </p>
          </div>
          
          {/* Row 2 */}
          {/* Venues - Top Left */}
          <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#5a9e7f] to-[#4a8a6f] rounded-3xl p-8 shadow-xl hover:scale-[1.02] transition-all duration-300 border-4 border-black">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-white/80" />
              <Heart className="w-4 h-4 text-white/60" />
            </div>
            <div className="text-7xl md:text-8xl font-black text-white mb-2">30+</div>
            <div className="text-white/90 text-sm font-bold uppercase tracking-wide">Venues Nationwide</div>
          </div>

          {/* Warriors - Top Center-Left */}
          <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#6b7280] to-[#4b5563] rounded-3xl p-8 shadow-xl hover:scale-[1.02] transition-all duration-300 border-4 border-black">
            <div className="text-white/70 text-sm font-bold uppercase tracking-wider mb-2">New Warriors</div>
            <div className="text-6xl md:text-7xl font-black text-[#f1c33a] mb-2">1000+</div>
            <div className="flex items-center gap-2 text-[#4ade80] font-bold text-lg">
              <TrendingUp className="w-5 h-5" />
              <span>+41%</span>
            </div>
          </div>

          {/* Team Info - Top Right */}
          <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#e0d4f7] to-[#d4c5f0] rounded-3xl p-8 shadow-xl hover:scale-[1.02] transition-all duration-300 border-4 border-black">
            <div className="inline-block bg-[#f1c33a] text-black px-4 py-2 rounded-2xl font-black text-sm mb-4">
              Team of passionate designers and developers
            </div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#073f90] to-[#c648d7] border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8a5831] to-[#6b4625] border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c648d7] to-[#a038b7] border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f1c33a] to-[#d1a31a] border-2 border-white flex items-center justify-center text-xs font-bold">+2</div>
              </div>
            </div>
            <div className="text-2xl font-black text-[#073f90]">Daily</div>
            <div className="text-lg font-bold text-[#073f90]/80">New clients</div>
            <div className="flex items-baseline gap-2 mt-2">
              <div className="text-5xl font-black text-[#073f90]">54</div>
              <div className="text-[#4ade80] font-bold text-lg">+40%</div>
            </div>
          </div>

          {/* Row 2 */}
          {/* Timer - Large Center Card */}
          <div className="md:col-span-4 lg:col-span-4 bg-gradient-to-br from-[#d4c5f0] to-[#c4b5e0] rounded-3xl p-10 md:p-12 shadow-2xl hover:scale-[1.01] transition-all duration-300 relative overflow-hidden border-4 border-black">
            <div className="absolute top-8 left-8 bg-[#1e293b] text-white px-4 py-2 rounded-xl text-sm font-bold">
              {isLoaded ? `${timeLeft.hours.toString().padStart(2, "0")}h ${timeLeft.minutes.toString().padStart(2, "0")}m` : "2h 12m"}
            </div>
            
            <div className="mt-12">
              <div className="text-[#4a5568] font-black text-xl mb-4">Complete</div>
              <div className="inline-block bg-[#d4c5f0] px-6 py-3 rounded-2xl mb-6">
                <div className="text-3xl md:text-4xl font-black text-[#1e293b]">Revenue This Year</div>
              </div>
              
              <div className="flex items-center gap-8 mb-8">
                <div className="text-6xl md:text-7xl font-black text-[#1e293b]">4.93%</div>
                <div className="flex items-center gap-2 text-[#ef4444]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L11 6.414V16a1 1 0 11-2 0V6.414L7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3z"/>
                  </svg>
                  <span className="text-xl font-bold">-2.3%</span>
                </div>
              </div>

              {/* Chart Area */}
              <div className="relative h-32">
                <svg className="w-full h-full" viewBox="0 0 800 120" preserveAspectRatio="none">
                  <path
                    d="M 0,80 Q 100,60 200,65 T 400,55 T 600,45 T 800,35"
                    fill="url(#gradient)"
                    stroke="#7c3aed"
                    strokeWidth="3"
                    opacity="0.8"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.05"/>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-[#4a5568] font-medium px-2">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                </div>
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2">
                  <div className="w-3 h-3 rounded-full bg-[#7c3aed] ring-4 ring-[#7c3aed]/30"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Nerds Room Logo - Right Card */}
          <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#f8d7da] to-[#f5c2c7] rounded-3xl p-12 shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col items-center justify-center border-4 border-black">
            <div className="w-20 h-20 mb-6 relative">
              <div className="absolute inset-0 border-4 border-[#073f90] rounded-full"></div>
              <div className="absolute inset-3 border-4 border-[#073f90] rounded-full"></div>
              <div className="absolute inset-6 border-4 border-[#073f90] rounded-full"></div>
            </div>
            <div className="text-4xl md:text-5xl font-black text-[#073f90] text-center">NERDS ROOM</div>
          </div>

          {/* Row 3 */}
          {/* Font/Color Card - Bottom Left */}
          <div className="md:col-span-2 lg:col-span-2 bg-[#f1c33a] rounded-3xl p-8 shadow-xl hover:scale-[1.02] transition-all duration-300 border-4 border-black">
            <div className="text-3xl font-black text-[#1e293b] mb-4">Font</div>
            <div className="text-xl text-[#1e293b]/80 mb-6">Sk- Modernist</div>
            <div className="flex gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#1e293b]"></div>
              <div className="w-12 h-12 rounded-xl bg-[#9ca3af]"></div>
              <div className="w-12 h-12 rounded-xl bg-[#ef4444]"></div>
              <div className="w-12 h-12 rounded-xl bg-[#fca5a5]"></div>
            </div>
          </div>

          {/* Prize Pool - Bottom Center */}
          <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#5a9e7f] to-[#4a8a6f] rounded-3xl p-8 shadow-xl hover:scale-[1.02] transition-all duration-300 border-4 border-black">
            <div className="text-white/90 text-base font-bold mb-2">We Build Future of</div>
            <div className="text-3xl md:text-4xl font-black text-[#f1c33a] mb-4">Design Industry</div>
            <div className="text-white/80 text-sm">Crafting Meaningful UX/UI Design</div>
          </div>

          {/* Tracks - Bottom Right */}
          <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#5a9e7f] to-[#4a8a6f] rounded-3xl p-12 shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center border-4 border-black">
            <div className="relative">
              <div className="absolute inset-0 border-[6px] border-[#f1c33a]/30 rounded-full animate-pulse"></div>
              <div className="absolute inset-6 border-[6px] border-[#f1c33a]/50 rounded-full"></div>
              <div className="absolute inset-12 border-[6px] border-[#f1c33a] rounded-full flex items-center justify-center">
                <div className="text-white font-black text-6xl">3</div>
              </div>
              <div className="w-32 h-32"></div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <Link
            href="https://devfolio.co"
            target="_blank"
            className="inline-flex items-center justify-center gap-3 bg-[#f1c33a] hover:bg-[#073f90] text-[#073f90] hover:text-white px-12 py-5 rounded-2xl font-black text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            <Swords className="w-6 h-6" />
            Enter Battlefield
          </Link>
        </div>
      </div>
    </section>
  )
}
