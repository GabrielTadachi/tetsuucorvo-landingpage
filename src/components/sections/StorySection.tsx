import Autoplay from 'embla-carousel-autoplay'
import { Card, CardDescription, CardHeader } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { cardBase } from '@/lib/styles'
import type { Character } from '@/data/works/types'
import { SectionTitle } from './SectionTitle'
import { highlightText } from './highlight'

type StorySectionProps = {
  eyebrow: string
  title: string
  paragraphs: string[]
  highlightWords?: string[]
  characters: Character[]
  onExpandImage: (src: string) => void
}

export function StorySection({
  eyebrow,
  title,
  paragraphs,
  highlightWords,
  characters,
  onExpandImage,
}: StorySectionProps) {
  return (
    <div id="historia" className="w-full scroll-mt-24 py-8 px-6">
      <Card className={cardBase}>
        <CardHeader>
          <SectionTitle eyebrow={eyebrow}>{title}</SectionTitle>
        </CardHeader>

        <CardDescription className="md:grid md:grid-cols-2 gap-6 px-5 text-gray-300 items-center">
          <div className="text-lg gap-4 p-6 flex flex-col justify-center">
            {paragraphs.map((p) => (
              <p key={p}>{highlightText(p, highlightWords)}</p>
            ))}
          </div>

          <div className="relative flex items-center justify-center p-6 rounded-2xl overflow-hidden bg-gradient-to-b from-black/10 via-black/50 to-black/80">
            <Carousel plugins={[Autoplay({ delay: 5000 })]} className="w-full max-w-md">
              <CarouselContent>
                {characters.map(({ img, name }) => (
                  <CarouselItem key={img} className="flex flex-col items-center gap-3">
                    <img
                      src={img}
                      alt={name}
                      onClick={() => onExpandImage(img)}
                      className="img-frame cursor-pointer w-full min-h-64 object-contain bg-black/40"
                    />
                    <span className="text-sm text-gray-400">{name}</span>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </CardDescription>
      </Card>
    </div>
  )
}
