import { Newsletter } from '@/components/core/Newsletter'
import { Button } from '@/components/lib/Button'
import { CardImage } from '@/components/lib/CardImage'
import { CarouselDestiny } from '@/components/lib/Carousel/CarouselDestiny'
import { CarouselHomeEmphasis } from '@/components/lib/Carousel/CarouselHomeEmphasis'
import { CarouselHomeOffers } from '@/components/lib/Carousel/CarouselHomeOffers'
import { Container } from '@/components/lib/Container'
import { Input } from '@/components/lib/Input'
import { SessionCardEmphasis } from '@/components/lib/SessionCardEmphasis'
import { TemplatePrimary } from '@/components/view/TemplatePrimary'
import { links } from '@/config/links'
import Link from 'next/link'

export default function Home() {
  return (
    <TemplatePrimary>
      <CarouselHomeEmphasis />

      <Container className="max-w-7xl max-sm:bg-primary-blue-super-light">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-6 gap-2 sm:gap-6 my-4">
          <Input placeholder="Digite para onde você quer ir" />
          <Input placeholder="Digite de onde você quer sair" />
          <Input placeholder="Selecione o mês que voce quer" />
          <Button>Procurar</Button>
        </div>
      </Container>

      <Container className="max-w-7xl px-6 mt-2 mb-6 bg-white pt-6 rounded-t-3xl">
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold text-xl text-gray-700">
            Ofertas Especiais
          </span>

          <Link
            href={links.allExcursions}
            className="text-primary-blue-dark text-xs underline hover:opacity-70"
          >
            Ver todas as excursões
          </Link>
        </div>

        <CarouselHomeOffers />
      </Container>

      <SessionCardEmphasis title="Excursões mais Compradas" />

      <div className="mt-6">
        <Container className="max-w-7xl max-lg:px-6">
          <span className="font-bold text-xl text-gray-700 mb-4">
            Excursões e Destinos
          </span>
        </Container>
        <div className="max-sm:hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          <div className="flex justify-center">
            <CardImage />
          </div>
          <div className="flex justify-center">
            <CardImage />
          </div>
          <div className="flex justify-center">
            <CardImage />
          </div>
          <div className="flex justify-center">
            <CardImage />
          </div>
          <div className="flex justify-center">
            <CardImage />
          </div>
          <div className="flex justify-center">
            <CardImage />
          </div>
          <div className="flex justify-center">
            <CardImage />
          </div>
          <div className="flex justify-center">
            <CardImage />
          </div>
          <div className="flex justify-center">
            <CardImage />
          </div>
          <div className="flex justify-center">
            <CardImage />
          </div>{' '}
          <div className="flex justify-center">
            <CardImage />
          </div>{' '}
          <div className="flex justify-center">
            <CardImage />
          </div>{' '}
          <div className="flex justify-center">
            <CardImage />
          </div>
        </div>

        <div className="sm:hidden">
          <CarouselDestiny />
        </div>
      </div>

      <Newsletter />

      <Container className="max-w-7xl pb-20 max-2xl:px-6">
        <span className="font-bold text-gray-700">
          Excursões para todo o Brasil para quem quer se divertir e para quem
          quer uma grana extra.
        </span>

        <span className="text-sm mt-4 text-gray-700">
          A partir de agora, organizar e participar de uma excursão vai ser uma
          experiência única, simples e tranquila. Você está na plataforma
          Vaptvou, o ponto de conexão entre excursionistas, empresas de
          transporte, de eventos e shows com o consumidor final. Tudo de uma
          forma inteligente e rápida para que a excursão seja perfeita.
          <br />
          <br />
          Aqui você encontra excursões turísticas pra toda a família, eventos e
          shows com saídas próximas de sua casa e se quiser, pode fazer do seu
          jeito, reunindo o pessoal do trabalho para participar de uma convenção
          ou seminário, um grupo de pessoas para fazer a excursão dos sonhos, ou
          se você é um(a) excursionista pode cadastrar suas excursões na
          plataforma, que divulgamos e vendemos pra você. É uma forma de
          aumentar seus ganhos com controle e segurança.
          <br />
          <br />
          Ainda tem mais… se você está precisando de uma renda extra, então aqui
          é seu lugar. Você pode se divertir com o passeio e ainda ganhar uma
          renda extra. Vaptvou permite que você se torne um(a) excursionista,
          monte sua excursão para onde quiser, e defina seu lucro. A Vaptvou
          também oferece descontos e formas de pagamentos especiais para
          proporcionar um divertimento que não pesa no bolso. Experimente.
          <br />
          <br />
          Seja bem-vindo a Vaptvou. Este é o ponto de partida para a excursão
          dos seus sonhos.
        </span>
      </Container>
    </TemplatePrimary>
  )
}
