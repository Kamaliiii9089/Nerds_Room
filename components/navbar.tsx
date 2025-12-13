"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Swords } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Tracks", href: "#tracks" },
    { name: "Rounds", href: "#rounds" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "FAQ", href: "#faq" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-[#f1c33a] shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-18">
          <Link href="/" className="flex items-center gap-3 py-3">
            <Image
              src="/images/your-20paragraph-20text-20251210-202128-0000.png"
              alt="Nerds Room"
              width={100}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#073f90] hover:text-[#c648d7] transition-colors font-bold text-sm uppercase tracking-wide"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://devfolio.co"
              target="_blank"
              className="flex items-center gap-2 bg-[#073f90] text-white px-5 py-2.5 rounded-lg font-black hover:bg-[#c648d7] transition-all"
            >
              <Swords className="w-4 h-4" />
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#073f90] hover:text-[#c648d7] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t-2 border-[#f1c33a]/30">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-3 text-[#073f90] hover:text-[#c648d7] transition-colors font-bold"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://devfolio.co"
              target="_blank"
              className="flex items-center justify-center gap-2 mt-4 bg-[#073f90] text-white px-6 py-3 rounded-lg font-black text-center hover:bg-[#c648d7] transition-all"
            >
              <Swords className="w-4 h-4" />
              Register on Devfolio
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
