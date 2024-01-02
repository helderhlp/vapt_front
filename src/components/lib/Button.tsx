import { twMerge } from 'tailwind-merge'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  as?: 'button' | 'span'
}

export function Button(props: Props) {
  const { variant = 'primary', className, ...rest } = props

  const Component = props.as || 'button'

  return (
    <Component
      {...rest}
      className={twMerge([
        'text-sm shadow-md disabled:shadow-sm rounded-lg p-3 py-2 w-full',
        variant === 'primary' &&
          'bg-primary-blue-dark text-white disabled:bg-blue-300 hover:bg-blue-600 disabled:hover:bg-blue-300 transition-all disabled:cursor-not-allowed',
        variant === 'secondary' &&
          'bg-primary-pink text-white disabled:text-pink-200 disabled:bg-gray-200 disabled:opacity-100 hover:opacity-80 disabled:hover:bg-gray-200 transition-all disabled:cursor-not-allowed',
        className,
      ])}
    >
      {props.children}
    </Component>
  )
}
