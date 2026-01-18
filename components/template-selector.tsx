"use client"

import { cn } from "@/lib/utils"
import { TEMPLATES, type Template, type Language } from "@/lib/types"
import { templateStyles } from "@/lib/template-styles"
import { Heart, Sparkles, Star, Moon, Check, Gift } from "lucide-react"
import { t } from "@/lib/translations"

interface TemplateSelectorProps {
  selected: Template
  onSelect: (template: Template) => void
  language: Language
}

const templateIcons: Record<Template, typeof Heart> = {
  "romantic-soft": Heart,
  "cute-pastel": Sparkles,
  "elegant-minimal": Gift,
  "playful-love": Star,
  "dreamy-night": Moon,
}

export function TemplateSelector({ selected, onSelect, language }: TemplateSelectorProps) {
  return (
    <div className="space-y-3 sm:space-y-4">
      <h2 className="text-xl sm:text-2xl font-[var(--font-display)] text-rose-800 flex items-center gap-2">
        <Star className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
        {t("creator.chooseTemplate", language)}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {TEMPLATES.map((template, i) => {
          const Icon = templateIcons[template.id]
          const styles = templateStyles[template.id]
          const isSelected = selected === template.id
          const rotation = ((i % 3) - 1) * 1.5

          return (
            <button
              key={template.id}
              onClick={() => onSelect(template.id)}
              style={{ transform: `rotate(${rotation}deg)` }}
              className={cn(
                "relative p-4 sm:p-5 transition-all duration-300 text-left",
                "hover:scale-105 hover:rotate-0",
                styles.background,
                template.id === "elegant-minimal"
                  ? "rounded-none border-2 border-solid"
                  : "rounded-2xl border-2 border-dashed",
                isSelected
                  ? template.id === "elegant-minimal"
                    ? "border-amber-500 ring-2 ring-amber-400/30 shadow-lg"
                    : "border-rose-500 ring-2 ring-rose-300 shadow-lg"
                  : styles.cardBorder,
              )}
            >
              {/* Tape decoration when selected (not for elegant) */}
              {isSelected && template.id !== "elegant-minimal" && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-gradient-to-r from-amber-200/80 to-amber-300/60 rounded-sm rotate-[-1deg]" />
              )}

              {/* Gold corner for elegant when selected */}
              {isSelected && template.id === "elegant-minimal" && (
                <>
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-500" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-amber-500" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-amber-500" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-500" />
                </>
              )}

              <div
                className={cn(
                  "w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-2 sm:mb-3",
                  template.id === "elegant-minimal"
                    ? "rounded-none border border-amber-500/50"
                    : "rounded-full border-2 border-dashed",
                  styles.cardBg,
                  styles.cardBorder,
                )}
              >
                <Icon className={cn("w-5 h-5 sm:w-6 sm:h-6", styles.accentColor)} />
              </div>
              <h3
                className={cn(
                  "text-lg sm:text-xl mb-1",
                  styles.fontDisplay,
                  styles.textColor,
                  template.id === "elegant-minimal" && "tracking-wide",
                )}
              >
                {t(`template.${template.id}`, language)}
              </h3>
              <p className={cn("text-xs sm:text-sm opacity-70", styles.textColor, styles.fontBody)}>
                {t(`template.${template.id}.desc`, language)}
              </p>
              {isSelected && (
                <div
                  className={cn(
                    "absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center shadow-md",
                    template.id === "elegant-minimal" ? "bg-amber-500" : "bg-rose-500",
                  )}
                >
                  <Check className="w-4 h-4 text-white" />
                </div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
