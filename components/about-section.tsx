export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 bg-[#f8f4ff] relative overflow-hidden">
      {/* Decorative dots like HackOdisha */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-2">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: i % 2 === 0 ? "#c648d7" : "#073f90", opacity: 0.3 + i * 0.04 }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header - HackOdisha style with dashed border */}
        <div className="text-center mb-12">
          <div className="inline-block px-8 py-4 border-2 border-dashed border-[#073f90] rounded-xl bg-white">
            <h2 className="text-3xl md:text-5xl font-black text-[#073f90]">
              What is <span className="text-[#c648d7]">NERDS AI CLASH</span>?
            </h2>
          </div>
          <div className="text-[#8a5831] font-bold uppercase tracking-widest text-sm mb-2">The Story</div>
        </div>

        <div className="space-y-8 text-center max-w-4xl mx-auto">
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border-4 border-[#073f90]/10 shadow-xl">
            <p className="text-xl md:text-2xl text-[#073f90] leading-relaxed font-medium mb-6">
              <span className="font-black text-[#c648d7]">Nerds AI Clash</span> is India's most thrilling{" "}
              <span className="font-black text-[#8a5831]">AI hackathon</span> organized by{" "}
              <span className="font-black">Nerds Room</span> — an event dedicated to fostering innovation and community
              collaboration.
            </p>

            <p className="text-lg md:text-xl text-[#073f90]/80 leading-relaxed mb-6">
              With teams competing across <span className="font-black text-[#c648d7]">30+ venues</span> nationwide, this
              hackathon promises to be a platform where innovation knows no bounds. From AI agents to MVP development and
              AI filmmaking, warriors will battle it out for glory and massive prizes.
            </p>

            <p className="text-lg md:text-xl text-[#073f90]/80 leading-relaxed">
              We celebrate the power of <span className="font-black text-[#8a5831]">dark elixir (AI)</span> and the
              indomitable spirit of our warriors. Together, we're building the ultimate clan through{" "}
              <span className="font-black text-[#c648d7]">innovation and collaboration</span>.
            </p>
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
    </section>
  )
}
