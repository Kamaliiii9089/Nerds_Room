import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import { SmoothScroll } from "@/components/smooth-scroll"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const clashBold = localFont({
  src: "../Clash_Bold.otf",
  variable: "--font-clash-bold",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Nerds AI Clash | India's Largest AI Hackathon",
  description:
    "Join Nerds AI Clash - India's largest AI hackathon featuring AI Agent Making, MVP Development, and AI Film Making tracks. Battle across 30 venues and compete in the finals at IIT Jodhpur!",
  keywords: ["hackathon", "AI", "artificial intelligence", "coding", "IIT Jodhpur", "Nerds Room", "tech event"],
  icons: {
    icon: "/images/image.png",
    shortcut: "/images/image.png",
    apple: "/images/image.png",
  },
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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${clashBold.variable} font-sans antialiased`}>
        <SmoothScroll />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
