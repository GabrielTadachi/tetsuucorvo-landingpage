import type { ReactNode } from 'react'

/** Destaca ocorrências exatas (case-sensitive) de palavras com a cor accent. */
export function highlightText(text: string, words: string[] = []): ReactNode {
  if (!words.length) return text

  const escaped = words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const pattern = new RegExp(`(${escaped.join('|')})`, 'g')
  const parts = text.split(pattern)

  return parts.map((part, i) =>
    words.includes(part) ? (
      <b key={i} className="text-[var(--brand-accent)]">
        {part}
      </b>
    ) : (
      part
    ),
  )
}

/** Destaca o primeiro nome próprio no início (para "TetsuUcorvo é...") como bold branco. */
export function boldLeadingName(text: string, name: string): ReactNode {
  if (!text.startsWith(name)) return text
  return (
    <>
      <b className="text-white">{name}</b>
      {text.slice(name.length)}
    </>
  )
}
