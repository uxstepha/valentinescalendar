"use client"

import type React from "react"
import type { CalendarCardProps } from "./types"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { templateStyles, templateEnvelopeColors } from "@/lib/template-styles"
import { Lock } from "lucide-react"
import { t } from "@/lib/translations"

function DoodleHeart({ className, filled, color }: { className?: string; filled?: boolean; color?: string }) {
  return (
    <svg viewBox="0 0 50 50" className={className} fill={filled ? color || "currentColor" : "none"}>
      <path
        d="M25 45 C10 30 2 20 8 12 C14 4 25 8 25 18 C25 8 36 4 42 12 C48 20 40 30 25 45"
        stroke={color || "currentColor"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function WatercolorFlower({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className}>
      <defs>
        <filter id="watercolor" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
        </filter>
      </defs>
      <g filter="url(#watercolor)" opacity="0.8">
        <ellipse cx="30" cy="20" rx="8" ry="12" fill="#fda4af" />
        <ellipse cx="40" cy="30" rx="8" ry="12" fill="#fecdd3" transform="rotate(72 30 30)" />
        <ellipse cx="35" cy="42" rx="8" ry="12" fill="#fbcfe8" transform="rotate(144 30 30)" />
        <ellipse cx="20" cy="38" rx="8" ry="12" fill="#fda4af" transform="rotate(216 30 30)" />
        <ellipse cx="18" cy="25" rx="8" ry="12" fill="#fecdd3" transform="rotate(288 30 30)" />
        <circle cx="30" cy="30" r="6" fill="#fbbf24" />
      </g>
    </svg>
  )
}

function Star({ className, filled }: { className?: string; filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={filled ? "currentColor" : "none"}>
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CatOnMoon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className}>
      {/* Moon */}
      <circle cx="40" cy="40" r="25" fill="#fef3c7" className="moon-glow" />
      <circle cx="48" cy="35" r="20" fill="#1e1b4b" />
      {/* Cat silhouette */}
      <g fill="#0f0d24">
        {/* Body */}
        <ellipse cx="55" cy="52" rx="8" ry="6" />
        {/* Head */}
        <circle cx="62" cy="45" r="5" />
        {/* Ears */}
        <polygon points="58,40 60,35 62,40" />
        <polygon points="62,40 64,35 66,40" />
        {/* Tail */}
        <path d="M47 52 Q42 48 44 42" stroke="#0f0d24" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  )
}

function GiftBox({ className, isOpening }: { className?: string; isOpening?: boolean }) {
  return (
    <svg viewBox="0 0 80 80" className={className}>
      {/* Box body */}
      <rect x="15" y="35" width="50" height="40" fill="#171717" stroke="#fbbf24" strokeWidth="2" />
      {/* Ribbon vertical */}
      <rect x="36" y="35" width="8" height="40" fill="#fbbf24" />
      {/* Box lid */}
      <g className={isOpening ? "lid-open" : ""}>
        <rect x="10" y="25" width="60" height="12" fill="#262626" stroke="#fbbf24" strokeWidth="2" />
        {/* Ribbon on lid */}
        <rect x="36" y="25" width="8" height="12" fill="#fbbf24" />
        {/* Bow */}
        <ellipse cx="40" cy="20" rx="12" ry="6" fill="#fbbf24" />
        <ellipse cx="32" cy="18" rx="6" ry="4" fill="#fbbf24" />
        <ellipse cx="48" cy="18" rx="6" ry="4" fill="#fbbf24" />
        <circle cx="40" cy="20" r="3" fill="#171717" />
      </g>
    </svg>
  )
}

function HeartEnvelope({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1673 1190"
      className={className}
      fill="#f9a8d4"
    >
      <g transform="translate(0,1190) scale(0.1,-0.1)">
        <path d="M9500 8356 c-196 -36 -361 -91 -555 -186 -252 -124 -534 -324 -761
-542 l-50 -49 -105 107 c-304 310 -671 517 -1068 601 -116 25 -145 27 -356 28
-201 0 -244 -3 -344 -23 -234 -48 -496 -144 -670 -247 -394 -235 -601 -684
-577 -1250 25 -594 255 -1233 674 -1875 534 -819 1309 -1517 2207 -1991 l140
-74 85 1 c70 1 104 7 191 37 426 144 1082 609 1668 1182 768 752 1241 1504
1321 2103 18 127 7 419 -20 581 -73 440 -247 828 -498 1115 -208 238 -482 404
-779 472 -95 21 -404 28 -503 10z"/>
      </g>
    </svg>
  )
}

const handDrawnHearts = [
  // Scribbled filled heart
  (props: { className?: string; style?: React.CSSProperties }) => (
    <svg viewBox="0 0 50 50" className={props.className} style={props.style}>
      <path
        d="M25 45 C10 30 2 20 8 12 C14 4 25 8 25 18 C25 8 36 4 42 12 C48 20 40 30 25 45"
        fill="#ef4444"
        stroke="#ef4444"
        strokeWidth="1"
      />
      <path
        d="M15 20 Q20 15 25 22 M20 25 Q25 20 30 27 M18 30 Q23 25 28 32"
        stroke="#dc2626"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  ),
  // Outline heart with inner lines
  (props: { className?: string; style?: React.CSSProperties }) => (
    <svg viewBox="0 0 50 50" className={props.className} style={props.style}>
      <path
        d="M25 45 C10 30 2 20 8 12 C14 4 25 8 25 18 C25 8 36 4 42 12 C48 20 40 30 25 45"
        fill="none"
        stroke="#ef4444"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  // Double outline heart
  (props: { className?: string; style?: React.CSSProperties }) => (
    <svg viewBox="0 0 50 50" className={props.className} style={props.style}>
      <path
        d="M25 42 C12 30 5 22 10 15 C15 8 25 11 25 18 C25 11 35 8 40 15 C45 22 38 30 25 42"
        fill="none"
        stroke="#f87171"
        strokeWidth="2"
      />
      <path
        d="M25 38 C14 28 8 22 12 17 C16 12 25 14 25 19 C25 14 34 12 38 17 C42 22 36 28 25 38"
        fill="none"
        stroke="#ef4444"
        strokeWidth="2"
      />
    </svg>
  ),
  // Filled pink heart
  (props: { className?: string; style?: React.CSSProperties }) => (
    <svg viewBox="0 0 50 50" className={props.className} style={props.style}>
      <path
        d="M25 45 C10 30 2 20 8 12 C14 4 25 8 25 18 C25 8 36 4 42 12 C48 20 40 30 25 45"
        fill="#ec4899"
        stroke="#ec4899"
        strokeWidth="1"
      />
    </svg>
  ),
  // Simple outline heart
  (props: { className?: string; style?: React.CSSProperties }) => (
    <svg viewBox="0 0 50 50" className={props.className} style={props.style}>
      <path
        d="M25 43 C12 32 6 23 10 16 C14 9 24 12 25 18 C26 12 36 9 41 16 C47 21 38 32 25 43"
        fill="none"
        stroke="#f43f5e"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  // Small filled heart
  (props: { className?: string; style?: React.CSSProperties }) => (
    <svg viewBox="0 0 50 50" className={props.className} style={props.style}>
      <path d="M25 40 C15 32 10 25 13 19 C16 13 24 15 25 20 C26 15 34 13 37 19 C40 25 35 32 25 40" fill="#fb7185" />
    </svg>
  ),
  // Thick scribbled heart
  (props: { className?: string; style?: React.CSSProperties }) => (
    <svg viewBox="0 0 50 50" className={props.className} style={props.style}>
      <path
        d="M25 44 C11 31 3 21 9 13 C15 5 25 9 25 18 C26 12 36 9 41 13 C47 21 39 31 25 44"
        fill="#fda4af"
        stroke="#f43f5e"
        strokeWidth="2"
      />
    </svg>
  ),
  // White heart
  (props: { className?: string; style?: React.CSSProperties }) => (
    <svg viewBox="0 0 50 50" className={props.className} style={props.style}>
      <path
        d="M25 42 C13 31 7 23 11 16 C15 9 24 12 25 18 C26 12 35 9 39 16 C43 23 37 31 25 42"
        fill="#fff"
        stroke="#fecdd3"
        strokeWidth="1.5"
      />
    </svg>
  ),
]

const playfulColors = ["#f472b6", "#a78bfa", "#60a5fa", "#34d399", "#fbbf24", "#f87171", "#e879f9"]

const watercolorBackgrounds = [
  // Pink/mauve cloud
  "radial-gradient(ellipse at center, rgba(216, 180, 200, 0.7) 0%, rgba(216, 180, 200, 0.3) 50%, transparent 70%)",
  // Beige/peach cloud
  "radial-gradient(ellipse at center, rgba(220, 195, 170, 0.7) 0%, rgba(220, 195, 170, 0.3) 50%, transparent 70%)",
  // Lavender cloud
  "radial-gradient(ellipse at center, rgba(200, 180, 210, 0.7) 0%, rgba(200, 180, 210, 0.3) 50%, transparent 70%)",
  // Pink/magenta cloud
  "radial-gradient(ellipse at center, rgba(210, 150, 180, 0.7) 0%, rgba(210, 150, 180, 0.3) 50%, transparent 70%)",
  // Purple/violet cloud
  "radial-gradient(ellipse at center, rgba(170, 150, 200, 0.7) 0%, rgba(170, 150, 200, 0.3) 50%, transparent 70%)",
  // Pink circle with soft edges
  "radial-gradient(ellipse at center, rgba(220, 170, 180, 0.7) 0%, rgba(220, 170, 180, 0.3) 50%, transparent 70%)",
  // Pale pink starfish shape - use star gradient
  "radial-gradient(ellipse at center, rgba(230, 210, 215, 0.7) 0%, rgba(230, 210, 215, 0.3) 50%, transparent 70%)",
  // Pink cloud blob
  "radial-gradient(ellipse at center, rgba(235, 180, 190, 0.7) 0%, rgba(235, 180, 190, 0.3) 50%, transparent 70%)",
  // Orange/coral watercolor heart
  "radial-gradient(ellipse at center, rgba(230, 160, 140, 0.7) 0%, rgba(230, 160, 140, 0.3) 50%, transparent 70%)",
  // Additional variations for remaining days
  "radial-gradient(ellipse at center, rgba(200, 170, 190, 0.7) 0%, rgba(200, 170, 190, 0.3) 50%, transparent 70%)",
  "radial-gradient(ellipse at center, rgba(225, 190, 175, 0.7) 0%, rgba(225, 190, 175, 0.3) 50%, transparent 70%)",
  "radial-gradient(ellipse at center, rgba(190, 165, 200, 0.7) 0%, rgba(190, 165, 200, 0.3) 50%, transparent 70%)",
  "radial-gradient(ellipse at center, rgba(240, 190, 200, 0.7) 0%, rgba(240, 190, 200, 0.3) 50%, transparent 70%)",
  // Special Valentine's day - heart shape inspired coral/orange
  "radial-gradient(ellipse at center, rgba(235, 150, 130, 0.8) 0%, rgba(235, 150, 130, 0.4) 50%, transparent 70%)",
]

const elegantRomanticPhrases: Record<string, string[]> = {
  es: [
    "Hoy mi corazón tiene algo que decirte.",
    "Antes de leer, respira… esto viene con amor.",
    "Cada palabra aquí nació pensando en ti.",
    "Esta carta guarda un pedacito de mi alma.",
    "Léela despacio, fue escrita con el corazón.",
    "Hay sentimientos que solo caben en palabras sinceras.",
    "Esto no es solo una carta, es un latido.",
    "Hoy quiero acercarme a ti, aunque sea en letras.",
    "Que estas palabras te abracen suavemente.",
    "Aquí va algo que no supe decir en voz alta.",
    "Esta carta existe porque tú existes.",
    "Abre con calma… hay cariño dentro.",
    "Cada línea tiene un motivo: tú.",
    "Lo que estás por leer viene desde lo más bonito de mí.",
  ],
  en: [
    "Today my heart has something to tell you.",
    "Before reading, breathe… this comes with love.",
    "Every word here was born thinking of you.",
    "This letter holds a little piece of my soul.",
    "Read it slowly, it was written from the heart.",
    "There are feelings that only fit in sincere words.",
    "This is not just a letter, it's a heartbeat.",
    "Today I want to reach you, even if only through words.",
    "May these words embrace you gently.",
    "Here's something I couldn't say out loud.",
    "This letter exists because you exist.",
    "Open it calmly… there's love inside.",
    "Every line has a reason: you.",
    "What you're about to read comes from the most beautiful part of me.",
  ],
}

const romanticSoftEnvelopePhrases: Record<string, string[]> = {
  en: [
    "Before you read, know this was written for you.",
    "These words found their way to your heart.",
    "Take a moment — this comes from something real.",
    "Every line here carries a feeling.",
    "This page holds more than just words.",
    "Read slowly… it means a lot to me.",
    "A little piece of my heart is waiting inside.",
    "These words were thinking of you first.",
    "Let this letter sit gently with you.",
    "What you're about to read matters to me.",
    "This was written in a quiet moment of honesty.",
    "Open it with care — it's sincere.",
    "Somewhere between these lines, there's affection.",
    "This letter exists because you do.",
  ],
  es: [
    "Antes de leer, sabe que esto fue escrito para ti.",
    "Estas palabras encontraron el camino a tu corazón.",
    "Tómate un momento — esto viene de algo real.",
    "Cada línea aquí lleva un sentimiento.",
    "Esta página guarda más que solo palabras.",
    "Lee despacio… significa mucho para mí.",
    "Un pedacito de mi corazón te espera adentro.",
    "Estas palabras pensaron en ti primero.",
    "Deja que esta carta descanse suavemente contigo.",
    "Lo que estás por leer me importa mucho.",
    "Esto fue escrito en un momento de honestidad.",
    "Ábrelo con cuidado — es sincero.",
    "Entre estas líneas, hay cariño.",
    "Esta carta existe porque tú existes.",
  ],
}

const cutePastelEnvelopePhrases: Record<string, string[]> = {
  en: [
    "This little letter missed you.",
    "A tiny heart is hiding inside.",
    "Written with sparkles and soft thoughts.",
    "This note is smiling already.",
    "A small hug before you read.",
    "Made with love and bunny feelings.",
    "This letter feels warm and fuzzy.",
    "A gentle moment just for us.",
    "Filled with sweet pink thoughts.",
    "This page is blushing a little.",
    "A cozy feeling is waiting here.",
    "Sent with care and tiny hearts.",
    "This letter wants to cuddle you.",
    "A soft hello from my heart.",
  ],
  es: [
    "Esta cartita te extrañaba.",
    "Un corazoncito se esconde adentro.",
    "Escrita con brillitos y pensamientos suaves.",
    "Esta nota ya está sonriendo.",
    "Un abracito antes de leer.",
    "Hecha con amor y sentimientos tiernos.",
    "Esta carta se siente calientita y suave.",
    "Un momento dulce solo para nosotros.",
    "Llena de pensamientos rosados y dulces.",
    "Esta página está sonrojada.",
    "Un sentimiento acogedor te espera aquí.",
    "Enviada con cariño y corazoncitos.",
    "Esta carta quiere abrazarte.",
    "Un hola suave desde mi corazón.",
  ],
}

const dreamyNightEnvelopePhrases: Record<string, string[]> = {
  en: [
    "The night saved these words for you.",
    "A quiet thought under the stars.",
    "Written while the world was sleeping.",
    "Soft words for a silent hour.",
    "A little feeling glowing in the dark.",
    "This letter shines gently tonight.",
    "A whisper carried by moonlight.",
    "Meant to be read slowly, like a dream.",
    "A calm moment between night and heart.",
    "Wrapped in stars and warm thoughts.",
    "The moon watched me write this.",
    "A peaceful thought drifting your way.",
    "This message belongs to the night.",
    "A dream left open just for you.",
  ],
  es: [
    "La noche guardó estas palabras para ti.",
    "Un pensamiento tranquilo bajo las estrellas.",
    "Escrito mientras el mundo dormía.",
    "Palabras suaves para una hora silenciosa.",
    "Un sentimiento brillando en la oscuridad.",
    "Esta carta brilla suavemente esta noche.",
    "Un susurro llevado por la luz de luna.",
    "Para leer despacio, como un sueño.",
    "Un momento de calma entre la noche y el corazón.",
    "Envuelto en estrellas y pensamientos cálidos.",
    "La luna me vio escribir esto.",
    "Un pensamiento tranquilo llegando a ti.",
    "Este mensaje pertenece a la noche.",
    "Un sueño dejado abierto solo para ti.",
  ],
}

const playfulLoveEnvelopePhrases: Record<string, string[]> = {
  en: [
    "This letter is smiling already.",
    "A little love with a silly twist.",
    "Something fun is waiting inside.",
    "Written with happy thoughts only.",
    "This note might make you grin.",
    "A tiny message doing a happy dance.",
    "Warning: cute feelings ahead.",
    "This page is feeling extra lovely.",
    "A small note with big smiles.",
    "Love, but make it fun.",
    "This letter couldn't stop smiling.",
    "A playful heart wrote this.",
    "Open gently - it's feeling shy.",
    "A happy little surprise for you.",
  ],
  es: [
    "Esta carta ya esta sonriendo.",
    "Un poco de amor con un toque divertido.",
    "Algo divertido te espera adentro.",
    "Escrita solo con pensamientos felices.",
    "Esta nota podria hacerte sonreir.",
    "Un mensajito haciendo un baile feliz.",
    "Advertencia: sentimientos tiernos adelante.",
    "Esta pagina se siente extra adorable.",
    "Una notita con grandes sonrisas.",
    "Amor, pero hazlo divertido.",
    "Esta carta no podia dejar de sonreir.",
    "Un corazon jugueton escribio esto.",
    "Abre con cuidado - se siente timida.",
    "Una pequena sorpresa feliz para ti.",
  ],
}

// Removed the duplicate export interface CalendarCardProps
// It was causing the lint error: lint/suspicious/noRedeclare
// The interface is correctly defined in ./types

export function CalendarCard({ card, template, isCreatorPreview = false, isReceiverView = false, language = "es" }: CalendarCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showEnvelope, setShowEnvelope] = useState(false)
  const [envelopeOpened, setEnvelopeOpened] = useState(false)
  const [letterOut, setLetterOut] = useState(false)
  const [showParticles, setShowParticles] = useState(false)
  const [giftOpening, setGiftOpening] = useState(false)
  const [giftOpened, setGiftOpened] = useState(false)
  const [showPolaroid, setShowPolaroid] = useState(false)
  const [showNote, setShowNote] = useState(false)
  const [showLockedMessage, setShowLockedMessage] = useState(false)

  const styles = templateStyles[template]
  const isValentine = card.day === 14
  const envelopeColors = templateEnvelopeColors[template]
  const envelopeColor = envelopeColors[(card.day - 1) % envelopeColors.length]

  const canOpen = isCreatorPreview || (card.isUnlocked && !card.isPreview)

  const handleClick = () => {
    if (!canOpen) {
      if (isReceiverView) {
        setShowLockedMessage(true)
        setTimeout(() => setShowLockedMessage(false), 3000)
      }
      return
    }
    setShowEnvelope(true)
    card.onOpen?.()
  }

  const handleGiftClick = () => {
    setGiftOpening(true)
    setShowParticles(true)
    setTimeout(() => {
      setGiftOpened(true)
    }, 800)
  }

  const handleEnvelopeAfterGift = () => {
    setEnvelopeOpened(true)
    setTimeout(() => setLetterOut(true), 500)
    setTimeout(() => {
      setIsOpen(true)
      setTimeout(() => setShowPolaroid(true), 300)
      setTimeout(() => setShowNote(true), 800)
    }, 1200)
  }

  const handleEnvelopeClick = () => {
    setEnvelopeOpened(true)
    setShowParticles(true)
    setTimeout(() => setLetterOut(true), 500)
    setTimeout(() => {
      setIsOpen(true)
      setTimeout(() => setShowPolaroid(true), 300)
      setTimeout(() => setShowNote(true), 800)
    }, 1200)
  }

  const handleClose = () => {
    setIsOpen(false)
    setShowEnvelope(false)
    setEnvelopeOpened(false)
    setLetterOut(false)
    setShowParticles(false)
    setGiftOpening(false)
    setGiftOpened(false)
    setShowPolaroid(false)
    setShowNote(false)
    setShowLockedMessage(false)
  }

  const rotation = ((card.day % 5) - 2) * 0.8
  const showAsUnlocked = isCreatorPreview || card.isUnlocked

  const getImagePosition = () => {
    const pos = card.imagePosition || { x: 0, y: 0, scale: 1 }
    return { ...pos, scale: Math.max(1, pos.scale) }
  }

  const renderCardDecorations = () => {
    switch (template) {
      case "romantic-soft":
        return (
          <>
            <DoodleHeart className="absolute -top-1 -left-1 w-4 h-4 text-rose-400 opacity-60" filled />
            <DoodleHeart className="absolute -bottom-1 -right-1 w-3 h-3 text-pink-400 opacity-60" filled />
            <DoodleHeart className="absolute -top-2 -left-2 w-5 h-5 text-rose-200 opacity-80" filled />
            <DoodleHeart className="absolute -bottom-2 -right-2 w-4 h-4 text-pink-200 opacity-70" filled />
            {showAsUnlocked && (
              <>
                <DoodleHeart className="absolute top-1 right-1 w-3 h-3 text-white opacity-60" filled />
                <DoodleHeart className="absolute bottom-1 left-1 w-3 h-3 text-rose-200 opacity-50" />
              </>
            )}
          </>
        )
      case "cute-pastel":
        return null
      case "elegant-minimal":
        return (
          <>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
            <div className="absolute top-1 right-1 text-amber-500 text-xs">✦</div>
          </>
        )
      case "playful-love":
        return (
          <>
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  backgroundColor: playfulColors[i % playfulColors.length],
                  top: `${10 + i * 20}%`,
                  left: i % 2 === 0 ? "5%" : "auto",
                  right: i % 2 === 1 ? "5%" : "auto",
                  opacity: 0.6,
                }}
              />
            ))}
          </>
        )
      case "dreamy-night":
        return (
          <>
            {[...Array(4)].map((_, i) => (
              <Star
                key={i}
                className="absolute w-2 h-2 text-amber-300"
                filled
                style={
                  {
                    top: `${15 + i * 20}%`,
                    left: `${10 + i * 25}%`,
                    opacity: 0.4 + i * 0.1,
                  } as React.CSSProperties
                }
              />
            ))}
          </>
        )
      default:
        return null
    }
  }

  const getModalStyles = () => {
    switch (template) {
      case "elegant-minimal":
        return "bg-neutral-900 border-amber-500/30 text-amber-100"
      case "dreamy-night":
        return "bg-indigo-950 border-purple-500/30 text-purple-100 starry-night"
      case "cute-pastel":
        return "bg-amber-50 border-amber-300 text-amber-900 watercolor-effect"
      case "playful-love":
        return "bg-white border-fuchsia-300 text-fuchsia-900"
      default:
        return "bg-white border-rose-300 text-rose-900"
    }
  }

  const renderOpeningParticles = () => {
    if (!showParticles) return null

    switch (template) {
      case "romantic-soft":
      case "cute-pastel":
        return [...Array(20)].map((_, i) => {
          const angle = (i / 20) * 360
          const distance = 80 + Math.random() * 120
          const tx = Math.cos((angle * Math.PI) / 180) * distance
          const ty = Math.sin((angle * Math.PI) / 180) * distance
          const HeartComponent = handDrawnHearts[i % handDrawnHearts.length]
          const size = 20 + Math.random() * 25
          const rotation = Math.random() * 360
          return (
            <HeartComponent
              key={i}
              className="absolute heart-explode"
              style={
                {
                  left: "50%",
                  top: "50%",
                  width: size,
                  height: size,
                  "--tx": `${tx}px`,
                  "--ty": `${ty}px`,
                  animationDelay: `${i * 0.02}s`,
                  transform: `rotate(${rotation}deg)`,
                } as React.CSSProperties
              }
            />
          )
        })
      case "playful-love":
        return [...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 confetti-piece"
            style={{
              left: `${30 + Math.random() * 40}%`,
              top: "40%",
              backgroundColor: playfulColors[i % playfulColors.length],
              borderRadius: i % 3 === 0 ? "50%" : i % 3 === 1 ? "0" : "50% 0",
              animationDelay: `${Math.random() * 0.3}s`,
              animationDuration: `${1.5 + Math.random()}s`,
            }}
          />
        ))
      case "dreamy-night":
        return [...Array(12)].map((_, i) => (
          <Star
            key={i}
            className="absolute text-amber-300 star-shower"
            filled
            style={
              {
                left: `${30 + Math.random() * 40}%`,
                top: "20%",
                width: `${10 + Math.random() * 10}px`,
                height: `${10 + Math.random() * 10}px`,
                animationDelay: `${i * 0.08}s`,
              } as React.CSSProperties
            }
          />
        ))
      case "elegant-minimal":
        return [...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-amber-400 animate-ping"
            style={{
              top: `${30 + Math.random() * 40}%`,
              left: `${30 + Math.random() * 40}%`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: "1s",
            }}
          >
            ✦
          </div>
        ))
      default:
        return null
    }
  }

  const renderGiftBox = () => (
    <div
      onClick={!giftOpening ? handleGiftClick : undefined}
      className={cn(
        "relative w-48 h-56 sm:w-56 sm:h-64 transition-all duration-300 animate-in zoom-in-95",
        !giftOpening && "cursor-pointer hover:scale-105",
        giftOpening && "animate-wiggle",
      )}
    >
      {/* Gift Box SVG */}
      <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-2xl">
        {/* Box body */}
        <rect x="10" y="50" width="80" height="65" fill="#171717" stroke="#fbbf24" strokeWidth="2" />
        {/* Ribbon vertical */}
        <rect x="42" y="50" width="16" height="65" fill="#fbbf24" />
        {/* Ribbon horizontal */}
        <rect x="10" y="75" width="80" height="12" fill="#fbbf24" opacity="0.7" />

        {/* Box lid - animates up when opening */}
        <g
          className="transition-all duration-700 ease-out"
          style={{
            transform: giftOpening ? "translateY(-60px) rotate(-15deg)" : "translateY(0)",
            transformOrigin: "center bottom",
            opacity: giftOpened ? 0 : 1,
          }}
        >
          <rect x="5" y="35" width="90" height="18" fill="#262626" stroke="#fbbf24" strokeWidth="2" />
          {/* Ribbon on lid */}
          <rect x="42" y="35" width="16" height="18" fill="#fbbf24" />
          {/* Bow */}
          <ellipse cx="50" cy="28" rx="18" ry="10" fill="#fbbf24" />
          <ellipse cx="36" cy="25" rx="10" ry="7" fill="#fbbf24" />
          <ellipse cx="64" cy="25" rx="10" ry="7" fill="#fbbf24" />
          <circle cx="50" cy="28" r="5" fill="#171717" />
          {/* Bow shine */}
          <ellipse cx="38" cy="23" rx="3" ry="2" fill="#fcd34d" opacity="0.6" />
          <ellipse cx="62" cy="23" rx="3" ry="2" fill="#fcd34d" opacity="0.6" />
        </g>

        {/* Sparkles around gift */}
        <text x="0" y="25" fill="#fbbf24" fontSize="12" className="animate-pulse">
          ✦
        </text>
        <text x="88" y="30" fill="#fbbf24" fontSize="10" className="animate-pulse" style={{ animationDelay: "0.3s" }}>
          ✦
        </text>
        <text x="5" y="90" fill="#fbbf24" fontSize="8" className="animate-pulse" style={{ animationDelay: "0.5s" }}>
          ✦
        </text>
        <text x="85" y="100" fill="#fbbf24" fontSize="10" className="animate-pulse" style={{ animationDelay: "0.7s" }}>
          ✦
        </text>
      </svg>
    </div>
  )

  const renderElegantEnvelope = () => (
    <div
      onClick={!envelopeOpened ? handleEnvelopeAfterGift : undefined}
      className={cn(
        "relative w-72 h-48 sm:w-80 sm:h-52 shadow-2xl transition-all duration-500 rounded-none animate-in zoom-in-95 fade-in duration-500",
        "bg-neutral-900 border border-amber-500/50",
        !envelopeOpened && "cursor-pointer hover:scale-105 hover:shadow-amber-500/20",
      )}
    >
      {/* Gold trim */}
      <div className="absolute inset-2 border border-amber-500/30" />

      {/* Envelope flap - triangle pointing DOWN */}
      <div
        className={cn(
          "absolute top-0 left-0 right-0 h-24 origin-top transition-transform duration-500 z-20",
          envelopeOpened && "[transform:rotateX(180deg)]",
        )}
        style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
      >
        {/* Triangle pointing DOWN using border-top */}
        <div
          className={cn(
            "absolute top-0 left-0 right-0",
            "border-l-[144px] sm:border-l-[160px] border-r-[144px] sm:border-r-[160px] border-t-[96px]",
            "border-l-transparent border-r-transparent border-t-neutral-800",
            envelopeOpened && "opacity-0",
          )}
          style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))", backfaceVisibility: "hidden" }}
        />
      </div>

      {/* Gold seal */}
      <div
        className={cn(
          "absolute top-16 left-1/2 -translate-x-1/2 z-30 transition-all duration-300",
          envelopeOpened ? "opacity-0 scale-0" : "opacity-100",
        )}
      >
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-neutral-900 font-bold text-xl shadow-lg">
          ✦
        </div>
      </div>

      {/* Letter emerging */}
      <div
        className={cn(
          "absolute left-4 right-4 shadow-lg transition-all duration-700 ease-out z-10 bg-neutral-800 border border-amber-500/30",
          letterOut ? "bottom-full -translate-y-4" : "bottom-4",
          "h-40",
        )}
      >
        <div className="p-4 h-full flex flex-col justify-end text-center">
          <p className="text-2xl mb-2 font-serif text-amber-400">
            Feb {card.day} {isValentine && "✦"}
          </p>
          <p className="text-sm line-clamp-2 text-amber-200/70 italic">
            {elegantRomanticPhrases[language][(card.day - 1) % elegantRomanticPhrases[language].length]}
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Card */}
      <div
        onClick={handleClick}
        className={cn(
          "relative rounded-xl border-2 border-dashed transition-all duration-300",
          "aspect-square w-full", // Square card
          canOpen ? "cursor-pointer hover:scale-105 hover:shadow-lg" : "cursor-not-allowed",
          styles.cardBackground,
          styles.cardBorder,
          template === "elegant-minimal" && "rounded-none border-solid",
          template === "cute-pastel" && "border-amber-300/50",
          !showAsUnlocked && "opacity-80",
        )}
        style={{
          transform: `rotate(${rotation}deg)`,
          background:
            template === "cute-pastel"
              ? watercolorBackgrounds[(card.day - 1) % watercolorBackgrounds.length]
              : undefined,
        }}
      >
        {/* Template decorations */}
        {renderCardDecorations()}

        {/* Tape effect for cards (except elegant-minimal) */}
        {template !== "elegant-minimal" && (
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 sm:w-10 h-3 sm:h-4 bg-gradient-to-r from-amber-200/70 to-amber-300/50 rounded-sm rotate-[-1deg] z-10" />
        )}

        {/* Locked overlay */}
        {!showAsUnlocked && (
          <div
            className={cn(
              "absolute inset-0 flex flex-col items-center justify-center gap-1 p-2",
              template === "elegant-minimal" ? "rounded-none" : "rounded-xl",
              styles.lockedOverlay,
            )}
          >
            <Lock className={cn("w-5 h-5 sm:w-6 sm:h-6", styles.accentColor)} />
            <span className={cn("text-xs sm:text-sm font-medium", styles.fontDisplay, styles.textColor)}>
              Feb {card.day}
            </span>
          </div>
        )}

        {/* Unlocked content preview */}
        {showAsUnlocked && (
          <div className="flex flex-col items-center justify-center p-3 text-center">
            {isValentine ? (
              template === "dreamy-night" ? (
                <CatOnMoon className="w-12 h-12 mb-2" />
              ) : template === "elegant-minimal" ? (
                <span className={cn("text-3xl mb-2", styles.fontDisplay)}>♔</span>
              ) : (
                <DoodleHeart className={cn("w-10 h-10 mb-2 animate-pulse", styles.accentColor)} filled />
              )
            ) : (
              <span className={cn("text-3xl", styles.fontDisplay, styles.textColor)}>{card.day}</span>
            )}
            <span className={cn("text-sm", styles.fontDisplay, styles.accentColor)}>
              {isValentine ? "Valentine's!" : `Feb ${card.day}`}
            </span>
            {card.hasAnimation && <span className={cn("text-xs mt-2 opacity-60", styles.textColor)}>tap to open!</span>}
          </div>
        )}
      </div>

      {showEnvelope && !isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={handleClose}
        >
          <div className="relative flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            {renderOpeningParticles()}

            {template === "elegant-minimal" ? (
              <>
                {!giftOpened ? (
                  <>
                    {renderGiftBox()}
                    <p
                      className={cn(
                        "text-center mt-6 text-xl transition-opacity duration-300 font-serif",
                        giftOpening ? "opacity-0" : "opacity-100",
                        "text-amber-400",
                      )}
                    >
                      {!giftOpening ? "Tap the gift to open" : ""}
                    </p>
                  </>
                ) : (
                  <>
                    {renderElegantEnvelope()}
                    <p
                      className={cn(
                        "text-center mt-6 text-xl transition-opacity duration-300 font-serif",
                        letterOut ? "opacity-0" : "opacity-100",
                        "text-amber-400",
                      )}
                    >
                      {!envelopeOpened ? "Tap the envelope to open" : "Opening..."}
                    </p>
                  </>
                )}
              </>
            ) : (
              <>
                <div
                  onClick={!envelopeOpened ? handleEnvelopeClick : undefined}
                  className={cn(
                    "relative transition-all duration-500",
                    !envelopeOpened && "cursor-pointer hover:scale-105 animate-in zoom-in-95 duration-300",
                    envelopeOpened && "scale-110",
                  )}
                >
                  {/* Closed envelope image - use different images per template */}
                  <div className={cn("relative transition-all duration-500 flex flex-col items-center", envelopeOpened && "opacity-0 scale-90")}>
                    {template === "romantic-soft" ? (
                      <>
                        <img 
                          src="/images/cute-letter-valentine-flat-by-vexels.png" 
                          alt="Love envelope" 
                          className="w-64 h-auto sm:w-80 drop-shadow-2xl" 
                        />
                        {/* Phrase at the bottom of envelope */}
                        <p className="text-white/90 text-center text-sm sm:text-base mt-4 max-w-xs italic font-light">
                          {romanticSoftEnvelopePhrases[language][(card.day - 1) % romanticSoftEnvelopePhrases[language].length]}
                        </p>
                      </>
                    ) : template === "cute-pastel" ? (
                      <>
                        <HeartEnvelope className="w-64 h-auto sm:w-80 drop-shadow-2xl" />
                        {/* Phrase at the bottom of envelope */}
                        <p className="text-amber-700/90 text-center text-sm sm:text-base mt-4 max-w-xs italic font-light">
                          {cutePastelEnvelopePhrases[language][(card.day - 1) % cutePastelEnvelopePhrases[language].length]}
                        </p>
                      </>
                    ) : template === "dreamy-night" ? (
                      <>
                        <img 
                          src="/images/doodle-valentine-envelope-dreamy.png" 
                          alt="Dreamy envelope" 
                          className="w-64 h-auto sm:w-80 drop-shadow-2xl" 
                        />
                        {/* Phrase at the bottom of envelope */}
                        <p className="text-indigo-200/90 text-center text-sm sm:text-base mt-4 max-w-xs italic font-light">
                          {dreamyNightEnvelopePhrases[language][(card.day - 1) % dreamyNightEnvelopePhrases[language].length]}
                        </p>
                      </>
                    ) : template === "playful-love" ? (
                      <>
                        <img 
                          src="/images/playful-love-envelope.svg" 
                          alt="Playful envelope" 
                          className="w-64 h-auto sm:w-80 drop-shadow-2xl" 
                        />
                        {/* Phrase at the bottom of envelope */}
                        <p className="text-fuchsia-600/90 text-center text-sm sm:text-base mt-4 max-w-xs italic font-light">
                          {playfulLoveEnvelopePhrases[language][(card.day - 1) % playfulLoveEnvelopePhrases[language].length]}
                        </p>
                      </>
                    ) : (
                      <img src="/images/image.png" alt="Love envelope" className="w-64 h-auto sm:w-80 drop-shadow-2xl" />
                    )}
                    {/* Pulsing glow effect */}
                    <div
                      className="absolute inset-0 bg-rose-400/20 rounded-lg animate-pulse"
                      style={{ filter: "blur(20px)" }}
                    />
                  </div>

                  {/* Opening animation overlay */}
                  {envelopeOpened && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Letter emerging from center */}
                      <div
                        className={cn(
                          "bg-white rounded-md shadow-2xl transition-all duration-700 ease-out p-4",
                          letterOut ? "opacity-100 scale-100 -translate-y-20" : "opacity-0 scale-75",
                        )}
                        style={{
                          backgroundImage: `repeating-linear-gradient(transparent, transparent 23px, #fce7f3 24px)`,
                          width: "250px",
                        }}
                      >
                        <p className={cn("text-2xl mb-2 text-center", styles.fontDisplay, "text-rose-400")}>
                          Feb {card.day} {isValentine && "♡"}
                        </p>
                        <p className={cn("text-sm line-clamp-2 text-center", styles.fontBody, "text-rose-300")}>
                          {card.message?.substring(0, 50) || "A special message awaits..."}
                          {(card.message?.length || 0) > 50 && "..."}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <p
                  className={cn(
                    "text-center mt-6 text-xl transition-opacity duration-300",
                    styles.fontDisplay,
                    letterOut ? "opacity-0" : "opacity-100",
                    "text-white/80",
                  )}
                >
                  {!envelopeOpened ? "Tap the envelope to open" : "Opening..."}
                </p>
              </>
            )}

            {/* Close button - only show before opening */}
            {((template === "elegant-minimal" && !giftOpening) ||
              (template !== "elegant-minimal" && !envelopeOpened)) && (
              <button
                onClick={handleClose}
                className={cn(
                  "mt-4 px-4 py-2 rounded-full text-sm transition-colors",
                  template === "elegant-minimal"
                    ? "bg-amber-500/20 hover:bg-amber-500/30 text-amber-400"
                    : "bg-white/20 hover:bg-white/30 text-white",
                )}
              >
                Close
              </button>
            )}
          </div>
        </div>
      )}

      {/* Full card modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={handleClose}
        >
          <div
            className={cn(
              "relative w-full max-w-2xl rounded-3xl p-6 animate-in zoom-in-95 duration-300",
              "border-2 shadow-2xl",
              template === "elegant-minimal" && "rounded-none border-solid",
              getModalStyles(),
              isValentine && styles.valentineGlow,
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tape decoration (not for elegant) */}
            {template !== "elegant-minimal" && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-gradient-to-r from-amber-200/80 to-amber-300/60 rotate-[-2deg] rounded-sm" />
            )}

            {/* Close button */}
            <button
              onClick={handleClose}
              className={cn(
                "absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors z-20",
                template === "elegant-minimal"
                  ? "bg-amber-500/20 hover:bg-amber-500/30 text-amber-400"
                  : "bg-rose-100 hover:bg-rose-200 text-rose-500",
              )}
            >
              <span className="sr-only">Close</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Date header */}
            <div className="text-center mb-6 pt-2">
              {isValentine ? (
                <div className="flex items-center justify-center gap-3">
                  {template === "dreamy-night" ? (
                    <Star className="w-7 h-7 text-amber-300" filled />
                  ) : template === "elegant-minimal" ? (
                    <span className="text-amber-400">✦</span>
                  ) : (
                    <DoodleHeart className={cn("w-7 h-7", styles.accentColor)} filled />
                  )}
                  <span className={cn("text-2xl", styles.fontDisplay)}>February 14</span>
                  {template === "dreamy-night" ? (
                    <Star className="w-7 h-7 text-amber-300" filled />
                  ) : template === "elegant-minimal" ? (
                    <span className="text-amber-400">✦</span>
                  ) : (
                    <DoodleHeart className={cn("w-7 h-7", styles.accentColor)} filled />
                  )}
                </div>
              ) : (
                <span className={cn("text-xl", styles.fontDisplay)}>February {card.day}</span>
              )}
            </div>

            {/* Divider */}
            {template === "elegant-minimal" ? (
              <div className="h-px w-24 mx-auto mb-6 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
            ) : (
              <div className="h-1 w-24 mx-auto mb-6 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%2010%22%3E%3Cpath%20d%3D%22M0%205%20Q10%200%2020%205%20T40%205%20T60%205%20T80%205%20T100%205%22%20stroke%3D%22%23fda4af%22%20stroke-width%3D%222%22%20fill%3D%22none%22%2F%3E%3C%2Fsvg%3E')] bg-repeat-x" />
            )}

            <div className={cn("flex gap-6 items-start", card.imageUrl ? "flex-col sm:flex-row" : "flex-col")}>
              {/* Polaroid photo - appears first */}
              {card.imageUrl && (
                <div
                  className={cn(
                    "flex-shrink-0 mx-auto sm:mx-0 transition-all duration-700 ease-out",
                    showPolaroid ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95",
                  )}
                >
                  <div
                    className="relative bg-white p-2 pb-12 rotate-[-3deg] hover:rotate-0 transition-transform duration-300 w-fit h-fit"
                    style={{ boxShadow: "0 4px 12px rgba(150, 150, 150, 0.25), 0 2px 4px rgba(150, 150, 150, 0.15)" }}
                  >
                    {/* Tape on top of polaroid */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-5 bg-gradient-to-r from-amber-200/90 to-amber-300/70 rounded-sm rotate-[1deg] z-10" />

                    <div className="max-w-[200px] max-h-[200px] overflow-hidden bg-neutral-100 flex items-center justify-center">
                      <img
                        src={card.imageUrl || "/placeholder.svg"}
                        alt={`Day ${card.day}`}
                        className="max-w-[200px] max-h-[200px] w-auto h-auto object-contain"
                        onError={(e) => {
                          e.currentTarget.src = `/placeholder.svg?height=192&width=192&query=romantic love hearts`
                        }}
                      />
                    </div>

                    {/* Polaroid bottom caption */}
                    <div className="absolute bottom-3 left-0 right-0 text-center">
                      <span
                        className={cn(
                          "text-sm",
                          styles.fontDisplay,
                          template === "elegant-minimal" ? "text-amber-600" : "text-rose-400",
                        )}
                      >
                        Feb {card.day} {template === "elegant-minimal" ? "✦" : "♡"}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Note - appears second */}
              <div
                className={cn(
                  "flex-1 min-w-0 transition-all duration-700 ease-out",
                  showNote || !card.imageUrl
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-8 scale-95",
                )}
              >
                <div
                  className={cn(
                    "relative p-5 shadow-md rotate-[1deg] hover:rotate-0 transition-transform duration-300 bg-white",
                    template === "elegant-minimal" && "border border-amber-500/30",
                  )}
                  style={{
                    boxShadow: "3px 3px 10px rgba(0,0,0,0.1)",
                  }}
                >
                  {/* Pencil-drawn hearts background */}
                  <div className="absolute inset-0 opacity-[0.08] pointer-events-none overflow-hidden">
                    {/* Scattered pencil hearts pattern */}
                    <svg
                      className="absolute top-2 left-4 w-8 h-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        d="M12 21C12 21 4 14.5 4 9C4 6 6.5 4 9 4C10.5 4 11.5 4.5 12 5.5C12.5 4.5 13.5 4 15 4C17.5 4 20 6 20 9C20 14.5 12 21 12 21Z"
                        className="text-gray-700"
                      />
                    </svg>
                    <svg
                      className="absolute top-8 right-6 w-6 h-6 rotate-12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        d="M12 21C12 21 4 14.5 4 9C4 6 6.5 4 9 4C10.5 4 11.5 4.5 12 5.5C12.5 4.5 13.5 4 15 4C17.5 4 20 6 20 9C20 14.5 12 21 12 21Z"
                        className="text-gray-600"
                      />
                    </svg>
                    <svg
                      className="absolute bottom-12 left-8 w-5 h-5 -rotate-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        d="M12 21C12 21 4 14.5 4 9C4 6 6.5 4 9 4C10.5 4 11.5 4.5 12 5.5C12.5 4.5 13.5 4 15 4C17.5 4 20 6 20 9C20 14.5 12 21 12 21Z"
                        className="text-gray-700"
                      />
                    </svg>
                    <svg
                      className="absolute top-1/2 right-10 w-7 h-7 rotate-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        d="M12 21C12 21 4 14.5 4 9C4 6 6.5 4 9 4C10.5 4 11.5 4.5 12 5.5C12.5 4.5 13.5 4 15 4C17.5 4 20 6 20 9C20 14.5 12 21 12 21Z"
                        className="text-gray-600"
                      />
                    </svg>
                    <svg
                      className="absolute bottom-6 right-4 w-6 h-6 -rotate-12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        d="M12 21C12 21 4 14.5 4 9C4 6 6.5 4 9 4C10.5 4 11.5 4.5 12 5.5C12.5 4.5 13.5 4 15 4C17.5 4 20 6 20 9C20 14.5 12 21 12 21Z"
                        className="text-gray-700"
                      />
                    </svg>
                    <svg
                      className="absolute top-16 left-1/2 w-5 h-5 rotate-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        d="M12 21C12 21 4 14.5 4 9C4 6 6.5 4 9 4C10.5 4 11.5 4.5 12 5.5C12.5 4.5 13.5 4 15 4C17.5 4 20 6 20 9C20 14.5 12 21 12 21Z"
                        className="text-gray-600"
                      />
                    </svg>
                    <svg
                      className="absolute bottom-20 left-12 w-4 h-4 rotate-[20deg]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        d="M12 21C12 21 4 14.5 4 9C4 6 6.5 4 9 4C10.5 4 11.5 4.5 12 5.5C12.5 4.5 13.5 4 15 4C17.5 4 20 6 20 9C20 14.5 12 21 12 21Z"
                        className="text-gray-700"
                      />
                    </svg>
                  </div>

                  {/* Tape on note */}
                  {template !== "elegant-minimal" && (
                    <div className="absolute -top-2 right-4 w-10 h-4 bg-gradient-to-r from-amber-300/80 to-amber-200/60 rounded-sm rotate-[12deg] z-10" />
                  )}

                  {/* Message content - now always black text */}
                  <div
                    className={cn(
                      "leading-[28px] text-lg relative z-10 text-gray-800",
                      styles.fontBody,
                      isValentine && cn("text-xl", styles.fontDisplay),
                    )}
                  >
                    {card.message || <span className="opacity-50 italic">No message for this day</span>}
                  </div>

                  {/* Bottom decoration */}
                  <div className="absolute bottom-2 right-3 z-10">
                    {template === "elegant-minimal" ? (
                      <span className="text-amber-500">✦</span>
                    ) : template === "dreamy-night" ? (
                      <Star className="w-5 h-5 text-purple-400" filled />
                    ) : (
                      <DoodleHeart className="w-5 h-5 text-rose-300" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating animation effect */}
            {card.hasAnimation && (
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                {[...Array(12)].map((_, i) =>
                  template === "dreamy-night" ? (
                    <Star
                      key={i}
                      className="absolute text-amber-300/40 animate-float w-5 h-5"
                      filled
                      style={
                        {
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 2}s`,
                          animationDuration: `${3 + Math.random() * 2}s`,
                        } as React.CSSProperties
                      }
                    />
                  ) : (
                    <DoodleHeart
                      key={i}
                      className="absolute text-primary/40 animate-float w-5 h-5"
                      filled
                      color={template === "playful-love" ? playfulColors[i % playfulColors.length] : undefined}
                      style={
                        {
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 2}s`,
                          animationDuration: `${3 + Math.random() * 2}s`,
                        } as React.CSSProperties
                      }
                    />
                  ),
                )}
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-5deg); opacity: 0.4; }
          50% { transform: translateY(-20px) rotate(5deg); opacity: 0.7; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .rotate-x-180 {
          transform: rotateX(180deg);
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(3deg); }
          50% { transform: rotate(-3deg); }
          75% { transform: rotate(2deg); }
        }
        .animate-wiggle {
          animation: wiggle 1s ease-in-out infinite;
        }
        @keyframes heart-explode {
          0% { 
            transform: translate(-50%, -50%) scale(0); 
            opacity: 1; 
          }
          50% { 
            opacity: 1; 
          }
          100% { 
            transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(1) rotate(var(--rotation, 0deg)); 
            opacity: 0; 
          }
        }
        .heart-explode {
          animation: heart-explode 1.2s ease-out forwards;
        }
      `}</style>

      {/* Locked message toast for receiver view */}
      {showLockedMessage && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-6 py-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-dashed border-rose-200 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <p className={cn("text-center text-rose-600 font-[var(--font-display)]", styles.fontDisplay)}>
            {t("view.notYet", language)} <span className="inline-block">💕</span>
          </p>
        </div>
      )}
    </>
  )
}
