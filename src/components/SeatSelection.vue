<template>
  <div class="d-flex justify-content-between selection">
    <seat-placement />
    <seat-tickets @show:half-price-modal="$emit('show:halfPriceModal')" />
  </div>
</template>

<script setup>
import SeatTickets from '@/components/SeatTickets.vue'
import SeatPlacement from '@/components/SeatPlacement.vue'

defineEmits(['show:halfPriceModal'])
</script>

<style lang="scss" scoped>
.selection {
  border-bottom: 1px solid #707070;
  padding-bottom: 4rem;
  position: relative;
}
</style>
