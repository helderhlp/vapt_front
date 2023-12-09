<template>
  <div class="payment-step">
    <p class="fw-bold fs-16 mb-2">Passageiros</p>
    <div class="d-flex justify-content-between gap-1 flex-wrap">
      <input class="default-input w-50 mw-100" type="text" placeholder="Nome" />
      <select class="w-15 mw-25">
        <option value="">Doc</option>
        <option value="rg">RG</option>
        <option value="cpf">CPF</option>
      </select>
      <input class="default-input w-25 mw-75" type="text" placeholder="Número" />
    </div>
    <div class="d-flex justify-content-between mt-2 gap-1 flex-wrap">
      <input class="default-input w-50 mw-100" type="text" placeholder="Nome" />
      <select class="w-15 mw-25">
        <option value="">Doc</option>
        <option value="rg">RG</option>
        <option value="cpf">CPF</option>
      </select>
      <input class="default-input w-25 mw-75" type="text" placeholder="Número" />
    </div>
    <div class="d-flex flex-column mt-2">
      <div class="mb-2">
        <input id="pix" type="radio" name="payment_type" value="pix" />
        <label for="pix">PIX</label>
      </div>
      <div>
        <input id="credit-card" type="radio" name="payment_type" value="credit_card" />
        <label for="credit-card">CARTÃO DE CRÉDITO</label>
      </div>
    </div>
    <div class="d-flex gap-2 mt-4 summary">
      <div class="w-50 summary-data">
        <p class="fw-bold fs-16 mb-2">Resumo do Pedido</p>
        <div class="d-flex align-items-center gap-2 mb-4">
          <input class="default-input w-70" type="text" placeholder="Cupom de Desconto" />
          <button class="button-primary w-30">Aplicar</button>
        </div>
        <div class="d-flex justify-content-between mb-2">
          <p>1 Assento inteira</p>
          <p class="fw-bold">R$30,00</p>
        </div>
        <div class="d-flex justify-content-between mb-2">
          <p>1 Assento meia</p>
          <p class="fw-bold">R$15,00</p>
        </div>
        <div class="d-flex justify-content-between mb-2">
          <p>Taxa de serviço</p>
          <p class="fw-bold">R$6,00</p>
        </div>
        <div class="d-flex justify-content-between mb-4">
          <p>Desconto</p>
          <p class="fw-bold">R$0,00</p>
        </div>
        <div class="d-flex justify-content-between fw-bold fs-18 mb-4">
          <p>Total</p>
          <p>R$ 51,00</p>
        </div>
      </div>
      <div class="w-50 summary-payment-data">
        <p class="fw-bold fs-16 mb-2">Dados do Cartão</p>
        <input class="default-input w-100 mb-1" type="text" placeholder="Número do Cartão" />
        <input class="default-input w-100 mb-1" type="text" placeholder="Nome" />

        <div class="mb-1 d-flex justicy-content-between gap-2">
          <input class="default-input w-50" type="text" placeholder="Validade" />
          <input class="default-input w-50" type="text" placeholder="CVV" />
        </div>

        <input class="default-input w-100 mb-1" type="text" placeholder="CPF" />
        <select class="w-100">
          <option value="">Quantidade de Parcelas</option>
          <option value="1">1 Parcela</option>
          <option value="2">2 Parcela</option>
          <option value="3">3 Parcela</option>
          <option value="4">4 Parcela</option>
          <option value="5">5 Parcela</option>
          <option value="6">6 Parcela</option>
        </select>
        <p class="mt-2 mb-2">
          Clicando em "Cadastrar" você aceita nossos
          <router-link to="/termos-condicoes">termos de uso</router-link> e
          <router-link to="/politica-privacidade">política de privacidade</router-link>
        </p>
        <button class="button-secondary excursion-card-button w-100">
          <p class="excursion-card-button-text">é pra lá que eu vou</p>
          <p class="fs-12">CLIQUE AQUI PARA PAGAR</p>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.payment-step {
  border-bottom: 1px solid #707070;
  padding-bottom: 4rem;

  label {
    display: inline;
    font-size: 1.6rem;
    font-weight: 600;
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

@media (max-width: 992px) {
  .payment-step {
    border-bottom: none;
    padding-bottom: 2rem;
    padding-top: 2rem;
    gap: 1rem;

    .mw-25 {
      width: calc(25% - 1rem);
    }

    .mw-75 {
      width: calc(75% - 1.2rem);
    }
    .mw-100 {
      width: 100%;
    }
  }

  .summary {
    flex-direction: column;

    &-data {
      width: 100%;
    }

    &-payment-data {
      width: 100%;
    }
  }
}
</style>
