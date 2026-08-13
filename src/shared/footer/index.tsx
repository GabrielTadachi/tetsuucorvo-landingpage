import { Link } from 'react-router'
import type { Author } from '@/data/author'

type FooterProps = {
  author: Author
  homeHref?: string
  homeLabel?: string
}

export const Footer = ({ author, homeHref = '/', homeLabel = 'Home' }: FooterProps) => {
  return (
    <footer className="relative z-10 mt-10 border-t border-white/10 bg-[#0a0405] text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: [
            'radial-gradient(80% 120% at 50% 0%, color-mix(in srgb, var(--brand-bg-tint) 45%, transparent), transparent 70%)',
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          ].join(', '),
          mixBlendMode: 'overlay',
        }}
      />

      <div className="relative px-4 md:px-20 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <img src={author.logo} alt={author.name} className="mx-auto md:mx-0 w-12 mb-4" />
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to={homeHref}
                  className="text-[#b8a8a8] hover:text-[var(--brand-accent)] transition-colors"
                >
                  {homeLabel}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Contato</h3>
            <a
              href={`mailto:${author.email}`}
              className="text-[#b8a8a8] text-sm hover:text-[var(--brand-accent)] transition-colors"
            >
              {author.email}
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-4 text-center text-[#8a7a7a] text-sm">
          © {new Date().getFullYear()} {author.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
