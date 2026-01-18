import { Suspense } from "react"
import { Heart } from "lucide-react"
import { ViewContent } from "@/components/view-content"

function LoadingState() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 flex items-center justify-center">
      <div className="animate-pulse text-rose-400">
        <Heart className="w-12 h-12" fill="currentColor" />
      </div>
    </div>
  )
}

export default function ViewPage() {
  return (
    <Suspense fallback={<LoadingState />}>
      <ViewContent />
    </Suspense>
  )
}
