<template>
  <div>
    <policies-and-conditions
      :title="'Política e normas de segurança'"
      :header-image="'politicas_header.png'"
    >
      <p>
        A VAPTVOU, por meio do endereço https://vaptvou.com.br, preocupa-se com a segurança e a
        confiabilidade das informações disponibilizadas por seus clientes.
      </p>
      <p>
        Assim, a VAPTVOU alerta seus clientes sobre os riscos e ameaças que possam circular na
        internet como tentativas de fraudes que partem de terceiros mal intencionados.
      </p>
      <p><strong>Alerta de e-mails falsos</strong></p>
      <p>
        Um dos meios mais utilizados para a realização de fraudes é através do envio de e- mails
        falsos, que se apresentam como se tivessem sido enviados em nome da VAPTVOU. Esses e-mails
        mal intencionados pretendem colher informações confidenciais dos clientes. Perante este
        fato, a VAPTVOU adotou uma política rigorosa no envio de e-mails.
      </p>
      <p><strong>Abaixo seguem algumas orientações. Fique atento.</strong></p>
      <p>
        Os e-mails enviados pela VAPTVOU são padronizados, com link direto apenas para o SITE E PARA
        AS LOJAS APPLE STORE E GOOGLEPLAY QUE ESTÃO NOSSOS APLICATIVOS DISPONÍVEIS PARA INSTALAÇÃO.
        Vale lembrar que tais e-mails somente são enviados mediante a autorização prévia dos
        clientes. Desconsidere qualquer e-mail que possua algum tipo de arquivo executável, links
        que direcionam para download e página que não seja da PLATAFORMA VAPTVOU ou, ainda, que
        contenham formulários solicitando informações pessoais (dados bancários, atualização de
        cadastro e mais). Caso receba algum e-mail suspeito, por favor, encaminhe para a nossa
        equipe da VAPTVOU, através do e-mail contato@vaptvou.com.br, a fim de que as medidas
        cabíveis possam ser tomadas.
      </p>
      <p>
        Ressaltamos que a VAPTVOU não assume a responsabilidade pelos danos causados por este tipo
        de ataque, mas deixa explícita sua preocupação e atitude para informar e esclarecer seus
        clientes, bem como para banir este tipo de ação. A VAPTVOU conta com a conscientização de
        seus clientes, conforme orientação deste Alerta.
      </p>
    </policies-and-conditions>
  </div>
</template>

<script setup>
import PoliciesAndConditions from '@/components/PoliciesAndConditions.vue'
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 1.5rem;

  strong {
    font-weight: 600;
  }
}
</style>
