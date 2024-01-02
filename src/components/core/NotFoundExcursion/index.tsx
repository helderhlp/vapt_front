import { Button } from '@/components/lib/Button'
import { Input } from '@/components/lib/Input'

export function NotFoundExcursion() {
  return (
    <div className="flex flex-col py-10 max-2xl:px-6">
      <div className="flex flex-col">
        <span className="font-bold text-xl text-gray-700 mb-3">
          NÃO ACHOU A EXCURSÃO QUE VOCÊ PROCURA? FALE CONOSCO.
        </span>
        <span className="text-sm text-gray-600">
          Preencha o formulário abaixo e nos envie seu interesse ou se cadastre
          como excursionista para criar a excursão que você deseja e ainda
          ganhar uma renda extra. Saiba mais.
        </span>
      </div>

      <div className="w-full flex justify-center mt-10">
        <form className="max-w-lg w-full flex flex-col gap-2">
          <span className="flex gap-2">
            <Input placeholder="Cidade*" />
            <Input placeholder="Destino*" />
          </span>
          <span className="flex gap-2">
            <Input placeholder="Nome" />
            <Input placeholder="Sobrenome" />
          </span>

          <span className="flex gap-2">
            <Input placeholder="E-mail*" type="email" />
            <Input placeholder="Celular*" />
          </span>
          <textarea
            className="border border-gray-300 rounded-md p-2 text-sm"
            placeholder="Mensagem:"
          />

          <Button className="max-w-[180px] self-end">Enviar</Button>
        </form>
      </div>
    </div>
  )
}
