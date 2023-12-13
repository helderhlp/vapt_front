<template>
  <div>
    <div class="about">
      <div class="about-header">
        <div class="about-header-container">
          <img class="about-header-container-logo" src="@/assets/images/logo_secundario.png" />
        </div>
      </div>
      <div class="about-block"></div>
      <div class="about-content">
        <div class="about-content-item d-flex justify-content-between align-items-center gap-3">
          <img src="@/assets/images/sobre_1.png" />
          <div>
            <h2>Vaptvou</h2>
            <p>
              A partir de agora, organizar e participar de uma excursão vai ser uma experiência
              única, simples e tranquila para você. Você está na plataforma Vaptvou, o ponto de
              conexão entre agentes de viagens (excursionistas), empresas de transporte, eventos e
              shows com o consumidor final. Tudo de uma forma inteligente e rápida para que a viagem
              seja perfeita.
            </p>
            <p>
              <strong
                >Seja bem-vindo a Vaptvou. Este é o ponto de partida para a excursão dos seus
                sonhos</strong
              >
            </p>
          </div>
        </div>
        <div class="about-content-item d-flex justify-content-between align-items-center gap-3">
          <div>
            <h2>Quer uma experiência inesquecível? Vaptvou é para você.</h2>
            <p>
              Que tal um passeio turístico em família? Ou fortalecer sua fé em um destino religioso?
              Ou quem sabe reunir o pessoal do trabalho para participar de uma convenção ou
              seminário? Vaptvou permite tudo isso e muito mais.
            </p>
            <p>
              Você escolhe entre os diversos destinos cadastrados, vê todas as informações e fotos
              do local com dicas incríveis, faz a reserva e pronto. É só curtir a excursão. E graças
              ao sistema inteligente de busca, você poderá optar por excursões que tem saídas
              próximas de sua casa. É muita conveniência.
            </p>
            <p>
              A Vaptvou também oferece descontos e formas de pagamentos especiais para proporcionar
              um divertimento que não pesa no seu bolso. Experimente.
            </p>
          </div>
          <img src="@/assets/images/sobre_2.png" />
        </div>
        <div class="about-content-item d-flex justify-content-between align-items-center gap-3">
          <img src="@/assets/images/sobre_3.png" />
          <div>
            <h2>Quer conectar sua empresa com seu público? Vaptvou vai com você.</h2>
            <p>
              Tem um pacote de viagem montado, com roteiro e tudo mais, e agora precisa encontrar
              seu público? Pode vir que sua vaga está reservada. Sua empresa está organizando um
              evento e quer divulgar e vender o ingresso e transporte? Vem que o sucesso é
              garantido.
            </p>
            <p>
              Vaptvou oferece um sistema inteligente que ajuda excursionistas a venderem suas
              excursões e empresas de eventos e shows a oferecerem transporte seguro e confortável
              para seus espectadores.
            </p>
            <p>
              É só se cadastrar, escolher um destino já existente - ou sugerir um novo - e
              selecionar as empresas de transportes de nosso catálogo - ou qualquer uma de sua
              confiança. Vaptvou analisa, aprova e completa com informações importantes para você
              vender para o consumidor final.
            </p>
            <p>
              A plataforma é otimizada para buscadores de sites como o google e divulgada nas redes
              sociais para que tenha um grande número de usuários interessados em comprar os
              produtos oferecidos.
            </p>
          </div>
        </div>
        <div class="about-content-item d-flex justify-content-between align-items-center gap-3">
          <div>
            <h2>Tem uma empresa de transportes? Pode desembarcar em Vaptvou.</h2>
            <p>
              Você tem a frota ou o transporte e agora precisa encontrar as pessoas para fazer a
              viagem? Vaptvou é o destino certo.
            </p>
            <p>
              Aqui, as empresas de transportes poderão cadastrar seus veículos e motoristas e
              deixá-los disponíveis para fazer as viagens que os excursionistas e empresas de
              eventos e shows necessitam. É mais um eficiente canal de venda que oferece muitas
              vantagens. E o melhor: totalmente gratuito.
            </p>
          </div>
          <img src="@/assets/images/sobre_4.png" />
        </div>
        <div class="about-content-item d-flex justify-content-between align-items-center gap-3">
          <img src="@/assets/images/sobre_5.png" />
          <div>
            <h2>E que tal uma graninha extra? É do Vaptvou direto pro seu bolso.</h2>
            <p>
              Seu sonho é incrementar sua renda com um trabalho simples e divertido? Então seu lugar
              é aqui. Você pode um(a) excursionista, se divertir com o passeio e ainda ganhar uma
              renda extra. Vaptvou permite que você monte a excursão do seu jeito, para onde quiser,
              estipulando o valor de sua comissão cadastrar na plataforma e pronto, o Vaptvou
              divulga e vende pra você. É um dinheirinho a mais em boa hora.
            </p>
          </div>
        </div>
        <div class="about-content-item d-flex justify-content-between align-items-center gap-3">
          <div>
            <h2>Quer mais facilidade? Vaptvou na palma da sua mão.</h2>
            <p>
              Baixe agora o aplicativo mobile Vaptvou no Google Play ou na App Store e tenha toda a
              comodidade e as funcionalidades do site na palma da sua mão. Você pode cadastrar seu
              pacote de viagens, fechar sua excursão, editar as informações, tirar dúvidas e receber
              os alertas de novidades onde você estiver.
            </p>
            <p>Exclusivo para Android e iOS</p>
          </div>
          <img src="@/assets/images/sobre_6.png" />
        </div>
      </div>
    </div>
    <promotions-register-form />
  </div>
</template>

<script setup>
import PromotionsRegisterForm from '@/components/PromotionsRegisterForm.vue'
</script>

<style lang="scss" scoped>
.about {
  margin-top: 2rem;
  background-color: #d9ecec;

  &-header {
    background-image: url('@/assets/images/sobre_header.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    &-container {
      max-width: 100rem;
      margin: auto;

      &-logo {
        width: 22rem;
        height: 10rem;
        padding: 9rem 0 18rem 0;
      }
    }
  }

  &-content {
    max-width: 100rem;
    margin: auto;
    padding: 7rem 15rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    h2 {
      color: $body-color;
      margin-bottom: 2rem;
      font-weight: 600;
    }

    p {
      font-size: 1.8rem;
      margin-bottom: 2rem;

      strong {
        font-weight: 600;
      }
    }
  }

  &-block {
    background-color: #d9ecec;
    border-radius: 3.2rem 3.2rem 0 0;
    max-width: 120rem;
    margin: -120px auto;
    height: 12rem;
  }
}

@media (max-width: 992px) {
  .about {
    &-header {
      &-container {
        &-logo {
          padding: 4rem 0;
          margin: auto;
          display: flex;
        }
      }
    }

    &-content {
      padding: 2rem 4rem;

      &-item {
        flex-direction: column;

        &:nth-child(even) {
          flex-direction: column-reverse;
        }
      }
    }

    &-block {
      margin: 0;
      height: unset;
    }
  }
}
</style>
