import { links } from '@/config/links'
import Link from 'next/link'

export function ExcursionDurationInformation() {
  const titleClass = 'text-cyan-500'
  const valueClass = 'text-gray-600'

  return (
    <div className="flex gap-6 max-lg:flex-col">
      <div className="flex max-md:flex-col flex-1 gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex gap-10">
            <div className="flex flex-col">
              <span className={titleClass}>Duração</span>
              <span className={valueClass}>1 Dia</span>
            </div>

            <div className="flex flex-col">
              <span className={titleClass}>Data e horário da IDA</span>
              <span className={valueClass}>27-DEZ-2020-08h00</span>
            </div>
          </div>

          <div className="flex flex-col">
            <span className={titleClass}>Ponto de Origem</span>
            <span className={valueClass}>Lago do Pará - Campinas/SP</span>
            <span className={valueClass}>Av. Aquidaban, 211 - Centro</span>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col">
              <span className={titleClass + ' whitespace-nowrap'}>
                Idade Mínima
              </span>
              <span className={valueClass + ' whitespace-nowrap'}>
                Sem Restrição
              </span>
            </div>
            <div className="flex flex-col">
              <span className={titleClass}>Ingresso</span>
              <span className={valueClass}>Não</span>
            </div>

            <div className="flex flex-col">
              <span className={titleClass + ' whitespace-nowrap'}>
                Tipo de Veículo
              </span>
              <span className={valueClass}>Ônibus</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <span className={titleClass}>Data e horário da VOLTA</span>
            <span className={valueClass}>27-DEZ-2020 - 19h00</span>
          </div>
          <div className="flex flex-col">
            <span className={titleClass}>Ponto do Destino</span>
            <span className={valueClass}>
              Estacionamento Basilica - Aparecida/SP
            </span>
            <span className={valueClass}>
              Avenida Dr. Júlio Prestes - Ponte Alta
            </span>
          </div>

          <div className="flex flex-col">
            <span className={titleClass}>
              Qtd. mín. de passagem para a excursão acontecer
            </span>
            <span className={valueClass}>
              40{' '}
              <span className="text-primary-blue-dark">
                (Faltam 40 passagens)
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:ml-auto">
        <div className="bg-primary-blue-dark flex flex-col p-4 rounded-3xl gap-2 sm:min-w-[250px]">
          <span className="text-white font-medium text-xs">A partir de</span>

          <span className="text-3xl sm:text-4xl text-white font-bold self-center">
            R$ 30,00
          </span>

          <Link
            href={links.excursionPurchaseChoice('123')}
            className="bg-primary-pink flex flex-col items-center rounded-xl p-2"
          >
            <i className="text-xl sm:text-2xl font-light text-primary-blue-dark">
              é pra lá que eu vou
            </i>
            <i className="uppercase max-sm:text-sm text-white font-light">
              Clique aqui para reservar
            </i>
          </Link>
        </div>
      </div>
    </div>
  )
}
