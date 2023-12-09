<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header-button">SAIBA MAIS</div>
    </div>
    <div class="card-body">
      <p class="card-body-place">{{ data.place }}</p>
      <p class="card-body-city">{{ data.city }}/{{ data.state }}</p>
      <p class="card-body-value-label">a partir de</p>
      <p class="card-body-value">{{ convertToReal(data.value) }}</p>
    </div>
  </div>
</template>

<script setup>
import { useUtils } from '@/composables/useUtils.js'

defineProps({
  data: {
    type: Object,
    required: true
  }
})

const { convertToReal } = useUtils()
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid #cbcbcb;
  border-radius: 2rem;
  width: 14rem;
  height: 20rem;

  &-header {
    background-image: url('@/assets/images/aparecida_do_norte_destino_card.png');
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 1.9rem 1.9rem 0 0;
    position: relative;
    height: 9.9rem;

    &-button {
      position: absolute;
      bottom: 0;
      right: 0;
      font-size: 0.8rem;
      font-style: italic;
      color: $white;
      background-color: $primary;
      padding: 0.7rem;
    }
  }

  &-body {
    color: $body-color;
    padding: 1rem;
    text-align: left;
    background-color: $white;
    border-radius: 0 0 1.9rem 1.9rem;

    &-place {
      font-weight: 600;
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    &-city {
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
    }

    &-value {
      font-size: 1.6rem;
      font-weight: 600;

      &-label {
        font-size: 1.2rem;
      }
    }
  }
}
</style>
