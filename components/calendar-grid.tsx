"use client"

import { cn } from "@/lib/utils"
import type { CalendarData } from "@/lib/types"
import { templateStyles } from "@/lib/template-styles"
import { CalendarCard } from "./calendar-card"

interface CalendarGridProps {
  data: CalendarData
  isPreview?: boolean
  isCreatorPreview?: boolean
  isReceiverView?: boolean
  currentDate?: Date
}

function BackgroundDecorations({ template }: { template: string }) {
  switch (template) {
    case "romantic-soft":
      // Floating hearts background
      return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float-slow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            >
              <svg viewBox="0 0 50 50" className="w-8 h-8 text-rose-200/30" fill="currentColor">
                <path d="M25 45 C10 30 2 20 8 12 C14 4 25 8 25 18 C25 8 36 4 42 12 C48 20 40 30 25 45" />
              </svg>
            </div>
          ))}
        </div>
      )

    case "cute-pastel":
      // Watercolor blobs
      return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-rose-200/20 blur-3xl" />
          <div className="absolute top-1/3 right-20 w-48 h-48 rounded-full bg-amber-200/20 blur-3xl" />
          <div className="absolute bottom-20 left-1/4 w-56 h-56 rounded-full bg-orange-200/20 blur-3xl" />
          <div className="absolute bottom-10 right-1/3 w-40 h-40 rounded-full bg-pink-200/20 blur-3xl" />
        </div>
      )

    case "elegant-minimal":
      // Gold accent lines
      return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
          <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-amber-500/20 to-transparent" />
          <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-amber-500/20 to-transparent" />
          {/* Corner decorations */}
          <div className="absolute top-8 left-8 text-amber-500/20 text-2xl">✦</div>
          <div className="absolute top-8 right-8 text-amber-500/20 text-2xl">✦</div>
          <div className="absolute bottom-8 left-8 text-amber-500/20 text-2xl">✦</div>
          <div className="absolute bottom-8 right-8 text-amber-500/20 text-2xl">✦</div>
        </div>
      )

    case "playful-love":
      // Colorful dots and hearts
      return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          {[...Array(30)].map((_, i) => {
            const colors = [
              "bg-fuchsia-300/30",
              "bg-cyan-300/30",
              "bg-yellow-300/30",
              "bg-pink-300/30",
              "bg-lime-300/30",
            ]
            const isHeart = i % 4 === 0
            return isHeart ? (
              <svg
                key={i}
                viewBox="0 0 50 50"
                className="absolute w-6 h-6"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  fill: ["#f472b6", "#a78bfa", "#60a5fa", "#34d399", "#fbbf24"][i % 5],
                  opacity: 0.2,
                }}
              >
                <path d="M25 45 C10 30 2 20 8 12 C14 4 25 8 25 18 C25 8 36 4 42 12 C48 20 40 30 25 45" />
              </svg>
            ) : (
              <div
                key={i}
                className={cn(
                  "absolute rounded-full",
                  colors[i % colors.length],
                  i % 3 === 0 ? "w-4 h-4" : i % 3 === 1 ? "w-3 h-3" : "w-2 h-2",
                )}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            )
          })}
        </div>
      )

    case "dreamy-night":
      // Stars and moon
      return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 starry-night">
          {/* Moon */}
          <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-amber-100/80 moon-glow" />
          <div className="absolute top-10 right-8 w-16 h-16 rounded-full bg-indigo-950" />
          {/* Additional stars */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            >
              <svg
                viewBox="0 0 24 24"
                className={cn("text-amber-200/40", i % 3 === 0 ? "w-3 h-3" : "w-2 h-2")}
                fill="currentColor"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
          ))}
          {/* Cat silhouette */}
          <div className="absolute bottom-10 left-10">
            <svg viewBox="0 0 60 40" className="w-16 h-12 text-indigo-900/50" fill="currentColor">
              <ellipse cx="30" cy="30" rx="15" ry="10" />
              <circle cx="42" cy="22" r="8" />
              <polygon points="36,14 38,6 42,14" />
              <polygon points="42,14 46,6 48,14" />
              <path d="M15 30 Q8 26 10 18" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      )

    default:
      return null
  }
}

export function CalendarGrid({ data, isPreview, isCreatorPreview, isReceiverView, currentDate }: CalendarGridProps) {
  const styles = templateStyles[data.template]

  // Calculate which days are unlocked based on current date and timezone
  const getUnlockedDays = () => {
    if (isCreatorPreview) return Array.from({ length: 14 }, (_, i) => i + 1)
    if (isPreview) return []

    let now = currentDate || new Date()
    
    // If timezone is set, get the current time in that timezone
    if (data.timezone) {
      const tzDate = new Date(now.toLocaleString("en-US", { timeZone: data.timezone }))
      now = tzDate
    }
    
    const month = now.getMonth()
    const day = now.getDate()

    if (month === 1 && day <= 14) {
      return Array.from({ length: day }, (_, i) => i + 1)
    }
    if (month > 1 || (month === 1 && day > 14)) {
      return Array.from({ length: 14 }, (_, i) => i + 1)
    }
    return Array.from({ length: Math.min(day, 14) }, (_, i) => i + 1)
  }

  const unlockedDays = getUnlockedDays()

  return (
    <div className={cn("min-h-screen p-4 sm:p-6 lg:p-8 relative", styles.background)}>
      <BackgroundDecorations template={data.template} />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className={cn("text-center mb-8", styles.textColor)}>
          <h1
            className={cn(
              "text-3xl sm:text-4xl font-bold mb-2",
              styles.fontDisplay,
              data.template === "elegant-minimal" && "tracking-wide",
            )}
          >
            14 Days of Love
          </h1>
          {data.recipientName && <p className={cn("text-lg opacity-80", styles.fontBody)}>For {data.recipientName}</p>}
          {isCreatorPreview && (
            <span
              className={cn(
                "inline-block mt-2 px-3 py-1 rounded-full text-sm",
                data.template === "elegant-minimal"
                  ? "bg-amber-500/20 text-amber-400"
                  : "bg-emerald-500/20 text-emerald-700",
                styles.fontDisplay,
              )}
            >
              Creator Preview - Click any card to see full content
            </span>
          )}
          {isPreview && !isCreatorPreview && (
            <span
              className={cn(
                "inline-block mt-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm",
                styles.fontDisplay,
              )}
            >
              Preview Mode - All cards locked
            </span>
          )}
        </div>

        {/* Grid */}
        <div className={cn(
          "grid gap-3 sm:gap-4",
          isPreview && !isCreatorPreview
            ? "grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3"
            : "grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7"
        )}>
          {data.cards.map((card) => (
            <CalendarCard
              key={card.day}
              card={card}
              template={data.template}
              isUnlocked={unlockedDays.includes(card.day)}
              isPreview={isPreview && !isCreatorPreview}
              isCreatorPreview={isCreatorPreview}
              isReceiverView={isReceiverView}
              language={data.language || "es"}
              timezone={data.timezone}
            />
          ))}
        </div>

        {/* Footer hint */}
        {!isPreview && !isCreatorPreview && (
          <p className={cn("text-center mt-8 text-sm opacity-60", styles.textColor, styles.fontBody)}>
            A new message unlocks each day until Valentine&apos;s Day
          </p>
        )}
        {isCreatorPreview && (
          <p className={cn("text-center mt-8 text-sm opacity-60", styles.textColor, styles.fontBody)}>
            This is how your calendar will look. Click any card to preview the full experience!
          </p>
        )}
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(-3deg); }
          50% { transform: translateY(-30px) rotate(3deg); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
