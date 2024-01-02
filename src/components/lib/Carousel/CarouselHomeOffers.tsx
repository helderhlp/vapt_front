import * as React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import { CardOffer } from '../CardOffer'

export function CarouselHomeOffers() {
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
    <div>
      <Carousel opts={{ loop: true }} setApi={setApi} className="w-full">
        <CarouselContent className="w-full max-sm:ml-1">
          {Array.from({ length: 20 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="flex px-1 w-full justify-center items-center sm:px-10 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <CardOffer width="min-w-[210px]" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="max-sm:-left-4" />
        <CarouselNext className="max-sm:-right-4" />
      </Carousel>
    </div>
  )
}
