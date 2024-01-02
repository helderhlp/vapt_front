import { links } from '@/config/links'
import { CheckCircle, Clock, XCircle } from 'lucide-react'
import Link from 'next/link'

interface Props {
  type: 'CONFIRMED' | 'REJECTED' | 'PENDING'
}

export function PaymentStatus(props: Props) {
  const Component = mappedStatusPayment[props.type] || <></>

  return Component
}

const ConfirmationPayment = () => {
  return (
    <div className="flex flex-col p-6 px-10 gap-4  border border-gray-600 rounded-2xl w-fit">
      <div className="flex items-center gap-4">
        <CheckCircle size={42} className="text-green-600" />

        <div className="flex flex-col gap-2">
          <span className="uppercase text-lg font-bold text-gray-700">
            Pagamento confirmado
          </span>
          <Link
            href={links.termsAndConditions}
            className="underline text-gray-600 text-xs"
          >
            Ler Termos de Uso
          </Link>
        </div>
      </div>
    </div>
  )
}

const RejectedPayment = () => {
  return (
    <div className="flex flex-col p-6 px-10 gap-4  border border-gray-600 rounded-2xl w-fit">
      <div className="flex items-center gap-4">
        <XCircle size={42} className="text-red-600" />

        <div className="flex flex-col gap-2">
          <span className="uppercase text-lg font-bold text-gray-700">
            Pagamento Não efetuado
          </span>
          <Link
            href={links.termsAndConditions}
            className="underline text-gray-600 text-xs"
          >
            Revisar dados do cartão
          </Link>
        </div>
      </div>
    </div>
  )
}

const PendingPayment = () => {
  return (
    <div className="flex flex-col p-6 px-10 gap-4  border border-gray-600 rounded-2xl w-fit">
      <div className="flex items-center gap-4">
        <Clock size={42} className="text-yellow-600" />

        <div className="flex flex-col gap-2">
          <span className="uppercase text-lg font-bold text-gray-700">
            Pagamento em análise
          </span>
        </div>
      </div>
    </div>
  )
}

const mappedStatusPayment = {
  CONFIRMED: <ConfirmationPayment />,
  REJECTED: <RejectedPayment />,
  PENDING: <PendingPayment />,
}
