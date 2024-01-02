import { DialogConditionsHalfTax } from '@/components/lib/Dialog/DialogConditionsHalfTax'
import { Dropdown } from '@/components/lib/Dropdown'
import { taxFake } from '@/mock/tax'

interface Props {
  handleSelect: React.Dispatch<React.SetStateAction<string>>
}

export function DropdownTypePassport(props: Props) {
  return (
    <div className="flex flex-col gap-2 mb-6 w-full">
      <span className="text-cyan-500 font-bold">Passagem</span>
      <Dropdown
        options={taxFake}
        defaultValue="Selecione uma opção"
        className="w-full"
        variant="secondary"
        handleClickOption={(option) => props.handleSelect(option.value)}
        chevronClassName="ml-auto sm:ml-2"
      />

      <DialogConditionsHalfTax className="-mt-2">
        <span className="text-red-500 hover:text-red-600 transition-colors text-sm underline">
          Verifique as condições. Clique aqui
        </span>
      </DialogConditionsHalfTax>

      {/* <Button className="w-fit self-end">Ok</Button> */}
    </div>
  )
}
