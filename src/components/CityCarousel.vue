<template>
  <Carousel>
    <Slide v-for="slide in 10" :key="slide" :items-to-show="1">
      <img src="@/assets/images/marco_ankosqui_teleferico_aparecida.png" />
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script setup>
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
</script>

<style lang="scss" scoped>
@media (max-width: 992px) {
  img {
    width: 100%;
  }
}
</style>
