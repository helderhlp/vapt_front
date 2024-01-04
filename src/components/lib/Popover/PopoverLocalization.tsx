'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { MapPin, PinIcon } from 'lucide-react'

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
]

export function PopoverLocalization() {
  const [value, setValue] = React.useState('')

  const [cities, setCities] = React.useState<string[]>([])
  const [search, setSearch] = React.useState('')

  return (
    <Popover open={!!cities.length}>
      <PopoverTrigger className="bg-primary-blue-super-light flex gap-1 items-center h-fit self-center p-2 rounded-xl">
        <MapPin className="mr-2 h-4 w-4 shrink-0 opacity-50" />

        <input
          placeholder={value || 'Selecione sua Cidade'}
          className="bg-transparent text-sm text-gray-600 outline-none"
          onChange={(e) => setSearch(e.target.value)}
        />
      </PopoverTrigger>
      {/* 
      <PopoverContent className="w-[300px] max-h-[250px] overflow-auto p-0">
        <div className="flex flex-col gap-1 p-1">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => {
                props.onSelect(method)
              }}
              className="flex items-center text-sm p-2 justify-start text-start hover:bg-gray-50 rounded-sm text-zinc-800"
            >
              <Check
                className={cn(
                  'mr-2 h-4 w-4',
                  props.value.some((e) => e.id === method.id)
                    ? 'opacity-100'
                    : 'opacity-0',
                )}
              />
              {method.name}
            </button>
          ))}
        </div>
      </PopoverContent> */}
    </Popover>
  )
}
