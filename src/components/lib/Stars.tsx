import { Star } from 'lucide-react'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
  defaultValue: number
  disabled?: boolean
  onChange?: (value: number) => void
  className?: string
  size?: number
}

interface StarProps {
  active: boolean
}

export function Stars(props: Props) {
  const [stars, setStars] = React.useState<StarProps[]>([])

  function handleHoverStar(starRate: number) {
    const starsUpdated = stars.map((star, index) => {
      return {
        active: index + 1 <= starRate,
      }
    })

    setStars(starsUpdated)
    props.onChange?.(starRate)
  }

  React.useEffect(() => {
    const stars = []

    for (let i = 0; i < 5; i++) {
      if (i < props.defaultValue) {
        stars.push({
          active: true,
        })
      } else {
        stars.push({
          active: false,
        })
      }
    }

    setStars(stars)
  }, [props.defaultValue])

  return (
    <div className={twMerge(['flex gap-1', props.className])}>
      {stars?.map((star, index) => {
        return (
          <span
            key={`start-key-${index}`}
            onMouseEnter={() =>
              !props.disabled ? handleHoverStar(index + 1) : null
            }
          >
            {star.active ? (
              <Star
                size={props.size || 20}
                className="text-yellow-300 fill-yellow-300 stroke-gray-300"
              />
            ) : (
              <Star size={props.size || 20} className="text-gray-400 " />
            )}
          </span>
        )
      })}
    </div>
  )
}
