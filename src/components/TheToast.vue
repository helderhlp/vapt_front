<template>
  <div class="the-toast" :class="kindClass">
    <p class="the-toast__message">{{ message }}</p>
    <img
      class="the-toast__close-icon"
      src="@/assets/images/white-close-icon.png"
      alt="Fechar alerta"
      data-test-id="close-toast"
      @click="closeToast"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useToastStore } from '@/stores/toastStore'

const toastStore = useToastStore()

const props = defineProps({
  kind: {
    type: String,
    validator(value) {
      return ['success', 'danger'].includes(value)
    },
    required: true
  },
  message: {
    type: String,
    required: true
  }
})

const kindClass = computed(() => `the-toast__${props.kind}`)

const closeToast = () => {
  toastStore.setToastInfo({
    showToast: false
  })
}
</script>

<style lang="scss" soped>
.the-toast {
  z-index: 999;
  min-width: 28rem;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  border-radius: 0.8rem;
  position: fixed;
  top: 5.2rem;
  right: 2rem;

  &__message {
    color: $white;
    font-weight: 500;
  }

  &__close-icon {
    width: 1.2rem;
    cursor: pointer;
  }

  &__success {
    background-color: $green;
  }

  &__danger {
    background-color: $red;
  }
}
</style>
