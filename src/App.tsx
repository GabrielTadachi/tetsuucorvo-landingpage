import { Star, Check } from 'lucide-react'
import { Card, CardDescription, CardHeader } from './components/ui/card'
import { Button } from './components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './components/ui/carousel'
import Autoplay from "embla-carousel-autoplay"
import { useState, type ReactNode } from 'react'
import { Footer } from './shared/footer'
import { amazonRating, amazonReviewCount, reviews } from './data/reviews'

function RatingStars({ rating, size = 22 }: { rating: number; size?: number }) {
  return (
    <div className='flex items-center gap-0.5' aria-label={`${rating} de 5 estrelas`}>
      {[1, 2, 3, 4, 5].map((i) => {
        const filled = rating >= i
        const half = !filled && rating >= i - 0.5
        return (
          <Star
            key={i}
            size={size}
            fill={filled || half ? '#fe6300' : 'transparent'}
            stroke={filled || half ? '#fe6300' : '#666'}
            strokeWidth={filled ? 0 : 1.5}
            className={half ? 'opacity-70' : undefined}
          />
        )
      })}
    </div>
  )
}

const cardBase = `
  border border-white/10
  bg-black/45 backdrop-blur-sm
  rounded-2xl
  shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)]
`

const btnCta = `
  bg-gradient-to-b from-[#c81a1a] to-[#7a0000]
  text-white font-semibold tracking-wide
  rounded-full px-8 py-3
  border border-[#ff5a3c]/40
  shadow-[0_14px_34px_-10px_rgba(200,26,26,0.8)]
  cursor-pointer
  transition-[transform,box-shadow,filter,border-color] duration-300 ease-out
  hover:brightness-125 hover:scale-[1.02]
  hover:shadow-[0_18px_40px_-8px_rgba(225,29,29,0.9)]
  hover:border-[#ff5a3c]/70
  active:scale-[0.98] active:brightness-95
`

const btnGhost = `
  bg-transparent
  text-gray-100 border border-white/25
  rounded-full px-8 py-3 font-medium
  cursor-pointer
  transition-[background-color,border-color,transform,color] duration-300 ease-out
  hover:bg-white/10 hover:border-white/45 hover:scale-[1.02]
  active:scale-[0.98]
`

function SectionTitle({ eyebrow, children }: { eyebrow?: string; children: ReactNode }) {
  return (
    <div className='flex flex-col gap-2'>
      {eyebrow && (
        <span className='text-xs font-semibold uppercase tracking-[0.25em] text-[#ff5a3c]'>
          {eyebrow}
        </span>
      )}
      <div className='flex items-center gap-3'>
        <span className='h-7 w-1.5 rounded-full bg-gradient-to-b from-[#e11d1d] to-[#5c0000] shadow-[0_0_12px_rgba(225,29,29,0.7)]' />
        <span className='font-bold text-2xl md:text-3xl tracking-wide text-white'>
          {children}
        </span>
      </div>
    </div>
  )
}

// Placeholders — edite conforme a sua oferta real
const bonusItems = [
  'E-book nos formatos PDF e EPUB',
  'Conto completo "Canil dos Condenados"',
  '[Brinde] Arte digital exclusiva dos personagens',
  '[Brinde] Wallpaper temático para celular',
  '[Brinde] Marcador de página (versão física)',
  '[Placeholder] Adicione aqui outro item da sua edição',
]

