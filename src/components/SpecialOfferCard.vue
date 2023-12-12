<template>
  <div class="card" :style="isMobileScreen ? 'width: 34rem' : 'width: 22rem'">
    <div class="card-header">
      <p class="card-header-date">{{ formattedDate }}</p>
      <!-- <p class="card-header-promotion">PROMOÇÃO IMPERDÍVEL</p> -->
      <p class="card-header-new">NOVO</p>
      <!-- <div v-if="data.discount" class="card-header-discount">
        <p>{{ data.discount }}%</p>
        <p>OFF</p>
      </div> -->
      <div class="card-header-button">
        <router-link to="excursao/1/informacoes"> SAIBA MAIS </router-link>
      </div>
    </div>
    <div class="card-body">
      <p class="card-body-place d-flex justify-content-between align-items-center">
        {{ data.titulo }}<img src="@/assets/images/bus-icon.png" />
      </p>
      <p class="card-body-city">{{ data.subtitulo }}</p>
      <p class="card-body-departure">{{ data.ponto_origem }}</p>
      <p class="card-body-value d-flex justify-content-between align-items-center">
        {{ convertToReal(data.valor) }}<img src="@/assets/images/share-icon.png" />
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useUtils } from '@/composables/useUtils.js'

const { convertToReal, isMobileScreen } = useUtils()

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const formattedDate = computed(() => props.data?.data_ida?.split('-').reverse().join('/') ?? '')
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid #cbcbcb;
  border-radius: 2rem;
  height: 30rem;

  &-header {
    background-image: url('@/assets/images/aparecida_do_norte_destino_card_mobile.png');
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 1.9rem 1.9rem 0 0;
    position: relative;
    min-height: 13rem;

    &-date {
      background-color: $primary;
      font-weight: 600;
      font-size: 1.2rem;
      color: $white;
      padding: 1.2rem;
      position: absolute;
      border-radius: 2rem 0 2rem 0;
    }

    &-promotion {
      position: absolute;
      bottom: 0;
      font-size: 1.1rem;
      font-style: italic;
      font-weight: 600;
      color: $red;
      background-color: $yellow;
      border-top-right-radius: 1rem;
      padding: 0.5rem;
    }

    &-new {
      position: absolute;
      bottom: 0;
      font-size: 1.1rem;
      font-style: italic;
      font-weight: 600;
      border-top-right-radius: 1.5rem;
      padding: 0.5rem 1.2rem 0.5rem 0.5rem;
      color: $white;
      background-color: $body-color;
    }

    &-button {
      position: absolute;
      bottom: 0;
      right: 0;
      background-color: $secondary;
      padding: 0.4rem 0.75rem;

      a {
        text-decoration: none;
        font-size: 0.8rem;
        font-style: italic;
        color: $white;
      }
    }

    &-discount {
      position: absolute;
      bottom: 2.2rem;
      right: 0;
      font-weight: 600;
      font-size: 1.2rem;
      border-top-left-radius: 2rem;
      padding: 0.4rem 1.8rem 0.4rem 1.7rem;
      background-color: $red;
      color: $white;
    }
  }

  &-body {
    color: $body-color;
    padding: 1rem 1rem 0 1rem;
    text-align: left;

    &-place {
      font-weight: 600;
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    &-city {
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
    }

    &-excursiondate {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    &-departure {
      font-size: 1.2rem;
      line-height: 1.5rem;
      margin-bottom: 2rem;
    }

    &-value {
      font-size: 3.3rem;
      font-weight: 600;
    }
  }
}
</style>
