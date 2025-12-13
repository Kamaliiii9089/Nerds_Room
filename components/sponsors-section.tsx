import Image from "next/image"
import Link from "next/link"
import { Sparkles, ArrowRight, Star } from "lucide-react"

const sponsorTiers = [
  {
    tier: "Title Sponsors",
    sponsors: [
      { name: "Title Sponsor 1", logo: "/tech-company-logo.jpg" },
      { name: "Title Sponsor 2", logo: "/ai-startup-logo.png" },
    ],
    size: "large",
  },
  {
    tier: "Gold Sponsors",
    sponsors: [
      { name: "Gold Sponsor 1", logo: "/cloud-platform-logo.jpg" },
      { name: "Gold Sponsor 2", logo: "/software-company-logo.png" },
      { name: "Gold Sponsor 3", logo: "/abstract-tech-logo.png" },
      { name: "Gold Sponsor 4", logo: "/developer-tools-logo.png" },
    ],
    size: "medium",
  },
  {
    tier: "Silver Sponsors",
    sponsors: [
      { name: "Silver 1", logo: "/devtools-logo.jpg" },
      { name: "Silver 2", logo: "/cloud-services-logo.jpg" },
      { name: "Silver 3", logo: "/generic-platform-logo.png" },
      { name: "Silver 4", logo: "/workspace-logo.png" },
    ],
    size: "small",
  },
]

export function SponsorsSection() {
  return (
    <section id="sponsors" className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header - HackOdisha style */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-8 py-4 border-2 border-dashed border-[#073f90] rounded-xl">
            <h2 className="text-3xl md:text-5xl font-black text-[#073f90]">
              Our <span className="text-[#c648d7]">Battle Partners</span>
            </h2>
          </div>
          <p className="text-[#073f90]/70 text-lg max-w-2xl mx-auto font-semibold">
            Empowered by industry leaders and innovation champions.
          </p>
        </div>

        {/* Sponsor Tiers */}
        <div className="space-y-12">
          {sponsorTiers.map((tier) => (
            <div key={tier.tier}>
              <h3 className="text-center text-sm font-black text-[#8a5831] uppercase tracking-widest mb-8">
                {tier.tier}
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-6">
                {tier.sponsors.map((sponsor) => (
                  <div
                    key={sponsor.name}
                    className={`group bg-[#f8f9fa] border-3 border-[#073f90]/10 rounded-xl hover:border-[#c648d7] transition-all hover:shadow-lg hover:scale-105 ${
                      tier.size === "large" ? "px-10 py-8" : tier.size === "medium" ? "px-8 py-6" : "px-6 py-5"
                    }`}
                  >
                    <Image
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={sponsor.name}
                      width={tier.size === "large" ? 180 : tier.size === "medium" ? 140 : 100}
                      height={tier.size === "large" ? 72 : tier.size === "medium" ? 56 : 40}
                      className={`object-contain opacity-60 group-hover:opacity-100 transition-opacity ${
                        tier.size === "large" ? "h-14" : tier.size === "medium" ? "h-10" : "h-8"
                      } w-auto`}
                    />
                  </div>
                ))}
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
    </section>
  )
}
