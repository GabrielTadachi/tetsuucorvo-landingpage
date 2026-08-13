import { Card, CardDescription, CardHeader } from '@/components/ui/card'
import { cardBase } from '@/lib/styles'
import { SectionTitle } from './SectionTitle'
import { boldLeadingName, highlightText } from './highlight'

type AuthorSectionProps = {
  eyebrow: string
  title: string
  image: string
  imageAlt: string
  paragraphs: string[]
  highlightWords?: string[]
  authorName?: string
}

export function AuthorSection({
  eyebrow,
  title,
  image,
  imageAlt,
  paragraphs,
  highlightWords,
  authorName,
}: AuthorSectionProps) {
  return (
    <div id="autor" className="w-full scroll-mt-24 py-8 px-6">
      <Card className={cardBase}>
        <CardHeader>
          <SectionTitle eyebrow={eyebrow}>{title}</SectionTitle>
        </CardHeader>
        <CardDescription className="md:grid md:grid-cols-2 gap-6 px-5 text-gray-300 items-center">
          <div className="flex items-center justify-start p-6 rounded-2xl bg-gradient-to-b from-black/10 via-black/50 to-black/80">
            <img src={image} alt={imageAlt} className="img-frame w-64 object-cover" />
          </div>
          <div className="text-lg flex flex-col gap-4 p-6">
            {paragraphs.map((p, i) => {
              const highlighted = highlightText(p, highlightWords)
              if (i === 0 && authorName) {
                if (p.startsWith(authorName)) {
                  const rest = p.slice(authorName.length)
                  return (
                    <p key={p}>
                      <b className="text-white">{authorName}</b>
                      {highlightText(rest, highlightWords)}
                    </p>
                  )
                }
                return <p key={p}>{boldLeadingName(p, authorName)}</p>
              }
              return <p key={p}>{highlighted}</p>
            })}
          </div>
        </CardDescription>
      </Card>
    </div>
  )
}
