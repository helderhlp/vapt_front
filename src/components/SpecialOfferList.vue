<template>
  <div class="especial-offers">
    <h2 class="especial-offers-title">Ofertas Especiais</h2>
    <Carousel :breakpoints="breakpoints">
      <Slide v-for="data in specialOffers" :key="data.id">
        <special-offer-card :data="data" />
      </Slide>

      <template #addons>
        <Navigation v-if="!isMobileScreen" />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SpecialOfferCard from './SpecialOfferCard.vue'
import FetchService from '@/services/FetchService.js'
import { useUtils } from '@/composables/useUtils'

import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const { isMobileScreen } = useUtils()

const breakpoints = {
  0: {
    itemsToShow: 1,
    snapAlign: 'center'
  },
  579: {
    itemsToShow: 2
  },
  769: {
    itemsToShow: 3
  },
  993: {
    itemsToShow: 4
  }
}

const specialOffers = ref([])

const fetchSpecialOffers = async () => {
  try {
    const { data } = await FetchService.getSpecialOffers()

    specialOffers.value = data.data
  } catch (error) {
    console.log(error)
  }
}

fetchSpecialOffers()
</script>

<style lang="scss" scoped>
.especial-offers {
  max-width: 110rem;
  margin: -10rem auto;
  background-color: $white;
  border-radius: 3.2rem 3.2rem 0 0;
  padding: 0 5rem;

  &-title {
    max-width: 105rem;
    margin: auto;
    font-size: 2.1rem;
    font-weight: 600;
    color: $body-color;
    padding: 1.5rem 0;
  }

  .carousel {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media (max-width: 992px) {
  .especial-offers {
    margin: auto;
    padding: 0 4rem;

    .carousel {
      padding-left: 0;
      padding-right: 0;
    }
  }
}
</style>
