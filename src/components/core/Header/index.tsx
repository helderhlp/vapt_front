import Image from 'next/image'
import { HeaderLinks } from './HeaderLinks'
import { Button } from '@/components/lib/Button'
import { User } from 'lucide-react'
import Link from 'next/link'
import { WarningCovid } from './WarningCovid'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { links } from '@/config/links'
import { twMerge } from 'tailwind-merge'

export function Header() {
  const [warningCovid, setWarningCovid] = React.useState(true)
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <div>
      <AnimatePresence>
        {warningCovid && (
          <WarningCovid onClose={() => setWarningCovid(false)} />
        )}
      </AnimatePresence>
      <HeaderLinks />

      <div className="p-4 py-8 bg-white justify-between flex items-center max-sm:gap-6 px-6 sm:px-32 flex-wrap">
        <Link href={links.home}>
          <Image src="/assets/logo.png" alt="logo" width={130} height={59} />
        </Link>

        <div className="flex gap-10 max-sm:w-full sm:ml-auto max-sm:justify-center">
          <Link href={links.registerExcursionist} className="max-sm:w-full">
            <Button
              variant="secondary"
              className="flex text-xs gap-2 max-sm:w-full max-sm:justify-center"
              as="span"
            >
              <User size={14} />
              <span className="whitespace-nowrap">
                Cadastrar como excursionista
              </span>
            </Button>
          </Link>

          <Button
            variant="primary"
            className={twMerge([
              'relative bg-primary-gray hover:bg-primary-gray flex text-xs gap-2 max-sm:hidden',
              menuOpen && 'rounded-b-none',
            ])}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <User size={14} />

            <span className="whitespace-nowrap">Minha conta / Cadastre-se</span>

            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute w-full h-auto bg-primary-gray top-full -ml-3 flex flex-col items-end px-4 pb-4 pt-2 gap-2"
                >
                  <Link
                    href={links.login}
                    className="text-md hover:opacity-70 transition-opacity w-full text-end"
                  >
                    Entrar
                  </Link>
                  <Link
                    href={links.login}
                    className="text-md hover:opacity-70 transition-opacity w-full text-end"
                  >
                    Cadastra-se
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </div>
    </div>
  )
}
