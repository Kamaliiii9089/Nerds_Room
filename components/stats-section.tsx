"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Swords, Trophy, Users, MapPin, Zap, Brain, Film, Code, Rocket, Target, Award, Clock } from "lucide-react"

export function StatsSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const targetDate = new Date("2026-01-14T00:00:00").getTime()

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
      setIsLoaded(true)
    }

    // Calculate immediately on mount
    calculateTimeLeft()
    
    // Then update every second
    const interval = setInterval(calculateTimeLeft, 1000)

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
              <Target className="w-4 h-4 text-white/60" />
            </div>
            <div className="text-7xl md:text-8xl font-black text-white mb-2">30+</div>
            <div className="text-white/90 text-sm font-bold uppercase tracking-wide">Venues Nationwide</div>
          </div>

          {/* Warriors/Participants */}
          <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#6b7280] to-[#4b5563] rounded-3xl p-8 shadow-xl hover:scale-[1.02] transition-all duration-300 border-4 border-black">
            <div className="text-white/70 text-sm font-bold uppercase tracking-wider mb-2">Expected Warriors</div>
            <div className="text-6xl md:text-7xl font-black text-[#f1c33a] mb-2">5000+</div>
            <div className="flex items-center gap-2 text-[#4ade80] font-bold text-lg">
              <Users className="w-5 h-5" />
              <span>Participants</span>
            </div>
          </div>

          {/* Prize Pool Card */}
          <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#e0d4f7] to-[#d4c5f0] rounded-3xl p-8 shadow-xl hover:scale-[1.02] transition-all duration-300 border-4 border-black">
            <div className="inline-block bg-[#f1c33a] text-black px-4 py-2 rounded-2xl font-black text-sm mb-4">
              <Trophy className="w-4 h-4 inline mr-2" />
              Prize Pool
            </div>
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-8 h-8 text-[#073f90]" />
            </div>
            <div className="text-5xl font-black text-[#073f90]">₹10L+</div>
            <div className="text-lg font-bold text-[#073f90]/80 mt-2">Cash + Prizes + Swag</div>
          </div>

          {/* Row 2 */}
          {/* Countdown Timer - Large Center Card */}
          <div className="md:col-span-4 lg:col-span-4 bg-gradient-to-br from-[#d4c5f0] to-[#c4b5e0] rounded-3xl p-6 md:p-12 shadow-2xl hover:scale-[1.01] transition-all duration-300 relative overflow-hidden border-4 border-black">
            <div className="bg-[#1e293b] text-white px-3 md:px-4 py-2 rounded-xl text-xs md:text-sm font-bold flex items-center gap-2 w-fit">
              <Clock className="w-3 h-3 md:w-4 md:h-4" />
              Battle Begins Soon
            </div>
            
            <div className="mt-6 md:mt-12">
              <div className="text-[#4a5568] font-black text-base md:text-xl mb-2 md:mb-4">Countdown to</div>
              <div className="inline-block bg-[#d4c5f0] px-4 md:px-6 py-2 md:py-3 rounded-2xl mb-4 md:mb-6">
                <div className="text-2xl md:text-4xl font-black text-[#1e293b]">AI CLASH</div>
              </div>
              
              {/* Countdown Display */}
              <div className="grid grid-cols-4 gap-2 md:flex md:items-center md:justify-center md:gap-8 mb-6 md:mb-8">
                <div className="text-center bg-white/30 rounded-xl p-2 md:p-0 md:bg-transparent">
                  <div className="text-2xl md:text-6xl font-black text-[#1e293b]">{isLoaded ? timeLeft.days : "--"}</div>
                  <div className="text-[10px] md:text-sm font-bold text-[#4a5568] uppercase">Days</div>
                </div>
                <div className="text-center bg-white/30 rounded-xl p-2 md:p-0 md:bg-transparent">
                  <div className="text-2xl md:text-6xl font-black text-[#1e293b]">{isLoaded ? timeLeft.hours.toString().padStart(2, "0") : "--"}</div>
                  <div className="text-[10px] md:text-sm font-bold text-[#4a5568] uppercase">Hours</div>
                </div>
                <div className="text-center bg-white/30 rounded-xl p-2 md:p-0 md:bg-transparent">
                  <div className="text-2xl md:text-6xl font-black text-[#1e293b]">{isLoaded ? timeLeft.minutes.toString().padStart(2, "0") : "--"}</div>
                  <div className="text-[10px] md:text-sm font-bold text-[#4a5568] uppercase">Mins</div>
                </div>
                <div className="text-center bg-white/30 rounded-xl p-2 md:p-0 md:bg-transparent">
                  <div className="text-2xl md:text-6xl font-black text-[#f1c33a]">{isLoaded ? timeLeft.seconds.toString().padStart(2, "0") : "--"}</div>
                  <div className="text-[10px] md:text-sm font-bold text-[#4a5568] uppercase">Secs</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative h-3 md:h-4 bg-[#1e293b]/20 rounded-full overflow-hidden">
                <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#7c3aed] to-[#c648d7] rounded-full animate-pulse" style={{ width: "65%" }}></div>
              </div>
              <div className="text-center mt-2 md:mt-3 text-xs md:text-sm font-bold text-[#4a5568]">Registration Open • Jan 14, 2026</div>
            </div>
          </div>

          {/* Grand Finale Venue */}
          <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#f8d7da] to-[#f5c2c7] rounded-3xl p-8 shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col items-center justify-center border-4 border-black">
            <Rocket className="w-16 h-16 text-[#073f90] mb-4" />
            <div className="text-2xl md:text-3xl font-black text-[#073f90] text-center mb-2">Grand Finale</div>
            <div className="text-lg font-bold text-[#073f90]/80 text-center">IIT Jodhpur</div>
            <div className="mt-4 bg-[#073f90] text-white px-4 py-2 rounded-xl text-sm font-bold">
              Round 3
            </div>
          </div>

          {/* Row 3 */}
          {/* Elite Mentorship */}
          <div className="md:col-span-2 lg:col-span-2 bg-[#f1c33a] rounded-3xl p-8 shadow-xl hover:scale-[1.02] transition-all duration-300 border-4 border-black">
            <Brain className="w-10 h-10 text-[#1e293b] mb-4" />
            <div className="text-3xl font-black text-[#1e293b] mb-2">Elite Mentorship</div>
            <div className="text-lg text-[#1e293b]/80 mb-4">Expert Guidance</div>
            <div className="text-sm text-[#1e293b]/70">Train with industry veterans and AI experts. Get personalized guidance to sharpen your skills and dominate the competition.</div>
          </div>

          {/* Network & Connect */}
          <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#073f90] to-[#0a4da8] rounded-3xl p-8 shadow-xl hover:scale-[1.02] transition-all duration-300 border-4 border-black">
            <Code className="w-10 h-10 text-white mb-4" />
            <div className="text-3xl font-black text-white mb-2">Network & Connect</div>
            <div className="text-lg text-white/80 mb-4">Build Alliances</div>
            <div className="text-sm text-white/70">Forge powerful connections with fellow warriors, innovators, and tech leaders. Build your tribe in the AI revolution.</div>
          </div>

          {/* Rewards & Glory */}
          <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#c648d7] to-[#a038b7] rounded-3xl p-8 shadow-xl hover:scale-[1.02] transition-all duration-300 border-4 border-black">
            <Film className="w-10 h-10 text-white mb-4" />
            <div className="text-3xl font-black text-white mb-2">Rewards & Glory</div>
            <div className="text-lg text-white/80 mb-4">Victory Awaits</div>
            <div className="text-sm text-white/70">Claim your share of glory with massive prizes, exclusive swag, and recognition. Champions earn more than just bragging rights.</div>
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
