import { Dropdown } from '@/components/lib/Dropdown'
import { Input } from '@/components/lib/Input'

export function PassageData() {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-gray-700 font-bold mb-2">Passageiros</span>

      <div className="flex gap-2 max-sm:flex-col">
        <Input placeholder="Nome" />

        <div className="flex gap-2 w-full">
          <Dropdown options={[]} defaultValue="Doc" variant="secondary" />
          <Input placeholder="Número" />
        </div>
      </div>

      <div className="flex gap-2 max-sm:flex-col w-full">
        <Input placeholder="Nome" />
        <div className="flex gap-2 w-full">
          <Dropdown options={[]} defaultValue="Doc" variant="secondary" />
          <Input placeholder="Número" />
        </div>
      </div>
    </div>
  )
}
