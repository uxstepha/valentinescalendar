"use client"

import { useState } from "react"
import Link from "next/link"
import { useCalendar } from "@/lib/calendar-context"
import { TemplateSelector } from "./template-selector"
import { MessageEditor } from "./message-editor"
import { CalendarGrid } from "./calendar-grid"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, ArrowRight, Eye, Share2, Copy, Check, Sparkles, Lock, Globe, Home } from "lucide-react"
import { cn } from "@/lib/utils"
import { LANGUAGES } from "@/lib/types"
import { t } from "@/lib/translations"

type Step = "template" | "messages" | "preview" | "share"

function DoodleHeart({ className, filled }: { className?: string; filled?: boolean }) {
  return (
    <svg viewBox="0 0 50 50" className={className} fill={filled ? "currentColor" : "none"}>
      <path
        d="M25 45 C10 30 2 20 8 12 C14 4 25 8 25 18 C25 8 36 4 42 12 C48 20 40 30 25 45"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CreatorFlow() {
  const { calendarData, setTemplate, setRecipientName, setLanguage, updateCard, getShareableLink, setPreviewMode, resetCalendar, language } =
    useCalendar()
  const [step, setStep] = useState<Step>("template")
  const [copied, setCopied] = useState(false)
  const [previewType, setPreviewType] = useState<"creator" | "locked">("creator")

  if (!calendarData) return null

  const handleCopyLink = async () => {
    const link = getShareableLink()
    await navigator.clipboard.writeText(link)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const steps: { id: Step; label: string }[] = [
    { id: "template", label: t("creator.step.template", language) },
    { id: "messages", label: t("creator.step.messages", language) },
    { id: "preview", label: t("creator.step.preview", language) },
    { id: "share", label: t("creator.step.share", language) },
  ]

  const currentStepIndex = steps.findIndex((s) => s.id === step)

  return (
    <div className="min-h-screen bg-rose-50 paper-texture flex flex-col">
      {/* Progress bar - playful style */}
      <div className="bg-white/80 backdrop-blur-sm border-b-2 border-dashed border-rose-200">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-lg sm:text-xl font-[var(--font-display)] flex items-center gap-2 text-rose-800">
              <DoodleHeart className="w-5 h-5 sm:w-6 sm:h-6 text-rose-500" filled />
              {t("creator.title", language)}
            </h1>
          </div>
          {/* Back to home button */}
          <div className="mb-3">
            <button
              onClick={resetCalendar}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-rose-500 hover:text-rose-700 transition-colors font-[var(--font-display)]"
            >
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              {t("nav.returnHome", language)}
            </button>
          </div>
          <div className="flex gap-2 sm:gap-3 items-center justify-center">
            {steps.map((s, i) => (
              <button
                key={s.id}
                onClick={() => i <= currentStepIndex && setStep(s.id)}
                className={cn(
                  "flex flex-col items-center gap-1 transition-all",
                  i < currentStepIndex && "cursor-pointer",
                )}
              >
                <div
                  className={cn(
                    "w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border-2 border-dashed transition-all font-[var(--font-display)] text-base sm:text-lg",
                    i <= currentStepIndex
                      ? "bg-rose-500 border-rose-500 text-white"
                      : "bg-white border-rose-200 text-rose-300",
                    i < currentStepIndex && "hover:scale-110",
                  )}
                >
                  {i + 1}
                </div>
                <span className={cn("text-[10px] sm:text-xs font-medium", i <= currentStepIndex ? "text-rose-600" : "text-rose-300")}>
                  {s.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-3 sm:px-4 py-6 sm:py-8 flex-1">
        {step === "template" && (
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4 bg-white/80 rounded-2xl p-4 sm:p-6 border-2 border-dashed border-rose-200">
              <h2 className="text-xl sm:text-2xl font-[var(--font-display)] text-rose-800 flex items-center gap-2">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                {t("creator.whoFor", language)}
              </h2>
              <Input
                value={calendarData.recipientName || ""}
                onChange={(e) => setRecipientName(e.target.value)}
                placeholder={t("creator.nameplaceholder", language)}
                className="w-full text-base sm:text-lg font-[var(--font-display)] border-2 border-dashed border-rose-200 focus:border-rose-400 rounded-xl"
              />
            </div>

            {/* Language Selector */}
            <div className="space-y-3 sm:space-y-4 bg-white/80 rounded-2xl p-4 sm:p-6 border-2 border-dashed border-rose-200">
              <h2 className="text-xl sm:text-2xl font-[var(--font-display)] text-rose-800 flex items-center gap-2">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                {t("creator.chooseLanguage", language)}
              </h2>
              <p className="text-rose-600/70 text-xs sm:text-sm">{t("creator.languageDesc", language)}</p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.id}
                    onClick={() => setLanguage(lang.id)}
                    className={cn(
                      "flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 rounded-xl border-2 border-dashed transition-all font-[var(--font-display)] text-sm sm:text-base",
                      language === lang.id
                        ? "bg-rose-500 border-rose-500 text-white shadow-md scale-105"
                        : "bg-white border-rose-200 text-rose-600 hover:border-rose-400 hover:bg-rose-50",
                    )}
                  >
                    <span className="text-lg sm:text-xl">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <TemplateSelector selected={calendarData.template} onSelect={setTemplate} language={language} />

            <div className="flex justify-end">
              <Button
                onClick={() => setStep("messages")}
                className="gap-2 text-lg font-[var(--font-display)] rounded-full px-6 py-5"
              >
                {t("creator.nextMessages", language)}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        )}

        {step === "messages" && (
          <div className="space-y-8">
            <MessageEditor cards={calendarData.cards} onUpdateCard={updateCard} language={language} />

            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => setStep("template")}
                className="gap-2 rounded-full font-[var(--font-display)]"
              >
                <ArrowLeft className="w-4 h-4" />
                {t("creator.back", language)}
              </Button>
              <Button
                onClick={() => {
                  setPreviewMode(true)
                  setStep("preview")
                }}
                className="gap-2 rounded-full font-[var(--font-display)]"
              >
                <Eye className="w-4 h-4" />
                {t("creator.previewCalendar", language)}
              </Button>
            </div>
          </div>
        )}

        {step === "preview" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/80 rounded-2xl p-4 border-2 border-dashed border-rose-200">
              <h2 className="text-xl font-[var(--font-display)] text-rose-800">{t("creator.previewTitle", language)}</h2>
              <div className="flex gap-2 bg-rose-100 p-1 rounded-full">
                <button
                  onClick={() => setPreviewType("creator")}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-[var(--font-display)] transition-all",
                    previewType === "creator"
                      ? "bg-emerald-500 text-white shadow-md"
                      : "text-rose-600 hover:bg-rose-200",
                  )}
                >
                  <Eye className="w-4 h-4" />
                  {t("creator.fullPreview", language)}
                </button>
                <button
                  onClick={() => setPreviewType("locked")}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-[var(--font-display)] transition-all",
                    previewType === "locked" ? "bg-rose-500 text-white shadow-md" : "text-rose-600 hover:bg-rose-200",
                  )}
                >
                  <Lock className="w-4 h-4" />
                  {t("creator.lockedView", language)}
                </button>
              </div>
            </div>

            <div
              className={cn(
                "text-sm text-center py-2 px-4 rounded-full mx-auto max-w-lg",
                previewType === "creator" ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-600",
              )}
            >
              {previewType === "creator"
                ? t("creator.fullPreviewDesc", language)
                : t("creator.lockedViewDesc", language)}
            </div>

            <div className="rounded-2xl overflow-hidden border-2 border-dashed border-rose-200 shadow-lg bg-white/50">
              <CalendarGrid
                data={calendarData}
                isPreview={previewType === "locked"}
                isCreatorPreview={previewType === "creator"}
              />
            </div>

            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => {
                  setPreviewMode(false)
                  setStep("messages")
                }}
                className="gap-2 rounded-full font-[var(--font-display)]"
              >
                <ArrowLeft className="w-4 h-4" />
                {t("creator.editMessages", language)}
              </Button>
              <Button onClick={() => setStep("share")} className="gap-2 rounded-full font-[var(--font-display)]">
                <Share2 className="w-4 h-4" />
                {t("creator.getLink", language)}
              </Button>
            </div>
          </div>
        )}

        {step === "share" && (
          <div className="space-y-8">
            <div className="text-center space-y-4 bg-white/90 rounded-3xl p-8 border-2 border-dashed border-rose-200 relative">
              {/* Tape decoration */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-gradient-to-r from-amber-200/80 to-amber-300/60 rotate-[-2deg] rounded-sm" />

              <div className="w-24 h-24 mx-auto bg-rose-100 rounded-full flex items-center justify-center">
                <DoodleHeart className="w-14 h-14 text-rose-500" filled />
              </div>
              <h2 className="text-3xl font-[var(--font-display)] text-rose-800">{t("creator.shareReady", language)}</h2>
              <p className="text-rose-600/80 max-w-md mx-auto text-lg">
                {t("creator.shareDesc", language)}
              </p>
              <p className="text-sm text-rose-400 max-w-md mx-auto">
                {t("creator.shareNote", language)}
              </p>
            </div>

            <div className="max-w-lg mx-auto space-y-4 bg-white/80 rounded-2xl p-6 border-2 border-dashed border-rose-200">
              <div className="flex gap-2">
                <Input
                  value={getShareableLink()}
                  readOnly
                  className="font-mono text-sm border-2 border-dashed border-rose-200 rounded-xl"
                />
                <Button onClick={handleCopyLink} className="gap-2 shrink-0 rounded-full font-[var(--font-display)]">
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      {t("creator.copied", language)}
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      {t("creator.copy", language)}
                    </>
                  )}
                </Button>
              </div>

              <p className="text-sm text-rose-500/70 text-center">
                {t("creator.linkNote", language)}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <Button
                variant="outline"
                onClick={() => setStep("preview")}
                className="gap-2 rounded-full font-[var(--font-display)]"
              >
                <ArrowLeft className="w-4 h-4" />
                {t("creator.backToPreview", language)}
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open(getShareableLink(), "_blank")}
                className="gap-2 rounded-full font-[var(--font-display)]"
              >
                <Eye className="w-4 h-4" />
                {t("creator.testAsReceiver", language)}
              </Button>
              <Button
                variant="outline"
                onClick={resetCalendar}
                className="gap-2 rounded-full font-[var(--font-display)] bg-transparent"
              >
                <Home className="w-4 h-4" />
                {t("nav.returnHome", language)}
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Creator credit footer */}
      <footer className="py-4 text-center border-t-2 border-dashed border-rose-200 bg-white/50">
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
  )
}
