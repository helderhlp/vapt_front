import {
  BackgroundTemplate,
  ImageTypeBackground,
} from '@/components/lib/BackgroundTemplate'
import { links } from '@/config/links'
import Link from 'next/link'

export function DestinyHeader() {
  return (
    <BackgroundTemplate
      image={ImageTypeBackground.APARECIDA_DO_NORTE}
      subtitle="Santuário Nacional <br /> Nossa Senhora Aparecida"
      title="Aparecida do Norte"
      hasMarginBottom
      className="-mb-32"
    >
      <div className="flex flex-col sm:ml-auto">
        <div className="bg-primary-blue-dark flex flex-col p-4 rounded-3xl gap-2 sm:min-w-[400px]">
          <span className="text-white font-medium text-xs">A partir de</span>

          <span className="text-3xl sm:text-4xl text-white font-bold self-center">
            R$ 150,00
          </span>

          <Link
            href={links.destinosExcursoes('123')}
            className="bg-primary-pink flex flex-col items-center rounded-xl p-2"
          >
            <i className="text-xl sm:text-2xl font-light text-primary-blue-dark">
              é pra lá que eu vou
            </i>
            <i className="uppercase max-sm:text-sm text-white font-light">
              Clique aqui para ver as opções
            </i>
          </Link>

          <i className="text-sm text-white self-center">
            Reservas até o dia 05 de Janeiro
          </i>
        </div>
      </div>
    </BackgroundTemplate>
  )
}
