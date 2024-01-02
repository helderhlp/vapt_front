import { Container } from '@/components/lib/Container'
import { TemplatePrimary } from '../TemplatePrimary'
import { AboutHeader } from './AboutHeader'
import Image from 'next/image'
import { Newsletter } from '@/components/core/Newsletter'

export function AboutView() {
  return (
    <TemplatePrimary className="bg-primary-blue-super-light">
      <AboutHeader />

      <Container className="max-w-7xl bg-primary-blue-super-light rounded-t-3xl p-16 sm:p-24 px-6 sm:px-34 flex flex-col gap-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Image
            src="/assets/about/sobre_1.png"
            width={500}
            height={400}
            alt="men in whiteboard"
          />

          <div className="flex flex-col gap-4">
            <span className="font-bold text-2xl text-gray-600">Vapvou</span>
            <span className="text-gray-600">
              A partir de agora, organizar e participar de uma excursão vai ser
              uma experiência única, simples e tranquila para você. Você está na
              plataforma Vaptvou, o ponto de conexão entre agentes de viagens
              (excursionistas), empresas de transporte, eventos e shows com o
              consumidor final. Tudo de uma forma inteligente e rápida para que
              a viagem seja perfeita.
            </span>

            <span className="text-gray-600 font-bold">
              Seja bem-vindo a Vaptvou. Este é o ponto de partida para a
              excursão dos seus sonhos
            </span>
          </div>
        </div>

        <div className="flex flex-col-reverse lg:grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-4">
            <span className="font-bold text-2xl text-gray-600">
              Quer uma experiência inesquecível? Vaptvou é para você.
            </span>
            <span className="text-gray-600">
              Que tal um passeio turístico em família? Ou fortalecer sua fé em
              um destino religioso? Ou quem sabe reunir o pessoal do trabalho
              para participar de uma convenção ou seminário? Vaptvou permite
              tudo isso e muito mais.
            </span>
            <span className="text-gray-600">
              Você escolhe entre os diversos destinos cadastrados, vê todas as
              informações e fotos do local com dicas incríveis, faz a reserva e
              pronto. É só curtir a excursão. E graças ao sistema inteligente de
              busca, você poderá optar por excursões que tem saídas próximas de
              sua casa. É muita conveniência.
            </span>

            <span className="text-gray-700">
              A Vaptvou também oferece descontos e formas de pagamentos
              especiais para proporcionar um divertimento que não pesa no seu
              bolso. Experimente.
            </span>
          </div>

          <Image
            src="/assets/about/sobre_2.png"
            width={500}
            height={400}
            alt="men in whiteboard"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Image
            src="/assets/about/sobre_3.png"
            width={500}
            height={400}
            alt="men in whiteboard"
            className="self-end"
          />
          <div className="flex flex-col gap-4">
            <span className="font-bold text-2xl text-gray-600">
              Quer conectar sua empresa com seu público? Vaptvou vai com você.
            </span>
            <span className="text-gray-600">
              Tem um pacote de viagem montado, com roteiro e tudo mais, e agora
              precisa encontrar seu público? Pode vir que sua vaga está
              reservada. Sua empresa está organizando um evento e quer divulgar
              e vender o ingresso e transporte? Vem que o sucesso é garantido.
            </span>
            <span className="text-gray-600">
              Vaptvou oferece um sistema inteligente que ajuda excursionistas a
              venderem suas excursões e empresas de eventos e shows a oferecerem
              transporte seguro e confortável para seus espectadores.
            </span>

            <span className="text-gray-600">
              É só se cadastrar, escolher um destino já existente - ou sugerir
              um novo - e selecionar as empresas de transportes de nosso
              catálogo - ou qualquer uma de sua confiança. Vaptvou analisa,
              aprova e completa com informações importantes para você vender
              para o consumidor final.
            </span>

            <span className="text-gray-600">
              A plataforma é otimizada para buscadores de sites como o google e
              divulgada nas redes sociais para que tenha um grande número de
              usuários interessados em comprar os produtos oferecidos.
            </span>
          </div>
        </div>

        <div className="flex flex-col-reverse lg:grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-4">
            <span className="font-bold text-2xl text-gray-600">
              Tem uma empresa de transportes? Pode desembarcar em Vaptvou.{' '}
            </span>
            <span className="text-gray-600">
              Você tem a frota ou o transporte e agora precisa encontrar as
              pessoas para fazer a viagem? Vaptvou é o destino certo.
            </span>
            <span className="text-gray-600">
              Aqui, as empresas de transportes poderão cadastrar seus veículos e
              motoristas e deixá-los disponíveis para fazer as viagens que os
              excursionistas e empresas de eventos e shows necessitam. É mais um
              eficiente canal de venda que oferece muitas vantagens. E o melhor:
              totalmente gratuito.
            </span>
          </div>

          <Image
            src="/assets/about/sobre_4.png"
            width={500}
            height={400}
            alt="men in whiteboard"
            className="self-end"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Image
            src="/assets/about/sobre_5.png"
            width={400}
            height={300}
            alt="men in whiteboard"
            className="self-end"
          />

          <div className="flex flex-col gap-4">
            <span className="font-bold text-2xl text-gray-600">
              E que tal uma graninha extra? É do Vaptvou direto pro seu bolso.
            </span>
            <span className="text-gray-600">
              Seu sonho é incrementar sua renda com um trabalho simples e
              divertido? Então seu lugar é aqui. Você pode um(a) excursionista,
              se divertir com o passeio e ainda ganhar uma renda extra. Vaptvou
              permite que você monte a excursão do seu jeito, para onde quiser,
              estipulando o valor de sua comissão cadastrar na plataforma e
              pronto, o Vaptvou divulga e vende pra você. É um dinheirinho a
              mais em boa hora.
            </span>
          </div>
        </div>

        <div className="flex flex-col-reverse lg:grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-4">
            <span className="font-bold text-2xl text-gray-600">
              Quer mais facilidade? Vaptvou na palma da sua mão.{' '}
            </span>
            <span className="text-gray-600">
              Baixe agora o aplicativo mobile Vaptvou no Google Play ou na App
              Store e tenha toda a comodidade e as funcionalidades do site na
              palma da sua mão. Você pode cadastrar seu pacote de viagens,
              fechar sua excursão, editar as informações, tirar dúvidas e
              receber os alertas de novidades onde você estiver.
            </span>

            <span className="text-gray-600">Exclusivo para Android e iOS</span>
          </div>

          <Image
            src="/assets/about/sobre_6.png"
            width={400}
            height={300}
            alt="men in whiteboard"
            className="self-end"
          />
        </div>
      </Container>

      <Newsletter />
    </TemplatePrimary>
  )
}
