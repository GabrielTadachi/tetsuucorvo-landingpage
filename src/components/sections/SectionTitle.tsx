import type { ReactNode } from 'react'

type SectionTitleProps = {
  eyebrow?: string
  children: ReactNode
}

export function SectionTitle({ eyebrow, children }: SectionTitleProps) {
  return (
    <div className="flex flex-col gap-2">
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--brand-accent)]">
          {eyebrow}
        </span>
      )}
      <div className="flex items-center gap-3">
        <span className="h-7 w-1.5 rounded-full bg-gradient-to-b from-[var(--brand-title-from)] to-[var(--brand-title-to)] shadow-[0_0_12px_color-mix(in_srgb,var(--brand-title-from)_70%,transparent)]" />
        <span className="font-bold text-2xl md:text-3xl tracking-wide text-white">
          {children}
        </span>
      </div>
    </div>
  )
}
