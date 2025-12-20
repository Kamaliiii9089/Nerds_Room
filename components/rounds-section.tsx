import { MapPin, Users, Trophy, ChevronRight } from "lucide-react"
import { WoodenBoardTitle } from "./wooden-board-title"

const rounds = [
  {
    round: "Round 1",
    title: "Initial Clash",
    subtitle: "30+ Venues Across India",
    icon: MapPin,
    description:
      "The war begins at 30 battlegrounds nationwide. Compete locally, showcase your innovation, and earn your spot in the next phase.",
    features: ["30+ Venues Nationwide", "24-Hour Sprint", "Local Mentorship", "Exclusive Swag"],
    color: "#c648d7",
    bgColor: "#c648d7",
  },
  {
    round: "Round 2",
    title: "Mentoring Round",
    subtitle: "Intensive Strategic Training",
    icon: Users,
    description:
      "Selected teams receive elite mentorship from industry veterans. Refine your strategy, strengthen your build, and prepare for the grand finale.",
    features: ["Expert Mentorship", "1-on-1 Guidance", "Build Refinement", "Industry Connections"],
    color: "#f1c33a",
    bgColor: "#8a5831",
  },
  {
    round: "Round 3",
    title: "Grand Finale",
    subtitle: "IIT Jodhpur Showdown",
    icon: Trophy,
    description:
      "The ultimate battle at IIT Jodhpur. Elite teams compete for glory, massive prizes, and the coveted Champion title.",
    features: ["Grand Prize Pool", "Live Demo Day", "Investor Pitches", "Champion Trophy"],
    color: "#f1c33a",
    bgColor: "#073f90",
  },
]

export function RoundsSection() {
  return (
    <section id="rounds" className="py-24 px-4 bg-[#f8f4ff] relative overflow-hidden">
      {/* Thick black separator */}
      <div className="h-3 bg-black w-full absolute top-0 left-0"></div>
      
      {/* Decorative dots like HackOdisha */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 flex gap-2">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: i % 2 === 0 ? "#c648d7" : "#073f90", opacity: 0.3 + i * 0.04 }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Wooden Board Header */}
        <WoodenBoardTitle>
          The Battle <span className="text-[#fff]">Roadmap</span>
        </WoodenBoardTitle>
        
        <p className="text-[#073f90]/70 text-lg max-w-2xl mx-auto font-semibold text-center mb-16">
          Three strategic rounds from local battles to the ultimate championship at IIT Jodhpur.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {rounds.map((round) => (
            <div
              key={round.round}
              className="group relative bg-white rounded-3xl overflow-hidden border-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ borderColor: round.color }}
            >
              {/* Top colored bar */}
              <div className="h-3" style={{ backgroundColor: round.bgColor }} />

              <div className="p-6">
                {/* Round badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="px-4 py-1.5 rounded-full text-white text-xs font-black uppercase tracking-wider"
                    style={{ backgroundColor: round.bgColor }}
                  >
                    {round.round}
                  </span>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${round.color}20` }}
                  >
                    <round.icon className="w-6 h-6" style={{ color: round.bgColor }} strokeWidth={2.5} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-black mb-1 text-[#073f90]">{round.title}</h3>
                <p className="font-bold text-sm mb-4" style={{ color: round.bgColor }}>
                  {round.subtitle}
                </p>

                <p className="text-sm leading-relaxed mb-6 text-[#073f90]/70">{round.description}</p>

                {/* Features */}
                <div className="space-y-2 pt-4 border-t-2 border-dashed" style={{ borderColor: `${round.color}50` }}>
                  {round.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm font-bold text-[#073f90]">
                      <ChevronRight className="w-4 h-4 flex-shrink-0" style={{ color: round.bgColor }} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
