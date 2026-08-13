import { useEffect } from 'react'
import { Link } from 'react-router'
import { author } from '@/data/author'
import { works } from '@/data/works'
import { bloodTheme, themeToCssVars } from '@/lib/theme'
import { cardBase } from '@/lib/styles'
import { Footer } from '@/shared/footer'
import { Header } from '@/shared/header'

export function AuthorHome() {
  useEffect(() => {
    document.title = `${author.name} — Obras`
  }, [])

  return (
    <>
      <Header
        logo={author.logo}
        logoAlt={author.name}
        links={[
          { label: 'Home', href: '/' },
          ...works.map((w) => ({ label: w.title, href: `/${w.slug}` })),
        ]}
      />

      <div
        className="bg-blood min-h-screen pt-24 text-white"
        style={themeToCssVars(bloodTheme)}
      >
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-12">
          <div className="mb-12 flex flex-col gap-4 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--brand-accent)]">
              Página do autor
            </span>
            <h1 className="font-bold text-4xl md:text-5xl text-white drop-shadow-[0_0_25px_color-mix(in_srgb,var(--brand-bg-tint)_80%,transparent)]">
              {author.name}
            </h1>
            {author.bio && <p className="text-lg text-gray-300">{author.bio}</p>}
          </div>

          <h2 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
            Obras
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {works.map((work) => (
              <Link
                key={work.slug}
                to={`/${work.slug}`}
                className={`${cardBase} group flex flex-col overflow-hidden transition-transform duration-300 hover:scale-[1.02]`}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-black/40">
                  <img
                    src={work.coverImage}
                    alt={work.title}
                    className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-2 p-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-accent)]">
                    {work.hero.eyebrow}
                  </span>
                  <h3 className="text-xl font-bold text-white">{work.title}</h3>
                  <p className="text-sm text-gray-400 line-clamp-3">{work.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <Footer author={author} />
      </div>
    </>
  )
}
