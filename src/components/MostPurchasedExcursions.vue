<template>
  <div class="most-purchased-excusions">
    <div class="most-purchased-excusions-cards">
      <h2 class="most-purchased-excusions-title">Excursões mais compradas</h2>

      <Carousel v-if="isMobileScreen" :breakpoints="breakpoints">
        <Slide v-for="data in mostPurchasedExcursionsMock" :key="data.id">
          <most-purchased-excursion-card :key="data.id" :data="data" />
        </Slide>

        <template #addons>
          <Navigation v-if="!isMobileScreen" />
          <Pagination />
        </template>
      </Carousel>

      <div v-else class="d-flex justify-content-between">
        <most-purchased-excursion-card
          v-for="data in mostPurchasedExcursionsMock"
          :key="data.id"
          :data="data"
        />
      </div>
    </div>
  </div>
</template>

<script setup scoped>
import MostPurchasedExcursionCard from './MostPurchasedExcursionCard.vue'
import { useUtils } from '@/composables/useUtils'

import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const { isMobileScreen } = useUtils()

const breakpoints = {
  0: {
    itemsToShow: 2
  },
  579: {
    itemsToShow: 3
  },
  769: {
    itemsToShow: 4
  }
}

const mostPurchasedExcursionsMock = [
  {
    id: 1,
    place: 'Aparecida do Norte',
    city: 'Aparecida',
    state: 'SP',
    value: 60
  },
  {
    id: 2,
    place: 'Thermas Water Park',
    city: 'São Pedro',
    state: 'SP',
    value: 130
  },
  {
    id: 3,
    place: 'Aparecida do Norte',
    city: 'Aparecida',
    state: 'SP',
    value: 60
  },
  {
    id: 4,
    place: 'Thermas Water Park',
    city: 'São Pedro',
    state: 'SP',
    value: 130
  },
  {
    id: 5,
    place: 'Aparecida do Norte',
    city: 'Aparecida',
    state: 'SP',
    value: 60
  },
  {
    id: 6,
    place: 'Thermas Water Park',
    city: 'São Pedro',
    state: 'SP',
    value: 130
  }
]
</script>

<style lang="scss" scoped>
.most-purchased-excusions {
  background-color: #d9ecec;
  padding: 2rem;

  &-title {
    font-weight: 600;
    font-size: 2.1rem;
    color: #428384;
    margin-bottom: 2rem;
  }

  &-cards {
    max-width: 100rem;
    margin: auto;
  }
}

@media (max-width: 992px) {
  .most-purchased-excusions {
    padding: 2rem 4rem;
  }
}
</style>
