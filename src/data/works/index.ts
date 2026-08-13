import { canilDosCondenados } from './canil-dos-condenados'
import type { Work } from './types'

export type { Work, Review, Character, PurchaseOption, PurchaseChoice } from './types'

export const works: Work[] = [canilDosCondenados]

export function getWorkBySlug(slug: string): Work | undefined {
  return works.find((w) => w.slug === slug)
}
