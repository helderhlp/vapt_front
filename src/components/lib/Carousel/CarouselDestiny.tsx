import * as React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function CarouselDestiny() {
  return (
    <div>
      <Carousel opts={{ loop: true }} className="">
        <CarouselContent className="">
          {Array.from({ length: 20 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="flex w-full justify-center items-center sm:px-10 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <button
                className={`
                min-h-[312px] bg-[url('/assets/guaruja_destino_card.png')] 
                bg-cover min-w-[240px] max-w-[320px] w-full flex p-5 text-start scale-110
              `}
              >
                <div className="flex-1 flex flex-col text-white self-end">
                  <span className="font-medium text-lg">A partir de</span>
                  <span className="text-2xl md:text-3xl lg:text-4xl font-bold">
                    R$ 5.150,00
                  </span>
                  <span className="text-lg font-bold">Monte Sião</span>
                  <span>Estância Turística</span>
                </div>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="max-sm:left-2" />
        <CarouselNext className="max-sm:right-2" />
      </Carousel>
    </div>
  )
}
