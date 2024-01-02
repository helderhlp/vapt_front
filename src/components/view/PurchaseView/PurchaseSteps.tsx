import { Check } from 'lucide-react'
import { useParams } from 'next/navigation'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const steps = {
  choice: 1,
  payment: 2,
  confirmation: 3,
} as const

type Step = keyof typeof steps

export function PurchaseSteps() {
  const params = useParams()?.params

  const step = React.useMemo(() => {
    if (!params) return 1

    return steps[params[0] as Step]
  }, [params])

  return (
    <div className="border border-gray-400 w-full grid grid-cols-3">
      <div
        className={twMerge([
          'relative flex justify-between items-center text-sm p-1 font-semibold text-gray-500 bg-teal-100 border-r border-r-gray-400 sm:px-4',
        ])}
      >
        <span className="max-sm:hidden" />
        Selecionar
        {step > 1 ? (
          <Check size={16} absoluteStrokeWidth className="text-green-600" />
        ) : (
          <span />
        )}
      </div>

      <div
        className={twMerge([
          'relative flex justify-between items-center text-sm p-1 font-semibold text-gray-500 bg-teal-100 border-r border-r-gray-400 sm:px-4',
          step > 1 && 'bg-teal-100',
        ])}
      >
        <span className="max-sm:hidden" />
        Pagamento
        {step > 2 ? (
          <Check size={16} absoluteStrokeWidth className="text-green-600" />
        ) : (
          <span />
        )}
      </div>

      <div
        className={twMerge([
          'relative flex justify-between items-center text-sm p-1 font-semibold text-gray-500 bg-teal-100 border-r border-r-gray-400 sm:px-4',
          step === 3 && 'bg-teal-100',
        ])}
      >
        <span className="max-sm:hidden" />
        Confirmação
        <span className="max-sm:hidden" />
      </div>
    </div>
  )
}
