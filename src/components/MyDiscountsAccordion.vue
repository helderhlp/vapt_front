<template>
  <div class="discounts mt-2">
    <div class="discounts-item fs-15">
      <p class="mb-2">Data de Adesão</p>
      <p class="fw-bold">25/09/2020</p>
    </div>
    <div class="discounts-item fs-15">
      <p class="mb-2">Data de Venc.</p>
      <p class="fw-bold">25/12/2020</p>
    </div>
    <div class="discounts-item fs-15">
      <p class="mb-2">Desconto</p>
      <p class="fw-bold">10%</p>
    </div>
    <div class="discounts-item fs-15">
      <p class="mb-2">Código</p>
      <p class="fw-bold">GANHEI10%</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.discounts {
  display: flex;
  gap: 1.5rem;
}

@media (max-width: 992px) {
  .discounts {
    flex-wrap: wrap;

    &-item {
      width: calc(50% - 1.5rem);
    }
  }
}
</style>
