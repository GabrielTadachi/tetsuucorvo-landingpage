import { Star } from 'lucide-react'
import { Card, CardDescription, CardHeader } from './components/ui/card'
import { Button } from './components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './components/ui/carousel'
import Autoplay from "embla-carousel-autoplay"
import { useState, type ReactNode } from 'react'
import { Footer } from './shared/footer'

const cardBase = `
  border border-white/10
  bg-black/45 backdrop-blur-sm
  rounded-2xl
  shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)]
`

const btnPrimary = `
  bg-[#1b1a15] hover:bg-[#2a2820]
  text-gray-100 border border-white/15
  rounded-lg px-6 py-2.5 cursor-pointer
  transition-colors
  shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]
`

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className='flex items-center gap-3'>
      <span className='h-6 w-1 rounded-full bg-gradient-to-b from-[#e11d1d] to-[#5c0000] shadow-[0_0_12px_rgba(225,29,29,0.7)]' />
      <span className='font-semibold text-xl md:text-2xl tracking-wide text-white'>
        {children}
      </span>
    </div>
  )
}

export default function App() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null)

  return (
    <div className='bg-blood min-h-screen text-white'>
      <div className='relative z-10 mx-auto max-w-7xl'>

        {/* HERO */}
        <div className='md:grid md:grid-cols-2 gap-6 items-stretch p-6'>
          <Card className={cardBase}>
            <CardHeader className='
              font-bold text-3xl md:text-5xl leading-tight text-white
              drop-shadow-[0_0_25px_rgba(150,6,6,0.8)]
            '>
              Até onde você enfrentaria seus medos para proteger sua família?
            </CardHeader>

            <CardDescription className='px-6 flex flex-col gap-6 text-gray-200'>
              <div className='rounded-xl border border-white/10 bg-black/30 p-5'>
                <Carousel plugins={[Autoplay({ delay: 6000 })]}>
                  <CarouselContent>
                    <CarouselItem>
                      <div className='text-justify'>
                        <div className='text-base font-bold text-[#ff5a3c] mb-1'>Fantástico</div>
                        <div className='text-gray-300'>
                          "Um livro curto, mas acho que ele cumpre o que promete. Penso que todos devem ler esse livro e dar uma chance aos escritores nacionais, que cada vez mais são ignorados perante a grande maioria americana."
                        </div>
                      </div>
                    </CarouselItem>

                    <CarouselItem>
                      <div className='text-justify'>
                        <div className='text-base font-bold text-[#ff5a3c] mb-1'>
                          História sombria que prende a atenção
                        </div>
                        <div className='text-gray-300'>
                          "A narrativa consegue criar uma atmosfera pesada e personagens profundos em poucas páginas. Trata-se de uma história de origem que dá um peso especial à trama, mostrando as raízes de conflitos que devem ecoar por gerações."
                        </div>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>

              <div className='flex flex-col sm:flex-row sm:items-center gap-3'>
                <div className='text-lg'>Por <b className='text-white'>TetsuUcorvo</b></div>
                <div className='flex'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={22} fill='#fe6300' strokeWidth={0} />
                  ))}
                </div>
              </div>

              <div className='flex flex-wrap gap-3'>
                <Button onClick={() => document.getElementById('autor')?.scrollIntoView({ behavior: 'smooth' })} className={btnPrimary}>Sobre o autor</Button>
                <Button onClick={() => document.getElementById('historia')?.scrollIntoView({ behavior: 'smooth' })} className={btnPrimary}>Sobre a história</Button>
              </div>
            </CardDescription>
          </Card>

          <div className='relative flex items-center justify-center rounded-2xl overflow-hidden bg-gradient-to-b from-black/10 via-black/60 to-black/90 p-8 mt-6 md:mt-0'>
            <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(150,6,6,0.35),transparent_65%)]' />
            <img
              src="/Book_Mockup_1.png"
              alt='Capa do livro Canil dos Condenados'
              className='relative w-full max-w-md object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.8)]'
            />
          </div>
        </div>

        {/* SOBRE A HISTÓRIA */}
        <div id='historia' className='w-full py-8 px-6'>
          <Card className={cardBase}>
            <CardHeader>
              <SectionTitle>Sobre o que é o conto "Canil dos Condenados"?</SectionTitle>
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
              <SectionTitle>Sobre o Autor</SectionTitle>
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

        {/* ADQUIRA SUA CÓPIA */}
        <div className='md:grid md:grid-cols-2 gap-6 items-stretch p-6'>
          <Card className={cardBase}>
            <CardHeader>
              <SectionTitle>Adquira sua cópia</SectionTitle>
            </CardHeader>
            <CardDescription className='flex flex-col gap-6 text-gray-300 p-6'>
              <p className='text-lg'>Escolha o formato que mais combina com você.</p>
              <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-2'>
                  <div className='text-2xl font-bold text-white text-center'>R$ 19,90</div>
                  <Button className='bg-[#1b1a15] hover:bg-[#2a2820] text-white border border-white/15 rounded-xl px-12 py-8 text-lg font-semibold cursor-pointer transition-colors' onClick={() => window.open("https://www.amazon.com.br/dp/B0FQK61S4F", '_blank')}>Comprar E-book</Button>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='text-2xl font-bold text-white text-center'>R$ 34,90</div>
                  <Button className='bg-[#1b1a15] hover:bg-[#2a2820] text-white border border-white/15 rounded-xl px-12 py-8 text-lg font-semibold cursor-pointer transition-colors'>Comprar Versão Física</Button>
                </div>
              </div>
            </CardDescription>
          </Card>

          <div className='relative flex items-center justify-center rounded-2xl overflow-hidden bg-gradient-to-b from-black/10 via-black/50 to-black/80 p-8 mt-6 md:mt-0'>
            <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(150,6,6,0.3),transparent_65%)]' />
            <img src="/mockup2.png" alt='Livro Canil dos Condenados' className='relative w-full max-w-md object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.8)]' />
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
