import type { Template } from "./types"

export const templateStyles: Record<
  Template,
  {
    background: string
    cardBg: string
    cardBorder: string
    textColor: string
    accentColor: string
    lockedOverlay: string
    valentineGlow: string
    fontDisplay: string
    fontBody: string
    noteStyle: string
    polaroidStyle: string
  }
> = {
  "romantic-soft": {
    background: "bg-gradient-to-br from-rose-50 via-pink-50 to-red-50",
    cardBg: "bg-white/90",
    cardBorder: "border-rose-300",
    textColor: "text-rose-900",
    accentColor: "text-rose-500",
    lockedOverlay: "bg-rose-100/80",
    valentineGlow: "shadow-[0_0_60px_rgba(244,63,94,0.4)]",
    fontDisplay: "font-[var(--font-display)]",
    fontBody: "font-[var(--font-body)]",
    noteStyle: "bg-rose-50",
    polaroidStyle: "bg-white",
  },
  "cute-pastel": {
    background: "bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50",
    cardBg: "bg-amber-50/95",
    cardBorder: "border-amber-300",
    textColor: "text-amber-900",
    accentColor: "text-rose-400",
    lockedOverlay: "bg-amber-100/80",
    valentineGlow: "shadow-[0_0_60px_rgba(217,119,6,0.3)]",
    fontDisplay: "font-[var(--font-display)]",
    fontBody: "font-[var(--font-body)]",
    noteStyle: "bg-amber-50",
    polaroidStyle: "bg-amber-50",
  },
  "elegant-minimal": {
    background: "bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950",
    cardBg: "bg-neutral-900/95",
    cardBorder: "border-amber-500/40",
    textColor: "text-amber-100",
    accentColor: "text-amber-400",
    lockedOverlay: "bg-neutral-900/90",
    valentineGlow: "shadow-[0_0_80px_rgba(251,191,36,0.3)]",
    fontDisplay: "font-[var(--font-elegant)]",
    fontBody: "font-[var(--font-sans-elegant)]",
    noteStyle: "bg-neutral-900",
    polaroidStyle: "bg-neutral-800",
  },
  "playful-love": {
    background: "bg-gradient-to-br from-fuchsia-100 via-yellow-50 to-cyan-100",
    cardBg: "bg-white/90",
    cardBorder: "border-fuchsia-300",
    textColor: "text-fuchsia-900",
    accentColor: "text-fuchsia-500",
    lockedOverlay: "bg-fuchsia-100/80",
    valentineGlow: "shadow-[0_0_60px_rgba(217,70,239,0.4)]",
    fontDisplay: "font-[var(--font-display)]",
    fontBody: "font-[var(--font-body)]",
    noteStyle: "bg-yellow-50",
    polaroidStyle: "bg-white",
  },
  "dreamy-night": {
    background: "bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950",
    cardBg: "bg-indigo-950/90",
    cardBorder: "border-purple-500/30",
    textColor: "text-purple-100",
    accentColor: "text-purple-400",
    lockedOverlay: "bg-indigo-950/80",
    valentineGlow: "shadow-[0_0_80px_rgba(168,85,247,0.5)]",
    fontDisplay: "font-[var(--font-display)]",
    fontBody: "font-[var(--font-body)]",
    noteStyle: "bg-indigo-950",
    polaroidStyle: "bg-indigo-900",
  },
}

export const templateEnvelopeColors: Record<Template, { bg: string; flap: string; inner: string }[]> = {
  "romantic-soft": [
    { bg: "bg-rose-700", flap: "border-b-rose-800", inner: "bg-rose-100" },
    { bg: "bg-pink-200", flap: "border-b-pink-300", inner: "bg-pink-50" },
    { bg: "bg-white", flap: "border-b-rose-100", inner: "bg-rose-50" },
    { bg: "bg-red-400", flap: "border-b-red-500", inner: "bg-red-50" },
    { bg: "bg-rose-300", flap: "border-b-rose-400", inner: "bg-rose-100" },
  ],
  "cute-pastel": [
    { bg: "bg-amber-100", flap: "border-b-amber-200", inner: "bg-amber-50" },
    { bg: "bg-rose-200", flap: "border-b-rose-300", inner: "bg-rose-50" },
    { bg: "bg-orange-100", flap: "border-b-orange-200", inner: "bg-orange-50" },
    { bg: "bg-amber-200", flap: "border-b-amber-300", inner: "bg-amber-100" },
    { bg: "bg-pink-100", flap: "border-b-pink-200", inner: "bg-pink-50" },
  ],
  "elegant-minimal": [
    { bg: "bg-neutral-900", flap: "border-b-neutral-800", inner: "bg-amber-900/20" },
    { bg: "bg-neutral-800", flap: "border-b-neutral-700", inner: "bg-amber-900/20" },
    { bg: "bg-amber-900", flap: "border-b-amber-800", inner: "bg-amber-100/10" },
  ],
  "playful-love": [
    { bg: "bg-fuchsia-400", flap: "border-b-fuchsia-500", inner: "bg-fuchsia-50" },
    { bg: "bg-cyan-400", flap: "border-b-cyan-500", inner: "bg-cyan-50" },
    { bg: "bg-yellow-400", flap: "border-b-yellow-500", inner: "bg-yellow-50" },
    { bg: "bg-pink-400", flap: "border-b-pink-500", inner: "bg-pink-50" },
    { bg: "bg-lime-400", flap: "border-b-lime-500", inner: "bg-lime-50" },
  ],
  "dreamy-night": [
    { bg: "bg-indigo-900", flap: "border-b-indigo-800", inner: "bg-purple-900/30" },
    { bg: "bg-purple-900", flap: "border-b-purple-800", inner: "bg-indigo-900/30" },
    { bg: "bg-slate-800", flap: "border-b-slate-700", inner: "bg-purple-900/30" },
  ],
}
