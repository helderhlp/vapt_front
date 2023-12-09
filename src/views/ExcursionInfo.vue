<template>
  <div>
    <div class="city-excursion">
      <div class="city-excursion-header">
        <div class="city-excursion-name">
          <h1 class="city-excursion-title">APARECIDA DO NORTE</h1>
          <h2 class="city-excursion-subtitle">Santuário Nacional Nossa Senhora Aparecida</h2>
        </div>
        <div class="city-excursion-date">
          <h2>25/10/2021</h2>
          <h2>Saídas: Largos do Rosário Terminal Ouro Verde</h2>
        </div>
      </div>
    </div>

    <div class="city-info">
      <div class="promotions">
        <p class="promotions-title">PROMOÇÃO IMPERDÍVEL</p>
        <div class="promotions-discount">
          <p>50%</p>
          <p>OFF</p>
        </div>
      </div>
      <div class="city-info-data">
        <div class="city-info-data-items">
          <div>
            <p class="city-info-data-label">Duração</p>
            <p class="city-info-data-value">1 Dia</p>
          </div>
          <div>
            <p class="city-info-data-label">Data e horário da IDA</p>
            <p class="city-info-data-value">27-DEZ-2020 - 08h00</p>
          </div>
          <div>
            <p class="city-info-data-label">Data e horário da VOLTA</p>
            <p class="city-info-data-value">27-DEZ-2020 - 19h00</p>
          </div>
          <div>
            <p class="city-info-data-label">Ponto de Origem</p>
            <p class="city-info-data-value">
              Largo do Pará - Campinas/SP Av. Aquidaban, 211 - Centro
            </p>
          </div>
          <div>
            <p class="city-info-data-label">Ponto do Destino</p>
            <p class="city-info-data-value">
              Estacionamento Basilica - Aparecida/SP Avenida Dr. Júlio Prestes - Ponte Alta
            </p>
          </div>
          <div>
            <p class="city-info-data-label">Idade Mínima</p>
            <p class="city-info-data-value">Sem Restrição</p>
          </div>
          <div>
            <p class="city-info-data-label">Ingresso</p>
            <p class="city-info-data-value">Não</p>
          </div>
          <div>
            <p class="city-info-data-label">Tipo de Veículo</p>
            <p class="city-info-data-value">Ônibus</p>
          </div>
          <div class="w-100">
            <p class="city-info-data-label">Qtd. mín. de passagem para a excursão acontecer</p>
            <p class="city-info-data-value">40 (Faltam 40 passagens)</p>
          </div>
        </div>
        <div class="city-info-data-card">
          <p class="city-info-data-card-value">R$ 30,00</p>
          <button class="button-secondary city-info-data-card-button">
            <p class="city-info-data-card-button-text">é pra lá que eu vou</p>
            <p class="city-info-data-card-button-subtext">CLIQUE AQUI PARA RESERVAR</p>
          </button>
        </div>
      </div>
      <div class="city-info-add-data">
        <div>
          <p class="city-info-add-data-label">Roteiro da Excursão</p>
          <p class="city-info-add-data-value">
            Campinas a Aparecida do Norte com 1 parada de 30 minutos em postos da rede credenciada.
          </p>
        </div>
        <div>
          <p class="city-info-add-data-label">Sobre o Transporte</p>
          <p class="city-info-add-data-value">
            Ônibus Princesa D’oeste padrão executivo 46 lugares com ar, toalete, frigobar, wi-fi e
            tomadas USB para carregar celular em cada banco.
          </p>
        </div>
        <div>
          <p class="city-info-add-data-label">Outros Pontos de Embarque</p>
          <p class="city-info-add-data-value">
            Terminal Ouro Verde - R. Armando Frederico Renganeschi, 21 - Jardim Cristina,
            Campinas/SP / Posto Jardim do Trevo - Av. Benedito de Campos, 193 - Jardim do Trevo,
            Campinas - SP
          </p>
        </div>
        <div>
          <p class="city-info-add-data-label">Política de Cancelamento</p>
          <p class="city-info-add-data-value">
            Para receber um reembolso integral, cancele com até 5 dias de antecedência da excursão.
          </p>
        </div>
        <div>
          <p class="city-info-add-data-label">O que está Incluso</p>
          <p class="city-info-add-data-value">
            Oferecemos água, refrigerante, bolacha e lanche de mortadela no serviço de bordo.
          </p>
        </div>
        <div>
          <p class="city-info-add-data-label">Outras Observações</p>
          <p class="city-info-add-data-value">
            Meia tarifa. Para utilizar a meia tarifa será necessário comprovação do direito da meia
            tarifa. ATENÇÃO: Verifique as condições de meia entrada clicando aqui.
          </p>
        </div>
      </div>
      <city-info />
    </div>
  </div>
