<template>
  <mobile-seat-tickets @show:half-price-modal="$emit('show:halfPriceModal')" />
  <mobile-seat-placement />
</template>

<script setup>
import MobileSeatTickets from '@/components/MobileSeatTickets.vue'
import MobileSeatPlacement from '@/components/MobileSeatPlacement.vue'

defineEmits(['show:halfPriceModal'])
</script>
