import { Stars } from '@/components/lib/Stars'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'

export function DestinyInformation() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-4">
      <div className="flex flex-col gap-2">
        <span className="uppercase font-bold text-lg text-gray-600">
          Aparecida do norte
        </span>

        <div className="flex gap-4 items-center">
          <Stars defaultValue={3} disabled />
          <span className="text-xs text-gray-600"> 02 Avaliações</span>
        </div>

        <span className="text-sm text-gray-700">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the {`industry's`} standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
          <br />
          <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the {`industry's`} standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </span>
      </div>

      <div className="flex justify-end">
        <Carousel className="max-w-[480px] flex justify-center">
          <CarouselContent className="w-fit">
            <CarouselItem className="flex justify-center">
              <Image
                src="/assets/marco_ankosqui_teleferico_aparecida.png"
                width={465}
                height={480}
                alt="Marco Ankosqui Teleférico Aparecida"
              />
            </CarouselItem>
            <CarouselItem className="flex justify-center">
              <Image
                src="/assets/marco_ankosqui_teleferico_aparecida.png"
                width={465}
                height={480}
                alt="Marco Ankosqui Teleférico Aparecida"
              />
            </CarouselItem>
            <CarouselItem className="flex justify-center">
              <Image
                src="/assets/marco_ankosqui_teleferico_aparecida.png"
                width={465}
                height={480}
                alt="Marco Ankosqui Teleférico Aparecida"
              />
            </CarouselItem>
          </CarouselContent>

          <CarouselNext className="right-4" />
          <CarouselPrevious className="left-4" />
        </Carousel>
      </div>
    </div>
  )
}
