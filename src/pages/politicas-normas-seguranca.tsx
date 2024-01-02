import {
  BackgroundTemplate,
  ImageTypeBackground,
} from '@/components/lib/BackgroundTemplate'
import { Container } from '@/components/lib/Container'
import { TemplatePrimary } from '@/components/view/TemplatePrimary'

export default function PoliticasNormasSeguranças() {
  return (
    <TemplatePrimary>
      <BackgroundTemplate
        subtitle="Aqui você encontra todas as informações sobre as políticas, normas e segurança."
        title="Políticas, Normas e Segurança"
        isSmall
        image={ImageTypeBackground.CONTACT}
      />

      <Container className="max-lg:px-6" classNameContainer="py-10">
        <div className="flex flex-col gap-4 text-sm text-gray-700">
          <span className="font-bold text-lg">
            POLÍTICA E NORMAS DE SEGURANÇA
          </span>

          <p>
            A VAPTVOU, por meio do endereço https://vaptvou.com.br, preocupa-se
            com a segurança e a confiabilidade das informações disponibilizadas
            por seus clientes.
            <br />
            <br />
            Assim, a VAPTVOU alerta seus clientes sobre os riscos e ameaças que
            possam circular na internet como tentativas de fraudes que partem de
            terceiros mal intencionados.
          </p>

          <p className="font-bold">Alerta de e-mails falsos</p>

          <p>
            Um dos meios mais utilizados para a realização de fraudes é através
            do envio de e- mails falsos, que se apresentam como se tivessem sido
            enviados em nome da VAPTVOU. Esses e-mails mal intencionados
            pretendem colher informações confidenciais dos clientes. Perante
            este fato, a VAPTVOU adotou uma política rigorosa no envio de
            e-mails.
          </p>

          <p className="font-bold">
            Abaixo seguem algumas orientações. Fique atento.
          </p>

          <p>
            Os e-mails enviados pela VAPTVOU são padronizados, com link direto
            apenas para o SITE E PARA AS LOJAS APPLE STORE E GOOGLEPLAY QUE
            ESTÃO NOSSOS APLICATIVOS DISPONÍVEIS PARA INSTALAÇÃO. Vale lembrar
            que tais e-mails somente são enviados mediante a autorização prévia
            dos clientes. Desconsidere qualquer e-mail que possua algum tipo de
            arquivo executável, links que direcionam para download e página que
            não seja da PLATAFORMA VAPTVOU ou, ainda, que contenham formulários
            solicitando informações pessoais (dados bancários, atualização de
            cadastro e mais). Caso receba algum e-mail suspeito, por favor,
            encaminhe para a nossa equipe da VAPTVOU, através do e-mail
            contato@vaptvou.com.br, a fim de que as medidas cabíveis possam ser
            tomadas.
          </p>

          <p>
            Ressaltamos que a VAPTVOU não assume a responsabilidade pelos danos
            causados por este tipo de ataque, mas deixa explícita sua
            preocupação e atitude para informar e esclarecer seus clientes, bem
            como para banir este tipo de ação. A VAPTVOU conta com a
            conscientização de seus clientes, conforme orientação deste Alerta.
          </p>
        </div>
      </Container>
    </TemplatePrimary>
  )
}
