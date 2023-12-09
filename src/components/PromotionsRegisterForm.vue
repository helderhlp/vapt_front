<template>
  <div class="promotions-register">
    <h2 class="promotions-register-title">Receba Nossas Promoções</h2>
    <div class="promotions-register-form">
      <input
        class="green-input promotions-register-form-input"
        type="text"
        placeholder="Digite seu nome"
        v-model="form.nome"
      />
      <input
        class="green-input promotions-register-form-input"
        type="e-mail"
        placeholder="Digite seu e-mail"
        v-model="form.email"
      />

      <div class="promotions-register-form-button">
        <button class="button-primary" @click="subscribeNewsletter">Cadastre-se</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

import FetchService from '@/services/FetchService.js'

const form = reactive({
  id: '',
  nome: '',
  email: ''
})

const subscribeNewsletter = async () => {
  try {
    const response = await FetchService.postNewsletter(form)

    console.log(response)
  } catch (error) {
    console.log(error)
  }
}
</script>

<style lang="scss" scoped>
.promotions-register {
  max-width: 100rem;
  margin: auto;
  padding: 5rem 0;

  &-title {
    font-size: 2.1rem;
    color: $body-color;
    font-weight: 600;
    margin-bottom: 1.6rem;
  }

  &-form {
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    &-input {
      flex: 1;
    }

    &-button {
      width: 12rem;
    }
  }
}

@media (max-width: 992px) {
  .promotions-register {
    padding: 4rem;

    &-form {
      flex-direction: column;

      &-input {
        flex: unset;
      }

      &-button {
        width: 100%;
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}
</style>
