import Image from "next/image"
import Link from "next/link"
import { Twitter, Instagram, Linkedin, Swords } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-[#073f90] border-t-4 border-[#f1c33a]">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="inline-block bg-white rounded-xl p-2 mb-4">
              <Image
                src="/images/your-20paragraph-20text-20251210-202128-0000.png"
                alt="Nerds Room"
                width={100}
                height={40}
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm mb-5">
              India&apos;s largest AI hackathon bringing together the brightest minds to build, battle, and conquer.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  className="w-9 h-9 bg-[#f1c33a] rounded-lg flex items-center justify-center text-[#073f90] hover:bg-white transition-colors"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-[#f1c33a] text-sm mb-4 uppercase tracking-wider">Links</h4>
            <ul className="space-y-2">
              {["Tracks", "Rounds", "Sponsors", "FAQ"].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase()}`}
                    className="text-white/70 hover:text-[#f1c33a] text-sm transition-colors font-semibold"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-black text-[#f1c33a] text-sm mb-4 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2">
              {["Code of Conduct", "Privacy Policy", "Contact Us"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-white/70 hover:text-[#f1c33a] text-sm transition-colors font-semibold">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t-2 border-[#f1c33a]/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-xs">&copy; 2025 Nerds Room. All rights reserved.</p>
          <Link
            href="https://devfolio.co"
            target="_blank"
            className="flex items-center gap-2 text-sm text-[#073f90] font-black bg-[#f1c33a] px-4 py-2 rounded-lg hover:bg-white transition-colors"
          >
            <Swords className="w-4 h-4" />
            Register on Devfolio
          </Link>
        </div>
      </div>
    </footer>
  )
}
