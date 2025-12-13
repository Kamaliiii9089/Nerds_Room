"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Swords, Trophy, Users, MapPin } from "lucide-react"

export function HeroSection() {
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
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-[#073f90]">
      {/* Background Image - Restored Background 1 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background.png"
          alt="Clash of Clans Battlefield"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center w-full flex flex-col items-center">

        {/* Top: Presented By Badge */}
        {/* Top: Presented By (Prominent Logo) */}
        <div className="mb-10 animate-fade-in-down flex flex-col items-center">
          <span className="text-[#f1c33a] font-black text-sm uppercase tracking-[0.3em] mb-4 text-shadow-sm drop-shadow-md">
            Presented By
          </span>
          <div className="relative group transition-transform hover:scale-105 duration-300">
            <div className="absolute inset-0 bg-[#c648d7] blur-2xl opacity-20 group-hover:opacity-40 rounded-full transition-opacity" />
            <Image
              src="/images/nerds-logo.png"
              alt="Nerds Room"
              width={400}
              height={160}
              className="h-32 md:h-48 w-auto object-contain brightness-0 invert drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] relative z-10"
            />
          </div>
        </div>

        {/* Center: Hero Title - Graphic Image */}
        <div className="mb-12 relative z-20 hover:scale-105 transition-transform duration-500 ease-out">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#c648d7]/20 blur-3xl rounded-full" />
          <Image
            src="/images/nerds-ai-clash-title.png"
            alt="NERDS AI CLASH"
            width={900}
            height={350}
            className="relative mx-auto w-full max-w-[400px] md:max-w-[700px] lg:max-w-[850px] h-auto drop-shadow-2xl"
            priority
          />
        </div>

        {/* Subtitle - Glass Card for Visibility */}
        <div className="mb-8 relative z-20">
          <div className="bg-[#073f90]/80 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-4 shadow-xl inline-block max-w-3xl">
            <p className="text-xl md:text-2xl text-white font-bold leading-relaxed">
              India&apos;s Premier <span className="text-[#f1c33a] drop-shadow-sm">AI Battleground</span>. Build, Deploy, and Conquer across <span className="text-[#c648d7] drop-shadow-sm">30+ Venues</span>.
            </p>
          </div>
        </div>

        {/* Bottom: Modern Glass Stats Grid (Replaces Wooden Board) */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-6 mt-4">

          {/* Left Stats */}
          <div className="md:col-span-3 flex flex-col gap-4">
            {[
              { label: "Venues", value: "30+", icon: MapPin },
              { label: "Warriors", value: "1000+", icon: Users }
            ].map((stat, i) => (
              <div key={i} className="group bg-[#073f90]/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-[#073f90]/60 hover:border-[#c648d7]/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <stat.icon className="w-5 h-5 text-[#f1c33a]" />
                  <span className="text-white/60 text-xs font-bold uppercase tracking-wider">{stat.label}</span>
                </div>
                <div className="text-3xl font-black text-white">{stat.value}</div>
              </div>
            ))}
          </div>

          {/* Center Timer - Hero Card */}
          <div className="md:col-span-6 bg-gradient-to-br from-[#073f90]/60 to-[#c648d7]/20 backdrop-blur-2xl border-2 border-[#f1c33a]/50 rounded-3xl p-8 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(7,63,144,0.4)] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#f1c33a] to-transparent opacity-50" />

            <p className="text-[#f1c33a] mb-6 text-sm font-black uppercase tracking-[0.3em]">War Begins In</p>
            {isLoaded ? (
              <div className="flex items-baseline gap-2 md:gap-6">
                {[
                  { value: timeLeft.days, label: "Days" },
                  { value: timeLeft.hours, label: "Hours" },
                  { value: timeLeft.minutes, label: "Mins" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center">
                    <div className="text-5xl md:text-7xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] tabular-nums">
                      {item.value.toString().padStart(2, "0")}
                    </div>
                    <div className="text-xs text-[#c648d7] font-bold uppercase tracking-wider mt-2">{item.label}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-4xl font-black text-white">Jan 14, 2025</div>
            )}

            <div className="mt-8 w-full max-w-sm">
              <Link
                href="https://devfolio.co"
                target="_blank"
                className="flex items-center justify-center gap-3 w-full bg-[#f1c33a] hover:bg-white text-[#073f90] py-4 rounded-xl font-black text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Swords className="w-5 h-5" />
                Enter Battlefield
              </Link>
            </div>
          </div>

          {/* Right Stats */}
          <div className="md:col-span-3 flex flex-col gap-4">
            {[
              { label: "Prize Pool", value: "10L+", icon: Trophy },
              { label: "Tracks", value: "3", icon: Swords }
            ].map((stat, i) => (
              <div key={i} className="group bg-[#073f90]/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-[#073f90]/60 hover:border-[#c648d7]/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-white/60 text-xs font-bold uppercase tracking-wider">{stat.label}</span>
                  <stat.icon className="w-5 h-5 text-[#f1c33a] ml-auto" />
                </div>
                <div className="text-3xl font-black text-white text-right">{stat.value}</div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Global Style for Text Stroke in this component */}
      <style jsx global>{`
        .text-stroke-white {
          -webkit-text-stroke: 2px white;
          color: transparent;
        }
        .text-stroke-purple {
           background: linear-gradient(180deg, #fff 0%, #c648d7 100%);
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;
           filter: drop-shadow(0 4px 0 #8a5831);
        }
      `}</style>
    </section>
  )
}
