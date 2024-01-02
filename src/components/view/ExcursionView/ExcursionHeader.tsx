import {
  BackgroundTemplate,
  ImageTypeBackground,
} from '@/components/lib/BackgroundTemplate'

export function ExcursionHeader() {
  return (
    <BackgroundTemplate
      image={ImageTypeBackground.APARECIDA_DO_NORTE}
      subtitle="Santuário Nacional <br /> Nossa Senhora Aparecida"
      title="Aparecida do Norte"
      hasMarginBottom
    >
      <div className="flex flex-col items-start sm:items-end sm:ml-auto">
        <span className="text-3xl font-bold text-white">25/10/2021</span>
        <span className="text-2xl text-white">Saídas: Largo do Rosário</span>
        <span className="text-2xl text-white">Terminal Ouro Verde</span>
      </div>
    </BackgroundTemplate>
  )
}
