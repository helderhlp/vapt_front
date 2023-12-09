<template>
  <div>
    <div class="my-data">
      <div class="w-30 mw-50">
        <label class="mb-1 ml-2" for="first-name">Primeiro Nome</label>
        <input class="default-input w-100" type="text" name="first-name" />
      </div>
      <div class="w-30 mw-50">
        <label class="mb-1 ml-2" for="second-name">Sobrenome</label>
        <input class="default-input w-100" type="text" name="second-name" />
      </div>
      <div class="w-15 mw-50">
        <label class="mb-1 ml-2" for="birthdate">Data de Nasc.</label>
        <input class="default-input w-100" type="text" name="birthdate" />
      </div>
      <div class="w-15 mw-50">
        <label class="mb-1 ml-2" for="sex">Sexo</label>
        <input class="default-input w-100" type="text" name="sex" />
      </div>
      <div class="w-15 mw-50">
        <label class="mb-1 ml-2" for="document">Documento</label>
        <input class="default-input w-100" type="text" name="document" />
      </div>
      <div class="w-30 mw-50">
        <label class="mb-1 ml-2" for="document-number">Número Doc.</label>
        <input class="default-input w-100" type="text" name="document-number" />
      </div>
      <div class="w-50 mw-100">
        <label class="mb-1 ml-2" for="email">E-mail</label>
        <input class="default-input w-100" type="text" name="email" />
      </div>
      <div class="w-30 mw-50">
        <label class="mb-1 ml-2" for="cellphone">Celular</label>
        <input class="default-input w-100" type="text" name="cellphone" />
      </div>
      <div class="w-30 mw-50">
        <label class="mb-1 ml-2" for="phone">Telefone</label>
        <input class="default-input w-100" type="text" name="phone" />
      </div>
    </div>
    <div class="my-data-actions">
      <button class="button-primary mr-4 mt-4">Editar</button>
      <button class="button-primary">Alterar Senha</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.my-data {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

@media (max-width: 992px) {
  .my-data {
    .mw-50 {
      width: calc(50% - 2rem);
    }

    .mw-100 {
      width: calc(100% - 2rem);
    }

    &-actions {
      margin-top: 2rem;

      display: flex;
      justify-content: space-between;
      gap: 2rem;

      button {
        margin: 0 !important;
        width: 50%;
      }
    }
  }
}
</style>
