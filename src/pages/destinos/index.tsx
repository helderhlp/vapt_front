import { Newsletter } from '@/components/core/Newsletter'
import { NotFoundExcursion } from '@/components/core/NotFoundExcursion'
import {
  BackgroundTemplate,
  ImageTypeBackground,
} from '@/components/lib/BackgroundTemplate'
import { CardImage } from '@/components/lib/CardImage'
import { Container } from '@/components/lib/Container'
import { Dropdown } from '@/components/lib/Dropdown'
import { SessionCardEmphasis } from '@/components/lib/SessionCardEmphasis'
import { TemplatePrimary } from '@/components/view/TemplatePrimary'
import { destinyFake } from '@/mock/destiny-fake'

export default function Destinations() {
  return (
    <TemplatePrimary>
      <div className="flex flex-col items-center">
        <BackgroundTemplate
          subtitle="A Excursão dos seus sonhos está aqui"
          title="Todos os Destinos"
          image={ImageTypeBackground.DESTINY}
          hasMarginBottom
        />

        <Container className="max-w-7xl">
          <div className="sm:rounded-t-[32px] bg-white p-10">
            <Dropdown
              variant="secondary"
              defaultValue="Categoria"
              options={destinyFake}
            />
          </div>
        </Container>

        <div className="max-sm:gap-2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 w-full max-w-[2240px]">
          {Array.from({ length: 20 }).map((_, index) => (
            <CardImage key={index} />
          ))}
        </div>

        <SessionCardEmphasis title="Excursões mais Compradas" />

        <Container className="max-w-6xl py-6">
          <Newsletter />
          <hr className="h-[2px] bg-gray-400 w-full" />
          <NotFoundExcursion />
        </Container>
      </div>
    </TemplatePrimary>
  )
}
