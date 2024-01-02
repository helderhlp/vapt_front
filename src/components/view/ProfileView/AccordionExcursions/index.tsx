import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ChevronDownIcon, Image } from 'lucide-react'
import ImageNext from 'next/image'
import { ExcursionInformation } from './ExcursionInformation'
import React from 'react'

export function AccordionExcursions() {
  return (
    <AccordionItem value="excursoes">
      <AccordionTrigger>
        <div className="flex gap-4 items-center">
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image className="text-gray-600" />
          <span className="text-gray-600 max-sm:text-sm">Excursões</span>
        </div>
      </AccordionTrigger>

      <AccordionContent>
        <ExcursionItem />
      </AccordionContent>
    </AccordionItem>
  )
}

function ExcursionItem() {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ImageNext
          src="/assets/aparecida_do_norte_destino_card_mobile.png"
          alt="image of the excursion"
          width={200}
          height={140}
          className="h-full w-full rounded-2xl object-cover"
        />

        <div className="bg-primary-blue-super-light rounded-2xl p-3 flex flex-col">
          <span className="uppercase font-semibold text-gray-700">
            Aparecida do norte
          </span>

          <span className="font-medium text-gray-600">Saída Largo do Pará</span>

          <div className="flex-1 flex justify-end flex-col">
            <span className="text-sm text-gray-600 font-medium">DATA</span>
            <span className="text-gray-600 text-sm font-medium">
              29/09/2020
            </span>
          </div>
        </div>

        <div className="bg-primary-blue-super-light rounded-2xl p-3 flex flex-col">
          <span className="uppercase font-semibold text-gray-700">
            Passageiros
          </span>

          <span className="text-gray-600">Anderson José da Silva</span>
          <span className="text-gray-600">Maria José Conceição</span>
        </div>

        <div className="bg-primary-blue-super-light rounded-2xl p-3 flex flex-col">
          <div>
            <span className="font-semibold text-sm text-gray-700">
              Pedido:{' '}
            </span>
            <span className="text-gray-700">0001</span>
          </div>

          <div>
            <span className="font-semibold text-sm text-gray-700">
              Data do pedido:{' '}
            </span>
            <span className="text-gray-700 text-sm">18/09/2020</span>
          </div>
          <div>
            <span className="font-semibold text-sm text-gray-700">
              Valor total:{' '}
            </span>
            <span className="text-gray-700 text-sm">R$ 51,00</span>
          </div>
          <div>
            <span className="font-semibold text-sm text-gray-700">
              Status:{' '}
            </span>
            <span className="text-gray-700 text-sm font-bold">RESERVADO</span>
          </div>

          <button
            className="flex justify-center items-center gap-2 mt-2"
            onClick={() => setOpen(!open)}
          >
            <i className="text-gray-600">Ver detalhes</i>
            <ChevronDownIcon className="text-gray-600" size={18} />
          </button>
        </div>
      </div>

      {open && <ExcursionInformation />}
    </div>
  )
}
