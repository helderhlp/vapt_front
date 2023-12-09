<template>
  <div>
    <div class="my-address">
      <div class="w-15 mw-100">
        <label class="mb-1 ml-2" for="cep">CEP</label>
        <input class="default-input w-100" type="text" name="cep" />
      </div>
      <div class="w-65 mw-50">
        <label class="mb-1 ml-2" for="address">Logradouro</label>
        <input class="default-input w-100" type="text" name="address" />
      </div>
      <div class="w-15 mw-50">
        <label class="mb-1 ml-2" for="complement">Complemento</label>
        <input class="default-input w-100" type="text" name="complement" />
      </div>
      <div class="w-25 mw-50">
        <label class="mb-1 ml-2" for="neighborhood">Bairro</label>
        <input class="default-input w-100" type="text" name="neighborhood" />
      </div>
      <div class="w-55 mw-50">
        <label class="mb-1 ml-2" for="city">Cidade</label>
        <input class="default-input w-100" type="text" name="city" />
      </div>
      <div class="w-15 mw-50">
        <label class="mb-1 ml-2" for="state">Estado</label>
        <input class="default-input w-100" type="text" name="state" />
      </div>
    </div>
    <div class="my-data-actions">
      <button class="button-primary mr-4 mt-4">Editar</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.my-address {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

@media (max-width: 992px) {
  .my-address {
    .mw-50 {
      width: calc(50% - 2rem);
    }

    .mw-100 {
      width: calc(100% - 2rem);
    }
  }
}
</style>
