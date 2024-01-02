// eslint-disable-next-line no-use-before-define
import React from 'react'
import { twMerge } from 'tailwind-merge'

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string
}

// eslint-disable-next-line react/display-name
export const Textarea = React.forwardRef(
  (props: Props, ref: React.Ref<HTMLTextAreaElement>) => {
    const { className, ...rest } = props
    return (
      <span className="w-full flex flex-col">
        {props.label && (
          <label className="text-sm text-gray-700 ml-1 mb-1">Password</label>
        )}
        <textarea
          ref={ref}
          className={twMerge([
            'border border-gray-300 rounded-md p-2 text-sm',
            className,
          ])}
          {...rest}
        />
      </span>
    )
  },
)
