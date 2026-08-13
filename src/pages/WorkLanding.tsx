import { useEffect, useState } from 'react'
import { author } from '@/data/author'
import type { Work } from '@/data/works'
import { themeToCssVars } from '@/lib/theme'
import { Footer } from '@/shared/footer'
import { Header, scrollToSection } from '@/shared/header'
import {
  AuthorSection,
  EditionSection,
  Hero,
  ImageLightbox,
  PurchaseSection,
  StorySection,
} from '@/components/sections'

type WorkLandingProps = {
  work: Work
}

export function WorkLanding({ work }: WorkLandingProps) {
  const [expandedImage, setExpandedImage] = useState<string | null>(null)

  useEffect(() => {
    document.title = `${work.title} — ${author.name}`
    window.scrollTo(0, 0)

    // Aplica tokens no :root para scrollbar/body herdarem o tema da obra
    const vars = themeToCssVars(work.theme) as Record<string, string>
    const root = document.documentElement
    for (const [key, value] of Object.entries(vars)) {
      root.style.setProperty(key, value)
    }
    return () => {
      for (const key of Object.keys(vars)) {
        root.style.removeProperty(key)
      }
    }
  }, [work.title, work.theme])

  return (
    <>
      <Header
        logo={author.logo}
        logoAlt={author.name}
        links={[
          { label: 'Todas as obras', href: '/' },
          { label: 'Sobre a história', action: () => scrollToSection('historia') },
          { label: 'Sobre o autor', action: () => scrollToSection('autor') },
        ]}
        cta={{
          label: work.hero.ctaLabel,
          action: () => scrollToSection('comprar'),
        }}
      />

      <div
        className="bg-blood min-h-screen overflow-x-hidden pt-24 text-white"
        style={themeToCssVars(work.theme)}
      >
        <div className="relative z-10 mx-auto max-w-7xl">
          <Hero
            eyebrow={work.hero.eyebrow}
            headline={work.hero.headline}
            mockupImage={work.hero.mockupImage}
            mockupAlt={work.hero.mockupAlt}
            authorName={author.name}
            rating={work.rating}
            reviewCount={work.reviewCount}
            reviews={work.reviews}
            ctaLabel={work.hero.ctaLabel}
            storyButtonLabel={work.hero.storyButtonLabel}
            authorButtonLabel={work.hero.authorButtonLabel}
          />

          <StorySection
            eyebrow={work.story.eyebrow}
            title={work.story.title}
            paragraphs={work.story.paragraphs}
            highlightWords={work.story.highlightWords}
            characters={work.story.characters}
            onExpandImage={setExpandedImage}
          />

          <AuthorSection
            eyebrow={work.authorSection.eyebrow}
            title={work.authorSection.title}
            image={work.authorSection.image}
            imageAlt={work.authorSection.imageAlt}
            paragraphs={work.authorSection.paragraphs}
            highlightWords={work.authorSection.highlightWords}
            authorName={author.name}
          />

          <EditionSection
            eyebrow={work.edition.eyebrow}
            title={work.edition.title}
            intro={work.edition.intro}
            extras={work.edition.extras}
            onExpandImage={setExpandedImage}
          />

          <PurchaseSection
            eyebrow={work.purchase.eyebrow}
            title={work.purchase.title}
            intro={work.purchase.intro}
            options={work.purchase.options}
            mockupImage={work.purchase.mockupImage}
            mockupAlt={work.purchase.mockupAlt}
          />

          <ImageLightbox src={expandedImage} onClose={() => setExpandedImage(null)} />
        </div>

        <Footer author={author} homeLabel="Todas as obras" />
      </div>
    </>
  )
}
