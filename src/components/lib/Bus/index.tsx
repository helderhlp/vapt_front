import Image from 'next/image'
import { BusComponent } from './Bus'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export enum BusType {
  BUS = 'BUS',
  BUS_EXECUTIVE = 'BUS_EXECUTIVE',
  MICRO_BUS_EXECUTIVE = 'MICRO_BUS_EXECUTIVE',
  BUS_DUPLE_DOCKER = 'BUS_DUPLE_DOCKER',
  MICRO_BUS = 'MICRO_BUS',
}

interface Props {
  type: BusType
  seats: SeatProps[]
  handleClickSeat?: (seat: SeatProps) => void
  disabled?: {
    status: boolean
    message: string
  }
}

export interface SeatProps {
  type: 'BUSY' | 'AVAILABLE' | 'SELECTED'
  seat: string
}

const mappedComponent: Record<BusType, (data: any) => JSX.Element> = {
  BUS: (props) => <BusComponent {...props} />,
  BUS_DUPLE_DOCKER: () => <></>,
  BUS_EXECUTIVE: () => <></>,
  MICRO_BUS: () => <></>,
  MICRO_BUS_EXECUTIVE: () => <></>,
}

export function Bus(props: Props) {
  const { type } = props

  function handleClickSeat(item: SeatProps) {
    props.handleClickSeat?.(item)
  }

  const Component = mappedComponent[type]

  return (
    <div
      className={twMerge([
        'relative flex flex-col items-center gap-6',
        props.disabled?.status && 'p-4',
      ])}
    >
      <Component handleClickSeat={handleClickSeat} seats={props.seats} />
      <Image
        src="/assets/bus/transport_caption.png"
        alt="image seats colors"
        width={270}
        height={50}
      />

      {props.disabled?.status && (
        <div className="absolute top-0 right-0 left-0 bottom-0 z-20 rounded-2xl bg-slate-300/40 flex items-center justify-center">
          <span className="font-bold text-gray-700 text-lg sm:text-2xl text-center">
            {props?.disabled?.message}
          </span>
        </div>
      )}
    </div>
  )
}
