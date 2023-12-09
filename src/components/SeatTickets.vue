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
    <p class="fs-16 fw-bold">Seus Assentos</p>
    <div v-for="(value, index) in seatsMock" :key="index" class="mt-2">
      <div class="d-flex align-items-center justify-content-between mb-2">
        <div class="d-flex align-items-center gap-1">
          <img src="@/assets/images/seat-icon.png" />
          <p>Assento - R$ {{ value }},00</p>
        </div>

        <img
          class="cursor-pointer"
          src="@/assets/images/close-icon.png"
          @click="removeSeat(index)"
        />
      </div>
    </div>
    <p class="mt-4">Taxa de Serviço - R$ 6,00</p>
    <div class="d-flex justify-content-between fw-bold fs-18 mt-4 mb-4">
      <p>Total</p>
      <p>R$ {{ ticketsTotal }},00</p>
    </div>
    <button class="button-secondary excursion-card-button w-100">
      <p class="excursion-card-button-text">é pra lá que eu vou</p>
      <p class="fs-12">CLIQUE AQUI PARA RESERVAR</p>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineEmits(['show:halfPriceModal'])

const seatsMock = ref([])

const ticketValue = ref('')
const ticketsTotal = ref(0)

const calculateTicketsTotal = () => {
  const SERVICE_TAX = 6

  ticketsTotal.value = seatsMock.value.reduce((value, acc) => {
    return (value += acc)
  }, SERVICE_TAX)
}

const addSeat = () => {
  if (ticketValue.value) {
    seatsMock.value.push(Number(ticketValue.value))

    calculateTicketsTotal()
  }
}

const removeSeat = (index) => {
  seatsMock.value.splice(index, 1)
  calculateTicketsTotal()
}
</script>

<style lang="scss" scoped>
.tickets {
  &-select {
    width: 25rem;

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

.excursion-card {
  background-color: $primary;
  color: $white;
  border-radius: 2rem;
  padding: 1.8rem;
  width: 34rem;
  display: flex;
  flex-direction: column;

  &-button {
    height: unset !important;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    margin-bottom: 1rem;

    &-text {
      font-size: 1.8rem;
      font-weight: 400;
      font-family: 'Quicksand', sans-serif;
      color: $primary;
    }
  }
}
</style>
