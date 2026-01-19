"use client"

import type React from "react"

import { useState, useRef } from "react"
import { cn } from "@/lib/utils"
import type { DayCard, Language } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Sparkles, X, Upload, Link, ImagePlus } from "lucide-react"
import { t } from "@/lib/translations"

interface MessageEditorProps {
  cards: DayCard[]
  onUpdateCard: (day: number, updates: Partial<DayCard>) => void
  language: Language
}

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

export function MessageEditor({ cards, onUpdateCard, language }: MessageEditorProps) {
  const [activeDay, setActiveDay] = useState<number>(1)
  const [imageMode, setImageMode] = useState<"url" | "upload">("upload")
  const [urlInput, setUrlInput] = useState<string>("")
  const fileInputRef = useRef<HTMLInputElement>(null)
  const activeCard = cards.find((c) => c.day === activeDay)

  const handleAddImageFromUrl = () => {
    if (urlInput && activeCard) {
      onUpdateCard(activeCard.day, { imageUrl: urlInput })
      setUrlInput("")
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && activeCard) {
      if (file.size > 2 * 1024 * 1024) {
        alert("Image must be smaller than 2MB")
        return
      }
      const reader = new FileReader()
      reader.onloadend = () => {
        onUpdateCard(activeCard.day, { imageUrl: reader.result as string })
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-[var(--font-display)] text-rose-800 flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-amber-400" />
        {t("editor.title", language)}
      </h2>

      <div className="flex flex-wrap gap-2 bg-white/80 rounded-2xl p-4 border-2 border-dashed border-rose-200">
        {cards.map((card) => {
          const rotation = ((card.day % 5) - 2) * 2
          return (
            <button
              key={card.day}
              onClick={() => setActiveDay(card.day)}
              style={{ transform: `rotate(${rotation}deg)` }}
              className={cn(
                "w-11 h-11 rounded-full flex items-center justify-center text-sm font-[var(--font-display)] text-lg transition-all border-2 border-dashed",
                card.day === activeDay
                  ? "bg-rose-500 text-white scale-110 border-rose-500 rotate-0 shadow-lg"
                  : card.message
                    ? "bg-rose-100 text-rose-600 border-rose-300 hover:bg-rose-200 hover:rotate-0"
                    : "bg-white text-rose-300 border-rose-200 hover:bg-rose-50 hover:rotate-0",
                card.day === 14 && "ring-2 ring-rose-400 ring-offset-2",
              )}
            >
              {card.day === 14 ? <DoodleHeart className="w-5 h-5" filled /> : card.day}
            </button>
          )
        })}
      </div>

      {activeCard && (
        <div className="space-y-4 p-6 bg-white/90 rounded-2xl border-2 border-dashed border-rose-200 relative">
          {/* Tape decoration */}
          <div className="absolute -top-2 left-8 w-12 h-4 bg-gradient-to-r from-amber-200/80 to-amber-300/60 rounded-sm rotate-[-2deg]" />
          <div className="absolute -top-2 right-8 w-10 h-4 bg-gradient-to-r from-amber-200/80 to-amber-300/60 rounded-sm rotate-[3deg]" />

          <div className="flex items-center justify-between pt-2">
            <h3 className="text-xl font-[var(--font-display)] text-rose-800">
              {activeCard.day === 14 ? (
                <span className="flex items-center gap-2">
                  <DoodleHeart className="w-6 h-6 text-rose-500" filled />
                  {t("editor.valentinesDay", language)}
                </span>
              ) : (
                `${t("editor.day", language)} ${activeCard.day} - ${t("editor.february", language)} ${activeCard.day}`
              )}
            </h3>
            {activeCard.day === 14 && (
              <span className="text-xs bg-rose-100 text-rose-600 px-3 py-1 rounded-full font-medium border border-dashed border-rose-300">
                {t("editor.specialDay", language)}
              </span>
            )}
          </div>

          {/* Scribble divider */}
          <div className="h-1 w-32 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%2010%22%3E%3Cpath%20d%3D%22M0%205%20Q10%200%2020%205%20T40%205%20T60%205%20T80%205%20T100%205%22%20stroke%3D%22%23fda4af%22%20stroke-width%3D%222%22%20fill%3D%22none%22%2F%3E%3C%2Fsvg%3E')] bg-repeat-x" />

          <Textarea
            value={activeCard.message}
            onChange={(e) => onUpdateCard(activeCard.day, { message: e.target.value })}
            placeholder={
              activeCard.day === 14
                ? t("editor.placeholderValentine", language)
                : t("editor.placeholder", language)
            }
            className="min-h-[120px] resize-none text-lg font-sans border-2 border-dashed border-rose-200 rounded-xl focus:border-rose-400 bg-rose-50/50"
          />

          <div className="flex flex-col gap-3 bg-rose-50/50 rounded-xl p-3 sm:p-4 border-2 border-dashed border-rose-100">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <div className="flex items-center gap-2">
                <ImagePlus className="w-5 h-5 text-rose-400 shrink-0" />
                <label className="text-sm text-rose-600 font-medium">{t("editor.addImage", language)}</label>
              </div>
              <div className="flex gap-1 sm:ml-auto">
                <Button
                  variant={imageMode === "upload" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => {
                    if (imageMode === "upload") {
                      fileInputRef.current?.click()
                    } else {
                      setImageMode("upload")
                    }
                  }}
                  className={cn(
                    "gap-1 h-8 px-2 sm:px-3 text-xs rounded-full font-[var(--font-display)] flex-1 sm:flex-none",
                    imageMode === "upload" && "bg-rose-500 hover:bg-rose-600",
                  )}
                >
                  <Upload className="w-3 h-3" />
                  {t("editor.upload", language)}
                </Button>
                <Button
                  variant={imageMode === "url" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setImageMode("url")}
                  className={cn(
                    "gap-1 h-8 px-2 sm:px-3 text-xs rounded-full font-[var(--font-display)] flex-1 sm:flex-none",
                    imageMode === "url" && "bg-rose-500 hover:bg-rose-600",
                  )}
                >
                  <Link className="w-3 h-3" />
                  URL
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                {imageMode === "url" ? (
                  <div className="flex gap-2">
                    <Input
                      value={urlInput}
                      onChange={(e) => setUrlInput(e.target.value)}
                      placeholder={t("editor.pasteUrl", language)}
                      className="flex-1 border-2 border-dashed border-rose-200 rounded-xl"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleAddImageFromUrl()
                        }
                      }}
                    />
                    <Button
                      onClick={handleAddImageFromUrl}
                      disabled={!urlInput}
                      className="bg-rose-500 hover:bg-rose-600 rounded-xl font-[var(--font-display)]"
                    >
                      {t("editor.addFromUrl", language)}
                    </Button>
                    {activeCard.imageUrl && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onUpdateCard(activeCard.day, { imageUrl: "" })}
                        className="text-rose-400 hover:text-rose-600 hover:bg-rose-100 rounded-full"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <Button
                      variant="outline"
                      onClick={() => fileInputRef.current?.click()}
                      className="flex-1 justify-start gap-2 border-2 border-dashed border-rose-200 rounded-xl hover:bg-rose-50 font-[var(--font-display)]"
                    >
                      <Upload className="w-4 h-4 text-rose-400" />
                      {activeCard.imageUrl ? t("editor.changeImage", language) : t("editor.chooseImage", language)}
                    </Button>
                    {activeCard.imageUrl && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onUpdateCard(activeCard.day, { imageUrl: "" })}
                        className="text-rose-400 hover:text-rose-600 hover:bg-rose-100 rounded-full"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                )}
              </div>

              <div className="flex items-end">
                <Button
                  variant={activeCard.hasAnimation ? "default" : "outline"}
                  onClick={() => onUpdateCard(activeCard.day, { hasAnimation: !activeCard.hasAnimation })}
                  className={cn(
                    "gap-2 rounded-full font-[var(--font-display)]",
                    activeCard.hasAnimation
                      ? "bg-amber-400 hover:bg-amber-500 text-amber-900"
                      : "border-2 border-dashed border-rose-200 hover:bg-rose-50",
                  )}
                >
                  <Sparkles className="w-4 h-4" />
                  {t("editor.animation", language)}
                </Button>
              </div>
            </div>
          </div>

          {activeCard.imageUrl && (
            <div className="mt-4 space-y-3">
              <div className="flex justify-center px-2">
                <div
                  className="relative bg-white p-2 pb-8 sm:pb-10 rotate-[-2deg] hover:rotate-0 transition-transform duration-300 w-fit h-fit max-w-full"
                  style={{ boxShadow: "0 4px 12px rgba(150, 150, 150, 0.25), 0 2px 4px rgba(150, 150, 150, 0.15)" }}
                >
                  {/* Tape on top of polaroid */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 sm:w-14 h-4 sm:h-5 bg-gradient-to-r from-amber-200/90 to-amber-300/70 rounded-sm rotate-[1deg] z-10" />

                  <div className="max-w-[200px] sm:max-w-[280px] max-h-[200px] sm:max-h-[280px] overflow-hidden bg-neutral-100 flex items-center justify-center">
                    <img
                      src={activeCard.imageUrl || "/placeholder.svg"}
                      alt={`Day ${activeCard.day}`}
                      className="max-w-[200px] sm:max-w-[280px] max-h-[200px] sm:max-h-[280px] w-auto h-auto object-contain"
                      onError={(e) => {
                        e.currentTarget.src = `/placeholder.svg?height=176&width=280&query=romantic love image day ${activeCard.day}`
                      }}
                      draggable={false}
                    />
                  </div>

                  {/* Polaroid bottom caption area */}
                  <div className="absolute bottom-1 sm:bottom-2 left-0 right-0 text-center">
                    <span className="text-xs text-rose-400 font-[var(--font-display)] opacity-70">
                      Feb {activeCard.day} ♡
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="flex items-center gap-3 text-sm text-rose-600 bg-white/80 rounded-full px-4 py-3 border-2 border-dashed border-rose-200">
        <DoodleHeart className="w-5 h-5 text-rose-400" filled />
        <div className="flex-1 h-3 bg-rose-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-rose-400 to-rose-500 transition-all duration-300 rounded-full"
            style={{ width: `${(cards.filter((c) => c.message).length / 14) * 100}%` }}
          />
        </div>
        <span className="font-[var(--font-display)] text-lg">{cards.filter((c) => c.message).length}/14 {t("editor.messages", language)}</span>
      </div>
    </div>
  )
}
