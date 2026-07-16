import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (!el) return
  const headerOffset = 80
  const top = el.getBoundingClientRect().top + window.scrollY - headerOffset
  window.scrollTo({ top, behavior: 'smooth' })
}

const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

const btnCta = `
  bg-gradient-to-b from-[#c81a1a] to-[#7a0000]
  text-white font-semibold tracking-wide text-sm
  rounded-full px-5 py-2
  border border-[#ff5a3c]/40
  shadow-[0_10px_24px_-8px_rgba(200,26,26,0.75)]
  cursor-pointer whitespace-nowrap
  transition-[transform,box-shadow,filter,border-color] duration-300 ease-out
  hover:brightness-125 hover:scale-[1.02]
  hover:shadow-[0_14px_30px_-6px_rgba(225,29,29,0.85)]
  hover:border-[#ff5a3c]/70
  active:scale-[0.98] active:brightness-95
`

const btnGhost = `
  bg-transparent
  text-gray-100 border border-white/25
  rounded-full px-5 py-2 font-medium text-sm
  cursor-pointer whitespace-nowrap
  transition-[background-color,border-color,transform] duration-300 ease-out
  hover:bg-white/10 hover:border-white/45 hover:scale-[1.02]
  active:scale-[0.98]
`

const menuLinks = [
  { label: 'Home', action: scrollTop },
  { label: 'Sobre a história', action: () => scrollTo('historia') },
  { label: 'Sobre o autor', action: () => scrollTo('autor') },
]

export const Header = () => {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (open) {
      // próximo frame pra animar entrada
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
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0a0405]">
      {/* Desktop */}
      <div className="mx-auto hidden max-w-7xl items-center justify-between gap-4 px-6 py-4 md:flex">
        <a href="/" className="shrink-0" aria-label="Início">
          <img src="/logo_positivo.png" alt="TetsuUcorvo" className="w-12" />
        </a>
        <nav className="flex items-center gap-2">
          <button type="button" onClick={scrollTop} className={btnGhost}>Home</button>
          <button type="button" onClick={() => scrollTo('comprar')} className={btnCta}>Quero meu exemplar</button>
          <button type="button" onClick={() => scrollTo('historia')} className={btnGhost}>Sobre a história</button>
          <button type="button" onClick={() => scrollTo('autor')} className={btnGhost}>Sobre o autor</button>
        </nav>
      </div>

      {/* Mobile */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-[2.5rem_1fr_2.5rem] items-center gap-2 px-4 py-4 md:hidden">
        <a href="/" className="shrink-0" aria-label="Início">
          <img src="/logo_positivo.png" alt="TetsuUcorvo" className="w-10" />
        </a>

        <div className="flex justify-center">
          <button type="button" onClick={() => scrollTo('comprar')} className={btnCta}>
            Quero meu exemplar
          </button>
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

        {/* Dropdown compacto — canto direito */}
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
              {menuLinks.map(({ label, action }) => (
                <li key={label}>
                  <button
                    type="button"
                    onClick={() => {
                      action()
                      closeMenu()
                    }}
                    className="w-full px-4 py-2.5 text-right text-sm text-gray-100 transition-colors duration-200 hover:bg-white/5 hover:text-[#ff5a3c]"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
