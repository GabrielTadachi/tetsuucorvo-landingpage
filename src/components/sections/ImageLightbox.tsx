import { useEffect } from 'react'
import { createPortal } from 'react-dom'

type ImageLightboxProps = {
  src: string | null
  onClose: () => void
}

export function ImageLightbox({ src, onClose }: ImageLightboxProps) {
  useEffect(() => {
    if (!src) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [src, onClose])

  if (!src) return null

  // Portal no body: evita ficar preso no stacking context do bg-blood (abaixo do header)
  return createPortal(
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/85 p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <img
        src={src}
        alt=""
        className="max-h-full max-w-full rounded-xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>,
    document.body,
  )
}
