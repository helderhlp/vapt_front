import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { HelpingHand } from 'lucide-react'

export function AccordionOffer() {
  return (
    <AccordionItem value="offer">
      <AccordionTrigger>
        <div className="flex gap-4 items-center">
          <HelpingHand className="text-gray-600" />
          <span className="text-gray-600 max-sm:text-sm">
            Cupons de desconto
          </span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="flex gap-4 flex-wrap">
        <div className="flex flex-col gap-2">
          <span className="text-gray-600">Data de Adesão</span>
          <span className="text-gray-600 font-bold">25/09/2020</span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-gray-600">Data de Venc.</span>
          <span className="text-gray-600 font-bold">25/12/2020</span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-gray-600">Desconto</span>
          <span className="text-gray-600 font-bold">10%</span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-gray-600">Código</span>
          <span className="text-gray-600 font-bold">GANHEI10%</span>
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}
