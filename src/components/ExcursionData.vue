<template>
  <div v-if="showExcursionData" class="city-info-data">
    <div class="city-info-data-items">
      <div class="d-flex justify-content-between city-info-data-sub-items mb-2 flex-wrap">
        <div class="w-25 mw-100">
          <p class="city-info-data-label">Duração</p>
          <p class="city-info-data-value">1 Dia</p>
        </div>
        <div class="w-25 mw-50">
          <p class="city-info-data-label">Data e horário da IDA</p>
          <p class="city-info-data-value">27-DEZ-2020 - 08h00</p>
        </div>
        <div class="w-25 mw-50">
          <p class="city-info-data-label">Data e horário da VOLTA</p>
          <p class="city-info-data-value">27-DEZ-2020 - 19h00</p>
        </div>
        <div class="w-25 mw-100">
          <p class="city-info-data-label">Detalhes do Transporte</p>
          <p class="city-info-data-value">
            Ônibus Executivo 46 Lugares Toalet/Frigobar/Wifi/Ar Condicionado/Tomada USB/ Água /
            Refrigerante / Café
          </p>
        </div>
      </div>

      <div class="d-flex justify-content-between city-info-data-sub-items mb-2 flex-wrap">
        <div class="w-50 mw-100">
          <p class="city-info-data-label">Ponto de Origem</p>
          <p class="city-info-data-value">
            Largo do Pará - Campinas/SP Av. Aquidaban, 211 - Centro
          </p>
        </div>
        <div class="w-50 mw-100">
          <p class="city-info-data-label">Ponto do Destino</p>
          <p class="city-info-data-value">
            Estacionamento Basilica - Aparecida/SP Avenida Dr. Júlio Prestes - Ponte Alta
          </p>
        </div>
      </div>

      <div class="d-flex justify-content-between city-info-data-sub-items mb-2 flex-wrap">
        <div class="w-25 mw-33">
          <p class="city-info-data-label">Idade Mínima</p>
          <p class="city-info-data-value">Sem Restrição</p>
        </div>
        <div class="w-25 mw-33">
          <p class="city-info-data-label">Ingresso</p>
          <p class="city-info-data-value">Não</p>
        </div>
        <div class="w-25 mw-33">
          <p class="city-info-data-label">Tipo de Veículo</p>
          <p class="city-info-data-value">Ônibus</p>
        </div>
        <div class="w-25 mw-100">
          <p class="city-info-data-label">Qtd. mín. de passagem para a excursão acontecer</p>
          <p class="city-info-data-value">40 (Faltam 40 passagens)</p>
        </div>
      </div>

      <div>
        <p class="city-info-data-label">Outros Pontos de Embarque</p>
        <p class="city-info-data-value">
          Terminal Ouro Verde - R. Armando Frederico Renganeschi, 21 - Jardim Cristina, Campinas/SP
          / Posto Jardim do Trevo - Av. Benedito de Campos, 193 - Jardim do Trevo, Campinas - SP
        </p>
      </div>
    </div>
  </div>
  <p v-if="isMobileScreen" class="fw-bold fs-15 mb-4 text-center" @click="toggleExcursionData">
    Detalhes da excursão
    <img v-if="!showExcursionData" src="@/assets/images/arrow-down.png" width="15" />
    <img v-if="showExcursionData" src="@/assets/images/arrow-up.png" width="15" />
  </p>

  <div v-if="!isMobileScreen" class="city-info-data">
    <div class="city-info-data-items">
      <div class="d-flex justify-content-between city-info-data-sub-items mb-2">
        <div class="w-25 mw-100">
          <p class="city-info-data-label">Duração</p>
          <p class="city-info-data-value">1 Dia</p>
        </div>
        <div class="w-25 mw-50">
          <p class="city-info-data-label">Data e horário da IDA</p>
          <p class="city-info-data-value">27-DEZ-2020 - 08h00</p>
        </div>
        <div class="w-25 mw-50">
          <p class="city-info-data-label">Data e horário da VOLTA</p>
          <p class="city-info-data-value">27-DEZ-2020 - 19h00</p>
        </div>
        <div class="w-25 mw-100">
          <p class="city-info-data-label">Detalhes do Transporte</p>
          <p class="city-info-data-value">
            Ônibus Executivo 46 Lugares Toalet/Frigobar/Wifi/Ar Condicionado/Tomada USB/ Água /
            Refrigerante / Café
          </p>
        </div>
      </div>

      <div class="d-flex justify-content-between city-info-data-sub-items mb-2">
        <div class="w-50 mw-100">
          <p class="city-info-data-label">Ponto de Origem</p>
          <p class="city-info-data-value">
            Largo do Pará - Campinas/SP Av. Aquidaban, 211 - Centro
          </p>
        </div>
        <div class="w-50 mw-100">
          <p class="city-info-data-label">Ponto do Destino</p>
          <p class="city-info-data-value">
            Estacionamento Basilica - Aparecida/SP Avenida Dr. Júlio Prestes - Ponte Alta
          </p>
        </div>
      </div>

      <div class="d-flex justify-content-between city-info-data-sub-items mb-2">
        <div class="w-25 mw-33">
          <p class="city-info-data-label">Idade Mínima</p>
          <p class="city-info-data-value">Sem Restrição</p>
        </div>
        <div class="w-25 mw-33">
          <p class="city-info-data-label">Ingresso</p>
          <p class="city-info-data-value">Não</p>
        </div>
        <div class="w-25 mw-33">
          <p class="city-info-data-label">Tipo de Veículo</p>
          <p class="city-info-data-value">Ônibus</p>
        </div>
        <div class="w-25 mw-100">
          <p class="city-info-data-label">Qtd. mín. de passagem para a excursão acontecer</p>
          <p class="city-info-data-value">40 (Faltam 40 passagens)</p>
        </div>
      </div>

      <div>
        <p class="city-info-data-label">Outros Pontos de Embarque</p>
        <p class="city-info-data-value">
          Terminal Ouro Verde - R. Armando Frederico Renganeschi, 21 - Jardim Cristina, Campinas/SP
          / Posto Jardim do Trevo - Av. Benedito de Campos, 193 - Jardim do Trevo, Campinas - SP
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUtils } from '@/composables/useUtils'

const { isMobileScreen } = useUtils()

const showExcursionData = ref(false)

const toggleExcursionData = () => {
  showExcursionData.value = !showExcursionData.value
}
</script>

<style lang="scss" scoped>
.city-info {
  &-data {
    display: flex;
    gap: 5rem;
    margin-top: 2rem;
    margin-bottom: 2rem;

    &-sub-items {
      gap: 2rem;
    }

    &-label {
      color: #00abbd;
      margin-bottom: 0.4rem;
    }

    &-value {
      color: #707070;
      font-size: 1.6rem;
    }
  }
}

@media (max-width: 992px) {
  .city-info {
    &-data {
      margin-top: 0;

      &-sub-items {
        gap: 1rem;
      }

      &-items {
        .mw-33 {
          width: calc(33% - 1rem);
        }

        .mw-50 {
          width: calc(50% - 1rem);
        }

        .mw-100 {
          width: 100%;
        }
      }
    }
  }
}
</style>
