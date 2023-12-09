<template>
  <div>
    <excursion-carousels />

    <search-bar v-if="isMobileScreen" class="search-bar" />

    <special-offer-list />

    <most-purchased-excursions class="most-purchased-excursions" />

    <div class="excursions-and-destinations">
      <h2 class="excursions-and-destinations-title">Excursões e Destinos</h2>
      <excursions-and-destinations :show-carousel="isMobileScreen" />
    </div>

    <promotions-register-form />

    <excursion-info />
  </div>
</template>

<script setup>
import ExcursionCarousels from '@/components/ExcursionCarousels.vue'
import SearchBar from '@/components/SearchBar.vue'
import SpecialOfferList from '@/components/SpecialOfferList.vue'
import MostPurchasedExcursions from '@/components/MostPurchasedExcursions.vue'
import ExcursionsAndDestinations from '@/components/ExcursionsAndDestinations.vue'
import PromotionsRegisterForm from '@/components/PromotionsRegisterForm.vue'
import ExcursionInfo from '@/components/ExcursionInfo.vue'

import { useUtils } from '@/composables/useUtils'

const { isMobileScreen } = useUtils()
</script>

<style lang="scss" scoped>
.excursions-and-destinations {
  &-title {
    max-width: 100rem;
    margin: auto;
    font-size: 2.1rem;
    font-weight: 600;
    color: $body-color;
    padding: 1.5rem 0;
  }
}
.most-purchased-excursions {
  margin-top: 12rem;
}

.search-bar {
  background: $light-green;
  padding: 2rem 4rem;
}

@media (max-width: 992px) {
  .most-purchased-excursions {
    margin-top: 0;
  }

  .excursions-and-destinations {
    &-title {
      padding-left: 4rem;
    }
  }
}
</style>
