<template>
  <div class="destinations">
    <div class="destinations-container">
      <h1 class="destinations-title">TODOS OS DESTINOS</h1>
      <h2 class="destinations-subtitle">A EXCURSÃO DOS SEUS SONHOS ESTÁ AQUI</h2>
    </div>

    <div class="destinations-filter">
      <select id="type" class="destinations-filter-select" name="type" v-model="selectedCategory">
        <option value="">Categoria</option>
        <option v-for="category in categories" :key="category.id" :value="category.id">
          {{ category.categoria }}
        </option>
      </select>
    </div>
  </div>

  <excursions-and-destinations :category="selectedCategory" />

  <!-- <most-purchased-excursions /> -->

  <promotions-register-form />

  <hr />

  <empty-search-form />
</template>

<script setup>
import { ref } from 'vue'
import { useToastStore } from '@/stores/toastStore'
import ExcursionsAndDestinations from '@/components/ExcursionsAndDestinations.vue'
import MostPurchasedExcursions from '@/components/MostPurchasedExcursions.vue'
import PromotionsRegisterForm from '@/components/PromotionsRegisterForm.vue'
import EmptySearchForm from '@/components/EmptySearchForm.vue'
import FetchService from '@/services/FetchService.js'

const toastStore = useToastStore()

const categories = ref([])
const selectedCategory = ref('')

const fetchCategories = async () => {
  try {
    const { data } = await FetchService.getDestinationsCategories()

    categories.value = data.data
  } catch (error) {
    toastStore.setToastInfo({
      showToast: true,
      message: 'Erro inesperado',
      kind: 'danger'
    })
  }
}

fetchCategories()
</script>

<style lang="scss" scoped>
.destinations {
  margin-top: 2rem;
  background-image: url('@/assets/images/sobre_header.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 7rem;
  margin-bottom: 2rem;

  &-container {
    max-width: 110rem;
    margin: auto;
    padding-bottom: 9rem;
  }

  &-filter {
    background-color: $white;
    border-radius: 3.2rem 3.2rem 0 0;
    max-width: 120rem;
    margin: auto;
    padding: 3.4rem 0 3.4rem 12rem;

    &-select {
      width: 22rem;
    }
  }
}

@media (max-width: 992px) {
  .destinations {
    padding-top: 0;

    &-container {
      padding: 2rem 4rem 9rem 2rem;
    }

    &-filter {
      display: flex;
      justify-content: center;
      border-radius: 0;
      padding: 2rem 0;
    }
  }
}
</style>
