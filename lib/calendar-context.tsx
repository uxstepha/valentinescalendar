"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"
import type { CalendarData, DayCard, Template, Language } from "./types"

interface CalendarContextType {
  calendarData: CalendarData | null
  language: Language
  setTemplate: (template: Template) => void
  setRecipientName: (name: string) => void
  setLanguage: (language: Language) => void
  setTimezone: (timezone: string) => void
  updateCard: (day: number, updates: Partial<DayCard>) => void
  getShareableLink: () => string
  initializeCalendar: () => void
  resetCalendar: () => void
  isPreviewMode: boolean
  setPreviewMode: (mode: boolean) => void
}

const CalendarContext = createContext<CalendarContextType | undefined>(undefined)

export function CalendarProvider({ children }: { children: React.ReactNode }) {
  const [calendarData, setCalendarData] = useState<CalendarData | null>(null)
  const [isPreviewMode, setPreviewMode] = useState(false)
  const [language, setLanguageState] = useState<Language>("es")

  const setTemplate = (template: Template) => {
    if (calendarData) {
      setCalendarData({ ...calendarData, template })
    }
  }

  const setRecipientName = (name: string) => {
    if (calendarData) {
      setCalendarData({ ...calendarData, recipientName: name })
    }
  }

  const setTimezone = (timezone: string) => {
    if (calendarData) {
      setCalendarData({ ...calendarData, timezone })
    }
  }

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (calendarData) {
      setCalendarData({ ...calendarData, language: lang })
    }
  }

  const updateCard = (day: number, updates: Partial<DayCard>) => {
    if (calendarData) {
      const newCards = calendarData.cards.map((card) => (card.day === day ? { ...card, ...updates } : card))
      setCalendarData({ ...calendarData, cards: newCards })
    }
  }

  const getShareableLink = () => {
    if (calendarData) {
      // Use URL-safe base64 encoding
      const jsonString = JSON.stringify(calendarData)
      const encoded = btoa(unescape(encodeURIComponent(jsonString)))
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "")
      return `${typeof window !== "undefined" ? window.location.origin : ""}/view?data=${encoded}`
    }
    return ""
  }

  const initializeCalendar = () => {
    const id = Math.random().toString(36).substring(2, 15)
    const cards: DayCard[] = Array.from({ length: 14 }, (_, i) => ({
      day: i + 1,
      message: "",
    }))

    setCalendarData({
      id,
      template: "romantic-soft",
      cards,
      createdAt: new Date().toISOString(),
      language: "es",
    })
  }

  const resetCalendar = () => {
    setCalendarData(null)
    setPreviewMode(false)
  }

  return (
    <CalendarContext.Provider
      value={{
        calendarData,
        language,
        setTemplate,
        setRecipientName,
        setLanguage,
        setTimezone,
        updateCard,
        getShareableLink,
        initializeCalendar,
        resetCalendar,
        isPreviewMode,
        setPreviewMode,
      }}
    >
      {children}
    </CalendarContext.Provider>
  )
}

export function useCalendar() {
  const context = useContext(CalendarContext)
  if (!context) {
    throw new Error("useCalendar must be used within a CalendarProvider")
  }
  return context
}
