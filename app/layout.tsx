import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nerds AI Clash | India's Largest AI Hackathon",
  description:
    "Join Nerds AI Clash - India's largest AI hackathon featuring AI Agent Making, MVP Development, and AI Film Making tracks. Battle across 30 venues and compete in the finals at IIT Jodhpur!",
  keywords: ["hackathon", "AI", "artificial intelligence", "coding", "IIT Jodhpur", "Nerds Room", "tech event"],
  openGraph: {
    title: "Nerds AI Clash | India's Largest AI Hackathon",
    description:
      "Build. Battle. Conquer. Join the ultimate AI hackathon with 30+ venues, 3 epic tracks, and ₹10L+ prize pool.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
