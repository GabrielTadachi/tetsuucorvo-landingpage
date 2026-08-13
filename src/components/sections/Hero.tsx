import Autoplay from 'embla-carousel-autoplay'
import { Card, CardDescription, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { btnCta, btnGhost, cardBase } from '@/lib/styles'
import type { Review } from '@/data/works/types'
import { RatingStars } from './RatingStars'

type HeroProps = {
  eyebrow: string
  headline: string
  mockupImage: string
  mockupAlt: string
  authorName: string
  rating: number
  reviewCount: number
  reviews: Review[]
  ctaLabel: string
  storyButtonLabel: string
  authorButtonLabel: string
}

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 80
  window.scrollTo({ top, behavior: 'smooth' })
}

export function Hero({
  eyebrow,
  headline,
  mockupImage,
  mockupAlt,
  authorName,
  rating,
  reviewCount,
  reviews,
  ctaLabel,
  storyButtonLabel,
  authorButtonLabel,
}: HeroProps) {
  return (
    <div className="md:grid md:grid-cols-2 gap-6 items-stretch p-6">
      <Card className={`${cardBase} min-w-0`}>
        <CardHeader className="flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--brand-accent)]">
            {eyebrow}
          </span>
          <span
            className="
              font-bold text-3xl md:text-5xl leading-tight text-white
              drop-shadow-[0_0_25px_color-mix(in_srgb,var(--brand-bg-tint)_80%,transparent)]
            "
          >
            {headline}
          </span>
        </CardHeader>

        <CardDescription className="px-6 flex flex-col gap-6 text-gray-200">
          <div className="rounded-xl border border-white/10 bg-black/30 p-5">
            <Carousel plugins={[Autoplay({ delay: 12000 })]} className="px-14">
              <CarouselContent>
                {reviews.map((review) => (
                  <CarouselItem key={review.title}>
                    <div className="flex flex-col max-h-44">
                      <div className="text-base font-bold text-[var(--brand-accent)] mb-2 shrink-0 pr-2">
                        {review.title}
                      </div>
                      <div className="review-scroll text-justify text-gray-300 overflow-y-auto overscroll-contain pr-2 flex-1 min-h-0">
                        "{review.body}"
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-1" />
              <CarouselNext className="right-1" />
            </Carousel>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="text-lg">
              Por <b className="text-white">{authorName}</b>
            </div>
            <div className="flex items-center gap-2">
              <RatingStars rating={rating} />
              <span className="text-sm text-gray-400">
                {rating.toLocaleString('pt-BR', {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                })}{' '}
                · {reviewCount} avaliações
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button onClick={() => scrollTo('comprar')} className={btnCta}>
              {ctaLabel}
            </Button>
            <Button onClick={() => scrollTo('historia')} className={btnGhost}>
              {storyButtonLabel}
            </Button>
            <Button onClick={() => scrollTo('autor')} className={btnGhost}>
              {authorButtonLabel}
            </Button>
          </div>
        </CardDescription>
      </Card>

      <div className="relative min-w-0 flex items-center justify-center rounded-2xl overflow-hidden bg-gradient-to-b from-black/10 via-black/60 to-black/90 p-4 md:p-6 mt-6 md:mt-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,color-mix(in_srgb,var(--brand-bg-tint)_35%,transparent),transparent_65%)]" />
        <img
          src={mockupImage}
          alt={mockupAlt}
          className="relative w-full max-w-xl object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.8)]"
        />
      </div>
    </div>
  )
}
