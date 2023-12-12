<template>
  <div :class="{ 'mt-45': isMobileScreen }">
    <!-- <VitePwaManifest /> -->
    <TheHeader />

    <the-toast v-if="toastInfo.showToast" :message="toastInfo.message" :kind="toastInfo.kind" />

    <router-view />

    <TheFooter />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useToastStore } from '@/stores/toastStore'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheToast from '@/components/TheToast.vue'
import { useUtils } from '@/composables/useUtils'

const { isMobileScreen } = useUtils()

const toastStore = useToastStore()

const toastInfo = computed(() => toastStore.toastInfo)
</script>

<style lang="scss" scoped>
.mt-45 {
  margin-top: 4.5rem;
}
</style>
