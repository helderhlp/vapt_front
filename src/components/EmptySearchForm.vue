<template>
  <div class="contact-form">
    <h3 class="contact-form-title">NÃO ACHOU A EXCURSÃO QUE VOCÊ PROCURA? FALE CONOSCO.</h3>
    <p class="contact-form-subtitle">
      Preencha o formulário abaixo e nos envie seu interesse ou se cadastre como excursionista para
      criar a excursão que você deseja e ainda ganhar uma renda extra. Saiba mais.
    </p>

    <div class="contact-form-fields">
      <input v-model="form.cidade" class="default-input" type="text" placeholder="Cidade*" />
      <input v-model="form.destino" class="default-input" type="text" placeholder="Destino*" />
      <input v-model="form.nome" class="default-input" type="text" placeholder="Nome*" />
      <input v-model="form.sobrenome" class="default-input" type="text" placeholder="Sobrenome*" />
      <input v-model="form.email" class="default-input" type="email" placeholder="E-mail*" />
      <input v-model="form.telefone" class="default-input" type="tel" placeholder="Celular*" />

      <div class="contact-form-message">
        <textarea v-model="form.mensagem" placeholder="Mensagem:" rows="5"></textarea>
      </div>

      <div class="d-flex justify-content-end w-100 contact-form-button">
        <button class="button-primary w-50" @click="sendSuggestion">Enviar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useToastStore } from '@/stores/toastStore'
import FetchService from '@/services/FetchService.js'

const toastStore = useToastStore()

const form = reactive({
  id: '',
  destino: '',
  cidade: '',
  nome: '',
  sobrenome: '',
  email: '',
  telefone: '',
  mensagem: ''
})

const sendSuggestion = async () => {
  try {
    await FetchService.postSuggestion(form)

    toastStore.setToastInfo({
      showToast: true,
      message: 'Sugestão enviada com sucesso!',
      kind: 'success'
    })
  } catch (error) {
    toastStore.setToastInfo({
      showToast: true,
      message: 'Erro ao enviar sugestão',
      kind: 'danger'
    })
  }
}
</script>

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
