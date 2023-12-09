<template>
  <div class="confirmation">
    <div>
      <div v-if="!isMobileScreen" class="d-flex justify-content-between">
        <div>
          <p class="fw-bold fs-16 mb-2">Passageiros</p>
          <div class="fs-15 d-flex mb-2">
            <p class="confirmation-name">Anderson José da Silva</p>
            <p>CPF 250.229.000-89</p>
          </div>
          <div class="fs-15 d-flex">
            <p class="confirmation-name">Maria José Conceição</p>
            <p>CPF 150.009.001-90</p>
          </div>
        </div>
        <div>
          <p class="fw-bold fs-16 mb-2">Data do Pedido</p>
          <p class="fs-15">20/09/2020</p>
        </div>
      </div>

      <div v-else class="d-flex justify-content-between">
        <div>
          <p class="fw-bold fs-16 mb-2 mt-2">Passageiros</p>
          <div class="fs-15 mb-2">
            <p class="mb-1">Anderson José da Silva</p>
            <p>CPF 250.229.000-89</p>
          </div>
          <div class="fs-15 mb-2">
            <p class="mb-1">Maria José Conceição</p>
            <p>CPF 150.009.001-90</p>
          </div>
        </div>
        <div>
          <p class="fw-bold fs-16 mb-2 mt-2">Data do Pedido</p>
          <p class="fs-15">20/09/2020</p>
        </div>
      </div>
    </div>

    <div class="d-flex gap-4 confirmation-summary flex-wrap">
      <div class="w-30">
        <p class="fw-bold fs-16 mb-2">Resumo do Pedido</p>
        <div class="d-flex justify-content-between mb-2">
          <p>1 Assento inteira</p>
          <p class="fw-bold">R$30,00</p>
        </div>
        <div class="d-flex justify-content-between mb-2">
          <p>1 Assento meia</p>
          <p class="fw-bold">R$15,00</p>
        </div>
        <div class="d-flex justify-content-between mb-2">
          <p>Taxa de serviço</p>
          <p class="fw-bold">R$6,00</p>
        </div>
        <div class="d-flex justify-content-between mb-4">
          <p>Desconto</p>
          <p class="fw-bold">R$0,00</p>
        </div>
        <div class="d-flex justify-content-between fw-bold fs-18 mb-2">
          <p>Total</p>
          <p>R$ 51,00</p>
        </div>
        <p class="fs-13 text-center">À vista no Cartão de Crédito Final 4562</p>
      </div>
      <div class="w-70 d-flex flex-column align-items-center">
        <mobile-seat-placement v-if="isMobileScreen" :show-seats="false" />
        <seat-placement v-else />

        <div class="confirmation-feedback-card">
          <div class="d-flex align-items-center gap-1">
            <img src="@/assets/images/check-circle-icon.png" />
            <p class="fw-bold">PAGAMENTO CONFIRMADO</p>
          </div>

          <p class="text-center mt-1">
            <router-link to="termos-condicoes">Ler Termos de Uso</router-link>
          </p>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-between align-items-center confirmation-obs">
      <p class="fw-bold">Observação: Meia tarifa, será necessário comprovação do direito.</p>

      <button v-if="showCancelButton" class="button-primary">CANCELAR RESERVAR</button>
      <div class="d-flex gap-2">
        <p class="d-flex align-items-center gap-1">
          <img class="mr-1" src="@/assets/images/pdf-icon.png" />PDF
        </p>
        <p class="d-flex align-items-center gap-1">
          <img class="mr-1" src="@/assets/images/print-icon.png" />IMPRIMIR
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import MobileSeatPlacement from '@/components/MobileSeatPlacement.vue'
import SeatPlacement from '@/components/SeatPlacement.vue'
import { useUtils } from '@/composables/useUtils'

defineProps({
  showCancelButton: {
    type: Boolean,
    default: false
  }
})

const { isMobileScreen } = useUtils()
</script>

<style lang="scss" scoped>
.confirmation {
  &-name {
    margin-right: 8rem;
  }

  &-summary {
    margin-top: 4rem;
  }

  &-feedback {
    &-card {
      margin-top: 3rem;
      border: 1px solid #707070;
      padding: 2rem 5rem;
      border-radius: 2rem;

      p {
        a {
          font-size: 1.2rem;
          color: #707070;
        }
      }
    }
  }

  &-obs {
    margin-top: 4rem;
  }
}

@media (max-width: 992px) {
  .confirmation {
    &-summary {
      justify-content: center;

      div:first-child {
        width: 100%;
      }
    }

    &-obs {
      flex-direction: column;
      gap: 2rem;
    }
  }
}
</style>
