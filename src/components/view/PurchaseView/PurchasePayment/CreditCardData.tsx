import { Dropdown } from '@/components/lib/Dropdown'
import { Input } from '@/components/lib/Input'
import { links } from '@/config/links'
import Link from 'next/link'

export function CreditCardData() {
  return (
    <div className="flex flex-col gap-4 sm:w-[600px]">
      <span>Dados do Cartão</span>

      <div className="flex flex-col gap-2">
        <Input placeholder="Número do Cartão" />
        <Input placeholder="Nome do Titular" />

        <div className="flex gap-2">
          <Input placeholder="Validade" />
          <Input placeholder="CVV" />
        </div>
        <Input placeholder="CPF" />

        <Dropdown
          options={[]}
          defaultValue="Quantidade de Parcelas"
          variant="secondary"
          className="w-full"
          chevronClassName="ml-auto"
        />
      </div>

      <div className="flex">
        <span className="text-sm text-gray-600 max-w-[400px]">
          Clicando em {`"Comprar"`} Você aceita nossos{' '}
          <Link className="underline" href={links.termsAndConditions}>
            termos de uso
          </Link>{' '}
          e{' '}
          <Link className="underline" href={links.policyPrivacy}>
            Política de privacidade
          </Link>
        </span>
      </div>

      <div>
        <Link
          href={links.excursionPurchaseConfirmation('123')}
          className="bg-primary-pink flex flex-col p-2 rounded-2xl px-6 items-center"
        >
          <span className="text-primary-blue-dark text-2xl font-light">
            é pra lá que eu vou
          </span>
          <span className="text-white uppercase text-sm">
            Clique aqui para pagar
          </span>
        </Link>
      </div>
    </div>
  )
}
