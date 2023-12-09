<template>
  <div class="p-8 half-price-modal">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <p>MEIA ENTRADA</p>
        <p>MEIA ENTRADA ESTUDANTE</p>
      </div>
      <img
        src="@/assets/images/bigger-close-icon.png"
        class="cursor-pointer"
        @click="$emit('hide:halfPriceModal')"
      />
    </div>
    <p class="mb-4">
      Será concedido o benefício da meia tarifa a todo estudante, desde que esteja portando, no
      momento do embarque no Ônibus, a carteira de identificação estudantil no padrão nacional
      indicado pelo ITI (Instituto Nacional de Tecnologia da Informação) através da Portaria nº 01
      de 17/03/2016, conforme determinado pela Lei 12.933/2013 regulamentada pelo Decreto 8537/2015
      (veja o modelo aqui) com as seguintes especificações:
    </p>
    <p class="mb-4">
      • Nome completo e data de nascimento do estudante; • Foto recente do estudante; • Nome da
      instituição de ensino na qual o estudante esteja matriculado; • Grau de escolaridade; • Data
      de validade até o dia 31 de março do ano subsequente ao de sua expedição; • Certificação
      digital (QR Code).
    </p>
    <p class="mb-4">No verso do cartão devem constar as seguintes informações:</p>
    <p class="mb-4">
      • Número do serviço de atendimento ao estudante da entidade emissora; • Marca do Certificado
      de Atributo conforme manual da marca disponível; • Texto contendo: “Documento padronizado
      nacionalmente conforme a Lei n° 12.933/2013. Válido em todo território nacional até 31 de
      março do ano seguinte”.
    </p>
    <p class="mb-4">MEIA ENTRADA ID JOVEM</p>
    <p class="mb-4">
      Válido para jovens de 15 a 29 anos comprovadamente carente apresentando documento denominado
      ID Jovem, no celular para leitura do QR code e documento original com foto, com a validação
      legal. Saiba mais sobre ID JOVEM.
    </p>
    <p class="mb-4">MEIA ENTRADA PCD OU ACOMPANHANTE</p>
    <p class="mb-4">
      Válido para pessoas com deficiência e acompanhante, que necessariamente deva conduzi-lo,
      mediante apresentação:
    </p>
    <p class="mb-4">
      I - do cartão de Benefício de Prestação Continuada da Assistência Social da pessoa com
      deficiência; II - de documento emitido pelo Instituto Nacional do Seguro Social - INSS que
      ateste a aposentadoria de acordo com os critérios estabelecidos na Lei Complementar nº 142, de
      8 de maio de 2013.
    </p>
    <p class="mb-4">
      *Os documentos apresentados nos itens I e II deverão estar acompanhados de documento de
      identificação válido em todo o território nacional.
    </p>
    <p class="mb-4">
      Atendimento Preferencial: pessoas com necessidades especiais, idosos e gestantes tem
      atendimento prioritário. Consulte um monitor.
    </p>
    <p class="mb-4">
      VALOR POR PESSOA. A meia entrada é válida tanto para a pessoa portadora de necessidades
      especiais como para o seu acompanhante, porém a compra deve ser feita individualmente.
    </p>
    <p>
      MEIA ENTRADA IDOSO Válido para Idosos com idade igual ou superior a 60 anos apresentando um
      documento original com foto e data de nascimento.
    </p>
  </div>
</template>

<script setup>
defineEmits(['hide:halfPriceModal'])
</script>

<style lang="scss" scoped>
.half-price-modal {
  border-radius: 3.2rem;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.5);
  top: 10rem;
  min-width: 100rem;
  position: absolute;
  background-color: $white;
}

@media (max-width: 992px) {
  .half-price-modal {
    min-width: unset;
    width: 75%;
  }
}
</style>
