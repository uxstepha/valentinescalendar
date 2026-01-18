export type Template = "romantic-soft" | "cute-pastel" | "elegant-minimal" | "playful-love" | "dreamy-night"

export type Language = "es" | "en"

export interface ImagePosition {
  x: number
  y: number
  scale: number
}

export interface DayCard {
  day: number
  message: string
  imageUrl?: string
  hasAnimation?: boolean
  imagePosition?: ImagePosition
}

export interface CalendarData {
  id: string
  template: Template
  cards: DayCard[]
  createdAt: string
  recipientName?: string
  language?: Language
}

export const TEMPLATES: { id: Template; name: string; description: string }[] = [
  { id: "romantic-soft", name: "Romantic Soft", description: "Warm tones, hearts, gentle animations" },
  { id: "cute-pastel", name: "Cute Pastel", description: "Playful, light colors" },
  { id: "elegant-minimal", name: "Elegant Minimal", description: "Neutral palette, typography-focused" },
  { id: "playful-love", name: "Playful Love", description: "Illustrations, fun motion" },
  { id: "dreamy-night", name: "Dreamy Night", description: "Dark background, glowing elements" },
]

export const LANGUAGES: { id: Language; name: string; flag: string }[] = [
  { id: "es", name: "Español", flag: "🇪🇸" },
  { id: "en", name: "English", flag: "🇺🇸" },
]
