<template>
  <div>
    <div v-if="isAccordionOpen && isMobileScreen" class="search-bar d-flex justify-content-between">
      <input class="default-input" type="text" placeholder="Digite para onde você quer ir" />
      <input class="default-input" type="text" placeholder="Digite de onde você quer sair" />
      <input class="default-input" type="text" placeholder="Selecione o mês que você quer ir" />
      <button class="button-primary default-input mb-3">Procurar</button>
    </div>

    <div v-if="!isMobileScreen" class="search-bar d-flex justify-content-between">
      <input class="default-input" type="text" placeholder="Digite para onde você quer ir" />
      <input class="default-input" type="text" placeholder="Digite de onde você quer sair" />
      <input class="default-input" type="text" placeholder="Selecione o mês que você quer ir" />
      <button class="button-primary default-input mb-3">Procurar</button>
    </div>

    <div v-if="isMobileScreen" class="search-bar-arrow" @click="tooggleAccordion">
      <img v-if="isAccordionOpen" src="@/assets/images/arrow-up.png" />
      <img v-else src="@/assets/images/arrow-down.png" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUtils } from '@/composables/useUtils'

const { isMobileScreen } = useUtils()

const isAccordionOpen = ref(false)

const tooggleAccordion = () => {
  isAccordionOpen.value = !isAccordionOpen.value
}
</script>

<style lang="scss" scoped>
.search-bar {
  gap: 2rem;

  &-arrow {
    display: flex;
    justify-content: center;
  }

  input,
  button {
    width: 25%;
  }
}

@media (max-width: 992px) {
  .search-bar {
    flex-direction: column;
    gap: 1rem;

    input {
      border: unset;
      width: 100%;
    }

    button {
      width: calc(100% + 1rem);
    }
  }
}
</style>
