import { Star } from 'lucide-react'
import { Card, CardDescription, CardHeader } from './components/ui/card'
import { Button } from './components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './components/ui/carousel'
import Autoplay from "embla-carousel-autoplay"
import { useState } from 'react'
import { Footer } from './shared/footer'

export default function App() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null)

  const cardBase = `
    border border-[#003939]/40 
    bg-black/50 backdrop-blur
    rounded-2xl
  `

  const btnPrimary = `
    bg-[#21201a] hover:bg-[#21201a]/60
    text-white border border-gray-600
    px-6 py-2 cursor-pointer
  `

  return (
    <div className='min-h-screen text-white bg-gradient-to-b from-[#850101] via-black to-[#003939]'>

      <div className='md:grid md:grid-cols-2 gap-5 p-6'>
        <Card className={cardBase}>
          <CardHeader className='
            font-semibold text-3xl md:text-5xl text-white
            drop-shadow-[0_0_20px_rgba(133,1,1,0.8)]
          '>
            Até onde você enfrentaria seus medos para proteger sua família?
          </CardHeader>

          <CardDescription className='px-6 flex flex-col gap-6 text-gray-200'>
            <div className='px-10'>
              <Carousel plugins={[Autoplay({ delay: 6000 })]}>
                <CarouselContent>
                  <CarouselItem>
                    <div className='text-justify'>
                      <div className='text-lg font-bold text-[#003939]'>Fantástico</div>
                      <div>
                        "Um livro curto, mas acho que ele cumpre o que promete. Penso que todos devem ler esse livro e dar uma chance aos escritores nacionais, que cada vez mais são ignorados perante a grande maioria americana."
                      </div>
                    </div>
                  </CarouselItem>

                  <CarouselItem>
                    <div className='text-lg font-bold text-[#003939]'>
                      História sombria que prende a atenção
                    </div>
                    <div>
                      "A narrativa consegue criar uma atmosfera pesada e personagens profundos em poucas páginas. Trata-se de uma história de origem que dá um peso especial à trama, mostrando as raízes de conflitos que devem ecoar por gerações."
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            <div className='flex flex-col md:flex-row gap-5 '>
              <div className='text-xl'>Por <b>TetsuUcorvo</b></div>
              <div className='flex'>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill='#fe6300' strokeWidth={0} />
                ))}
              </div>
            </div>

            <div className='flex gap-2'>
              <Button onClick={() => document.getElementById('autor')?.scrollIntoView({ behavior: 'smooth' })} className={btnPrimary}>Sobre o autor</Button>
              <Button onClick={() => document.getElementById('historia')?.scrollIntoView({ behavior: 'smooth' })} className={btnPrimary}>Sobre a história</Button>
            </div>
          </CardDescription>
        </Card>

        <div className='relative h-full flex items-center justify-center rounded-2xl bg-gradient-to-b from-black/10 via-black/80 to-black'>
          <img
            src="../public/Book_Mockup_1.png"
            className='shadow-2xl'
          />
        </div>
      </div>

      <div id='historia' className='w-full py-10 px-6'>
        <Card className={cardBase}>
          <CardHeader className='font-semibold text-xl text-white'>
            Sobre o que é o conto "Canil dos Condenados"?
          </CardHeader>

          <CardDescription className='md:grid md:grid-cols-2 px-5 text-gray-300'>
            <div className='text-lg gap-4 p-6 flex flex-col justify-center'>
              <p>Esta história é sobre monstros, que vivem interna e externamente, se alimentando do <b>medo</b>.</p>
              <p>Medo do que não se compreende. Medo de grandes escolhas. E, principalmente, medo de não corresponder ao que esperam de você.</p>
              <p>Adiar também é uma escolha... E nem sempre a mais segura.</p>
            </div>

            <div className='flex items-center justify-center relative p-4 rounded-2xl bg-gradient-to-b from-black/10 via-black/80 to-black'>
              <Carousel plugins={[Autoplay({ delay: 5000 })]} className='w-full max-w-md'>
                <CarouselContent>
                  {[
                    { img: 'severino_fuba_pistola.png', name: 'Severino, Fubá e Pistola' },
                    { img: 'romulo.png', name: 'Rômulo' },
                    { img: '1.png', name: 'Diane' },
                    { img: '2.png', name: 'Helena' },
                    { img: 'corvo.png', name: 'O Corvo' },
                    { img: 'xolotl.png', name: 'Xolotl' }
                  ].map(({ img, name }) => (
                    <CarouselItem key={img} className='flex flex-col items-center gap-2'>
                      <img
                        src={img}
                        onClick={() => setExpandedImage(img)}
                        className='
                          cursor-pointer border border-[#003939]
                          shadow-[0_0_25px_rgba(0,57,57,0.4)]
                          w-full min-h-64 object-contain
                        '
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

      <div id='autor' className='w-full py-10 px-6'>
        <Card className={cardBase}>
          <CardHeader className='font-semibold text-xl text-white'>Sobre o Autor</CardHeader>
          <CardDescription className='md:grid md:grid-cols-2 px-5 text-gray-300'>
            <div className='flex items-center justify-center p-6 rounded-2xl bg-gradient-to-b from-black/10 via-black/80 to-black'>
              <img src="/landing.png" className='border border-[#003939] w-64 object-cover' />
            </div>
            <div className='text-lg gap-4 p-6'>
              <p><b>TetsuUcorvo</b> é um escritor brasileiro apaixonado por narrativas sombrias e psicológicas.</p>
              <p>Ele dedica-se a explorar os <b>medos humanos</b> e as complexidades das relações familiares em suas obras.</p>
              <p>"Canil dos Condenados" marca sua estreia no gênero de horror psicológico, prometendo mais histórias que desafiam os limites da mente humana.</p>
            </div>
          </CardDescription>
        </Card>
      </div>

      <div className='md:grid md:grid-cols-2 gap-5 p-6'>
        <Card className={cardBase}>
          <CardHeader className='font-semibold text-xl text-white'>Adquira sua cópia</CardHeader>
          <CardDescription className='flex flex-col gap-5 text-gray-300 p-6'>
            <p>Escolha o formato que mais combina com você.</p>
            <div className='flex flex-col gap-10 md:gap-20 pt-5'>
              <div className='flex flex-col gap-2'>
                <div className='text-2xl font-bold text-white text-center'>R$ 19,90</div>
                <Button className='bg-[#21201a] hover:bg-[#21201a]/60 text-white border border-gray-600 px-12 py-10 text-lg font-semibold cursor-pointer' onClick={() => window.open("https://www.amazon.com.br/dp/B0FQK61S4F", '_blank')}>Comprar E-book</Button>
              </div>
              <div className='flex flex-col gap-2'>
                <div className='text-2xl font-bold text-white text-center'>R$ 34,90</div>
                <Button className='bg-[#21201a] hover:bg-[#21201a]/60 text-white border border-gray-600 px-12 py-10 text-lg font-semibold cursor-pointer'>Comprar Versão Física</Button>
              </div>
            </div>
          </CardDescription>
        </Card>

        <div className='flex items-center justify-center rounded-2xl bg-gradient-to-b from-black/10 via-black/50 to-black/70'>
          <img src="mockup2.png" className='shadow-2xl' />
        </div>
      </div>

      {expandedImage && (
        <div
          className='fixed inset-0 bg-black/80 flex items-center justify-center z-50'
          onClick={() => setExpandedImage(null)}
        >
          <img src={expandedImage} className='max-w-full max-h-full' />
        </div>
      )}

      <Footer />
    </div>
  )
}
