import { Card, CardDescription, CardHeader } from '@/components/ui/card'
import { cardBase } from '@/lib/styles'
import { SectionTitle } from './SectionTitle'

type BonusItem = {
  title: string
  description: string
  image: string
  imageAlt: string
}

type EditionSectionProps = {
  eyebrow: string
  title: string
  intro: string
  extras?: BonusItem[]
  onExpandImage?: (src: string) => void
}

export function EditionSection({
  eyebrow,
  title,
  intro,
  extras,
  onExpandImage,
}: EditionSectionProps) {
  if (!extras?.length) return null

  return (
    <div className="w-full py-8 px-6">
      <Card className={cardBase}>
        <CardHeader>
          <SectionTitle eyebrow={eyebrow}>{title}</SectionTitle>
        </CardHeader>
        <CardDescription className="px-6 pb-6 text-gray-300">
          <p className="text-lg mb-6">{intro}</p>

          <div className="mb-4 flex flex-col gap-1">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              Separadamente
            </span>
            <h3 className="text-xl font-bold text-white">Compras adicionais</h3>
            <p className="text-sm text-gray-400">
              Quer só o merch? Estes itens também podem ser comprados avulsos.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {extras.map((extra) => (
              <button
                key={extra.title}
                type="button"
                onClick={() => onExpandImage?.(extra.image)}
                className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-black/30 text-left transition-[border-color,transform] duration-300 hover:border-white/25 hover:scale-[1.01]"
              >
                <div className="flex aspect-square items-center justify-center bg-black/40 p-3">
                  <img
                    src={extra.image}
                    alt={extra.imageAlt}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-1.5 p-4">
                  <h4 className="font-semibold text-white">{extra.title}</h4>
                  <p className="text-sm text-gray-400">{extra.description}</p>
                </div>
              </button>
            ))}
          </div>
        </CardDescription>
      </Card>
    </div>
  )
}
