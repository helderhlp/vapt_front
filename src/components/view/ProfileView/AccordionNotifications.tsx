import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Bell } from 'lucide-react'

export function AccordionNotifications() {
  return (
    <AccordionItem value="notifications">
      <AccordionTrigger>
        <div className="flex gap-4 items-center">
          <Bell className="text-gray-600" />
          <span className="text-gray-600 max-sm:text-sm">Notificações</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4">
        <span>
          - Sua excursão para Aparecida do Norte está confirmada para o dia
          29/09/2020 com saída no Largo do Pará na Av. Aquidaban, 1582 - Centro
          Campinas/SP ás 3:00 AM. Chegue 15 minutos Mais cedo para o embarque.
          Desejamos uma boa viagem.
        </span>
      </AccordionContent>
    </AccordionItem>
  )
}
