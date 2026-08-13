import type { Theme } from '@/lib/theme'

export type Review = {
  title: string
  body: string
  rating: number
}

export type Character = {
  img: string
  name: string
}

export type PurchaseChoice = {
  title: string
  description: string
  price: string
  image: string
  imageAlt: string
  buttonLabel: string
  /** Itens inclusos (exibição opcional) */
  includes?: string[]
  url?: string
}

export type PurchaseOption = {
  label: string
  price: string
  description: string
  buttonLabel: string
  /** URL de compra; se omitido, o botão não abre link */
  url?: string
  /** Se definido, abre modal de escolha (ex: livro vs edição completa) */
  choices?: PurchaseChoice[]
}

export type Work = {
  slug: string
  title: string
  /** Resumo curto para cards na home */
  tagline: string
  /** Capa usada na home e SEO */
  coverImage: string
  theme: Theme

  hero: {
    eyebrow: string
    headline: string
    mockupImage: string
    mockupAlt: string
    ctaLabel: string
    storyButtonLabel: string
    authorButtonLabel: string
  }

  reviews: Review[]
  rating: number
  reviewCount: number

  story: {
    eyebrow: string
    title: string
    paragraphs: string[]
    /** Palavras/trechos destacados com a cor accent (match exato no texto) */
    highlightWords?: string[]
    characters: Character[]
  }

  authorSection: {
    eyebrow: string
    title: string
    image: string
    imageAlt: string
    paragraphs: string[]
    highlightWords?: string[]
  }

  edition: {
    eyebrow: string
    title: string
    intro: string
    /** Produtos avulsos (compra separada) */
    extras?: {
      title: string
      description: string
      image: string
      imageAlt: string
    }[]
  }

  purchase: {
    eyebrow: string
    title: string
    intro: string
    options: PurchaseOption[]
    mockupImage: string
    mockupAlt: string
  }
}
