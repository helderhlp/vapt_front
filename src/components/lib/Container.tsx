import { twMerge } from 'tailwind-merge'

interface Props {
  children: React.ReactNode
  className?: string
  classNameContainer?: string
}

export function Container({ children, className, classNameContainer }: Props) {
  return (
    <div
      className={twMerge(['w-full flex justify-center', classNameContainer])}
    >
      <div className={twMerge(['flex flex-col max-w-5xl w-screen', className])}>
        {children}
      </div>
    </div>
  )
}
