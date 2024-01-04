import { Newsletter } from '@/components/core/Newsletter'
import { NotFoundExcursion } from '@/components/core/NotFoundExcursion'
import {
  BackgroundTemplate,
  ImageTypeBackground,
} from '@/components/lib/BackgroundTemplate'
import { Button } from '@/components/lib/Button'
import { CardExcursion } from '@/components/lib/CardExcursion'
import { Container } from '@/components/lib/Container'
import { Dropdown } from '@/components/lib/Dropdown'
import { Input } from '@/components/lib/Input'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { PurchaseInformation } from '@/components/view/PurchaseView/PurchaseInformation'
import { TemplatePrimary } from '@/components/view/TemplatePrimary'
import { useWindowDimensions } from '@/hooks/useWindowDimensions'
import { twMerge } from 'tailwind-merge'

export default function TodasExcursoes() {
  const { width } = useWindowDimensions()

  const isMobile = width < 640

  console.log({ isMobile })

  return (
    <TemplatePrimary>
      <BackgroundTemplate
        title="Todas as excursões"
        subtitle="A excursão dos seus sonhos está aqui"
        image={ImageTypeBackground.DESTINY}
        className={twMerge(['py-20 pb-60 -mb-36', isMobile && 'mb-0 py-10'])}
      />

      <Container className="mb-10 max-sm:hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-lg:px-6 gap-6">
          <Input placeholder="Digite para onde você quer ir" />
          <Input placeholder="Digite de onde você quer sair" />
          <Input placeholder="Selecione o mês que você quer ir" />
          <Button>Procurar</Button>
        </div>
      </Container>

      <Accordion type="single" collapsible className="w-full sm:hidden">
        <AccordionItem value="cards" className="border-none">
          <AccordionTrigger
            className="w-full mb-4 bg-primary-blue-super-light flex justify-center p-2"
            classNameChevron="h-8 w-8"
          ></AccordionTrigger>

          <AccordionContent className="flex flex-col px-6">
            <PurchaseInformation />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Container className="bg-white rounded-t-3xl overflow-hidden p-6 sm:p-10 lg:px-32 max-w-7xl">
        <div className="flex justify-between">
          <Dropdown variant="secondary" defaultValue="Tipo" options={[]} />
          <Dropdown
            variant="secondary"
            defaultValue="Ordenar por"
            options={[]}
          />
        </div>

        <Container className="mt-10 grid gris-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 20 }).map((_, i) => (
            <div className="flex justify-center" key={i}>
              <CardExcursion />
            </div>
          ))}
        </Container>
      </Container>

      <Container className="max-w-5xl">
        <hr className="h-[2px] bg-gray-400 w-auto mb-4 mx-6" />

        <Newsletter />

        <hr className="h-[2px] bg-gray-400 w-auto mt-4 mx-6" />

        <NotFoundExcursion />
      </Container>
    </TemplatePrimary>
  )
}
