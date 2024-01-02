import {
  BackgroundTemplate,
  ImageTypeBackground,
} from '@/components/lib/BackgroundTemplate'
import { Button } from '@/components/lib/Button'
import { Container } from '@/components/lib/Container'
import { Dropdown } from '@/components/lib/Dropdown'
import { Input } from '@/components/lib/Input'
import { Textarea } from '@/components/lib/Textarea'
import { TemplatePrimary } from '@/components/view/TemplatePrimary'

export default function Contact() {
  return (
    <TemplatePrimary>
      <BackgroundTemplate
        title="CONTATO"
        subtitle="ENTRE EM CONTATO, TEREMOS O PRAZER EM TE RESPONDER"
        isSmall
        image={ImageTypeBackground.CONTACT}
      />

      <div className="py-10 pb-16 w-full items-center flex flex-col">
        <Container className="flex flex-col gap-2 mb-6 px-6">
          <span className="font-bold text-lg text-gray-600">Contato</span>
          <span className="text-sm text-gray-600">
            Selecione o assunto abaixo para enviar sua mensagem ao setor
            responsável. Caso não tenha a opção que deseja e quer nos enviar uma
            mensagem de dúvida, sugestão, elogio ou reclamação, clique em
            “Outros Assuntos”, preencha o formulário e nos envie que em breve
            entramos em contato. Se preferir, poderá entrar em contato através
            de nosso Chat online ou pelo WhatsApp 19 X XXXX-XXXX.
          </span>
        </Container>

        <Container className="flex flex-col max-w-xl px-6">
          <Dropdown
            variant="secondary"
            defaultValue="Selecione o assunto"
            options={[]}
          />

          <div className="flex gap-2 flex-col mt-4">
            <div className="separator">
              <Input placeholder="Nome*" />
              <Input placeholder="Sobrenome*" />
            </div>
            <div className="separator">
              <Input placeholder="E-mail*" type="email" />
              <Input placeholder="Celular*" />
            </div>

            <div>
              <Textarea placeholder="Mensagem:" />
            </div>

            <div className="flex gap-2 max-sm:items-start">
              <input type="checkbox" />
              <span className="text-gray-500 text-xs sm:text-sm">
                Quero receber ofertas exclusivas e novidades por e-mail
              </span>
            </div>

            <div className="flex justify-end mt-4">
              <Button className="w-1/2">Enviar</Button>
            </div>
          </div>
        </Container>
      </div>
    </TemplatePrimary>
  )
}
