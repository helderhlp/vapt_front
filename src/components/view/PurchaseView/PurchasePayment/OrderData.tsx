import { Button } from '@/components/lib/Button'
import { Input } from '@/components/lib/Input'

export function OrderData() {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-gray-700 font-bold mb-2">Resumo do Pedido</span>

      <div className="flex gap-2 mb-4">
        <Input placeholder="Cupom de Desconto" />

        <Button className="w-fit px-6">Aplicar</Button>
      </div>

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
    </div>
  )
}
