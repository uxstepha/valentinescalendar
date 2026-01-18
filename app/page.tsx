"use client"
import { CalendarProvider, useCalendar } from "@/lib/calendar-context"
import { CreatorFlow } from "@/components/creator-flow"
import { Button } from "@/components/ui/button"
import { Heart, Sparkles, Stars, PenLine } from "lucide-react"
import { t } from "@/lib/translations"
import { LANGUAGES } from "@/lib/types"
import { cn } from "@/lib/utils"

function DoodleHeart({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 50" className={className} fill="none">
      <path
        d="M25 45 C10 30 2 20 8 12 C14 4 25 8 25 18 C25 8 36 4 42 12 C48 20 40 30 25 45"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

function DoodleStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 30" className={className} fill="currentColor">
      <path d="M15 2 L17 11 L26 11 L19 17 L22 26 L15 21 L8 26 L11 17 L4 11 L13 11 Z" />
    </svg>
  )
}

function DoodleArrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 50" className={className} fill="none">
      <path
        d="M5 25 Q30 10 50 25 T95 25"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="8 4"
      />
      <path
        d="M85 20 L95 25 L85 30"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Confetti() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: ["#fda4af", "#fb7185", "#fbbf24", "#a78bfa", "#67e8f9"][Math.floor(Math.random() * 5)],
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  )
}

function LandingContent() {
  const { calendarData, initializeCalendar, language, setLanguage } = useCalendar()

  if (calendarData) {
    return <CreatorFlow />
  }

  return (
    <div className="min-h-screen bg-rose-50 paper-texture relative overflow-hidden flex flex-col items-center justify-center p-4">
      {/* Language Selector */}
      <div className="absolute top-4 right-4 z-20 flex gap-1 bg-white/80 backdrop-blur-sm rounded-full p-1 border-2 border-dashed border-rose-200">
        {LANGUAGES.map((lang) => (
          <button
            key={lang.id}
            onClick={() => setLanguage(lang.id)}
            className={cn(
              "px-3 py-1.5 rounded-full text-sm font-medium transition-all",
              language === lang.id
                ? "bg-rose-500 text-white"
                : "text-rose-600 hover:bg-rose-100"
            )}
          >
            {lang.flag} {lang.id.toUpperCase()}
          </button>
        ))}
      </div>

      <Confetti />

      {/* Scattered doodle decorations */}
      <DoodleHeart className="absolute top-[10%] left-[5%] w-12 h-12 text-rose-300 animate-pulse" />
      <DoodleHeart
        className="absolute top-[15%] right-[8%] w-8 h-8 text-pink-400 animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />
      <DoodleStar
        className="absolute top-[25%] left-[15%] w-5 h-5 text-amber-400 animate-pulse"
        style={{ animationDelay: "0.3s" }}
      />
      <DoodleStar
        className="absolute bottom-[20%] right-[12%] w-6 h-6 text-amber-300 animate-pulse"
        style={{ animationDelay: "0.8s" }}
      />
      <DoodleHeart
        className="absolute bottom-[15%] left-[10%] w-10 h-10 text-rose-400 animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Brushstroke accent */}
      <div className="absolute top-0 left-0 w-full h-32 opacity-30">
        <svg viewBox="0 0 1200 100" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0 80 Q300 20 600 60 T1200 40" stroke="#fda4af" strokeWidth="60" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      <div className="max-w-2xl mx-auto text-center space-y-8 relative z-10">
        {/* Main content card */}
        <div className="relative">
          {/* Tape decoration */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-gradient-to-r from-amber-200/80 to-amber-300/60 rotate-[-2deg] rounded-sm shadow-sm z-20" />

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-xl border-2 border-rose-200 relative wobbly-card">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-rose-100 px-4 py-2 rounded-full text-rose-600 text-base font-medium mb-6 star-doodle">
              <Sparkles className="w-5 h-5" />
              <span className="font-[var(--font-display)] text-lg">{t("landing.badge", language)}</span>
            </div>

            {/* Title with doodle underline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[var(--font-display)] text-rose-800 leading-tight mb-4">
              {t("landing.title1", language)}
              <br />
              <span className="text-rose-500 doodle-underline inline-block">{t("landing.title2", language)}</span>
            </h1>

            {/* Cute arrow doodle pointing to description */}
            <DoodleArrow className="w-20 h-8 text-rose-300 mx-auto mb-2 rotate-[5deg]" />

            <p className="text-lg sm:text-xl text-rose-700/80 max-w-lg mx-auto leading-relaxed text-pretty font-sans">
              {t("landing.description", language)}
            </p>

            {/* CTA Button */}
            <div className="mt-8 relative inline-block">
              <Button
                onClick={initializeCalendar}
                size="lg"
                className="text-xl px-10 py-7 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 gap-3 font-[var(--font-display)] sketchy-border border-rose-400 bg-rose-500 hover:bg-rose-600"
              >
                <PenLine className="w-6 h-6" />
                {t("landing.cta", language)}
              </Button>
              {/* Small hearts around button */}
              <DoodleHeart className="absolute -top-3 -right-4 w-6 h-6 text-rose-400 animate-bounce" />
            </div>
          </div>
        </div>

        {/* Features with playful cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          {[
            {
              icon: <Heart className="w-8 h-8" />,
              title: t("landing.feature1.title", language),
              desc: t("landing.feature1.desc", language),
              rotation: "-rotate-1",
            },
            {
              icon: <Stars className="w-8 h-8" />,
              title: t("landing.feature2.title", language),
              desc: t("landing.feature2.desc", language),
              rotation: "rotate-1",
            },
            {
              icon: <Sparkles className="w-8 h-8" />,
              title: t("landing.feature3.title", language),
              desc: t("landing.feature3.desc", language),
              rotation: "-rotate-2",
            },
          ].map((feature, i) => (
            <div
              key={feature.title}
              className={`bg-white/90 backdrop-blur-sm rounded-2xl p-5 text-center border-2 border-dashed border-rose-200 hover:border-rose-400 transition-all hover:scale-105 ${feature.rotation}`}
            >
              <div className="w-14 h-14 mx-auto mb-3 bg-rose-100 rounded-full flex items-center justify-center text-rose-500">
                {feature.icon}
              </div>
              <h3 className="font-[var(--font-display)] text-xl text-rose-800">{feature.title}</h3>
              <p className="text-sm text-rose-600/70 font-sans">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom doodle decoration */}
        <div className="scribble-line w-48 mx-auto mt-8" />

        {/* Creator credit footer */}
        <footer className="mt-8 pb-4 text-center">
          <a
            href="https://www.instagram.com/ux_stepha?igsh=MXF4N2t5cDhyejdvaw%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-rose-400 hover:text-rose-600 transition-colors font-[var(--font-display)]"
          >
            Creado por @ux_stepha
          </a>
        </footer>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <CalendarProvider>
      <LandingContent />
    </CalendarProvider>
  )
}
