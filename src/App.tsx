import { Star } from 'lucide-react'
import { Card, CardDescription, CardHeader } from './components/ui/card'
import { Button } from './components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './components/ui/carousel'
import Autoplay from "embla-carousel-autoplay"
import { useState } from 'react'
import { Footer } from './shared/footer'

function App() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null)

  return (
    <>
      <div className='md:grid md:grid-cols-2 gap-5'>
        <Card className='border-none h-full flex flex-col justify-between'>
          <CardHeader className='font-semibold text-lg md:font-medium md:text-6xl '>Até onde você enfrentaria seus medos para proteger sua família?</CardHeader>
          <CardDescription className='px-6 flex flex-col gap-5'>
            <div className='px-10'>
              <Carousel
                plugins={[
                  Autoplay({
                    delay: 6000,
                  }),
                ]}
              >
                <CarouselContent>
                  <CarouselItem>
                    <div className='text-justify'>
                      <div className='text-lg font-bold'>
                        Fantástico
                      </div>
                      <div>
                        "Um livro curto, mas acho que ele cumpre o que promete. Penso que todos devem ler esse livro e dar uma chance aos escritores nacionais, que cada vez mais são ignorados perante a grande maioria americana."
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className='text-lg font-bold'>
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


            <div className='flex flex-col md:flex-row gap-5'>
              <div className='text-xl'>Por <b>TetsuUcorvo</b></div>
              <div className='flex'>
                <Star fill='#fe6300' strokeWidth={0} />
                <Star fill='#fe6300' strokeWidth={0} />
                <Star fill='#fe6300' strokeWidth={0} />
                <Star fill='#fe6300' strokeWidth={0} />
                <Star fill='#fe6300' strokeWidth={0} />
              </div>
            </div>

            <div className='flex flex-col md:flex-row gap-5'>
              <Button>Sobre o autor</Button>
              <Button variant={'secondary'}>Sobre a história</Button>
            </div>
          </CardDescription>
        </Card>

        <div className='bg-[#f5f4f0] relative overflow-visible h-full flex items-center justify-center'>
          <img
            src="../public/Book_Mockup_1.jpg"
            alt="Capa do livro"
            className='w-125 h-auto shadow-2xl md:transform md:translate-y-1/4'
          />
        </div>

      </div>

      <div className='md:mt-25 w-full py-5'>
        <Card>
          <CardHeader className='font-semibold text-xl'>Sobre o que é o conto "Canil dos Condenados"?</CardHeader>
          <CardDescription className='md:grid md:grid-cols-2 px-5'>
            <div className='text-lg gap-4 p-6 flex flex-col justify-center'>
              <p>Esta história é sobre monstros, que vivem interna e externamente, se alimentando do <b>medo</b>.</p>
              <p>Medo do que não se compreende. Medo de grandes escolhas. E, principalmente, medo de não corresponder ao que esperam de você.</p>
              <p>Adiar também é uma escolha... E nem sempre a mais segura.</p>
            </div>
            <div className='px-16 bg-[#f5f4f0] flex items-center justify-center'>
              <Carousel
                className='relative'
                plugins={[
                  Autoplay({
                    delay: 5000,
                  }),
                ]}
              >
                <CarouselContent>
                  <CarouselItem className='flex justify-center'>
                    <div className='py-5'>
                      <img 
                        src="xolotl.png" 
                        className='border-2 rounded-2xl md:w-auto md:max-h-125 cursor-pointer' 
                        onClick={() => setExpandedImage('xolotl.png')}
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem className='flex justify-center'>
                    <div className='py-5'>
                      <img 
                        src="corvo.png" 
                        className='border-2 rounded-2xl md:w-auto md:max-h-125 cursor-pointer' 
                        onClick={() => setExpandedImage('corvo.png')}
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </CardDescription>
        </Card>
      </div>

      <div className='w-full py-5'>
        <Card>
          <CardHeader className='font-semibold text-xl'>Sobre o Autor</CardHeader>
          <CardDescription className='md:grid md:grid-cols-2 px-5'>
            <div className='px-16 bg-[#f5f4f0] flex items-center justify-center'>
              <div className='py-5'>
                <img 
                  src="/logo.png" 
                  alt="Foto do autor TetsuUcorvo"
                  className='border-2 rounded-2xl w-48 h-48 object-cover'
                />
              </div>
            </div>
            <div className='text-lg gap-4 p-6 flex flex-col justify-center'>
              <p><b>TetsuUcorvo</b> é um escritor brasileiro apaixonado por narrativas sombrias e psicológicas.</p>
              <p>Ele dedica-se a explorar os <b>medos humanos</b> e as complexidades das relações familiares em suas obras.</p>
              <p>"Canil dos Condenados" marca sua estreia no gênero de horror psicológico, prometendo mais histórias que desafiam os limites da mente humana.</p>
            </div>
          </CardDescription>
        </Card>
      </div>

      <div className='md:grid md:grid-cols-2 gap-5 mb-30'>
        <Card className='border-none h-full flex flex-col justify-between'>
          <CardHeader className='font-semibold text-xl'>Adquira sua cópia</CardHeader>
          <CardDescription className='px-6 flex flex-col gap-5'>
            <p>Escolha o formato que mais combina com você e mergulhe nesta história de <b>medo</b> e <b>coragem</b>.</p>
            <p>Disponível em formato digital para leitura imediata ou versão física para colecionadores.</p>
            <div className='flex flex-col gap-3'>
              <Button className='w-full'>Comprar E-book</Button>
              <Button variant={'secondary'} className='w-full'>Comprar Versão Física</Button>
            </div>
          </CardDescription>
        </Card>

        <div className='bg-[#f5f4f0] relative overflow-visible h-full flex items-center justify-center'>
          <img
            src="Book_Mockup_2.jpg"
            alt="Mockup do livro Canil dos Condenados"
            className='w-125 h-auto shadow-2xl md:transform md:translate-y-1/4'
          />
        </div>
      </div>

      {expandedImage && (
        <div 
          className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'
          onClick={() => setExpandedImage(null)}
        >
          <img 
            src={expandedImage} 
            className='max-w-full max-h-full object-contain'
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      
      <Footer />
    </>
  )
}

export default App
