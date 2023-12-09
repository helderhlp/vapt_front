<template>
  <div class="buy-stepper fs-18 fw-bold">
    <p
      class="buy-stepper-item"
      :class="{ 'current-step': isSelectStep }"
      @click="updateStep('select')"
    >
      Selecionar
    </p>
    <p
      class="buy-stepper-item"
      :class="{ 'current-step': isPaymentStep }"
      @click="updateStep('payment')"
    >
      Pagamento
    </p>
    <p
      class="buy-stepper-item"
      :class="{ 'current-step': isConfirmationStep }"
      @click="updateStep('confirmation')"
    >
      Confirmação
    </p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const emit = defineEmits(['update:step'])

const currentStep = ref('select')

const isSelectStep = computed(() => currentStep.value === 'select')
const isPaymentStep = computed(() => currentStep.value === 'payment')
const isConfirmationStep = computed(() => currentStep.value === 'confirmation')

const updateStep = (step) => {
  currentStep.value = step

  emit('update:step', step)
}
</script>

<style lang="scss" scoped>
.buy-stepper {
  display: flex;
  border: 1px solid #707070;

  &-item {
    flex: 1;
    text-align: center;
    padding: 0.5rem 0;
    cursor: pointer;

    &:not(:last-child) {
      border-right: 1px solid #707070;
    }
  }
}

.current-step {
  background-color: #d9ecec;
}
</style>
