import { PassageData } from './PassageData'
import { CreditCardData } from './CreditCardData'
import { OrderData } from './OrderData'
import { ChoicePaymentType } from './ChoicePaymentType'

export function PurchasePayment() {
  return (
    <div className="flex flex-col gap-2">
      <PassageData />

      <div className="flex max-sm:flex-col sm:justify-between gap-4 mt-4">
        <div className="flex flex-col-reverse sm:flex-col w-full">
          <div className="w-full flex flex-col-reverse sm:flex-col gap-4 text-sm sm:max-w-[300px]">
            <ChoicePaymentType />

            <OrderData />
          </div>
        </div>

        <CreditCardData />
      </div>
    </div>
  )
}
