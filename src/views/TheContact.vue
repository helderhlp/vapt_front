<template>
  <div>
    <div class="excursions">
      <div class="excursions-container">
        <h1 class="excursions-title">CONTATO</h1>
        <h2 class="excursions-subtitle">ENTRE EM CONTATO, TEREMOS O PRAZER EM TE RESPONDER</h2>
      </div>
    </div>
    <contact-form />
  </div>
</template>

<script setup>
import ContactForm from '@/components/ContactForm.vue'
</script>

<style lang="scss" scoped>
.excursions {
  margin-top: 2rem;
  background-image: url('@/assets/images/contato_header.png');
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
}

@media (max-width: 992px) {
  .excursions {
    padding: 0;

    &-container {
      padding: 2rem 4rem;
    }

    &-subtitle {
      padding-bottom: 4rem;
    }

    &-form {
      margin-top: 0;
      margin-bottom: 0;
      padding: 2rem;

      &-inputs {
        input {
          width: 100%;
        }
      }
    }
  }
}
</style>
