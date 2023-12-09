<template>
  <div class="contact-form">
    <h3 class="contact-form-title">NÃO ACHOU A EXCURSÃO QUE VOCÊ PROCURA? FALE CONOSCO.</h3>
    <p class="contact-form-subtitle">
      Preencha o formulário abaixo e nos envie seu interesse ou se cadastre como excursionista para
      criar a excursão que você deseja e ainda ganhar uma renda extra. Saiba mais.
    </p>

    <div class="contact-form-fields">
      <input class="default-input" type="text" placeholder="Cidade*" />
      <input class="default-input" type="text" placeholder="Destino*" />
      <input class="default-input" type="text" placeholder="Nome*" />
      <input class="default-input" type="text" placeholder="Sobrenome*" />
      <input class="default-input" type="email" placeholder="E-mail*" />
      <input class="default-input" type="tel" placeholder="Celular*" />

      <div class="contact-form-message">
        <textarea placeholder="Mensagem:" rows="5"></textarea>
      </div>

      <div class="d-flex justify-content-end w-100 contact-form-button">
        <button class="button-primary w-50">Enviar</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-form {
  margin: 5rem auto;
  max-width: 100rem;

  &-title {
    margin-bottom: 2rem;
  }

  &-subtitle {
    margin-bottom: 4rem;
  }

  &-fields {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    max-width: 45rem;
    margin: auto;

    input {
      flex: 1;
    }
  }

  &-message {
    display: flex;
    justify-content: center;
    width: 100%;
  }
}

@media (max-width: 992px) {
  .contact-form {
    margin: 0;
    padding: 3rem 4rem;

    &-button {
      justify-content: center;
    }
  }
}
</style>
