<template>
  <div class="excursion-info">
    <h2 class="excursion-title">
      Excursões para todo o Brasil para quem quer se divertir e para quem quer uma grana extra.
    </h2>
    <p>
      A partir de agora, organizar e participar de uma excursão vai ser uma experiência única,
      simples e tranquila. Você está na plataforma Vaptvou, o ponto de conexão entre excursionistas,
      empresas de transporte, de eventos e shows com o consumidor final. Tudo de uma forma
      inteligente e rápida para que a excursão seja perfeita.
    </p>
    <p>
      Aqui você encontra excursões turísticas pra toda a família, eventos e shows com saídas
      próximas de sua casa e se quiser, pode fazer do seu jeito, reunindo o pessoal do trabalho para
      participar de uma convenção ou seminário, um grupo de pessoas para fazer a excursão dos
      sonhos, ou se você é um(a) excursionista pode cadastrar suas excursões na plataforma, que
      divulgamos e vendemos pra você. É uma forma de aumentar seus ganhos com controle e segurança.
    </p>
    <p>
      Ainda tem mais… se você está precisando de uma renda extra, então aqui é seu lugar. Você pode
      se divertir com o passeio e ainda ganhar uma renda extra. Vaptvou permite que você se torne
      um(a) excursionista, monte sua excursão para onde quiser, e defina seu lucro. A Vaptvou também
      oferece descontos e formas de pagamentos especiais para proporcionar um divertimento que não
      pesa no bolso. Experimente.
    </p>
    <p>Seja bem-vindo a Vaptvou. Este é o ponto de partida para a excursão dos seus sonhos.</p>
  </div>
</template>

<style lang="scss" scoped>
.excursion {
  &-info {
    max-width: 100rem;
    margin: auto;
    padding-bottom: 5rem;

    p {
      margin-bottom: 2rem;
    }
  }

  &-title {
    font-size: 2rem;
    color: $body-color;
    font-weight: 600;
    margin-bottom: 2rem;
  }
}

@media (max-width: 992px) {
  .excursion {
    &-info {
      padding-left: 4rem;
      padding-right: 4rem;
    }
  }
}
</style>
