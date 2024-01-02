import { Bus, BusType } from '@/components/lib/Bus'
import { Button } from '@/components/lib/Button'
import { PaymentStatus } from '@/components/lib/PaymentStatus'
import { busFake } from '@/mock/bus-fake'

export function ExcursionInformation() {
  const titleClass = 'text-cyan-500'
  const valueClass = 'text-gray-600'

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600 font-bold">APARECIDA DO NORTE</span>

          <span className="text-gray-600 font-bold">Pedido 001002</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-2">
            <div className="flex gap-10">
              <div className="flex flex-col">
                <span className={titleClass}>Duração</span>
                <span className={valueClass}>1 Dia</span>
              </div>

              <div className="flex flex-col">
                <span className={titleClass}>Data e horário da IDA</span>
                <span className={valueClass}>27-DEZ-2020-08h00</span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className={titleClass}>Ponto de Origem</span>
              <span className={valueClass}>Lago do Pará - Campinas/SP</span>
              <span className={valueClass}>Av. Aquidaban, 211 - Centro</span>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className={titleClass + ' whitespace-nowrap'}>
                  Idade Mínima
                </span>
                <span className={valueClass + ' whitespace-nowrap'}>
                  Sem Restrição
                </span>
              </div>
              <div className="flex flex-col">
                <span className={titleClass}>Ingresso</span>
                <span className={valueClass}>Não</span>
              </div>

              <div className="flex flex-col">
                <span className={titleClass + ' whitespace-nowrap'}>
                  Tipo de Veículo
                </span>
                <span className={valueClass}>Ônibus</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <span className={titleClass}>Data e horário da VOLTA</span>
              <span className={valueClass}>27-DEZ-2020 - 19h00</span>
            </div>
            <div className="flex flex-col">
              <span className={titleClass}>Ponto do Destino</span>
              <span className={valueClass}>
                Estacionamento Basilica - Aparecida/SP
              </span>
              <span className={valueClass}>
                Avenida Dr. Júlio Prestes - Ponte Alta
              </span>
            </div>

            <div className="flex flex-col">
              <span className={titleClass}>
                Qtd. mín. de passagem para a excursão acontecer
              </span>
              <span className={valueClass}>
                40{' '}
                <span className="text-primary-blue-dark">
                  (Faltam 40 passagens)
                </span>
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className={titleClass}>Detalhes do transporte</span>
            <span className={valueClass}>
              Ônibus Executivo 46 Lugares / Toalet / Frigobar / Wifi / Ar
              Condicionado / Tomada USB / Água/ Refrigerante / Café
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className={titleClass}>Outros Pontos de Embarque</span>
          <span className={valueClass}>
            Terminal Ouro Verde - R. Armado Frederico Renganechi, 21 - Jardim
            Cristina, Campinas/SP / Posto Jardim do Trevo - Av. Benedito de
            Campos, 193 - Jardim do Trevo, Campinas - SP
          </span>
        </div>
      </div>

      <hr className="bg-gray-300 w-full h-[2px] my-5" />

      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-gray-600 font-bold">Passageiros</span>

            <div className="flex flex-col max-sm:gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 max-w-[500px] max-sm:gap-1">
                <span className="text-sm text-gray-600">
                  Anderson José da Silva
                </span>
                <span className="text-sm text-gray-600">
                  CPF: 888.888.888-88
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 max-w-[500px] max-sm:gap-1">
                <span className="text-sm text-gray-600">
                  Anderson José da Silva
                </span>
                <span className="text-sm text-gray-600">
                  CPF: 888.888.888-88
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <span className="text-gray-600 font-bold">Data do Pedido</span>
            <span className="text-gray-600">20/09/2020</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row mt-4 gap-10">
          <div className="sm:max-w-[240px] w-full flex flex-col gap-1">
            <span className="text-gray-700 font-bold mb-2">
              Resumo do Pedido
            </span>

            <div className="flex justify-between">
              <span className="text-gray-600">1 Assento Inteira</span>
              <span className="font-bold text-gray-600">R$ 30,00</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">1 Assento Meia</span>
              <span className="font-bold text-gray-600">R$ 15,00</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">1 ingresso Inteira</span>
              <span className="font-bold text-gray-600">R$ 90,00</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">1 ingresso Meia</span>
              <span className="font-bold text-gray-600">R$ 45,00</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Taxa de Serviço</span>
              <span className="font-bold text-gray-600">R$ 6,00</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Desconto</span>
              <span className="font-bold text-gray-600">R$ 0,00</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Valor Total</span>
              <span className="font-bold text-gray-600">R$ 186,00</span>
            </div>

            <div className="mt-2">
              <span className="text-gray-600 text-xs">
                Á vista no cartão de Crédito final 4567
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-6 items-center">
            <Bus seats={busFake} type={BusType.BUS} />

            <PaymentStatus type="CONFIRMED" />
          </div>
        </div>
        <div className="flex justify-between max-sm:flex-col gap-4 w-full mt-4">
          <span className="flex-sm text-gray-600 font-semibold">
            Observação: Meia tarifa, será necessário comprovação do direito.
          </span>

          <div className="flex justify-between">
            <Button className="px-10">Cancelar Reserva</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
