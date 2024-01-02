import Link from 'next/link'

export function ExcursionRoadmapInformation() {
  const titleClass = 'text-gray-700 font-bold'
  const valueClass = 'text-gray-600'
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span className={titleClass}>Roteiro da Excursão</span>
          <span className={valueClass}>
            Campinas a Aparecida do Norte com 1 parada de 30 minutos em
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className={titleClass}>Outros POntos de Embarque</span>
          <span className={valueClass}>
            Terminal Ouro Verde - R.Armado Frederico Renganeschi, 21 - Jardim
            Cristina, Campinas/SP / Posto Jardim do Revo - Av.
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className={titleClass}>Oque está incluso</span>
          <span className={valueClass}>
            Oferecemos água, refrigerante, bolacha e lanche de mortadela no
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span className={titleClass}>Sobre o Transporte</span>
          <span className={valueClass}>
            Ônibus Princesa {"D'oest"} padrão executivo 46 lugares com ar,
            toalete, frigobar, wi-fi e tomadas USB para carregar celulares
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className={titleClass}>Política de Cancelamento</span>
          <span className={valueClass}>
            Para receber um reembolso integral, cancele com até 5 dias de
            antecedência da excursão
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className={titleClass}>Outras Observações</span>

          <div className="flex flex-col">
            <span className={valueClass}>
              Meia tarifa. Para utilizar a meia tarifa será necessário
              comprovação do direito da meia tarifa.
            </span>
            {/** TODO */}
            <span className={valueClass}>
              ATENÇÃO: Verifique as condição de meia entrada{' '}
              <Link href="">clicando aqui</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
