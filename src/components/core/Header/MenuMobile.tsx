import { links } from '@/config/links'
import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
  children: React.ReactNode
}

export function MenuMobile(props: Props) {
  const [isOpen, setIsOpen] = React.useState(false)
  // const [startY, setStartY] = React.useState<null | number>(null)

  // const handleTouchMove = (e: any) => {
  //   if (startY !== null) {
  //     const currentY = e.touches[0].clientY
  //     const deltaY = currentY - startY
  //     console.log(deltaY)

  //     if (deltaY < -6) {
  //       setIsOpen(false)
  //     }

  //     setStartY(null)
  //   }
  // }

  return (
    <div className="">
      <button onClick={() => setIsOpen(!isOpen)}>{props.children}</button>

      <div
        className={twMerge([
          'w-screen h-auto bg-primary-blue-super-light absolute top-0 right-0 left-0 z-20 transition-transform',
          !isOpen ? 'translate-y-[-400px]' : 'translate-y-0',
        ])}
      >
        <div className="p-6 pb-0 flex flex-col gap-4 flex-1">
          <div className="flex flex-col text-gray-500 text-end italic">
            <Link
              className="border-b border-b-gray-400 py-1"
              href={links.destinos}
            >
              Destinos
            </Link>

            <Link
              className="border-b border-b-gray-400 py-1"
              href={links.allExcursions}
            >
              Todas excursões
            </Link>

            <Link
              className="border-b border-b-gray-400 py-1"
              href={links.contact}
            >
              Contato
            </Link>

            <Link
              className="border-b border-b-gray-400 py-1"
              href={links.registerExcursionist}
            >
              Cadastrar como Excursionista
            </Link>

            <Link
              className="border-b border-b-gray-400 py-1"
              href={links.login}
            >
              Entrar
            </Link>

            <Link
              className="border-b border-b-gray-400 py-1"
              href={links.login}
            >
              Cadastre-se
            </Link>
          </div>

          <button
            className=" border py-4 flex justify-center"
            // onTouchStart={(e) => setStartY(e.touches[0].clientY)}
            onTouchStart={() => setIsOpen(false)}
            // onTouchMove={handleTouchMove}
          >
            <div className="w-5 h-1 rounded-lg bg-gray-500" />
          </button>
        </div>
      </div>
    </div>
  )
}
