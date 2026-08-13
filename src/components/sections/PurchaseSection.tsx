import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { Card, CardDescription, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { btnCta, btnGhost, cardBase } from '@/lib/styles'
import type { PurchaseChoice, PurchaseOption } from '@/data/works/types'
import { SectionTitle } from './SectionTitle'

type PurchaseSectionProps = {
  eyebrow: string
  title: string
  intro: string
  options: PurchaseOption[]
  mockupImage: string
  mockupAlt: string
}

function PhysicalChoiceModal({
  open,
  choices,
  onClose,
}: {
  open: boolean
  choices: PurchaseChoice[]
  onClose: () => void
}) {
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/85 p-4 md:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="physical-choice-title"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0a0405] p-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Fechar"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X size={18} />
        </button>

        <div className="mb-6 pr-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-accent)]">
            Versão física
          </span>
          <h2 id="physical-choice-title" className="mt-2 text-2xl font-bold text-white md:text-3xl">
            Qual edição você quer?
          </h2>
          <p className="mt-2 text-gray-400">
            Só o livro, ou a edição completa com os brindes do universo.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {choices.map((choice) => (
            <div
              key={choice.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/40"
            >
              <div className="flex aspect-[4/3] items-center justify-center bg-black/50 p-4">
                <img
                  src={choice.image}
                  alt={choice.imageAlt}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                  {choice.title}
                </div>
                <div className="text-2xl font-bold text-white">{choice.price}</div>
                <p className="text-sm text-gray-300">{choice.description}</p>
                {choice.includes && choice.includes.length > 0 && (
                  <ul className="space-y-1 text-sm text-gray-400">
                    {choice.includes.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                )}
                <Button
                  className={`${btnCta} mt-auto w-full py-5 text-base`}
                  onClick={() => {
                    if (choice.url) window.open(choice.url, '_blank')
                    onClose()
                  }}
                >
                  {choice.buttonLabel}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex justify-center">
          <Button type="button" onClick={onClose} className={btnGhost}>
            Voltar
          </Button>
        </div>
      </div>
    </div>,
    document.body,
  )
}

export function PurchaseSection({
  eyebrow,
  title,
  intro,
  options,
  mockupImage,
  mockupAlt,
}: PurchaseSectionProps) {
  const [choices, setChoices] = useState<PurchaseChoice[] | null>(null)

  return (
    <div id="comprar" className="scroll-mt-24 md:grid md:grid-cols-2 gap-6 items-stretch p-6">
      <Card className={`${cardBase} min-w-0`}>
        <CardHeader>
          <SectionTitle eyebrow={eyebrow}>{title}</SectionTitle>
        </CardHeader>
        <CardDescription className="flex flex-col gap-5 text-gray-300 p-6">
          <p className="text-lg">{intro}</p>

          <div className="flex flex-col gap-5">
            {options.map((opt) => (
              <div
                key={opt.label}
                className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/30 p-6 text-center"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  {opt.label}
                </div>
                <div className="text-3xl font-bold text-white">{opt.price}</div>
                <p className="text-sm text-gray-400">{opt.description}</p>
                <Button
                  className={`${btnCta} w-full py-6 text-lg`}
                  onClick={() => {
                    if (opt.choices?.length) {
                      setChoices(opt.choices)
                      return
                    }
                    if (opt.url) window.open(opt.url, '_blank')
                  }}
                >
                  {opt.buttonLabel}
                </Button>
              </div>
            ))}
          </div>
        </CardDescription>
      </Card>

      <div className="relative min-w-0 flex items-center justify-center rounded-2xl overflow-hidden bg-gradient-to-b from-black/10 via-black/50 to-black/80 p-2 md:p-4 mt-6 md:mt-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,color-mix(in_srgb,var(--brand-bg-tint)_30%,transparent),transparent_65%)]" />
        <img
          src={mockupImage}
          alt={mockupAlt}
          className="relative w-full max-w-2xl object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.8)]"
        />
      </div>

      <PhysicalChoiceModal
        open={!!choices}
        choices={choices ?? []}
        onClose={() => setChoices(null)}
      />
    </div>
  )
}
