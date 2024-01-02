import { Button } from '@/components/lib/Button'
import { Input } from '@/components/lib/Input'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { MapPin } from 'lucide-react'

export function AccordionAddress() {
  return (
    <AccordionItem value="address">
      <AccordionTrigger>
        <div className="flex gap-4 items-center">
          <MapPin className="text-gray-600" />
          <span className="text-gray-600 max-sm:text-sm">Meu endereço</span>
        </div>
      </AccordionTrigger>

      <AccordionContent className="flex flex-col gap-2">
        <div className="flex gap-2 max-sm:flex-col">
          <Input placeholder="55555-555" label="CEP" />
          <div className="flex gap-2">
            <Input placeholder="Rua do distrito, 155" label="Logradouro" />
            <Input placeholder="" label="Complemento" />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-[1fr_1fr_0.3fr_] gap-2">
          <Input placeholder="Ex: Campinas" label="Bairro" />
          <Input placeholder="Ex: São Paulo" label="Cidade" />
          <Input placeholder="Ex: SP" label="Estado" />
        </div>

        <div className="mt-4">
          <Button className="w-fit px-10">Editar</Button>
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}
