import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'

interface Props {
  children: React.ReactNode
  asChild?: boolean
  className?: string
}

export function DialogConditionsHalfTax(props: Props) {
  const { children, asChild } = props
  return (
    <Dialog>
      <DialogTrigger asChild={asChild} className={props.className}>
        {children}
      </DialogTrigger>

      <DialogContent className="text-sm text-gray-600 max-h-[88vh] max-lg:max-w-[95vw] lg:min-w-[900px] overflow-auto">
        <div className="flex flex-col gap-1">
          <span>MEIA ENTRADA</span>
          <span>MEIA ENTRADA ESTUDANTE</span>
        </div>

        <div className="flex flex-col gap-4">
          <span>
            Será concedido o benefício da meia tarifa a todo estudante, desde
            que esteja portando, no momento do embarque no Ônibus, a carteira de
            identificação estudantil no padrão nacional indicado pelo ITI
            (Instituto Nacional de Tecnologia da Informação) através da Portaria
            nº 01 de 17/03/2016, conforme determinado pela Lei 12.933/2013
            regulamentada pelo Decreto 8537/2015 (veja o modelo aqui) com as
            seguintes especificações:
          </span>

          <span>
            • Nome completo e data de nascimento do estudante; • Foto recente do
            estudante; • Nome da instituição de ensino na qual o estudante
            esteja matriculado; • Grau de escolaridade; • Data de validade até o
            dia 31 de março do ano subsequente ao de sua expedição; •
            Certificação digital (QR Code).
          </span>

          <span>
            No verso do cartão devem constar as seguintes informações:
          </span>

          <span>
            • Número do serviço de atendimento ao estudante da entidade
            emissora; • Marca do Certificado de Atributo conforme manual da
            marca disponível; • Texto contendo: “Documento padronizado
            nacionalmente conforme a Lei n° 12.933/2013. Válido em todo
            território nacional até 31 de março do ano seguinte”.
          </span>
        </div>

        <span className="mt-4">MEIA ENTRADA ID JOVEM</span>

        <span>
          Válido para jovens de 15 a 29 anos comprovadamente carente
          apresentando documento denominado ID Jovem, no celular para leitura do
          QR code e documento original com foto, com a validação legal. Saiba
          mais sobre ID JOVEM.
        </span>

        <span>MEIA ENTRADA PCD OU ACOMPANHANTE</span>

        <span>
          Válido para pessoas com deficiência e acompanhante, que
          necessariamente deva conduzi-lo, mediante apresentação:
        </span>

        <span>
          I - do cartão de Benefício de Prestação Continuada da Assistência
          Social da pessoa com deficiência; II - de documento emitido pelo
          Instituto Nacional do Seguro Social - INSS que ateste a aposentadoria
          de acordo com os critérios estabelecidos na Lei Complementar nº 142,
          de 8 de maio de 2013.
        </span>

        <span>
          *Os documentos apresentados nos itens I e II deverão estar
          acompanhados de documento de identificação válido em todo o território
          nacional.
        </span>

        <span>
          Atendimento Preferencial: pessoas com necessidades especiais, idosos e
          gestantes tem atendimento prioritário. Consulte um monitor.
        </span>

        <span>
          VALOR POR PESSOA. A meia entrada é válida tanto para a pessoa
          portadora de necessidades especiais como para o seu acompanhante,
          porém a compra deve ser feita individualmente.
        </span>
      </DialogContent>
    </Dialog>
  )
}
