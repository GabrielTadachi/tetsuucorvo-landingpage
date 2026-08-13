import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { btnCtaSm, btnGhostSm } from '@/lib/styles'

export type NavLink =
  | { label: string; href: string }
  | { label: string; action: () => void }

export type HeaderProps = {
  logo: string
  logoAlt: string
  /** Links do menu (desktop + mobile dropdown) */
  links: NavLink[]
  /** CTA principal (ex: "Quero meu exemplar") */
  cta?: { label: string; action: () => void }
}

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (!el) return
  const headerOffset = 80
  const top = el.getBoundingClientRect().top + window.scrollY - headerOffset
  window.scrollTo({ top, behavior: 'smooth' })
}

export const scrollToSection = scrollTo
export const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

function renderNavButton(
  link: NavLink,
  className: string,
  onAfterClick?: () => void,
) {
  if ('href' in link) {
    return (
      <Link
        key={link.label}
        to={link.href}
        className={className}
        onClick={onAfterClick}
      >
        {link.label}
      </Link>
    )
  }
  return (
    <button
      key={link.label}
      type="button"
      onClick={() => {
        link.action()
        onAfterClick?.()
      }}
      className={className}
    >
      {link.label}
    </button>
  )
}

export const Header = ({ logo, logoAlt, links, cta }: HeaderProps) => {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (open) {
      const id = requestAnimationFrame(() => setVisible(true))
      return () => cancelAnimationFrame(id)
    }
    setVisible(false)
  }, [open])

  const closeMenu = () => {
    setVisible(false)
    window.setTimeout(() => setOpen(false), 220)
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-[#0a0405]">
      {/* Desktop */}
      <div className="mx-auto hidden max-w-7xl items-center justify-between gap-4 px-6 py-4 md:flex">
        <Link to="/" className="shrink-0" aria-label="Início">
          <img src={logo} alt={logoAlt} className="w-12" />
        </Link>
        <nav className="flex items-center gap-2">
          {/* Home (primeiro link) → CTA → demais links — ordem visual original */}
          {links[0] && renderNavButton(links[0], btnGhostSm)}
          {cta && (
            <button type="button" onClick={cta.action} className={btnCtaSm}>
              {cta.label}
            </button>
          )}
          {links.slice(1).map((link) => renderNavButton(link, btnGhostSm))}
        </nav>
      </div>

      {/* Mobile */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-[2.5rem_1fr_2.5rem] items-center gap-2 px-4 py-4 md:hidden">
        <Link to="/" className="shrink-0" aria-label="Início">
          <img src={logo} alt={logoAlt} className="w-10" />
        </Link>

        <div className="flex justify-center">
          {cta ? (
            <button type="button" onClick={cta.action} className={btnCtaSm}>
              {cta.label}
            </button>
          ) : (
            <span />
          )}
        </div>

        <button
          type="button"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => (open ? closeMenu() : setOpen(true))}
          className="flex h-10 w-10 items-center justify-center justify-self-end rounded-full border border-white/25 text-gray-100 transition-colors duration-300 hover:bg-white/10 active:scale-95"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        {open && (
          <nav
            className={`
              absolute top-full right-4 z-50 mt-1 w-44
              rounded-xl border border-white/15 bg-[#120808]/95 backdrop-blur-md
              shadow-[0_16px_40px_-12px_rgba(0,0,0,0.8)]
              overflow-hidden
              transition-all duration-200 ease-out origin-top-right
              ${visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-1 pointer-events-none'}
            `}
          >
            <ul className="flex flex-col py-1">
              {links.map((link) => (
                <li key={link.label}>
                  {'href' in link ? (
                    <Link
                      to={link.href}
                      onClick={closeMenu}
                      className="block w-full px-4 py-2.5 text-right text-sm text-gray-100 transition-colors duration-200 hover:bg-white/5 hover:text-[var(--brand-accent)]"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        link.action()
                        closeMenu()
                      }}
                      className="w-full px-4 py-2.5 text-right text-sm text-gray-100 transition-colors duration-200 hover:bg-white/5 hover:text-[var(--brand-accent)]"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
