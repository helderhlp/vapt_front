import { Bus, BusType } from '@/components/lib/Bus'
import { PaymentStatus } from '@/components/lib/PaymentStatus'
import { busFake } from '@/mock/bus-fake'

export function PurchaseConfirmation() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2 flex-1">
          <span className="text-gray-600 font-bold">Passageiros</span>

          <div className="flex flex-col max-sm:gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 max-w-[500px]">
              <span className="text-sm text-gray-600">
                Anderson José da Silva
              </span>
              <span className="text-sm text-gray-600">CPF: 888.888.888-88</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 max-w-[500px]">
              <span className="text-sm text-gray-600">
                Anderson José da Silva
              </span>
              <span className="text-sm text-gray-600">CPF: 888.888.888-88</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end ml-auto">
          <span className="text-gray-600 font-bold">Data do Pedido</span>
          <span className="text-gray-600">20/09/2020</span>
        </div>
      </div>

      <div className="grid max-sm:gap-10 grid-cols-1 sm:grid-cols-[0.30fr_1fr] mt-10">
        <div className="w-full flex flex-col gap-1 text-sm max-w-[300px]">
          <span className="text-gray-700 font-bold mb-2">Resumo do Pedido</span>

          <div className="flex justify-between">
            <span className="text-gray-600">1 Assento Inteira</span>
            <span className="font-bold text-gray-600">R$ 30,00</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">1 Assento Meia</span>
            <span className="font-bold text-gray-600">R$ 15,00</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">Taxa de Serviço</span>
            <span className="font-bold text-gray-600">R$ 6,00</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">Desconto</span>
            <span className="font-bold text-gray-600">R$ 0,00</span>
          </div>

          <div className="flex justify-between mt-4">
            <span className="text-gray-600">Valor Total</span>
            <span className="font-bold text-gray-600">R$ 186,00</span>
          </div>

          <div>
            <span className="text-gray-600 text-xs">
              Á vista no cartão de Crédito final 4567
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-6 items-center">
          <Bus seats={busFake} type={BusType.BUS} />

          <PaymentStatus type="REJECTED" />
        </div>
      </div>
    </div>
  )
}
