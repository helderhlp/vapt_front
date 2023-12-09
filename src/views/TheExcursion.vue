<template>
  <div>
    <div class="city-excursion">
      <div class="city-excursion-header">
        <div>
          <h1 class="city-excursion-title">APARECIDA DO NORTE</h1>
          <h2 class="city-excursion-subtitle">Santuário Nacional Nossa Senhora Aparecida</h2>
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

      <special-offer-list v-if="isMobileScreen" />

      <div v-else class="special-offers-cards">
        <special-offer-card v-for="data in specialOffers" :key="data.id" :data="data" />
      </div>
    </div>
    <most-purchased-excursions />
    <promotions-register-form />
    <hr />
    <empty-search-form />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import FetchService from '@/services/FetchService.js'
import EmptySearchForm from '@/components/EmptySearchForm.vue'
import SpecialOfferList from '@/components/SpecialOfferList.vue'
import SpecialOfferCard from '@/components/SpecialOfferCard.vue'
import MostPurchasedExcursions from '@/components/MostPurchasedExcursions.vue'
import PromotionsRegisterForm from '@/components/PromotionsRegisterForm.vue'

import { useUtils } from '@/composables/useUtils'

const { isMobileScreen } = useUtils()

const specialOffers = ref([])

const fetchSpecialOffers = async () => {
  try {
    const { data } = await FetchService.getSpecialOffers()

    specialOffers.value = data.data
  } catch (error) {
    console.log(error)
  }
}

fetchSpecialOffers()
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
