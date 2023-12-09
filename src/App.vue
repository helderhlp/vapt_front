<template>
  <div :class="{ 'mt-45': isMobileScreen }">
    <!-- <VitePwaManifest /> -->
    <TheHeader />

    <router-view />

    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import { useUtils } from '@/composables/useUtils'

const { isMobileScreen } = useUtils()
</script>

<style lang="scss" scoped>
.mt-45 {
  margin-top: 4.5rem;
}
</style>
