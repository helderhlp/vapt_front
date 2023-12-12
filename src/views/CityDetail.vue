<template>
  <div>
    <div class="city-excursion">
      <div class="city-excursion-header">
        <div>
          <h1 class="city-excursion-title">{{ cityInfoData.titulo }}</h1>
          <h2 class="city-excursion-subtitle">{{ cityInfoData.subtitulo }}</h2>
        </div>
        <div class="excursion-card">
          <p class="excursion-card-title">A partir de</p>
          <p class="excursion-card-value">{{ convertToReal(cityInfoData.valor) }}</p>
          <button class="button-secondary excursion-card-button">
            <p class="excursion-card-button-text">é pra lá que eu vou</p>
            <p>CLIQUE AQUI PARA VER AS OPÇÕES</p>
          </button>
          <!-- <p class="excursion-card-reservation">Reservas até o dia 05 de Janeiro</p> -->
        </div>
      </div>
    </div>
    <div class="city-info">
      <city-info :data="cityInfoData" />
    </div>

    <!-- <most-purchased-excursions /> -->
    <promotions-register-form />

    <hr />

    <empty-search-form />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUtils } from '@/composables/useUtils'
import FetchService from '@/services/FetchService.js'
import { useToastStore } from '@/stores/toastStore'
import CityInfo from '@/components/CityInfo.vue'
import MostPurchasedExcursions from '@/components/MostPurchasedExcursions.vue'
import PromotionsRegisterForm from '@/components/PromotionsRegisterForm.vue'
import EmptySearchForm from '@/components/EmptySearchForm.vue'

const toastStore = useToastStore()

const { convertToReal } = useUtils()

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const cityInfoData = ref({})

const fetchTravels = async () => {
  try {
    const { data } = await FetchService.getDestiny(props.id)

    cityInfoData.value = data
  } catch (error) {
    toastStore.setToastInfo({
      showToast: true,
      message: 'Erro inesperado',
      kind: 'danger'
    })
  }
}

fetchTravels()
</script>

<style lang="scss" scoped>
.city-excursion {
  background-image: url('@/assets/images/aparecida_do_norte_saiba_mais.png');
  background-repeat: no-repeat;
  background-position: center;

  &-header {
    padding: 3rem 0 16rem 0;
    max-width: 110rem;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
}

.city-info {
  background-color: $white;
  border-radius: 3.2rem 3.2rem 0 0;
  max-width: 110rem;
  padding: 6rem 10rem 10rem 10rem;
  margin: -10rem auto;
}

.excursion-card {
  background-color: $primary;
  color: $white;
  border-radius: 2rem;
  padding: 1.8rem;
  max-width: 34rem;
  display: flex;
  flex-direction: column;

  &-title {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: left;
    margin-bottom: 1rem;
  }

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
    margin-bottom: 1rem;

    &-text {
      font-size: 2.4rem;
      font-weight: 400;
      font-family: 'Quicksand', sans-serif;
      color: $primary;
    }
  }

  &-reservation {
    font-size: 1.2rem;
    font-style: italic;
    text-align: center;
  }
}

@media (max-width: 992px) {
  .city-excursion {
    &-header {
      padding: 2rem 4rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .excursion-card {
    border-radius: 0.8rem;
    padding: 0.5rem 1.6rem;
    margin-top: 3rem;

    &-value {
      font-size: 3rem;
    }

    &-title {
      text-align: center;
    }
  }

  .city-info {
    margin: 0 auto;
    padding: 0;
  }
}
</style>
