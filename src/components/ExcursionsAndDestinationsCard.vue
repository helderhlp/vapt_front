<template>
  <div
    class="excursions-and-destinations-card"
    :class="{ 'w-100': isMobileScreen && route.path !== '/destinos' }"
    @click="goToDestiny"
  >
    <p class="excursions-and-destinations-card-label">A partir de</p>
    <p class="excursions-and-destinations-card-value">{{ convertToReal(data.preco_min) }}</p>
    <p class="excursions-and-destinations-card-place">{{ data.titulo }}</p>
    <p class="excursions-and-destinations-card-city">{{ data.subtitulo }}</p>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useUtils } from '@/composables/useUtils.js'

const route = useRouter()

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const { convertToReal, isMobileScreen } = useUtils()

const goToDestiny = () => {
  route.push({ name: 'city-detail', params: { id: props.data.id } })
}
</script>

<style lang="scss" scoped>
.excursions-and-destinations {
  &-card {
    background-image: url('@/assets/images/guaruja_destino_card.png');
    background-repeat: no-repeat;
    background-position: center;
    color: $white;
    font-weight: 600;
    padding: 20rem 2.5rem 2rem 2.5rem;

    &:hover {
      transform: scale(1.05);
      cursor: pointer;
    }

    &-label {
      margin-bottom: 0.8rem;
    }

    &-value {
      font-size: 3.5rem;
    }

    &-place {
      font-size: 1.8rem;
    }

    &-city {
      font-weight: 400;
    }
  }
}
</style>
