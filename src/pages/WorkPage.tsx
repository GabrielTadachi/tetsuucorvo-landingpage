import { Link, useParams } from 'react-router'
import { getWorkBySlug } from '@/data/works'
import { author } from '@/data/author'
import { bloodTheme, themeToCssVars } from '@/lib/theme'
import { WorkLanding } from './WorkLanding'

export function WorkPage() {
  const { slug } = useParams<{ slug: string }>()
  const work = slug ? getWorkBySlug(slug) : undefined

  if (!work) {
    return (
      <div
        className="bg-blood min-h-screen text-white flex flex-col items-center justify-center gap-6 p-8"
        style={themeToCssVars(bloodTheme)}
      >
        <h1 className="text-3xl font-bold">Obra não encontrada</h1>
        <p className="text-gray-400">
          Não existe uma obra com o slug &ldquo;{slug}&rdquo;.
        </p>
        <Link
          to="/"
          className="text-[var(--brand-accent)] hover:underline"
        >
          Voltar para a home de {author.name}
        </Link>
      </div>
    )
  }

  return <WorkLanding work={work} />
}