export default function App() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null)

  const goToBuy = () => document.getElementById('comprar')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className='bg-blood min-h-screen text-white'>
      <div className='relative z-10 mx-auto max-w-7xl'>

        {/* HERO */}
        <div className='md:grid md:grid-cols-2 gap-6 items-stretch p-6'>
          <Card className={cardBase}>
            <CardHeader className='flex flex-col gap-3'>
              <span className='text-xs font-semibold uppercase tracking-[0.25em] text-[#ff5a3c]'>
                Uma herança macabra
              </span>
              <span className='
                font-bold text-3xl md:text-5xl leading-tight text-white
                drop-shadow-[0_0_25px_rgba(150,6,6,0.8)]
              '>
                Até onde você enfrentaria seus medos para proteger sua família?
              </span>
            </CardHeader>

            <CardDescription className='px-6 flex flex-col gap-6 text-gray-200'>
              <div className='rounded-xl border border-white/10 bg-black/30 p-5'>
                <Carousel plugins={[Autoplay({ delay: 12000 })]}>
                  <CarouselContent>
                    {reviews.map((review) => (
                      <CarouselItem key={review.title}>
                        <div className='flex flex-col max-h-44'>
                          <div className='text-base font-bold text-[#ff5a3c] mb-2 shrink-0 pr-2'>
                            {review.title}
                          </div>
                          <div className='review-scroll text-justify text-gray-300 overflow-y-auto overscroll-contain pr-2 flex-1 min-h-0'>
                            "{review.body}"
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>

              <div className='flex flex-col sm:flex-row sm:items-center gap-3'>
                <div className='text-lg'>Por <b className='text-white'>TetsuUcorvo</b></div>
                <div className='flex items-center gap-2'>
                  <RatingStars rating={amazonRating} />
                  <span className='text-sm text-gray-400'>
                    {amazonRating.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} · {amazonReviewCount} avaliações
                  </span>
                </div>
              </div>

              <div className='flex flex-wrap gap-3'>
                <Button onClick={goToBuy} className={btnCta}>Quero meu exemplar</Button>
                <Button onClick={() => document.getElementById('historia')?.scrollIntoView({ behavior: 'smooth' })} className={btnGhost}>Sobre a história</Button>
                <Button onClick={() => document.getElementById('autor')?.scrollIntoView({ behavior: 'smooth' })} className={btnGhost}>Sobre o autor</Button>
              </div>
            </CardDescription>
          </Card>

          <div className='relative flex items-center justify-center rounded-2xl overflow-hidden bg-gradient-to-b from-black/10 via-black/60 to-black/90 p-4 md:p-6 mt-6 md:mt-0'>
            <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(150,6,6,0.35),transparent_65%)]' />
            <img
              src="/Book_Mockup_1.png"
              alt='Capa do livro Canil dos Condenados'
              className='relative w-full max-w-xl scale-110 object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.8)]'
            />
          </div>
        </div>

        {/* SOBRE A HISTÓRIA */}
        <div id='historia' className='w-full py-8 px-6'>
          <Card className={cardBase}>
            <CardHeader>
              <SectionTitle eyebrow='Uma família feliz?'>Sobre o que é o conto "Canil dos Condenados"?</SectionTitle>
            </CardHeader>

            <CardDescription className='md:grid md:grid-cols-2 gap-6 px-5 text-gray-300 items-center'>
              <div className='text-lg gap-4 p-6 flex flex-col justify-center'>
                <p>Esta história é sobre monstros, que vivem interna e externamente, se alimentando do <b className='text-[#ff5a3c]'>medo</b>.</p>
                <p>Medo do que não se compreende. Medo de grandes escolhas. E, principalmente, medo de não corresponder ao que esperam de você.</p>
                <p>Adiar também é uma escolha... E nem sempre a mais segura.</p>
              </div>

              <div className='relative flex items-center justify-center p-6 rounded-2xl overflow-hidden bg-gradient-to-b from-black/10 via-black/50 to-black/80'>
                <Carousel plugins={[Autoplay({ delay: 5000 })]} className='w-full max-w-md'>
                  <CarouselContent>
                    {[
                      { img: '/severino_fuba_pistola.png', name: 'Severino, Fubá e Pistola' },
                      { img: '/romulo.png', name: 'Rômulo' },
                      { img: '/1.png', name: 'Diane' },
                      { img: '/2.png', name: 'Helena' },
                      { img: '/corvo.png', name: 'O Corvo' },
                      { img: '/xolotl.png', name: 'Xolotl' }
                    ].map(({ img, name }) => (
                      <CarouselItem key={img} className='flex flex-col items-center gap-3'>
                        <img
                          src={img}
                          alt={name}
                          onClick={() => setExpandedImage(img)}
                          className='img-frame cursor-pointer w-full min-h-64 object-contain bg-black/40'
                        />
                        <span className='text-sm text-gray-400'>{name}</span>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className='left-2' />
                  <CarouselNext className='right-2' />
                </Carousel>
              </div>
            </CardDescription>
          </Card>
        </div>

        {/* SOBRE O AUTOR */}
        <div id='autor' className='w-full py-8 px-6'>
          <Card className={cardBase}>
            <CardHeader>
              <SectionTitle eyebrow='A mente por trás'>Sobre o Autor</SectionTitle>
            </CardHeader>
            <CardDescription className='md:grid md:grid-cols-2 gap-6 px-5 text-gray-300 items-center'>
              <div className='flex items-center justify-center p-6 rounded-2xl bg-gradient-to-b from-black/10 via-black/50 to-black/80'>
                <img src="/landing.png" alt='TetsuUcorvo' className='img-frame w-64 object-cover' />
              </div>
              <div className='text-lg flex flex-col gap-4 p-6'>
                <p><b className='text-white'>TetsuUcorvo</b> é um escritor brasileiro apaixonado por narrativas sombrias e psicológicas.</p>
                <p>Ele dedica-se a explorar os <b className='text-[#ff5a3c]'>medos humanos</b> e as complexidades das relações familiares em suas obras.</p>
                <p>"Canil dos Condenados" marca sua estreia no gênero de horror psicológico, prometendo mais histórias que desafiam os limites da mente humana.</p>
              </div>
            </CardDescription>
          </Card>
        </div>

        {/* O QUE VOCÊ RECEBE (EDIÇÃO / BRINDES) */}
        <div className='w-full py-8 px-6'>
          <Card className={cardBase}>
            <CardHeader>
              <SectionTitle eyebrow='A edição'>O que você recebe</SectionTitle>
            </CardHeader>
            <CardDescription className='px-6 pb-2 text-gray-300'>
              <p className='text-lg mb-6'>Mais do que uma leitura — uma experiência completa dentro do universo do conto.</p>
              <div className='grid sm:grid-cols-2 gap-4'>
                {bonusItems.map((item) => (
                  <div key={item} className='flex items-center gap-3 rounded-xl border border-white/10 bg-black/30 p-4'>
                    <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#c81a1a] to-[#7a0000] shadow-[0_0_14px_rgba(200,26,26,0.6)]'>
                      <Check size={18} className='text-white' strokeWidth={3} />
                    </span>
                    <span className='text-base text-gray-200'>{item}</span>
                  </div>
                ))}
              </div>
            </CardDescription>
          </Card>
        </div>

        {/* ADQUIRA SUA CÓPIA */}
        <div id='comprar' className='md:grid md:grid-cols-2 gap-6 items-stretch p-6'>
          <Card className={cardBase}>
            <CardHeader>
              <SectionTitle eyebrow='O corvo não espera...'>Adquira sua cópia</SectionTitle>
            </CardHeader>
            <CardDescription className='flex flex-col gap-5 text-gray-300 p-6'>
              <p className='text-lg'>Escolha o formato que mais combina com você.</p>

              <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/30 p-6 text-center'>
                  <div className='text-xs font-semibold uppercase tracking-[0.2em] text-gray-400'>E-book</div>
                  <div className='text-3xl font-bold text-white'>R$ 19,90</div>
                  <p className='text-sm text-gray-400'>Entrega imediata • leia em qualquer dispositivo</p>
                  <Button className={`${btnCta} w-full py-6 text-lg`} onClick={() => window.open("https://www.amazon.com.br/dp/B0FQK61S4F", '_blank')}>Comprar E-book</Button>
                </div>

                <div className='flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/30 p-6 text-center'>
                  <div className='text-xs font-semibold uppercase tracking-[0.2em] text-gray-400'>Versão física</div>
                  <div className='text-3xl font-bold text-white'>R$ 34,90</div>
                  <p className='text-sm text-gray-400'>Livro impresso entregue na sua casa</p>
                  <Button className={`${btnCta} w-full py-6 text-lg`}>Comprar Versão Física</Button>
                </div>
              </div>
            </CardDescription>
          </Card>

          <div className='relative flex items-center justify-center rounded-2xl overflow-hidden bg-gradient-to-b from-black/10 via-black/50 to-black/80 p-2 md:p-4 mt-6 md:mt-0'>
            <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(150,6,6,0.3),transparent_65%)]' />
            <img src="/mockup2.png" alt='Livro Canil dos Condenados' className='relative w-full max-w-2xl scale-125 object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.8)]' />
          </div>
        </div>

        {expandedImage && (
          <div
            className='fixed inset-0 bg-black/85 flex items-center justify-center z-50 p-6'
            onClick={() => setExpandedImage(null)}
          >
            <img src={expandedImage} alt='' className='max-w-full max-h-full rounded-xl' />
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
