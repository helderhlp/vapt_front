<template>
  <div>
    <div class="cards">
      <div class="cards-image">
        <img :src="cardImage" />
      </div>
      <div class="cards-card">
        <div class="fw-bold d-flex flex-column justify-content-between h-100 gap-2">
          <div class="d-flex flex-column gap-1">
            <p class="fs-16">APARECIDA DO NORTE</p>
            <p class="fs-15">Saída Largo do Pará</p>
          </div>
          <div class="d-flex flex-column gap-1">
            <p class="fs-16">DATA</p>
            <p class="fs-16">29/09/2020</p>
          </div>
        </div>
      </div>
      <div class="cards-card">
        <div>
          <div>
            <p class="fs-15 fw-bold mb-1">Passageiros</p>
            <p class="fs-15 mb-1">Anderson José da Silva</p>
            <p class="fs-15">Maria José Conceição</p>
          </div>
        </div>
      </div>
      <div class="cards-card">
        <div>
          <p class="fs-15 mb-1"><strong class="fw-bold">Pedido: </strong>0001</p>
          <p class="fs-15 mb-1"><strong class="fw-bold">Data do Pedido: </strong>18/09/2020</p>
          <p class="fs-15 mb-1"><strong class="fw-bold">Valor Total: </strong>R$ 51,00</p>
          <p class="fs-15 fw-bold mb-1"><strong>Status: </strong>RESERVADO</p>
          <p class="text-center fs-15 see-details mt-2 cursor-pointer" @click="toggleShowDetails">
            Ver Detalhes
            <span class="arrow" :class="{ up: showDetails, down: !showDetails }"></span>
          </p>
        </div>
      </div>
    </div>

    <div v-if="showDetails">
      <div class="d-flex justify-content-between mt-4 mb-4">
        <p class="fw-bold fs-16">APARECIDA DO NORTE</p>
        <p class="fw-bold fs-16">Pedido 001002</p>
      </div>

      <div style="padding-bottom: 2rem; border-bottom: 1px solid #707070">
        <excursion-data />
      </div>

      <confirmation-step show-cancel-button />
    </div>
  </div>
</template>

<script setup>
import ExcursionData from '@/components/ExcursionData.vue'
import ConfirmationStep from '@/components/ConfirmationStep.vue'
import { ref, computed } from 'vue'
import { useUtils } from '@/composables/useUtils'

const { isMobileScreen } = useUtils()

const showDetails = ref(false)

const toggleShowDetails = () => {
  showDetails.value = !showDetails.value
}

const cardImage = computed(() =>
  isMobileScreen.value
    ? '@/assets/images/aparecida_do_norte_card_minha_conta_mobile.png'
    : '@/assets/images/aparecida_do_norte_card_minha_conta.png'
)
</script>

<style lang="scss" scoped>
.cards {
  display: flex;
  gap: 2rem;
  justify-content: space-between;

  &-card {
    width: 22rem;
    height: auto;
    background-color: #d3edec;
    padding: 1.2rem;
    border-radius: 2rem;

    &-image {
      border-radius: 2rem;
      width: 22rem;
    }
  }

  .see-details {
    font-style: italic;

    .arrow {
      border-color: $body-color;
    }
  }
}

@media (max-width: 992px) {
  .cards {
    flex-direction: column;
    align-items: center;

    &-card {
      width: 31.5rem;
    }
  }
}
</style>
