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
  timezone?: string
}

export const TIMEZONES = [
  { id: "Pacific/Midway", label: "(GMT-11:00) Midway Island" },
  { id: "Pacific/Honolulu", label: "(GMT-10:00) Hawaii" },
  { id: "America/Anchorage", label: "(GMT-09:00) Alaska" },
  { id: "America/Los_Angeles", label: "(GMT-08:00) Pacific Time (US & Canada)" },
  { id: "America/Denver", label: "(GMT-07:00) Mountain Time (US & Canada)" },
  { id: "America/Chicago", label: "(GMT-06:00) Central Time (US & Canada)" },
  { id: "America/New_York", label: "(GMT-05:00) Eastern Time (US & Canada)" },
  { id: "America/Caracas", label: "(GMT-04:00) Caracas" },
  { id: "America/Santiago", label: "(GMT-04:00) Santiago" },
  { id: "America/Sao_Paulo", label: "(GMT-03:00) Sao Paulo" },
  { id: "America/Argentina/Buenos_Aires", label: "(GMT-03:00) Buenos Aires" },
  { id: "Atlantic/South_Georgia", label: "(GMT-02:00) Mid-Atlantic" },
  { id: "Atlantic/Azores", label: "(GMT-01:00) Azores" },
  { id: "Europe/London", label: "(GMT+00:00) London, Dublin" },
  { id: "Europe/Paris", label: "(GMT+01:00) Paris, Madrid, Rome" },
  { id: "Europe/Berlin", label: "(GMT+01:00) Berlin, Amsterdam" },
  { id: "Europe/Athens", label: "(GMT+02:00) Athens, Cairo" },
  { id: "Europe/Moscow", label: "(GMT+03:00) Moscow" },
  { id: "Asia/Dubai", label: "(GMT+04:00) Dubai" },
  { id: "Asia/Karachi", label: "(GMT+05:00) Karachi" },
  { id: "Asia/Kolkata", label: "(GMT+05:30) Mumbai, New Delhi" },
  { id: "Asia/Dhaka", label: "(GMT+06:00) Dhaka" },
  { id: "Asia/Bangkok", label: "(GMT+07:00) Bangkok, Jakarta" },
  { id: "Asia/Singapore", label: "(GMT+08:00) Singapore, Hong Kong" },
  { id: "Asia/Shanghai", label: "(GMT+08:00) Beijing, Shanghai" },
  { id: "Asia/Tokyo", label: "(GMT+09:00) Tokyo, Seoul" },
  { id: "Australia/Sydney", label: "(GMT+10:00) Sydney" },
  { id: "Pacific/Noumea", label: "(GMT+11:00) New Caledonia" },
  { id: "Pacific/Auckland", label: "(GMT+12:00) Auckland" },
]

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
