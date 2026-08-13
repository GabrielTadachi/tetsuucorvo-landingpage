import { Star } from 'lucide-react'

type RatingStarsProps = {
  rating: number
  size?: number
}

export function RatingStars({ rating, size = 22 }: RatingStarsProps) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} de 5 estrelas`}>
      {[1, 2, 3, 4, 5].map((i) => {
        const filled = rating >= i
        const half = !filled && rating >= i - 0.5
        return (
          <Star
            key={i}
            size={size}
            fill={filled || half ? 'var(--brand-star)' : 'transparent'}
            stroke={filled || half ? 'var(--brand-star)' : '#666'}
            strokeWidth={filled ? 0 : 1.5}
            className={half ? 'opacity-70' : undefined}
          />
        )
      })}
    </div>
  )
}
