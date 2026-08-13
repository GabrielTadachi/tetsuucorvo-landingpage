export const cardBase = `
  border border-white/10
  bg-black/45 backdrop-blur-sm
  rounded-2xl
  shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)]
`

export const btnCta = `
  bg-gradient-to-b from-[var(--brand-cta-from)] to-[var(--brand-cta-to)]
  text-white font-semibold tracking-wide
  rounded-full px-8 py-3
  border border-[var(--brand-cta-border)]/40
  shadow-[0_14px_34px_-10px_color-mix(in_srgb,var(--brand-cta-from)_80%,transparent)]
  cursor-pointer
  transition-[transform,box-shadow,filter,border-color] duration-300 ease-out
  hover:brightness-125 hover:scale-[1.02]
  hover:shadow-[0_18px_40px_-8px_color-mix(in_srgb,var(--brand-title-from)_90%,transparent)]
  hover:border-[var(--brand-cta-border)]/70
  active:scale-[0.98] active:brightness-95
`

export const btnCtaSm = `
  bg-gradient-to-b from-[var(--brand-cta-from)] to-[var(--brand-cta-to)]
  text-white font-semibold tracking-wide text-sm
  rounded-full px-5 py-2
  border border-[var(--brand-cta-border)]/40
  shadow-[0_10px_24px_-8px_color-mix(in_srgb,var(--brand-cta-from)_75%,transparent)]
  cursor-pointer whitespace-nowrap
  transition-[transform,box-shadow,filter,border-color] duration-300 ease-out
  hover:brightness-125 hover:scale-[1.02]
  hover:shadow-[0_14px_30px_-6px_color-mix(in_srgb,var(--brand-title-from)_85%,transparent)]
  hover:border-[var(--brand-cta-border)]/70
  active:scale-[0.98] active:brightness-95
`

export const btnGhost = `
  bg-transparent
  text-gray-100 border border-white/25
  rounded-full px-8 py-3 font-medium
  cursor-pointer
  transition-[background-color,border-color,transform,color] duration-300 ease-out
  hover:bg-white/10 hover:border-white/45 hover:scale-[1.02]
  active:scale-[0.98]
`

export const btnGhostSm = `
  bg-transparent
  text-gray-100 border border-white/25
  rounded-full px-5 py-2 font-medium text-sm
  cursor-pointer whitespace-nowrap
  transition-[background-color,border-color,transform] duration-300 ease-out
  hover:bg-white/10 hover:border-white/45 hover:scale-[1.02]
  active:scale-[0.98]
`
