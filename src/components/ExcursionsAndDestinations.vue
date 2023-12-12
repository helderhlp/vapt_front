<template>
  <Carousel v-if="showCarousel" :items-to-show="1">
    <Slide v-for="data in destinations" :key="data.id">
      <excursions-and-destinations-card :data="data" />
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination v-if="!showCarousel" />
    </template>
  </Carousel>

  <div v-else class="excursions-and-destinations-cards">
    <excursions-and-destinations-card v-for="data in destinations" :key="data.id" :data="data" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import FetchService from '@/services/FetchService.js'
import { useToastStore } from '@/stores/toastStore'
import ExcursionsAndDestinationsCard from './ExcursionsAndDestinationsCard.vue'

import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const toastStore = useToastStore()

const props = defineProps({
  showCarousel: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    default: ''
  }
})

const destinations = ref([])

const fetchDestinations = async () => {
  try {
    const { data } = await FetchService.getDestinations(props.category)

    destinations.value = data.data
  } catch (error) {
    toastStore.setToastInfo({
      showToast: true,
      message: 'Erro inesperado',
      kind: 'danger'
    })
  }
}

fetchDestinations()

watch(
  () => props.category,
  () => {
    fetchDestinations()
  }
)
</script>

<style lang="scss" scoped>
.excursions-and-destinations {
  &-cards {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
  }

  &-title {
    max-width: 100rem;
    margin: auto;
    font-size: 2.1rem;
    font-weight: 600;
    color: $body-color;
    padding: 1.5rem 0;
  }
}

@media (max-width: 992px) {
  .excursions-and-destinations {
    &-cards {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
}
</style>
