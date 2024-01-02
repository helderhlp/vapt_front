import {
  BackgroundTemplate,
  ImageTypeBackground,
} from '@/components/lib/BackgroundTemplate'
import { Button } from '@/components/lib/Button'
import { Container } from '@/components/lib/Container'
import { Dropdown } from '@/components/lib/Dropdown'
import { Input } from '@/components/lib/Input'
import { TemplatePrimary } from '@/components/view/TemplatePrimary'
import { PixOptions, SexOptions } from '@/config/constants'
import { links } from '@/config/links'
import Link from 'next/link'

export default function RegisterExcursion() {
  return (
    <TemplatePrimary>
      <BackgroundTemplate
        subtitle="CONTROLE E FATURE MAIS COM AS SUAS EXCURSÕES OU <br /> SE TORNE UM(A) EXCURSIONISTA PARA TER UMA RENDA EXTRA."
        title="CADASTRO DE EXCURSIONISTA"
        isSmall
        image={ImageTypeBackground.EXCURSIONIST_HEADER}
      />

      <Container
        className="max-w-3xl flex flex-col gap-4 max-lg:px-6"
        classNameContainer="py-10"
      >
        <div className="flex flex-col gap-2">
          <span className="font-bold text-gray-600">Dados de Login</span>

          <div className="flex gap-2">
            <Input placeholder="Nome*" />
            <Input placeholder="Sobrenome*" />
          </div>
          <div className="flex gap-2">
            <Input placeholder="E-mail*" type="email" />
            <Input placeholder="Confirme o E-mail*" type="email" />
          </div>
          <div className="flex gap-2">
            <Input placeholder="Senha*" type="password" />
            <Input placeholder="Confirme a Senha*" type="password" />
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-2">
          <span className="font-bold text-gray-600 flex gap-2 mb-2">
            <label className="flex gap-2">
              <input type="radio" name="type_person" />
              <span>Dados Pessoais</span>
            </label>

            <label className="flex gap-2">
              <input type="radio" name="type_person" />
              <span>Pessoa Jurídica</span>
            </label>
          </span>

          <div className="separator">
            <Input placeholder="CPF/CNPJ*" />
            <div className="flex gap-2">
              <input
                type="date"
                className="border border-gray-300 px-4 py-2 rounded-lg text-sm max-sm:flex-1"
              />

              <Dropdown
                defaultValue="Sexo"
                options={SexOptions}
                variant="secondary"
                className="min-w-[120px]"
                chevronClassName="ml-auto"
              />
            </div>
          </div>

          <div className="separator">
            <Input placeholder="Nome Fantasia*" />
            <Input placeholder="Razão Social*" />
          </div>

          <div className="separator">
            <Input placeholder="Inscrição estadual*" />
            <Input placeholder="Inscrição municipal*" />
          </div>

          <div className="separator">
            <Input placeholder="Celular*" />
            <Input placeholder="Telefone" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-bold text-gray-600">Endereço</span>

          <div className="grid grid-cols-[0.5fr_1fr] gap-2">
            <Input placeholder="CEP*" />
            <Input placeholder="Logradouro*" />
          </div>

          <div className="flex flex-col sm:grid grid-cols-[1fr_1fr_1.3fr] gap-2">
            <Input placeholder="Número*" />
            <Input placeholder="Complemento" />
            <Input placeholder="Bairro*" />
          </div>

          <div className="separator">
            <Input placeholder="Cidade*" />
            <Input placeholder="Estado*" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-bold text-gray-600">Dados Bancários</span>

          <div className="grid grid-cols-[0.5fr_1fr] gap-2">
            <Input placeholder="Banco*" />
            <Input placeholder="Tipo de conta*" />
          </div>

          <div className="flex flex-col sm:grid grid-cols-[1fr_1fr_1.3fr] gap-2">
            <Input placeholder="Agencia*" />
            <Input placeholder="Conta*" />
            <Input placeholder="Digito*" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-bold text-gray-600">Pix</span>

          <div className="flex gap-2">
            <Dropdown
              defaultValue="Tipo"
              options={PixOptions}
              variant="secondary"
            />
            <Input placeholder="Chave*" />
          </div>

          <div className="flex gap-2 max-sm:items-start">
            <input type="checkbox" />
            <span className="text-gray-500 text-sm">
              Quero receber ofertas exclusivas e novidades por e-mail
            </span>
          </div>

          <div>
            <span className="text-sm text-gray-700">
              Clicando em {'"Cadastrar"'} você aceita nossos{' '}
              <Link
                href={links.termsAndConditions}
                className="text-blue-800 underline"
              >
                termos de uso
              </Link>{' '}
              e{' '}
              <Link
                href={links.policyPrivacy}
                className="text-blue-800 underline"
              >
                política de privacidade
              </Link>
            </span>
          </div>

          <div className="flex justify-end">
            <Button className="w-fit px-6">Cadastrar</Button>
          </div>
        </div>
      </Container>
    </TemplatePrimary>
  )
}
