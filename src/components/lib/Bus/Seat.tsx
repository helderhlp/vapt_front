import { twMerge } from 'tailwind-merge'
import { SeatProps } from '.'
import Image from 'next/image'

type Props = SeatProps & {
  handleClickSeat: (seat: SeatProps) => void
  position?: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT'
}

const urlSeats = {
  AVAILABLE: '/assets/bus/seat_white.svg',
  SELECTED: '/assets/bus/seat_blue.svg',
  BUSY: '/assets/bus/seat_red.svg',
}

const positionRotate = {
  UP: '',
  DOWN: '-rotate-180',
  LEFT: '-rotate-90',
  RIGHT: 'rotate-90',
}

export function Seat(props: Props) {
  const { type, seat, handleClickSeat } = props

  const position = positionRotate[props.position || 'UP']

  return (
    <button
      className={twMerge([
        'flex justify-center items-center h-full transition-colors w-full relative',
      ])}
      onClick={() => handleClickSeat(props)}
    >
      <Image
        src={urlSeats[type]}
        alt="seat"
        width={30}
        height={30}
        className={twMerge(['transition-all duration-300 ', position])}
      />

      {/* <span
        className={twMerge([
          'absolute text-xs font-bold',
          type === 'AVAILABLE' && 'text-gray-800 ',
          type === 'SELECTED' && 'text-white',
          type === 'BUSY' && 'text-white',
        ])}
      >
        {seat}
      </span> */}
    </button>
  )
}
