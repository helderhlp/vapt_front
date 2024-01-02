import { X } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { links } from '@/config/links'

interface Props {
  onClose: () => void
}

export function WarningCovid(props: Props) {
  return (
    <motion.div
      exit={{ height: '0px', padding: '0px', opacity: 0 }}
      initial={{ height: '36px', padding: '8px', opacity: 1 }}
      animate={{ height: '36px', padding: '8px', opacity: 1 }}
      className="flex justify-center bg-cyan-300 gap-2 overflow-hidden items-center"
    >
      <span className="text-[10px] sm:text-sm text-gray-700">
        Informações Coronavírus. Como proceder com sua viagem?{' '}
        <Link href={links.covid} className="text-primary-blue-dark underline">
          Acesse aqui.
        </Link>
      </span>

      <button onClick={() => props.onClose()}>
        <X size={14} />
      </button>
    </motion.div>
  )
}
