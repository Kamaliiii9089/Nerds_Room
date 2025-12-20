"use client"

import Image from "next/image"
import Link from "next/link"
import { Twitter, Instagram, Linkedin, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#c648d7] to-[#a038b7] overflow-hidden">
      {/* Main Footer Content */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            
            {/* Left Side - Logo and CTA */}
            <div className="animate-fade-in-left">
              <div className="mb-6 hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/nerds-logo.png"
                  alt="Nerds Room"
                  width={200}
                  height={80}
                  className="h-20 w-auto object-contain drop-shadow-xl"
                />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-black text-white mb-6 leading-tight">
                Want to become a sponsor<br />of Nerds AI Clash?
              </h3>
              
              <Link
                href="mailto:sponsors@nerdsaiclash.com"
                className="inline-block bg-[#f1c33a] text-black text-lg md:text-xl font-black px-10 py-4 rounded-2xl border-4 border-black shadow-2xl hover:bg-white hover:scale-105 transition-all duration-300 hover:-translate-y-1"
              >
                Become a sponsor
              </Link>
            </div>

            {/* Right Side - Site Map */}
            <div className="animate-fade-in-right">
              <h4 className="text-2xl md:text-3xl font-black text-white mb-8">Site map</h4>
              <ul className="space-y-4">
                {[
                  { label: "About us", href: "#about" },
                  { label: "Tracks", href: "#tracks" },
                  { label: "Rounds", href: "#rounds" },
                  { label: "Sponsors", href: "#sponsors" },
                  { label: "FAQs", href: "#faq" },
                ].map((link, index) => (
                  <li key={link.label} className="animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                    <Link
                      href={link.href}
                      className="text-white hover:text-[#f1c33a] text-lg md:text-xl font-bold transition-all duration-300 flex items-center gap-2 group"
                    >
                      <span>{link.label}</span>
                      <span className="text-xl group-hover:translate-x-2 transition-transform duration-300">›</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Social Icons Section */}
      <div className="bg-[#a038b7] py-10 px-4">
        <div className="max-w-6xl mx-auto flex justify-center gap-6">
          {[
            { icon: MessageCircle, href: "#", label: "Discord" },
            { icon: Instagram, href: "#", label: "Instagram" },
            { icon: Twitter, href: "#", label: "Twitter" },
            { icon: MessageCircle, href: "#", label: "WhatsApp" },
          ].map(({ icon: Icon, href, label }, index) => (
            <Link
              key={label}
              href={href}
              className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-white hover:bg-[#f1c33a] hover:text-black transition-all duration-300 hover:scale-125 hover:rotate-12 animate-bounce-in"
              style={{ animationDelay: `${index * 0.15}s` }}
              aria-label={label}
            >
              <Icon size={24} />
            </Link>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#8a2eb8] py-6 px-4 text-center border-t-2 border-white/10">
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
