<template>
  <div class="d-flex gap-2">
    <div class="placement w-50" :class="{ 'w-100': !showSeats }">
      <p class="fw-bold fs-16 mb-4">Selecione Assentos</p>

      <div class="position-relative" style="width: 164px">
        <img src="@/assets/images/transport_background-vertical.png" />

        <div class="placement-seats">
          <div class="placement-seats-right">
            <img
              v-for="(rightSeat, index) in mockSeatsRight"
              :key="index"
              :src="`/${rightSeat.status}-seat.png`"
              width="28"
            />
          </div>

          <div class="placement-seats-left">
            <img
              v-for="(leftSeat, index) in mockSeatsLeft"
              :key="index"
              :src="`/${leftSeat.status}-seat.png`"
              width="28"
            />
          </div>
        </div>
      </div>
    </div>
    <div v-if="showSeats" class="w-50 mt-4">
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
  </div>
  <img src="@/assets/images/transport_caption.png" class="mb-4" />
</template>

<script setup>
defineProps({
  showSeats: {
    type: Boolean,
    default: true
  }
})
const mockSeatsLeft = [
  {
    id: 1,
    status: 'free'
  },
  {
    id: 2,
    status: 'free'
  },
  {
    id: 3,
    status: 'free'
  },
  {
    id: 4,
    status: 'free'
  },
  {
    id: 5,
    status: 'free'
  },
  {
    id: 6,
    status: 'free'
  },
  {
    id: 7,
    status: 'free'
  },
  {
    id: 8,
    status: 'free'
  },
  {
    id: 9,
    status: 'free'
  },

  {
    id: 10,
    status: 'free'
  },
  {
    id: 11,
    status: 'free'
  },
  {
    id: 12,
    status: 'free'
  },
  {
    id: 13,
    status: 'non-existent'
  },
  {
    id: 14,
    status: 'free'
  },
  {
    id: 15,
    status: 'free'
  },
  {
    id: 16,
    status: 'free'
  },
  {
    id: 17,
    status: 'free'
  },
  {
    id: 18,
    status: 'free'
  },
  {
    id: 19,
    status: 'free'
  },
  {
    id: 20,
    status: 'free'
  },
  {
    id: 21,
    status: 'free'
  },
  {
    id: 22,
    status: 'free'
  },
  {
    id: 23,
    status: 'free'
  },
  {
    id: 24,
    status: 'free'
  },
  {
    id: 25,
    status: 'free'
  },
  {
    id: 26,
    status: 'non-existent'
  }
]

const mockSeatsRight = [
  {
    id: 1,
    status: 'free'
  },
  {
    id: 2,
    status: 'free'
  },
  {
    id: 3,
    status: 'free'
  },
  {
    id: 4,
    status: 'occupied'
  },
  {
    id: 5,
    status: 'free'
  },
  {
    id: 6,
    status: 'free'
  },
  {
    id: 7,
    status: 'free'
  },
  {
    id: 8,
    status: 'free'
  },
  {
    id: 9,
    status: 'free'
  },

  {
    id: 10,
    status: 'free'
  },
  {
    id: 11,
    status: 'free'
  },
  {
    id: 12,
    status: 'non-existent'
  },
  {
    id: 13,
    status: 'non-existent'
  },
  {
    id: 14,
    status: 'free'
  },
  {
    id: 15,
    status: 'free'
  },
  {
    id: 16,
    status: 'free'
  },
  {
    id: 17,
    status: 'occupied'
  },
  {
    id: 18,
    status: 'free'
  },
  {
    id: 19,
    status: 'free'
  },
  {
    id: 20,
    status: 'free'
  },
  {
    id: 21,
    status: 'free'
  },
  {
    id: 22,
    status: 'free'
  },
  {
    id: 23,
    status: 'free'
  },
  {
    id: 24,
    status: 'free'
  },
  {
    id: 25,
    status: 'non-existent'
  },
  {
    id: 26,
    status: 'non-existent'
  }
]

const seatsMock = []

const ticketsTotal = 0
</script>

<style lang="scss" scoped>
.placement {
  margin-top: 2rem;
  margin-bottom: 2rem;

  &-seats {
    position: absolute;
    top: 25.5rem;
    left: -15rem;
    transform: rotate(90deg);

    &-left {
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      grid-template-columns: repeat(13, 1fr);
      gap: 0.8rem;
    }

    &-right {
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      grid-template-columns: repeat(13, 1fr);
      gap: 0.8rem;
      margin-bottom: 2rem;
    }
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
