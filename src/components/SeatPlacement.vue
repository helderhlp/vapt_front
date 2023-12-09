<template>
  <div class="placement d-flex flex-column align-items-center gap-2 position-relative">
    <p class="fw-bold fs-16">Selecione Assentos</p>

    <img src="@/assets/images/transport_background.png" />

    <div class="placement-seats">
      <div class="placement-seats-right">
        <img
          v-for="(rightSeat, index) in mockSeatsRight"
          :key="index"
          :src="`src/assets/images/${rightSeat.status}-seat.png`"
        />
      </div>

      <div class="placement-seats-left">
        <img
          v-for="(leftSeat, index) in mockSeatsLeft"
          :key="index"
          :src="`@/assets/images/${leftSeat.status}-seat.png`"
        />
      </div>
    </div>

    <img src="@/assets/images/transport_caption.png" />
  </div>
</template>

<script setup>
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
</script>

<style lang="scss" scoped>
.placement {
  &-seats {
    position: absolute;
    top: 4.5rem;
    left: 10rem;

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
</style>
