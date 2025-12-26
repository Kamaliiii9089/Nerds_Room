"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Swords } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show navbar only when at the very top of the page
      if (currentScrollY < 50) {
        setIsVisible(true)
      } else {
        // Hide navbar when scrolled down
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Tracks", href: "#tracks" },
    { name: "Rounds", href: "#rounds" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "Badge", href: "#badge-creator" },
    { name: "FAQ", href: "#faq" },
  ]

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-12 md:px-20 lg:px-32 xl:px-40 pt-4 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="bg-white border-b-4 border-[#f1c33a] shadow-lg rounded-2xl max-w-5xl mx-auto">
        <div className="mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-18">
          <Link href="/" className="flex items-center gap-3 py-3">
            <Image
              src="/images/nerds-logo.png"
              alt="Nerds Room"
              width={400}
              height={160}
              className="h-32 md:h-40 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-[#073f90] hover:text-[#c648d7] transition-colors font-bold text-sm uppercase tracking-wide cursor-pointer"
              >
                {link.name}
              </a>
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
              <a
                key={link.name}
                href={link.href}
                className="block py-3 text-[#073f90] hover:text-[#c648d7] transition-colors font-bold cursor-pointer"
                onClick={(e) => {
                  handleSmoothScroll(e, link.href)
                  setIsOpen(false)
                }}
              >
                {link.name}
              </a>
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
      </div>
    </nav>
  )
}
