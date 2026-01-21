import type React from "react"
import type { Metadata, Viewport } from "next"
import { Caveat, Patrick_Hand, Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { GlobalHeader } from "@/components/global-header"
import "./globals.css"

const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" })
const patrickHand = Patrick_Hand({ weight: "400", subsets: ["latin"], variable: "--font-patrick" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", style: ["normal", "italic"] })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "14 Days of Love - Valentine's Countdown",
  description: "Create a romantic 14-day countdown calendar to Valentine's Day",
    generator: 'v0.app'
}

export const metadata ={
  icon:"/valentines-calendar.png",
}

export const viewport: Viewport = {
  themeColor: "#9F0505",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${caveat.variable} ${patrickHand.variable} ${playfair.variable} ${inter.variable} font-sans antialiased`}
      >
        <GlobalHeader />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
