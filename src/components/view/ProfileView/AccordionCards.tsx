import { Button } from '@/components/lib/Button'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { CreditCard } from 'lucide-react'

export function AccordionCards() {
  return (
    <AccordionItem value="cards">
      <AccordionTrigger>
        <div className="flex gap-4 items-center">
          <CreditCard className="text-gray-600" />
          <span className="text-gray-600 max-sm:text-sm">Meus cartões</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="flex flex-col">
        <div className="flex flex-col gap-1">
          <span className="text-sm text-gray-600">Cartão final</span>
          <span className="text-gray-700 font-bold">VISA XXXXX4567</span>
        </div>

        <div className="flex gap-4 mt-6">
          <Button className="w-fit px-10">Editar</Button>
          <Button className="w-fit px-10">Novo</Button>
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}
