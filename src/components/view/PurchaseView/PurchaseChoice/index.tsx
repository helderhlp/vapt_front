import { Bus, BusType, SeatProps } from '@/components/lib/Bus'
import { busFake } from '@/mock/bus-fake'
import Image from 'next/image'
import React from 'react'
import { DropdownTypePassport } from './DropdownTypePassport'
import { X } from 'lucide-react'
import Link from 'next/link'
import { links } from '@/config/links'

export function PurchaseChoice() {
  const [seats, setSeats] = React.useState<SeatProps[]>(busFake)
  const [typePassage, setTypePassage] = React.useState('')

  function handleClickSeat(seat: SeatProps) {
    switch (seat.type) {
      case 'AVAILABLE':
        setSeats((prevState) => {
          const newState = prevState.map((item) => {
            if (item.seat === seat.seat) {
              return {
                ...item,
                type: 'SELECTED' as SeatProps['type'],
              }
            }

            return item
          })

          return newState
        })
        break
      case 'SELECTED':
        setSeats((prevState) => {
          const newState = prevState.map((item) => {
            if (item.seat === seat.seat) {
              return {
                ...item,
                type: 'AVAILABLE' as SeatProps['type'],
              }
            }

            return item
          })

          return newState
        })
        break
      case 'BUSY':
        break
    }
  }

  const selected = React.useMemo(() => {
    return seats.filter((seat) => seat.type === 'SELECTED')
  }, [seats])

  return (
    <div className="flex flex-col">
      <div className="flex sm:hidden w-full">
        <DropdownTypePassport handleSelect={setTypePassage} />
      </div>

      <div className="grid gap-4 grid-cols-[1fr_0.25fr]">
        <div className="sm:px-10 flex flex-col items-center gap-6">
          <span className="text-gray-700 font-semibold">
            Selecione os Assentos
          </span>

          <Bus
            type={BusType.BUS}
            seats={seats}
            handleClickSeat={handleClickSeat}
            disabled={{
              status: !typePassage,
              message: 'Selecione o tipo de passagem',
            }}
          />
        </div>

        <div className="flex flex-col gap-2 min-w-[160px] sm:min-w-[220px]">
          <div className="flex max-sm:hidden w-full">
            <DropdownTypePassport handleSelect={setTypePassage} />
          </div>

          {selected.length > 0 && (
            <div className="flex flex-col flex-1 max-sm:mt-10">
              <span className="font-bold text-gray-600">Seus assentos</span>

              <div className="flex flex-col my-2 gap-2">
                {selected.map((seat) => (
                  <div key={seat.seat} className="flex items-start gap-2">
                    <Image
                      src="/assets/bus/seat_blue.svg"
                      alt="seat blue"
                      width={16}
                      height={16}
                    />

                    <span className="text-gray-700 text-xs sm:text-sm flex-1">
                      Assento - R$ 30,00
                    </span>

                    <button className="flex">
                      <X
                        absoluteStrokeWidth
                        size={14}
                        className="text-gray-700"
                      />
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 flex-1 justify-center mt-4">
                <span className="text-sm text-gray-700 mb-2">
                  Taxa de Serviço - R$ 6,00
                </span>

                <div className="flex justify-between">
                  <span className="text-sm font-bold text-gray-700">Total</span>
                  <span className="text-sm font-bold text-gray-700">
                    R$ 186,00
                  </span>
                </div>

                <Link
                  href={links.excursionPurchasePayment('123')}
                  className="bg-primary-pink flex flex-col p-1 rounded-2xl px-2 items-center"
                >
                  <span className="text-primary-blue-dark text-sm font-light">
                    é pra lá que eu vou
                  </span>
                  <span className="text-white uppercase text-[10px] whitespace-nowrap">
                    Clique aqui para reservar
                  </span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
