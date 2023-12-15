<template>
  <div class="page-not-found">
    <div>
      <h1>A página que você está procurando não existe</h1>

      <button class="button-primary">
        <router-link :to="{ name: 'home' }">Acessar a página incial</router-link>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-not-found {
  height: calc(100vh - 44.4rem);
  background-color: $light-green;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    color: $body-color;
    margin-bottom: 2rem;
  }

  button {
    a {
      color: $white;
      text-decoration: none;
    }
  }
}
</style>
