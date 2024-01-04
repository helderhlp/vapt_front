import { links } from '@/config/links'
import { BusFront, Share2 } from 'lucide-react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

interface Props {
  width?: string
}

export function CardExcursion(props: Props) {
  return (
    <div
      className={twMerge([
        'flex flex-col rounded-2xl w-full bg-white overflow-hidden border border-gray-300',
        props.width ? props.width : 'min-w-[200px]',
      ])}
    >
      <div className="flex flex-col justify-between min-h-[130px] bg-background-card-mobile bg-cover bg-center">
        <div className="bg-primary-blue-dark flex items-center w-fit justify-center rounded-br-2xl p-2 text-xs text-white font-bold tracking-wider">
          24/04/2021
        </div>

        <div className="flex justify-between">
          <i className="text-white text-xs font-bold p-1 rounded-tr-lg bg-primary-gray px-3">
            Novo
          </i>

          <Link
            href={links.excusionId('123')}
            className="bg-primary-pink text-[10px] text-white uppercase px-2 py-1"
          >
            saiba mais
          </Link>
        </div>
      </div>

      <div className="p-3 flex flex-col gap-1">
        <div className="flex justify-between">
          <span className="text-sm font-semibold text-gray-700">Guarujá</span>

          <BusFront size={14} />
        </div>

        <span className="max-sm:hidden text-xs sm:text-sm text-gray-800">
          Litoral Sul Paulista
        </span>
        <span className="text-[10px] sm:text-xs text-gray-700 tracking-wide">
          Rua Bartirá - Vila ipê, Campinas - SP
        </span>

        <div className="flex justify-between mt-4 items-center">
          <span className="text-lg sm:text-2xl font-bold text-gray-600">
            R$ 121,44
          </span>

          <button className="hover:opacity-70 transition-opacity">
            <Share2 className="text-primary-blue-dark" fill="" size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
