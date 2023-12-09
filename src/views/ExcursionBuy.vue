<template>
  <div>
    <div class="city-excursion">
      <div class="city-excursion-header">
        <div class="city-excursion-name">
          <h1 class="city-excursion-title">APARECIDA DO NORTE</h1>
          <h2 class="city-excursion-subtitle">Santuário Nacional Nossa Senhora Aparecida</h2>
        </div>
        <div class="city-excursion-date">
          <h2>25/10/2021</h2>
          <h2>Saídas: Largos do Rosário Terminal Ouro Verde</h2>
        </div>
      </div>
    </div>

    <div class="city-info">
      <div class="promotions">
        <p class="promotions-title">PROMOÇÃO IMPERDÍVEL</p>
        <div class="promotions-discount">
          <p>50%</p>
          <p>OFF</p>
        </div>
      </div>

      <excursion-data v-if="isMobileScreen" />

      <buy-stepper @update:step="updateStep" />

      <div style="padding-bottom: 4rem; border-bottom: 1px solid #707070">
        <excursion-data v-if="!isMobileScreen" />
      </div>

      <mobile-seat-selection
        v-if="currentStep === 'select' && isMobileScreen"
        @show:half-price-modal="updateHalfPriceModal"
      />

      <seat-selection
        v-if="currentStep === 'select' && !isMobileScreen"
        class="seat-selection"
        @show:half-price-modal="updateHalfPriceModal"
      />

      <div class="d-flex justify-content-center">
        <excursion-half-price-modal
          v-if="showHalfPriceModal"
          @hide:half-price-modal="updateHalfPriceModal"
        />
      </div>

      <payment-step v-if="currentStep === 'payment'" />

      <confirmation-step
        v-if="currentStep === 'confirmation'"
        style="padding-bottom: 4rem; border-bottom: 1px solid #707070"
      />

      <promotions-register-form class="pt-8" :class="{ 'p-0': isMobileScreen }" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ExcursionData from '@/components/ExcursionData.vue'
import BuyStepper from '@/components/BuyStepper.vue'
import MobileSeatSelection from '@/components/MobileSeatSelection.vue'
import SeatSelection from '@/components/SeatSelection.vue'
import ExcursionHalfPriceModal from '@/components/ExcursionHalfPriceModal.vue'
import PaymentStep from '@/components/PaymentStep.vue'
import ConfirmationStep from '@/components/ConfirmationStep.vue'
import PromotionsRegisterForm from '@/components/PromotionsRegisterForm.vue'
import { useUtils } from '@/composables/useUtils'

const { isMobileScreen } = useUtils()

const currentStep = ref('select')
const showHalfPriceModal = ref(false)

const updateStep = (step) => {
  currentStep.value = step
}

const updateHalfPriceModal = () => {
  showHalfPriceModal.value = !showHalfPriceModal.value
}
</script>

<style lang="scss" scoped>
.city-excursion {
  margin-top: 2rem;
  background-image: url('@/assets/images/aparecida_do_norte_saiba_mais.png');
  background-repeat: no-repeat;
  background-position: center;
  padding: 3rem 0 25rem 0;
  position: relative;

  &-header {
    max-width: 110rem;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }

  &-name {
    width: 30%;
  }

  &-date {
    text-align: right;
    width: 30%;
  }
}

.city-info {
  background-color: $white;
  border-radius: 3.2rem 3.2rem 0 0;
  max-width: 110rem;
  padding: 6rem 10rem 10rem 10rem;
  margin: -10rem auto 0 auto;
  position: relative;
}

.promotions {
  &-title {
    position: absolute;
    top: -2.6rem;
    font-size: 1.6rem;
    font-style: italic;
    font-weight: 600;
    color: $red;
    background-color: $yellow;
    border-top-right-radius: 1rem;
    padding: 0.5rem 3.5rem 0.5rem 1rem;
  }

  &-discount {
    position: absolute;
    right: 10rem;
    top: -4.6rem;
    font-weight: 600;
    font-size: 1.8rem;
    border-top-left-radius: 2rem;
    padding: 0.5rem 2.7rem 0.5rem 2.3rem;
    background-color: $red;
    color: $white;
  }
}

.seat-selection {
  margin-top: 2rem;
}

@media (max-width: 992px) {
  .city-excursion {
    margin: 0;
    padding: 2rem 4rem 5rem 2rem;

    &-name,
    &-date {
      width: 100%;
      text-align: left;
    }

    &-header {
      flex-direction: column;
      gap: 5rem;
    }
  }

  .city-info {
    margin: 0;
    padding: 0;
    padding: 2rem 4rem;

    // &-data {
    //   flex-direction: column;
    //   align-items: center;
    //   padding: 0 4rem 2rem 4rem;

    //   &-items {
    //     width: 100%;

    //     div {
    //       width: calc(50% - 1rem);
    //     }
    //   }
    // }

    // &-add-data {
    //   padding: 0 4rem 2rem 4rem;
    //   flex-direction: column;

    //   div {
    //     width: 100%;
    //   }
    // }
  }

  .promotions {
    &-title {
      left: 0;
    }

    &-discount {
      right: 0;
    }
  }
}
</style>
