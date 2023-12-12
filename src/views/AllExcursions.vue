<template>
  <div>
    <div class="all-excursions">
      <div class="all-excursions-container">
        <h1 class="all-excursions-title">TODOS AS EXCURSÕES</h1>
        <h2 class="all-excursions-subtitle">A EXCURSÃO DOS SEUS SONHOS ESTÁ AQUI</h2>

        <search-bar class="all-excursions-search-bar" />
      </div>

      <div class="all-excursions-filter">
        <select id="type" class="all-excursions-filter-select" name="type">
          <option value="">Tipo</option>
          <option value="guaruja">Guarujá/SP</option>
        </select>

        <select id="order-by" class="all-excursions-filter-select" name="order-by">
          <option value="">Ordernar por</option>
          <option value="city">Cidade</option>
        </select>
      </div>
    </div>

    <div class="special-offers">
      <special-offer-card v-for="data in specialOffers" :key="data.id" :data="data" />
    </div>

    <hr />

    <promotions-register-form />

    <hr />

    <empty-search-form />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useToastStore } from '@/stores/toastStore'
import SearchBar from '@/components/SearchBar.vue'
import SpecialOfferCard from '@/components/SpecialOfferCard.vue'
import PromotionsRegisterForm from '@/components/PromotionsRegisterForm.vue'
import EmptySearchForm from '@/components/EmptySearchForm.vue'
import FetchService from '@/services/FetchService.js'

const toastStore = useToastStore()

const specialOffers = ref([])

const fetchSpecialOffers = async () => {
  try {
    const { data } = await FetchService.getSpecialOffers()

    specialOffers.value = data.data
  } catch (error) {
    toastStore.setToastInfo({
      showToast: true,
      message: 'Erro inesperado',
      kind: 'danger'
    })
  }
}

fetchSpecialOffers()
</script>

<style lang="scss" scoped>
.all-excursions {
  margin-top: 2rem;
  background-image: url('@/assets/images/sobre_header.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 7rem;

  &-container {
    max-width: 110rem;
    margin: auto;
  }

  &-subtitle {
    padding-bottom: 9rem;
  }

  &-search-bar {
    margin-bottom: 2rem;
  }

  &-filter {
    background-color: $white;
    border-radius: 3.2rem 3.2rem 0 0;
    max-width: 120rem;
    margin: auto;
    padding: 3.4rem 12rem;
    display: flex;
    justify-content: space-between;

    &-select {
      width: 22rem;
    }
  }
}

.special-offers {
  max-width: 110rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 5rem;
}

@media (max-width: 992px) {
  .all-excursions {
    padding-top: 0;

    &-container {
      padding: 2rem 4rem;
    }

    &-subtitle {
      padding-bottom: 0;
    }

    &-filter {
      display: flex;
      justify-content: center;
      border-radius: 0;
      padding: 2rem 0;
    }

    &-filter {
      gap: 2rem;
      padding: 2rem 4rem;
    }
  }
}

.special-offers {
  justify-content: center;
  margin-top: 2rem;
}
</style>
