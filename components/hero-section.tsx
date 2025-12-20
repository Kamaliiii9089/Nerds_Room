"use client"

import Image from "next/image"
import { Users, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Clash of Clans Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center w-full flex flex-col items-center justify-center gap-4 md:gap-6">
        {/* Presented By */}
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-[#f1c33a] font-extrabold text-sm md:text-base uppercase tracking-[0.4em] drop-shadow-lg">
            PRESENTED BY
          </h2>
          
          {/* Logo Box */}
          <div className="bg-white rounded-2xl px-8 md:px-12 py-4 md:py-5 shadow-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900">
              NERDS R<span className="text-[#f1c33a]">O</span>OM
            </h1>
          </div>
        </div>

        {/* Main Title */}
        <div className="my-6 md:my-10">
          <h1 
            className="text-7xl md:text-8xl lg:text-9xl font-black text-[#d4a948] leading-none"
            style={{
              fontFamily: "var(--font-clash-bold)",
              textShadow: "6px 6px 0px rgba(0,0,0,0.25)"
            }}
          >
            NERDS
          </h1>
          <h1 
            className="text-7xl md:text-8xl lg:text-9xl font-black text-[#d4a948] leading-none mt-0"
            style={{
              fontFamily: "var(--font-clash-bold)",
              textShadow: "6px 6px 0px rgba(0,0,0,0.25)"
            }}
          >
            AI CLASH
          </h1>
        </div>

        {/* Subtitle */}
        <div className="bg-white rounded-full px-8 md:px-12 py-4 md:py-5 shadow-xl">
          <p className="text-base md:text-xl lg:text-2xl font-bold text-gray-800">
            India's Largest AI Hackathon · Build. Battle. Conquer.
          </p>
        </div>

      </div>

      {/* Left Barbarian King */}
      <motion.div 
        className="absolute left-4 md:left-8 lg:left-16 bottom-16 md:bottom-20 z-20"
        initial={{ x: -300, opacity: 0, rotate: -20 }}
        animate={{ x: 0, opacity: 1, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: "backOut" }}
      >
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [-2, 2, -2]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src="/images/coc.png"
            alt="Barbarian King"
            width={200}
            height={200}
            className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain drop-shadow-2xl"
          />
          {/* Sword Glint Effect */}
          <motion.div
            className="absolute top-[20%] left-[15%] w-3 h-3 bg-white rounded-full blur-sm"
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        </motion.div>
      </motion.div>

      {/* Right Barbarian King (mirrored) */}
      <motion.div 
        className="absolute right-4 md:right-8 lg:right-16 bottom-16 md:bottom-20 z-20"
        initial={{ x: 300, opacity: 0, rotate: 20 }}
        animate={{ x: 0, opacity: 1, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: "backOut" }}
      >
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [2, -2, 2]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <Image
            src="/images/coc.png"
            alt="Barbarian King"
            width={200}
            height={200}
            className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain drop-shadow-2xl scale-x-[-1]"
          />
          {/* Sword Glint Effect */}
          <motion.div
            className="absolute top-[20%] right-[15%] w-3 h-3 bg-white rounded-full blur-sm"
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 2,
              delay: 1,
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
