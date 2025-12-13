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
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden bg-[#073f90]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/copy-20of-20your-20paragraph-20text-20251213-161852-0000.png"
          alt="Clash of Clans Battlefield"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#073f90]/60" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-32 left-8 text-5xl animate-float-slow hidden md:block">
        <span role="img" aria-label="sword">
          &#9876;
        </span>
      </div>
      <div className="absolute top-40 right-12 text-4xl animate-float-medium hidden md:block">
        <span role="img" aria-label="castle">
          &#127984;
        </span>
      </div>
      <div className="absolute bottom-32 left-16 text-3xl animate-float-fast hidden md:block">
        <span role="img" aria-label="shield">
          &#128737;
        </span>
      </div>
      <div className="absolute bottom-40 right-20 text-3xl animate-float-slow hidden md:block">
        <span role="img" aria-label="crown">
          &#128081;
        </span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <div className="mb-6 flex flex-col items-center gap-4">
          {/* Nerds Room Community Logo */}
          <div className="bg-white rounded-2xl p-3 shadow-lg">
            <Image
              src="/images/your-20paragraph-20text-20251210-202128-0000.png"
              alt="Nerds Room"
              width={140}
              height={56}
              className="h-12 w-auto object-contain"
              priority
            />
          </div>
          <span className="text-white/80 font-bold text-sm uppercase tracking-widest">presents</span>
        </div>

        {/* Nerds AI Clash Logo - Main Title */}
        <div className="mb-6">
          <Image
            src="/images/copy-20of-20your-20paragraph-20text-20251213-161837-0000.png"
            alt="NERDS AI CLASH"
            width={550}
            height={200}
            className="mx-auto w-[300px] sm:w-[400px] md:w-[550px] h-auto drop-shadow-2xl"
            priority
          />
        </div>

        {/* Badge */}
        <div className="mb-6">
          <div className="inline-block px-6 py-2 bg-[#f1c33a] rounded-full shadow-lg">
            <span className="text-[#073f90] font-black text-sm uppercase tracking-widest">
              India's Premier AI Hackathon
            </span>
          </div>
        </div>

        {/* Date Display */}
        <div className="mb-6">
          <p className="text-2xl md:text-3xl text-white font-black">January 14th, 2025</p>
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-white/90 mb-10 font-bold max-w-2xl mx-auto">
          Build. Battle. Conquer the AI Arena. Join 1000+ developers across 30 venues nationwide.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto">
          {[
            { value: "30+", label: "Battle Venues", icon: MapPin },
            { value: "3", label: "War Tracks", icon: Swords },
            { value: "10L+", label: "Prize Pool", icon: Trophy },
            { value: "1000+", label: "Warriors", icon: Users },
          ].map((stat) => (
            <div
              key={stat.label}
              className="group bg-white rounded-2xl p-5 border-4 border-[#f1c33a] transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center bg-[#073f90]">
                <stat.icon className="w-5 h-5 text-[#f1c33a]" />
              </div>
              <div className="text-2xl md:text-3xl font-black text-[#073f90]">{stat.value}</div>
              <div className="text-xs text-[#8a5831] font-bold uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Countdown Timer */}
        <div className="mb-10 max-w-2xl mx-auto">
          <div className="bg-white border-4 border-[#f1c33a] rounded-2xl p-6 shadow-xl">
            <p className="text-[#c648d7] mb-4 text-sm uppercase tracking-widest font-black">Battle Starts In</p>
            {isLoaded ? (
              <div className="flex justify-center gap-3 md:gap-4">
                {[
                  { value: timeLeft.days, label: "Days" },
                  { value: timeLeft.hours, label: "Hours" },
                  { value: timeLeft.minutes, label: "Mins" },
                  { value: timeLeft.seconds, label: "Secs" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center">
                    <div className="bg-[#073f90] rounded-xl px-3 py-3 md:px-6 md:py-4 min-w-[60px] md:min-w-[80px]">
                      <div className="text-xl md:text-4xl font-black text-[#f1c33a] tabular-nums">
                        {item.value.toString().padStart(2, "0")}
                      </div>
                    </div>
                    <div className="text-xs text-[#073f90] uppercase tracking-wide mt-2 font-bold">{item.label}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-2xl font-black text-[#073f90]">January 14th, 2025</div>
            )}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="https://devfolio.co"
            target="_blank"
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#f1c33a] text-[#073f90] text-lg font-black rounded-xl hover:bg-white transition-all shadow-xl hover:scale-105"
          >
            <Swords className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            Register on Devfolio
          </Link>
          <Link
            href="#tracks"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-black text-white bg-[#c648d7] rounded-xl hover:bg-[#a83bb8] transition-all hover:scale-105"
          >
            Explore Tracks
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow z-10">
        <div className="w-7 h-11 border-4 border-white rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
