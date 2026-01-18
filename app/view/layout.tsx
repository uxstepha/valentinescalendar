import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Valentine's Calendar For You",
  description: "Someone special created a Valentine's Calendar just for you! Open one card each day until February 14th.",
  openGraph: {
    title: "Valentine's Calendar For You",
    description: "Someone special created a Valentine's Calendar just for you! Open one card each day until February 14th.",
    images: [
      {
        url: "/images/share-link-og.jpeg",
        width: 1200,
        height: 630,
        alt: "Valentine's Calendar For You",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valentine's Calendar For You",
    description: "Someone special created a Valentine's Calendar just for you! Open one card each day until February 14th.",
    images: ["/images/share-link-og.jpeg"],
  },
}

export default function ViewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
