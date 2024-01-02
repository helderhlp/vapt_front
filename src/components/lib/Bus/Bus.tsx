/* eslint-disable react/no-unknown-property */
import { useWindowDimensions } from '@/hooks/useWindowDimensions'
import Image from 'next/image'
import React from 'react'
import { SeatProps } from '.'
import { Seat } from './Seat'

interface Props {
  handleClickSeat: (seat: SeatProps) => void
  seats: SeatProps[]
}

export function BusComponent(props: Props) {
  const { width } = useWindowDimensions()

  if (!width) return <></>

  if (width < 768) {
    return <BusComponentMobile {...props} />
  }

  return <BusComponentDesktop {...props} />
}

export const BusComponentDesktop = (props: Props) => {
  const { queueOne, queueTwo } = React.useMemo(() => {
    const queueOne = props.seats.slice(0, props.seats.length / 2)
    const queueTwo = props.seats.slice(
      props.seats.length / 2,
      props.seats.length,
    )

    return { queueOne, queueTwo }
  }, [props.seats])

  return (
    <div className="relative">
      <style jsx>{`
        .grid-bus-desk {
          grid-template-columns: repeat(13, 1fr);
        }
      `}</style>
      <Image
        src="/assets/bus/transport_1_desk.png"
        width={600}
        height={300}
        className="object-contain w-full"
        alt="image bus desktop"
      />
      <div className="absolute left-[16%] bottom-[5%] top-[5%] right-[5%] z-10 grid grid-rows-2 gap-4 md:gap-6">
        <div className="grid grid-bus-desk gap-2">
          {queueOne.map((item) => (
            <Seat
              {...item}
              key={item.seat}
              handleClickSeat={props.handleClickSeat}
              position="LEFT"
            />
          ))}
        </div>

        <div className="grid grid-bus-desk gap-2">
          {queueTwo.map((item) => (
            <Seat
              {...item}
              key={item.seat}
              handleClickSeat={props.handleClickSeat}
              position="LEFT"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export const BusComponentMobile = (props: Props) => {
  const { queueOne, queueTwo } = React.useMemo(() => {
    const queueOne = props.seats.slice(0, props.seats.length / 2)
    const queueTwo = props.seats.slice(
      props.seats.length / 2,
      props.seats.length,
    )

    return { queueOne, queueTwo }
  }, [props.seats])

  return (
    <div className="relative">
      <style jsx>{`
        .grid-bus-mobile {
          grid-template-rows: repeat(13, 1fr);
          grid-template-columns: repeat(2, 1fr);
        }
      `}</style>
      <Image
        src="/assets/bus/transport_1_mobile.png"
        width={600}
        height={300}
        className="object-contain w-full min-w-[164px]"
        alt="image bus mobile"
      />

      <div className="absolute left-[5%] bottom-[5%] top-[15%] right-[5%] z-10 grid grid-cols-2 gap-6 md:gap-6">
        <div className="grid grid-bus-mobile gap-2">
          {queueOne.map((item) => (
            <Seat
              {...item}
              key={item.seat}
              handleClickSeat={props.handleClickSeat}
            />
          ))}
        </div>

        <div className="grid grid-bus-mobile gap-2">
          {queueTwo.map((item) => (
            <Seat
              {...item}
              key={item.seat}
              handleClickSeat={props.handleClickSeat}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
