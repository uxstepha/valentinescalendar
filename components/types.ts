import type { DayCard, Template, Language, ImagePosition } from "@/lib/types"

export interface CalendarCardProps {
  card: DayCard & {
    isUnlocked?: boolean
    isPreview?: boolean
    onOpen?: () => void
    imagePosition?: ImagePosition
  }
  template: Template
  isCreatorPreview?: boolean
  isReceiverView?: boolean
  isUnlocked?: boolean
  isPreview?: boolean
  language?: Language
  timezone?: string
}
