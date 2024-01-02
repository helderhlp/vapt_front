import { TemplatePrimary } from '../TemplatePrimary'
import { Container } from '@/components/lib/Container'
import { Dropdown } from '@/components/lib/Dropdown'
import { Input } from '@/components/lib/Input'
import { Button } from '@/components/lib/Button'
import {
  BackgroundTemplate,
  ImageTypeBackground,
} from '@/components/lib/BackgroundTemplate'

export function CompleteRegisterView() {
  return (
    <TemplatePrimary>
      <BackgroundTemplate
        title="Minha conta"
        subtitle="Encontre excursões maravilhosas <br /> reúna sua família ou amigos e vá curtir."
        image={ImageTypeBackground.CONTACT}
        isSmall
      />

      <Container className="py-10 pb-20 max-w-xl flex flex-col gap-4 max-lg:px-6">
        <div className="flex flex-col">
          <span className="font-bold text-lg mb-4 text-gray-600">
            Complete seu Perfil
          </span>

          <div className="p-5 rounded-full border-2 border-gray-400 flex w-20 h-20 items-center justify-center">
            <label
              htmlFor="anexo_profile"
              className="text-xs text-center italic text-gray-600"
            >
              Inserir <br />
              Foto
            </label>
          </div>
        </div>

        <div className="flex flex-col">
          <span className="font-bold text-lg mb-4 text-gray-600">
            Dados Pessoais
          </span>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Dropdown options={[]} defaultValue="Doc" variant="secondary" />
              <Input placeholder="Número do Documento" />
            </div>
            <div className="flex gap-2 max-sm:flex-col">
              <div className="flex gap-2">
                <Input placeholder="Data Nasc." type="date" />
                <Dropdown
                  options={[]}
                  defaultValue="Sexo"
                  variant="secondary"
                />
              </div>
              <div className="flex gap-2">
                <Input placeholder="Celular" />
                <Input placeholder="Telefone" />
              </div>
            </div>
            <div className="flex gap-2">
              <Input type="password" placeholder="Senha" />
              <Input type="password" placeholder="Confirmar Senha" />
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <span className="font-bold text-lg mb-4 text-gray-600">Endereço</span>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Input placeholder="CEP" />
              <Input placeholder="Logradouro" />
              <Input placeholder="Complemento" />
            </div>

            <div className="flex gap-2">
              <Input placeholder="Bairro" />
              <Input placeholder="Cidade" />
            </div>

            <div className="flex gap-2">
              <Dropdown
                options={[]}
                defaultValue="Estado"
                variant="secondary"
              />
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-10 sm:mt-4">
            <Button className="w-fit px-10 bg-primary-gray hover:bg-primary-gray hover:opacity-80">
              Pular
            </Button>

            <Button className="w-fit px-10">Salvar</Button>
          </div>
        </div>
      </Container>
    </TemplatePrimary>
  )
}
