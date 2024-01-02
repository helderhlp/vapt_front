import { Button } from '@/components/lib/Button'
import { Dropdown } from '@/components/lib/Dropdown'
import { Input } from '@/components/lib/Input'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { SexOptions } from '@/config/constants'
import { SquareUser } from 'lucide-react'

export function AccordionProfileData() {
  return (
    <AccordionItem value="profile-data">
      <AccordionTrigger>
        <div className="flex gap-4 items-center">
          <SquareUser className="text-gray-600" />
          <span className="text-gray-600 max-sm:text-sm">Meus dados</span>
        </div>
      </AccordionTrigger>

      <AccordionContent className="flex flex-col gap-2">
        <div className="flex gap-2 max-sm:flex-col">
          <div className="flex gap-2">
            <Input placeholder="Ex: João" label="Primeiro nome" />
            <Input placeholder="Ex: Francisco" label="Segundo nome" />
          </div>
          <div className="flex gap-2">
            <Input type="date" label="Data de Nasc." />
            <Dropdown
              options={SexOptions}
              defaultValue="Sexo"
              variant="secondary"
              className="h-fit self-end min-w-[120px]"
              chevronClassName="ml-auto"
            />
          </div>
        </div>

        <div className="flex gap-2 max-sm:flex-col">
          <div className="flex gap-2">
            <Dropdown
              options={[]}
              defaultValue="Doc"
              variant="secondary"
              className="h-fit self-end"
            />
            <Input placeholder="Ex: 000.000.000-00" label="Número doc." />
          </div>
          <Input placeholder="john.doe@gmail.com" label="E-mail" />
        </div>

        <div className="flex gap-2">
          <Input placeholder="88 88888-8888" label="Celular" />
          <Input placeholder="88 88888-8888" label="Telefone" />
        </div>

        <div className="flex gap-4 mt-4">
          <Button className="w-fit px-10 max-sm:flex-1">Editar</Button>
          <Button className="w-fit px-10">Alterar senha</Button>
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}