</template>

<script setup>
import CityInfo from '@/components/CityInfo.vue'
</script>

<style lang="scss" scoped>
.city-excursion {
  margin-top: 2rem;
  background-image: url('@/assets/images/aparecida_do_norte_saiba_mais.png');
  background-repeat: no-repeat;
  background-position: center;
  padding: 3rem 0 25rem 0;

  &-header {
    max-width: 110rem;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }

  &-name {
    width: 30%;
  }

  &-date {
    text-align: right;
    width: 30%;
  }
}

.city-info {
  background-color: $white;
  border-radius: 3.2rem 3.2rem 0 0;
  max-width: 110rem;
  padding: 6rem 10rem 10rem 10rem;
  margin: -10rem auto 0 auto;
  position: relative;

  &-data {
    display: flex;
    gap: 5rem;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #707070;

    &-items {
      display: flex;
      justify-content: space-between;
      width: 75%;
      flex-wrap: wrap;
      gap: 1rem;

      div {
        width: 25%;
      }
    }

    &-label {
      color: #00abbd;
      margin-bottom: 0.4rem;
    }

    &-value {
      color: #707070;
      font-size: 1.6rem;
    }

    &-card {
      background-color: $primary;
      color: $white;
      border-radius: 2rem;
      padding: 1.6rem;
      width: 22rem;

      &-value {
        font-size: 4.2rem;
        font-weight: 600;
        margin-bottom: 1rem;
        text-align: center;
      }

      &-button {
        height: unset !important;
        padding-top: 0.4rem;
        padding-bottom: 0.4rem;

        &-text {
          font-size: 1.8rem;
          font-weight: 400;
          font-family: 'Quicksand', sans-serif;
          color: $primary;
        }

        &-subtext {
          font-size: 1.2rem;
        }
      }
    }
  }

  &-add-data {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #707070;

    &-label {
      font-size: 1.6rem;
      font-weight: 600;
      color: #707070;
      margin-bottom: 1.5rem;
    }

    div {
      width: 45%;
    }
  }
}
.promotions {
  &-title {
    position: absolute;
    top: -2.6rem;
    font-size: 1.6rem;
    font-style: italic;
    font-weight: 600;
    color: $red;
    background-color: $yellow;
    border-top-right-radius: 1rem;
    padding: 0.5rem 3.5rem 0.5rem 1rem;
  }

  &-discount {
    position: absolute;
    right: 10rem;
    top: -4.6rem;
    font-weight: 600;
    font-size: 1.8rem;
    border-top-left-radius: 2rem;
    padding: 0.5rem 2.7rem 0.5rem 2.3rem;
    background-color: $red;
    color: $white;
  }
}

@media (max-width: 992px) {
  .city-excursion {
    margin: 0;
    padding: 2rem 4rem 5rem 2rem;

    &-name,
    &-date {
      width: 100%;
      text-align: left;
    }

    &-header {
      flex-direction: column;
      gap: 5rem;
    }
  }

  .city-info {
    margin: 0;
    padding: 0;
    padding-top: 2rem;

    &-data {
      flex-direction: column;
      align-items: center;
      padding: 0 4rem 2rem 4rem;

      &-items {
        width: 100%;

        div {
          width: calc(50% - 1rem);
        }
      }
    }

    &-add-data {
      padding: 0 4rem 2rem 4rem;
      flex-direction: column;

      div {
        width: 100%;
      }
    }
  }

  .promotions {
    &-title {
      left: 0;
    }

    &-discount {
      right: 0;
    }
  }
}
</style>
