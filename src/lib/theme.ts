import type { CSSProperties } from 'react'

export type Theme = {
  accent: string
  star: string
  ctaFrom: string
  ctaTo: string
  ctaBorder: string
  titleFrom: string
  titleTo: string
  surface: string
  bgTint: string
}

/** Tema "sangue" — default atual da landing */
export const bloodTheme: Theme = {
  accent: '#ff5a3c',
  star: '#fe6300',
  ctaFrom: '#c81a1a',
  ctaTo: '#7a0000',
  ctaBorder: '#ff5a3c',
  titleFrom: '#e11d1d',
  titleTo: '#5c0000',
  surface: '#0a0405',
  bgTint: '#960606',
}

export function themeToCssVars(theme: Theme): CSSProperties {
  return {
    '--brand-accent': theme.accent,
    '--brand-star': theme.star,
    '--brand-cta-from': theme.ctaFrom,
    '--brand-cta-to': theme.ctaTo,
    '--brand-cta-border': theme.ctaBorder,
    '--brand-title-from': theme.titleFrom,
    '--brand-title-to': theme.titleTo,
    '--brand-surface': theme.surface,
    '--brand-bg-tint': theme.bgTint,
  } as CSSProperties
}
