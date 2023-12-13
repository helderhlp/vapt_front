<template>
  <div>
    <div class="city-excursion">
      <div class="city-excursion-header">
        <div>
          <h1 class="city-excursion-title">{{ travels[0].titulo }}</h1>
          <h2 class="city-excursion-subtitle">{{ travels[0].subtitulo }}</h2>
        </div>
      </div>
    </div>
    <div class="special-offers">
      <div class="special-offers-ordering d-flex justify-content-end">
        <select id="order-by" class="special-offers-filter-select" name="order-by">
          <option value="">Ordernar por</option>
          <option value="city">Cidade</option>
        </select>
      </div>

      <special-offer-list :travels="travels" v-if="isMobileScreen" />

      <div v-else class="special-offers-cards">
        <special-offer-card v-for="data in travels" :key="data.id" :data="data" />
      </div>
    </div>
    <!-- <most-purchased-excursions /> -->
    <promotions-register-form />
    <hr />
    <empty-search-form />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useToastStore } from '@/stores/toastStore'
import FetchService from '@/services/FetchService.js'
import EmptySearchForm from '@/components/EmptySearchForm.vue'
import SpecialOfferList from '@/components/SpecialOfferList.vue'
import SpecialOfferCard from '@/components/SpecialOfferCard.vue'
// import MostPurchasedExcursions from '@/components/MostPurchasedExcursions.vue'
import PromotionsRegisterForm from '@/components/PromotionsRegisterForm.vue'

import { useUtils } from '@/composables/useUtils'

const toastStore = useToastStore()

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const { isMobileScreen } = useUtils()

const travels = ref([])

const fetchTravels = async () => {
  try {
    const { data } = await FetchService.getTravels(props.id)

    travels.value = data.data
  } catch (error) {
    toastStore.setToastInfo({
      showToast: true,
      message: 'Erro inesperado',
      kind: 'danger'
    })
  }
}

fetchTravels()
</script>

<style lang="scss" scoped>
.city-excursion {
  margin-top: 2rem;
  background-image: url('@/assets/images/aparecida_do_norte_saiba_mais.png');
  background-repeat: no-repeat;
  background-position: center;
  padding: 3rem 0 25rem 0;

  &-header {
    max-width: 110rem;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
}

.special-offers {
  background-color: #fff;
  border-radius: 3.2rem 3.2rem 0 0;
  max-width: 110rem;
  padding: 3rem 10rem 10rem 10rem;
  margin: -10rem auto;

  &-filter-select {
    margin-bottom: 2rem;
  }

  &-cards {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;
    margin-bottom: 5rem;
  }
}

@media (max-width: 992px) {
  .city-excursion {
    &-header {
      padding: 2rem 4rem 0 2rem;
    }
  }
  .special-offers {
    margin: 0;
    padding: 2rem;

    &-ordering {
      justify-content: center;
    }
  }
}
</style>
