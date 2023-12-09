<template>
  <div class="container" :style="{ backgroundImage: `url(${currentBackgroundImage})` }">
    <div class="excursion-carousels">
      <Carousel v-model="carouselData" :items-to-show="1" wrap-around>
        <Slide v-for="excursion in banners" :key="excursion.id">
          <div class="excursion-item d-flex">
            <div class="excursion-text">
              <h1 class="excursion-text-title">{{ excursion.titulo }}</h1>
              <h2 class="excursion-text-subtitle">{{ excursion.subtitulo }}</h2>
              <!-- <p class="excursion-text-exit-dates">{{ excursion.dates }}</p> -->
              <button class="button-secondary">SAIBA MAIS</button>
            </div>

            <div class="excursion-card">
              <p class="excursion-card-title">A partir de</p>
              <p class="excursion-card-value">{{ convertToReal(excursion.promocao_preco) }}</p>
              <button class="button-secondary excursion-card-button">
                <p class="excursion-card-button-text">é pra lá que eu vou</p>
                <p>CLIQUE AQUI PARA VER AS OPÇÕES</p>
              </button>
              <!-- <p class="excursion-card-reservation">
                Reservas até o dia {{ excursion.reservationDateLimit }}
              </p> -->
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation v-if="!isMobileScreen" />
          <Pagination />
        </template>
      </Carousel>
    </div>
    <search-bar v-if="!isMobileScreen" class="search-bar" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import SearchBar from './SearchBar.vue'

import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

import { useUtils } from '@/composables/useUtils.js'
import FetchService from '@/services/FetchService.js'

const { convertToReal, isMobileScreen } = useUtils()

const banners = ref({})
const carouselData = ref()
const currentBackgroundImage = ref()

const fetchBanners = async () => {
  try {
    const { data } = await FetchService.getBanners()

    banners.value = data.data

    currentBackgroundImage.value = banners.value[0].imagem
  } catch (error) {
    console.log(error)
  }
}

fetchBanners()

watch(carouselData, (newValue) => {
  currentBackgroundImage.value = banners.value[newValue].imagem
})
</script>

<style lang="scss" scoped>
.container {
  background-repeat: no-repeat;
  background-position: center;
}

.excursion-carousels {
  max-width: 110rem;
  margin: auto;
}

.excursion {
  &-item {
    padding: 3rem 10rem 0 10rem;
    gap: 10rem;
  }

  &-text {
    text-align: left;
    color: $white;

    &-title {
      text-transform: uppercase;
    }

    &-subtitle {
      margin-bottom: 1.2rem;
    }

    &-exit-dates {
      font-style: italic;
      font-size: 1.5rem;
      margin-bottom: 1.2rem;
    }
  }
}

.excursion-card {
  background-color: $primary;
  color: $white;
  border-radius: 2rem;
  padding: 1.8rem;
  max-width: 34rem;

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
  }
}

.search-bar {
  max-width: 90rem;
  margin: auto;
  gap: 2rem;
  padding-bottom: 12rem;
}

@media (max-width: 992px) {
  .excursion {
    &-item {
      padding: 0;
      gap: 1rem;
      flex-direction: column;
      align-items: center;
    }

    &-text {
      padding: 2rem 1rem 0 1rem;
    }
  }

  .excursion-card {
    border-radius: 0.8rem;
    padding: 0.5rem 1.6rem;

    &-value {
      font-size: 3rem;
    }

    &-title {
      text-align: center;
    }
  }
}
</style>
