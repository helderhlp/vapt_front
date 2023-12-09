<template>
  <div class="policies-conditions">
    <div
      class="policies-conditions-header"
      :style="{ 'background-image': 'url(' + backgroundImageUrl + ')' }"
    >
      <div class="policies-conditions-header-container">
        <h1 class="text-uppercase">{{ title }}</h1>
        <h2>VAPTVOU</h2>
      </div>
    </div>
    <div class="policies-conditions-block"></div>
    <div class="policies-conditions-content">
      <p class="policies-conditions-content-title text-uppercase">{{ title }}</p>
      <slot />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  headerImage: {
    type: String,
    required: true
  }
})

const backgroundImageUrl = computed(() => `@/assets/images/${props.headerImage}`)
</script>

<style lang="scss" scoped>
.policies-conditions {
  margin-top: 2rem;

  &-header {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    &-container {
      max-width: 100rem;
      margin: auto;
      padding: 9rem 0 25rem 9rem;
    }
  }

  &-content {
    max-width: 100rem;
    margin: auto;
    padding: 7rem 15rem;

    &-title {
      font-weight: 600;
      font-size: 1.8rem;
      margin-bottom: 3rem;
    }
  }

  &-block {
    background-color: $white;
    border-radius: 3.2rem 3.2rem 0 0;
    max-width: 120rem;
    margin: -120px auto;
    height: 12rem;
  }
}

@media (max-width: 992px) {
  .policies-conditions {
    &-header {
      &-container {
        padding: 2rem 4rem 4rem 4rem;
      }
    }

    &-block {
      display: none;
    }

    &-content {
      padding: 2rem 4rem;
    }
  }
}
</style>
