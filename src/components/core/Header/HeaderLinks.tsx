import { links } from '@/config/links'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { MenuMobile } from './MenuMobile'

export function HeaderLinks() {
  return (
    <div className={twMerge(['bg-primary-blue-super-light p-2 w-full'])}>
      <div className="hidden md:flex justify-center gap-20 text-sm text-gray-600 underline">
        <Link href={links.home}>Vapvou</Link>
        <Link href={links.destinos}>Destinos</Link>
        <Link href={links.allExcursions}>Todas Excursões</Link>
        <Link href={links.contact}>Contato</Link>
      </div>

      <div className="flex md:hidden flex-1 justify-end items-center">
        <MenuMobile>
          <Menu size={26} />
        </MenuMobile>
      </div>
    </div>
  )
}
