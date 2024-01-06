import * as React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import { Button } from '../Button'
import { Container } from '../Container'
import Link from 'next/link'
import { links } from '@/config/links'

export function CarouselHomeEmphasis() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className='bg-[url("/assets/aparecida_do_norte_saiba_mais.png")] bg-cover bg-center pt-20 pb-36 -mb-36'>
      <Container>
        <Carousel opts={{ loop: true }} setApi={setApi} className="w-full ">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="flex max-md:flex-col justify-between items-center md:items-center px-10 max-md:gap-6"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-2xl sm:text-3xl text-white font-bold">
                    APARECIDA DO NORTE
                  </span>
                  <span className="text-white text-xl sm:text-2xl">
                    Santuário Nacional
                  </span>
                  <i className="text-white text-md sm:text-lg">
                    Saídas programadas para o dia 08, 16 e 25 de novembro
                  </i>

                  <Link href={links.destinosId('123')}>
                    <Button className="w-fit mt-2" variant="secondary">
                      Saiba mais
                    </Button>
                  </Link>
                </div>

                <div className="bg-primary-blue-dark flex flex-col p-4 rounded-3xl gap-2 min-w-[320px]">
                  <span className="text-white font-medium text-xs">
                    A partir de
                  </span>

                  <span className="text-4xl text-white font-bold self-center">
                    R$ 150,00
                  </span>

                  <Link
                    href={links.destinosExcursoes('123')}
                    className="bg-primary-pink flex flex-col items-center rounded-xl p-2 group"
                  >
                    <i className="text-2xl font-light text-primary-blue-dark group-hover:opacity-50 transition-opacity">
                      é pra lá que eu vou
                    </i>
                    <i className="uppercase text-white font-light group-hover:opacity-50 transition-opacity">
                      Clique aqui para ver as opções
                    </i>
                  </Link>

                  <i className="text-sm text-white self-center whitespace-nowrap">
                    Reservas até o dia 05 de Janeiro
                  </i>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="max-sm:hidden" />
          <CarouselNext className="max-sm:hidden" />
        </Carousel>
        <div className="py-2 text-center text-sm text-muted-foreground">
          {count &&
            Array.from({ length: count }).map((_, index) => (
              <span
                key={index}
                className={`inline-block w-2 h-2 rounded-full mx-1 cursor-pointer ${
                  current === index + 1 ? 'bg-primary-blue-dark' : 'bg-gray-300'
                }`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
        </div>
      </Container>
    </div>
  )
}
