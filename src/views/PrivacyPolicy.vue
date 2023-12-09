<template>
  <div>
    <policies-and-conditions
      :title="'Política de privacidade'"
      :header-image="'politica_privacidade_header.png'"
    >
      <p>
        1 - Ao se cadastrar na plataforma Vaptvou para realizar uma compra ou para receber e-mails
        com promoções, armazenamos o seu endereço de e-mail, endereço ip e os demais dados que foram
        informados ao site em nosso banco de dados protegido e sigilosos, no qual apenas alguns
        colaboradores específicos, habilitados, que são obrigados, por contrato, a manter
        confidencialidade de suas informações.
      </p>
      <p>
        2 - Quando você se cadastra, solicitamos informações tais como seu nome, endereço de e-
        mail, data de nascimento, sexo, CEP, dentre outras. Ao se cadastrar na Plataforma Vaptvou e
        utilizar nossos serviços, você deixa de ser anônimo para nós.
      </p>
      <p>
        3 - Utilizamos os seus dados para o envio de promoções, cupons de descontos e informações de
        novas excursões que possam ser de seu interesse. Você poderá a qualquer momento solicitar a
        retirada de seu endereço de e-mail de nossas listas de envio, basta nos enviar um e-mail
        para contato@vaptvou.com.br ou também poderá solicitar a retirada a qualquer momento através
        do link disponível em nossas mensagens de e-mail.
      </p>
      <p>
        4 - O Vaptvou, não aluga, não vende e não compartilha as informações pessoais com outras
        pessoas ou com empresas não afiliadas, exceto com objetivo de fornecer a você os produtos e
        serviços solicitados, tendo obtido para tanto a sua permissão, ou em circunstâncias
        específicas como ordem judicial ou advindas de lei.
      </p>
      <p>
        5 - Ao se logar em nossa plataforma, armazenaremos um cookie em seu computador com a única
        finalidade de identificar a sua conta Vaptvou. Armazenamos também a informação de sua cidade
        de escolha, para que nas próximas vezes que você acessar o site sempre apareça a cidade
        escolhida.
      </p>
      <p>
        6 - Você poderá solicitar a remoção de seus dados armazenados a qualquer momento através do
        e-mail contato@vaptvou.com.br
      </p>
      <p>
        7 - O Vaptvou poderá eventualmente atualizar esta política sem aviso prévio. As mudanças
        mais significativas, quando oportuno, poderão ser comunicadas em área de destaque no website
        ou através de e-mail.
      </p>
      <p>
        8 - Para obter maiores informações entre em contato com através do e-mail
        contato@vaptvou.com.br
      </p>
      <p>
        9 - Ao instalar o App do Vaptvou para Android, armazenamos dados de identificação (como IMEI
        e suas contas de e-mail cadastradas) para melhorar nossos mecanismos de segurança, contra
        fraudes e invasões. Essa é uma medida importante para garantir a segurança das suas compras.
        Seus dados serão armazenados em nosso banco protegido, no qual apenas alguns colaboradores
        restritos terão acesso (que são obrigados por contrato a manter confidencialidade).
      </p>
      <p>
        10 - O App do Vaptvou contém a tecnologia de geolocalização. Essa tecnologia permite a
        captura dos dados de localização e recorrência de uso do aplicativo, que são coletados e
        tratados, de forma anônima, de maneira que você possa receber Notificações Push
        personalizadas pelo aplicativo. Ao aceitar esta Política de Privacidade, o usuário declara
        que está ciente e que concorda com a coleta e tratamento de seus dados pela Vaptvou.
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
