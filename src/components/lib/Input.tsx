// eslint-disable-next-line no-use-before-define
import React from 'react'
import { twMerge } from 'tailwind-merge'

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  variant?: 'primary' | 'secondary'
}

// eslint-disable-next-line react/display-name
export const Input = React.forwardRef(
  (props: Props, ref: React.Ref<HTMLInputElement>) => {
    const { variant = 'primary', className, ...rest } = props

    return (
      <span className="w-full flex flex-col">
        {props.label && (
          <label className="text-sm text-gray-700 ml-1 mb-1">
            {props.label}
          </label>
        )}
        <input
          ref={ref}
          className={twMerge([
            'w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-gray-400',
            variant === 'secondary' &&
              'bg-primary-blue-super-light border-none',
            className,
          ])}
          {...rest}
        />
      </span>
    )
  },
)
