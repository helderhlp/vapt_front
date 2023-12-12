<template>
  <div>
    <excursion-carousels />

    <search-bar v-if="isMobileScreen" class="search-bar" />

    <special-offer-list :travels="specialOffers" />

    <div class="most-purchased-excursions">
      <!-- <most-purchased-excursions /> -->
    </div>

    <div class="excursions-and-destinations">
      <h2 class="excursions-and-destinations-title">Excursões e Destinos</h2>
      <excursions-and-destinations :show-carousel="isMobileScreen" />
    </div>

    <promotions-register-form />

    <excursion-info />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useToastStore } from '@/stores/toastStore'
import FetchService from '@/services/FetchService.js'
import ExcursionCarousels from '@/components/ExcursionCarousels.vue'
import SearchBar from '@/components/SearchBar.vue'
import SpecialOfferList from '@/components/SpecialOfferList.vue'
import MostPurchasedExcursions from '@/components/MostPurchasedExcursions.vue'
import ExcursionsAndDestinations from '@/components/ExcursionsAndDestinations.vue'
import PromotionsRegisterForm from '@/components/PromotionsRegisterForm.vue'
import ExcursionInfo from '@/components/ExcursionInfo.vue'

import { useUtils } from '@/composables/useUtils'

const toastStore = useToastStore()

const { isMobileScreen } = useUtils()

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
