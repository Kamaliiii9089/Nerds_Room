import { Bot, Clapperboard, Rocket } from "lucide-react"
import { WoodenBoardTitle } from "./wooden-board-title"

const tracks = [
  {
    icon: Bot,
    title: "AI Agent Making",
    description:
      "Deploy intelligent AI agents that think, strategize, and execute like seasoned warriors. Build autonomous systems that dominate the battlefield.",
    color: "#c648d7",
  },
  {
    icon: Rocket,
    title: "MVP Development Through Prompting",
    description:
      "Harness the power of AI prompting to build production-ready MVPs at lightning speed. Turn vision into reality with cutting-edge AI tools.",
    color: "#073f90",
  },
  {
    icon: Clapperboard,
    title: "AI Film Making",
    description:
      "Create cinematic masterpieces using AI. Script, visualize, and produce stunning films that tell compelling stories through artificial intelligence.",
    color: "#8a5831",
  },
]

export function TracksSection() {
  return (
    <section id="tracks" className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Thick black separator */}
      <div className="h-3 bg-black w-full absolute top-0 left-0"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Wooden Board Header */}
        <WoodenBoardTitle>
          Choose Your <span className="text-[#fff]">Battlefield</span>
        </WoodenBoardTitle>
        
        <p className="text-[#073f90]/70 text-lg max-w-2xl mx-auto font-semibold text-center mb-16">
          Three epic battlegrounds to prove your dominance. Choose your method of warfare.
        </p>

        <div className="grid md:grid-cols-3 gap-8 pt-8">
          {tracks.map((track, index) => (
            <div
              key={track.title}
              className="group relative bg-white rounded-3xl p-8 pt-12 border-[6px] transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col h-full"
              style={{ borderColor: track.color }}
            >
              {/* Corner accent - Like a wall detail */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-black/5 to-transparent z-0" />

              {/* Track number badge - centered at top */}
              <div
                className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg z-10"
                style={{ backgroundColor: track.color }}
              >
                {index + 1}
              </div>

              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${track.color}15` }}
              >
                <track.icon className="w-8 h-8" style={{ color: track.color }} strokeWidth={2} />
              </div>

              <h3 className="text-xl font-black mb-3 text-[#073f90]">{track.title}</h3>
              <p className="text-[#073f90]/70 text-sm leading-relaxed flex-grow">{track.description}</p>

              {/* Bottom accent */}
              <div className="mt-6 pt-4 border-t-2 border-dashed" style={{ borderColor: `${track.color}30` }}>
                <span className="text-sm font-bold" style={{ color: track.color }}>
                  Explore Track &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
