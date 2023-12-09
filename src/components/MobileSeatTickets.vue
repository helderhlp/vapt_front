<template>
  <div class="tickets">
    <p class="tickets-select-title">Passagem</p>

    <select v-model="ticketValue" class="tickets-select">
      <option value="">Tarifa</option>
      <option value="15">Meia Tarifa - R$ 15,00</option>
      <option value="30">Tarifa Inteira - R$ 30,00</option>
    </select>
    <a class="tickets-link cursor-pointer" @click="$emit('show:halfPriceModal')"
      >Verifique as condições. Clique Aqui.</a
    >
    <div class="d-flex justify-content-end mt-3">
      <button class="button-primary" @click="addSeat">Ok</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const ticketValue = ref('')

const addSeat = () => {}
</script>

<style lang="scss" scoped>
.tickets {
  margin-top: 2rem;

  &-select {
    width: 100%;

    &-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: #00abbd;
      margin-bottom: 0.5rem;
    }
  }

  &-link {
    color: #fc0000;
    font-size: 1.3rem;
    text-decoration: underline;
    display: block;
    text-align: center;
    margin-top: 0.5rem;
  }
}
</style>
