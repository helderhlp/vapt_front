import {
  BackgroundTemplate,
  ImageTypeBackground,
} from '@/components/lib/BackgroundTemplate'
import { Button } from '@/components/lib/Button'
import { Container } from '@/components/lib/Container'
import { Input } from '@/components/lib/Input'
import { TemplatePrimary } from '@/components/view/TemplatePrimary'
import { links } from '@/config/links'
import Link from 'next/link'

export default function Login() {
  return (
    <TemplatePrimary>
      <BackgroundTemplate
        title="Minha conta"
        subtitle="Encontre excursões maravilhosas <br /> reúna sua família ou amigos e vá curtir."
        isSmall
        image={ImageTypeBackground.CONTACT}
      />

      <Container
        className="max-w-3xl"
        classNameContainer="flex py-10 max-lg:px-6"
      >
        <div className="flex flex-col gap-4">
          <span className="font-bold text-gray-600">Login</span>

          <div className="separator">
            <Input placeholder="Nome*" />
            <Input placeholder="Senha*" type="password" />
          </div>

          <div className="flex justify-end">
            <Button className="w-1/2">Entrar</Button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-bold text-gray-600">Crie uma conta</span>

          <div className="separator">
            <Input placeholder="Nome*" />
            <Input placeholder="Sobrenome*" />
          </div>

          <div className="separator">
            <Input placeholder="E-mail*" type="email" />
            <Input placeholder="Confirme o E-mail*" type="email" />
          </div>

          <div className="separator">
            <Input placeholder="Senha*" type="password" />
            <Input placeholder="Confirma a Senha*" type="password" />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <span className="text-gray-500 text-sm">
                Quero receber ofertas exclusivas e novidades por e-mail
              </span>
            </div>

            <div className="flex justify-end">
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
          </div>

          <div className="flex justify-end">
            <Button className="w-1/2">Cadastrar</Button>
          </div>
        </div>
      </Container>
    </TemplatePrimary>
  )
}
