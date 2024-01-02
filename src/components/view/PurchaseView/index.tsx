import { useParams } from 'next/navigation'
import { TemplatePrimary } from '../TemplatePrimary'
import { PurchaseChoice } from './PurchaseChoice'
import { PurchasePayment } from './PurchasePayment'
import { PurchaseConfirmation } from './PurchaseConfirmation'
import { ExcursionHeader } from './ExcursionHeader'
import { Container } from '@/components/lib/Container'
import { ExcursionFlag } from './ExcursionFlag'
import { PurchaseSteps } from './PurchaseSteps'
import { PurchaseInformation } from './PurchaseInformation'
import React from 'react'
import { Accordion } from '@/components/ui/accordion'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { Newsletter } from '@/components/core/Newsletter'

const mappedPurchase = {
  choice: <PurchaseChoice />,
  payment: <PurchasePayment />,
  confirmation: <PurchaseConfirmation />,
} as Record<'choice' | 'payment' | 'confirmation', JSX.Element>

export function PurchaseView() {
  const params = useParams()?.params

  const Component = React.useMemo(() => {
    if (!params) return <></>

    const currentParams = params[0] as keyof typeof mappedPurchase

    return mappedPurchase[currentParams]
  }, [params])

  return (
    <TemplatePrimary>
      <ExcursionHeader />

      <Container className="relative max-w-6xl sm:rounded-t-3xl bg-white p-6 sm:p-14">
        <ExcursionFlag />

        {/* Mobile */}
        <Accordion type="single" collapsible className="w-full sm:hidden">
          <AccordionItem value="cards">
            <AccordionTrigger className="w-full mb-4">
              <div className="flex gap-2 justify-center p-2 items-center">
                <span className="font-bold text-gray-600">
                  Detalhes da Excursão
                </span>
                <ChevronDown size={24} />
              </div>
            </AccordionTrigger>

            <AccordionContent className="flex flex-col">
              <PurchaseInformation />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <PurchaseSteps />

        {/* Desktop */}
        <div className="max-sm:hidden">
          <PurchaseInformation />
        </div>

        <hr className="w-full h-[2px] bg-gray-200 my-6" />

        {Component}
      </Container>

      <Container className="">
        <hr className="w-full h-[2px] bg-gray-200 mt-6 mx-6" />
        <Newsletter />
      </Container>
    </TemplatePrimary>
  )
}
