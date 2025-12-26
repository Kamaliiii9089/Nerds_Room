"use client"

import { WoodenBoardTitle } from "./wooden-board-title"
import ScrollReveal from "./scroll-reveal"

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#c648d7]">
      {/* Thick black border separator at top */}
      <div className="h-3 bg-black w-full"></div>
      
      {/* Curved violet section */}
      <div className="bg-[#c648d7] rounded-t-[150px] md:rounded-t-[250px] pt-24 pb-24 px-4">
        {/* Inner white content area */}
        <div className="bg-[#f8f4ff] rounded-[100px] md:rounded-[150px] p-8 md:p-16">
          <div className="max-w-5xl mx-auto relative z-10">
            {/* Decorative dots */}
            <div className="flex justify-center gap-2 mb-12">
              {Array.from({ length: 15 }).map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: i % 2 === 0 ? "#c648d7" : "#073f90", opacity: 0.3 + i * 0.04 }}
                />
              ))}
            </div>

            {/* Wooden Board Header */}
            <WoodenBoardTitle>
              What is <span className="text-[#fff]">NERDS AI CLASH</span>?
            </WoodenBoardTitle>
            
            <div className="text-[#8a5831] font-bold uppercase tracking-widest text-sm text-center mb-8">The Story</div>

            <div className="space-y-8 text-center max-w-4xl mx-auto">
              <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border-4 border-[#073f90]/10 shadow-xl">
                <ScrollReveal
                  baseOpacity={0.1}
                  enableBlur={true}
                  baseRotation={3}
                  blurStrength={6}
                  textClassName="text-xl md:text-2xl text-[#073f90] leading-relaxed font-medium"
                >
                  Nerds AI Clash is India's most thrilling AI hackathon organized by Nerds Room — an event dedicated to fostering innovation and community collaboration.
                </ScrollReveal>

                <ScrollReveal
                  baseOpacity={0.1}
                  enableBlur={true}
                  baseRotation={2}
                  blurStrength={5}
                  textClassName="text-lg md:text-xl text-[#073f90]/80 leading-relaxed"
                >
                  With teams competing across 30+ venues nationwide, this hackathon promises to be a platform where innovation knows no bounds. From AI agents to MVP development and AI filmmaking, warriors will battle it out for glory and massive prizes.
                </ScrollReveal>

                <ScrollReveal
                  baseOpacity={0.1}
                  enableBlur={true}
                  baseRotation={2}
                  blurStrength={5}
                  textClassName="text-lg md:text-xl text-[#073f90]/80 leading-relaxed"
                >
                  We celebrate the power of dark elixir (AI) and the indomitable spirit of our warriors. Together, we're building the ultimate clan through innovation and collaboration.
                </ScrollReveal>
              </div>

          <div className="pt-8 flex justify-center gap-6 flex-wrap">
            {[
              { label: "AI Agents", color: "#c648d7" },
              { label: "MVP Building", color: "#073f90" },
              { label: "AI Films", color: "#8a5831" },
            ].map((item) => (
              <div
                key={item.label}
                className="px-6 py-3 bg-white font-black rounded-xl border-4 shadow-lg hover:scale-105 transition-transform cursor-pointer"
                style={{ borderColor: item.color, color: item.color }}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
          </div>
        </div>
      </div>
      
      {/* Thick black border separator at bottom */}
      <div className="h-3 bg-black w-full"></div>
    </section>
  )
}
