import { ChevronsUpDown } from 'lucide-react'

import { cn } from '@/lib/utils'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export interface IOption {
  label: string
  value: any
}

interface Props {
  options: IOption[]
  defaultValue?: string
  handleClickOption?: (option: IOption) => void
  variant?: 'primary' | 'secondary'
  className?: string
  chevronClassName?: string
}

export function Dropdown(props: Props) {
  const { variant = 'primary' } = props
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState<IOption | null>(null)

  function handleClickOption(option: IOption) {
    setValue(option)
    props.handleClickOption && props.handleClickOption(option)
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        className={twMerge([
          '',
          variant === 'primary' &&
            'flex items-center w-fit text-sm tracking-wider',
          variant === 'secondary' &&
            'flex items-center w-fit text-sm tracking-wider bg-white border border-gray-300 rounded-md px-4 py-2',
          props.className,
        ])}
      >
        {value?.label || props.defaultValue || 'Selecione'}
        <ChevronsUpDown
          className={twMerge([
            'ml-2 h-4 w-4 shrink-0 opacity-50',
            props.chevronClassName,
          ])}
        />
      </PopoverTrigger>

      <PopoverContent className="w-[200px] p-0 flex flex-col max-h-[300px] overflow-auto">
        <div className="max-h-[500px]">
          {props.options.map((option) => (
            <button
              key={option.label}
              className={cn(
                'flex items-center justify-between w-full p-2 text-left',
              )}
              onClick={() => handleClickOption(option)}
            >
              <span className="flex-1 text-gray-700 text-sm">
                {option.label}
              </span>
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
