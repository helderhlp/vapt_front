import { SessionCardEmphasis } from '@/components/lib/SessionCardEmphasis'
import { TemplatePrimary } from '../TemplatePrimary'
import { Container } from '@/components/lib/Container'
import { Dropdown } from '@/components/lib/Dropdown'
import { CardOffer } from '@/components/lib/CardOffer'
import { Newsletter } from '@/components/core/Newsletter'
import { NotFoundExcursion } from '@/components/core/NotFoundExcursion'
import {
  BackgroundTemplate,
  ImageTypeBackground,
} from '@/components/lib/BackgroundTemplate'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function ListExcursionsView() {
  return (
    <TemplatePrimary>
      <BackgroundTemplate
        image={ImageTypeBackground.APARECIDA_DO_NORTE}
        subtitle="Santuário Nacional <br /> Nossa Senhora Aparecida"
        title="Aparecida do Norte"
        hasMarginBottom
        className="-mb-32"
      />

      <Container className="max-w-7xl sm:rounded-t-3xl bg-white p-4 sm:p-10">
        <div className="flex justify-end">
          <Dropdown
            defaultValue="Ordenar por"
            options={[]}
            variant="secondary"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 max-sm:hidden">
          {Array.from({ length: 8 }).map((_, index) => (
            <div className="flex justify-center" key={index}>
              <CardOffer width="w-[250px]" />
            </div>
          ))}
        </div>

        <div className="sm:hidden mt-6">
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent className="w-full -ml-2">
              {Array.from({ length: 20 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="flex w-full justify-center items-center sm:px-10 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                  <CardOffer width="w-[250px]" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="max-sm:-left-3" />
            <CarouselNext className="max-sm:-right-3" />
          </Carousel>
        </div>
      </Container>
      <SessionCardEmphasis title="Excursões mais Compradas" />

      <Container className="max-w-6xl">
        <Newsletter />

        <hr className="w-full h-[2px] bg-gray-200 my-6" />

        <NotFoundExcursion />
      </Container>
    </TemplatePrimary>
  )
}
