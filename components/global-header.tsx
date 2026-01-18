"use client"

export function GlobalHeader() {
  return (
    <header className="w-full py-3 px-4 sm:px-6 bg-white/80 backdrop-blur-sm border-b border-rose-100 flex items-center justify-between">
      {/* Logo - links to stephaaldea.com */}
      <a
        href="https://www.stephaaldea.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center"
      >
        <img
          src="/images/logo-stepha.svg"
          alt="Stepha Logo"
          className="h-10 sm:h-12 w-auto"
        />
      </a>

      {/* Instagram handle */}
      <a
        href="https://www.instagram.com/ux_stepha?igsh=MXF4N2t5cDhyejdvaw%3D%3D&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm sm:text-base text-rose-500 hover:text-rose-600 transition-colors font-[var(--font-display)]"
      >
        @ux_stepha
      </a>
    </header>
  )
}
