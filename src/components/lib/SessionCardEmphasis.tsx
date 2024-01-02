import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'
import { CardOffer } from './CardOffer'
import { Container } from './Container'

interface Props {
  title: string
}

export function SessionCardEmphasis(props: Props) {
  return (
    <div className="bg-primary-blue-super-light p-6 flex flex-col w-full">
      <Container className="max-2xl:px-6 max-w-6xl">
        <span className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
          {props.title}
        </span>

        <div className="gap-2 max-sm:hidden grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <CardOffer key={index} width="w-full" />
          ))}
        </div>

        <div className="sm:hidden">
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent className="w-full-ml-2">
              {Array.from({ length: 20 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="flex w-full justify-center items-center basis-1/2 sm:px-10 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                  <CardOffer width="min-w-[100px]" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="max-sm:-left-3" />
            <CarouselNext className="max-sm:-right-3" />
          </Carousel>
        </div>
      </Container>
    </div>
  )
}
