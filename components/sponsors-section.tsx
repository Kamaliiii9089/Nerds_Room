"use client"

import Image from "next/image"
import Link from "next/link"
import { Sparkles, ArrowRight, Star } from "lucide-react"
import { WoodenBoardTitle } from "./wooden-board-title"

const sponsorTiers = [
  {
    tier: "TITLE SPONSORS",
    sponsors: [
      { name: "Title Sponsor 1", logo: "images/tech-company-logo.jpg" },
      { name: "Title Sponsor 2", logo: "images/ai-startup-logo.png" },
    ],
    badgeColor: "bg-[#f1c33a]",
    textColor: "text-black",
  },
  {
    tier: "GOLD SPONSORS",
    sponsors: [
      { name: "Gold 1", logo: "/images/sponsors/gold1.png" },
      { name: "Gold 2", logo: "/images/sponsors/gold2.png" },
      { name: "Gold 3", logo: "/images/sponsors/gold3.png" },
      { name: "Gold 4", logo: "/images/sponsors/gold4.png" },
    ],
    badgeColor: "bg-[#f1c33a]",
    textColor: "text-black",
  },
  {
    tier: "SILVER SPONSORS",
    sponsors: [
      { name: "Silver 1", logo: "/images/sponsors/silver1.png" },
      { name: "Silver 2", logo: "/images/sponsors/silver2.png" },
      { name: "Silver 3", logo: "/images/sponsors/silver3.png" },
      { name: "Silver 4", logo: "/images/sponsors/silver4.png" },
    ],
    badgeColor: "bg-[#f1c33a]",
    textColor: "text-black",
  },
]

export function SponsorsSection() {
  return (
    <section id="sponsors" className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Thick black separator */}
      <div className="h-3 bg-black w-full absolute top-0 left-0"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Wooden Board Header */}
        <WoodenBoardTitle>
          Our <span className="text-[#fff]">Battle Partners</span>
        </WoodenBoardTitle>
        
        <p className="text-[#073f90]/70 text-lg max-w-2xl mx-auto font-semibold text-center mb-16">
          Empowered by industry leaders and innovation champions.
        </p>

        {/* Sponsor Tiers */}
        <div className="space-y-16">
          {sponsorTiers.map((tier) => (
            <div key={tier.tier}>
              {/* Tier Badge - HackOdisha Style */}
              <div className="flex justify-center mb-12">
                <div className={`${tier.badgeColor} ${tier.textColor} px-10 py-4 rounded-full border-4 border-black shadow-xl inline-block`}>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-wider">
                    {tier.tier}
                  </h3>
                </div>
              </div>

              {/* Sponsor Logos in Dashed Circle Containers */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-4 border-[#073f90]/10 shadow-lg">
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                  {tier.sponsors.map((sponsor) => (
                    <div
                      key={sponsor.name}
                      className="group relative w-32 h-32 md:w-40 md:h-40"
                    >
                      {/* Rotating Dashed Circle Border - Only border rotates */}
                      <div className="absolute inset-0 rounded-full border-4 border-dashed border-[#073f90]/30 group-hover:border-[#c648d7] transition-colors duration-300 animate-rotate-slow pointer-events-none"></div>
                      
                      {/* Static Inner Circle with Logo */}
                      <div className="w-full h-full rounded-full flex items-center justify-center bg-white shadow-md group-hover:shadow-xl overflow-hidden">
                        <Image
                          src={sponsor.logo || "/placeholder.svg"}
                          alt={sponsor.name}
                          width={160}
                          height={160}
                          className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 relative">
          <div className="relative bg-[#f1c33a] rounded-3xl p-10 text-center shadow-2xl overflow-hidden border-4 border-[#8a5831]">
            {/* Decorative elements */}
            <div className="absolute top-4 left-4">
              <Star className="w-8 h-8 text-white animate-pulse" fill="white" />
            </div>
            <div className="absolute top-4 right-4">
              <Star className="w-8 h-8 text-white animate-pulse" fill="white" />
            </div>
            <div className="absolute bottom-4 left-8">
              <Sparkles className="w-6 h-6 text-[#8a5831] animate-float-slow" />
            </div>
            <div className="absolute bottom-4 right-8">
              <Sparkles className="w-6 h-6 text-[#8a5831] animate-float-medium" />
            </div>
            <div className="absolute top-1/2 left-2 -translate-y-1/2 hidden md:block">
              <Star className="w-5 h-5 text-white/70 animate-float-fast" fill="currentColor" />
            </div>
            <div className="absolute top-1/2 right-2 -translate-y-1/2 hidden md:block">
              <Star className="w-5 h-5 text-white/70 animate-float-slow" fill="currentColor" />
            </div>

            {/* Shine effect overlay */}
            <div className="absolute inset-0 bg-white/10 animate-pulse-slower pointer-events-none" />

            <div className="relative z-10">
              <h4 className="text-3xl md:text-4xl font-black text-[#073f90] mb-4">Join Our Alliance</h4>
              <p className="text-[#073f90]/80 text-lg mb-8 max-w-xl mx-auto font-bold leading-relaxed">
                Partner with us to reach 1000+ talented developers and innovators across 30 venues nationwide
              </p>
              <Link
                href="mailto:sponsors@nerdsaiclash.com"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#073f90] text-white text-lg font-black rounded-xl hover:bg-[#c648d7] transition-all shadow-xl hover:scale-105"
              >
                Become a Battle Partner
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Rotation Animation */}
      <style jsx global>{`
        @keyframes rotate-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-rotate-slow {
          animation: rotate-slow 8s linear infinite;
        }
      `}</style>
    </section>
  )
}
