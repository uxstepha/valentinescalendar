"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import type { CalendarData, Language } from "@/lib/types"
import { CalendarGrid } from "@/components/calendar-grid"
import { Heart, Plus } from "lucide-react"
import { t } from "@/lib/translations"

export function ViewContent() {
  const searchParams = useSearchParams()
  const [calendarData, setCalendarData] = useState<CalendarData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const data = searchParams.get("data")
    if (data) {
      try {
        const decoded = JSON.parse(atob(data))
        setCalendarData(decoded)
        if (decoded.language) {
          setLanguage(decoded.language)
        }
      } catch (e) {
        setError("invalidLink")
      }
    } else {
      setError("noData")
    }
  }, [searchParams])

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 flex items-center justify-center p-4">
        <div className="text-center space-y-4">
          <Heart className="w-16 h-16 text-rose-300 mx-auto" />
          <h1 className="text-2xl font-bold text-rose-900">{t("view.error", language)}</h1>
          <p className="text-rose-600">{t(`view.${error === "invalidLink" ? "invalidLink" : "noData"}`, language)}</p>
        </div>
      </div>
    )
  }

  if (!calendarData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 flex items-center justify-center">
        <div className="animate-pulse text-rose-400">
          <Heart className="w-12 h-12" fill="currentColor" />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with centered logo */}
      <header className="w-full py-3 px-4 bg-white/80 backdrop-blur-sm border-b border-rose-100 flex items-center justify-center">
        <a
          href="https://www.stephaaldea.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/logo-stepha.svg"
            alt="Stepha Logo"
            className="h-10 sm:h-12 w-auto"
          />
        </a>
      </header>

      <div className="flex-1">
        <CalendarGrid data={calendarData} isReceiverView />
      </div>

      {/* Footer with create own calendar button and credit */}
      <footer className="py-4 text-center border-t-2 border-dashed border-rose-200 bg-white/50 space-y-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm text-rose-600 hover:text-rose-800 hover:bg-rose-100 rounded-full transition-colors font-[var(--font-display)] border-2 border-dashed border-rose-200"
        >
          <Plus className="w-4 h-4" />
          {t("nav.createYourOwn", language)}
        </Link>
        <div>
          <a
            href="https://www.instagram.com/ux_stepha?igsh=MXF4N2t5cDhyejdvaw%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-rose-400 hover:text-rose-600 transition-colors font-[var(--font-display)]"
          >
            @ux_stepha
          </a>
        </div>
      </footer>
    </div>
  )
}
