import { links } from '@/config/links'
import Link from 'next/link'

export function CardImage() {
  return (
    <Link
      href={links.destinosId('123')}
      className={`
        min-h-[280px] bg-[url('https://vapt-front.vercel.app/assets/guaruja_destino_card-GJvRpE_i.png')] 
        bg-cover min-w-[240px] w-full flex p-5 hover:scale-105 text-start transition-transform
      `}
    >
      <div className="flex-1 flex flex-col text-white self-end">
        <span className="font-medium text-lg">A partir de</span>
        <span className="text-2xl md:text-3xl lg:text-4xl font-bold">
          R$ 5.150,00
        </span>
        <span className="text-lg font-bold">Monte Sião</span>
        <span>Estância Turística</span>
      </div>
    </Link>
  )
}
