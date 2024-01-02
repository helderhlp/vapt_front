import { Button } from '@/components/lib/Button'
import { Stars } from '@/components/lib/Stars'
import { Textarea } from '@/components/lib/Textarea'
import { Share2 } from 'lucide-react'
import Image from 'next/image'

export function DestinyFeedback() {
  return (
    <div className="pt-2 pb-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      <div className="flex flex-col">
        <span className="text-lg font-bold text-gray-700">
          Avaliação e comentários
        </span>

        <div className="flex flex-col gap-2 flex-1 mt-4">
          <FeedbackCard />
          <FeedbackCard />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-gray-600 sm:text-lg font-bold">
          Fazer uma avaliação
        </span>
        <div className="my-4">
          <Stars defaultValue={0} size={32} />
        </div>

        <Textarea
          className="min-h-[120px] rounded-3xl resize-none"
          placeholder="Conte às pessoas suas experiências com esse destino. Descreva o lugar ou atividades e faça recomendações para os turistas."
        />
        <span className="text-xs text-gray-500 mt-1 mb-2">
          *Para fazer uma avaliação você precisa ser cadastrado na plataforma e
          estar logado(a)*
        </span>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            name="termos"
            id="termos"
            className="cursor-pointer"
          />

          <span className="text-xs text-gray-600">
            Certifico que essa avaliação é baseada em minha própria experiência
            e é minha opinião sincera sobre o destino, e não sobre a excursão no
            geral. Não possuo nenhuma relação pessoal ou comercial com as
            empresas, não tendo recebido incentivo ou pagamento algum da
            empresas para escrevê-la. Compreendo que o Vaptvou possui tolerância
            zero em relação a avaliações falsas
          </span>
        </div>

        <Button className="w-fit px-4 mt-4">Enviar sua avaliação</Button>
      </div>
    </div>
  )
}

function FeedbackCard() {
  return (
    <div className="flex gap-2 sm:gap-4 items-center flex-1 border-b-2 pb-2">
      <div className="flex flex-col items-center p-2 sm:p-5">
        <Image
          width={46}
          height={46}
          alt="image profile"
          src="https://github.com/higoraln.png"
          className="rounded-full"
        />

        <span className="text-gray-700 font-bold">Higor</span>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-center ">
          <div className="flex gap-2 sm:gap-10 items-center">
            <span className="text-xs text-gray-700 whitespace-nowrap">
              Data: 20/05/2020
            </span>

            <Stars disabled defaultValue={4} />
          </div>

          <button>
            <Share2 fill="" size={20} className="text-primary-blue-dark" />
          </button>
        </div>

        <div className="mt-1">
          <span className="text-xs md:text-sm text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the {`industry's`} standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type
          </span>
        </div>
      </div>
    </div>
  )
}
