"use client"

import { Twitter, Instagram, Linkedin, MessageCircle } from "lucide-react"
import ScrollFloat from "./scroll-float"

export function Footer() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="relative bg-gradient-to-b from-[#c648d7] to-[#a038b7] overflow-hidden">
      {/* Main Footer Content */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            
            {/* Left Side - Logo and CTA */}
            <div className="animate-fade-in-left">
              <div className="mb-8">
                <ScrollFloat
                  animationDuration={1}
                  ease="back.inOut(2)"
                  scrollStart="center bottom+=50%"
                  scrollEnd="bottom bottom-=40%"
                  stagger={0.03}
                  containerClassName=""
                  textClassName="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight"
                >
                  nerds.room
                </ScrollFloat>
              </div>
              
              <div className="mb-6">
                <ScrollFloat
                  animationDuration={1}
                  ease="back.inOut(2)"
                  scrollStart="center bottom+=50%"
                  scrollEnd="bottom bottom-=40%"
                  stagger={0.03}
                  containerClassName=""
                  textClassName="text-2xl md:text-3xl font-black text-white leading-tight"
                >
                Want to sponsor Nerds AI Clash
                </ScrollFloat>
              </div>
              
              <a
                href="mailto:sponsors@nerdsaiclash.com"
                className="inline-block bg-[#f1c33a] text-black text-lg md:text-xl font-black px-10 py-4 rounded-2xl border-4 border-black shadow-2xl hover:bg-white hover:scale-105 transition-all duration-300 hover:-translate-y-1"
              >
                Become a sponsor
              </a>
            </div>

            {/* Right Side - Site Map */}
            <div className="animate-fade-in-right">
              <ScrollFloat
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom+=50%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.03}
                containerClassName="mb-8"
                textClassName="text-2xl md:text-3xl font-black text-white"
              >
                Site map
              </ScrollFloat>
              <ul className="space-y-4">
                {[
                  { label: "About us", href: "#about" },
                  { label: "Tracks", href: "#tracks" },
                  { label: "Rounds", href: "#rounds" },
                  { label: "Sponsors", href: "#sponsors" },
                  { label: "Create Badge", href: "#badge-creator" },
                  { label: "FAQs", href: "#faq" },
                ].map((link, index) => (
                  <li key={link.label} className="animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                    <a
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="text-white hover:text-[#f1c33a] text-lg md:text-xl font-bold transition-all duration-300 flex items-center gap-2 group cursor-pointer"
                    >
                      <span>{link.label}</span>
                      <span className="text-xl group-hover:translate-x-2 transition-transform duration-300">›</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#000000] py-6 px-4 text-center border-t-2 border-white/10">
        <p className="text-white/90 text-sm font-semibold">&copy; 2025 Nerds Room. All rights reserved.</p>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(20px);
          }
          50% {
            transform: scale(1.05) translateY(-5px);
          }
          70% {
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
      `}</style>
    </footer>
  )
}
