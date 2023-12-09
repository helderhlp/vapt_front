<template>
  <div class="contact-form">
    <p class="fw-bold fs-18 mb-4">Contato</p>
    <p class="fs-15 mb-8">
      Selecione o assunto abaixo para enviar sua mensagem ao setor responsável. Caso não tenha a
      opção que deseja e quer nos enviar uma mensagem de dúvida, sugestão, elogio ou reclamação,
      clique em “Outros Assuntos”, preencha o formulário e nos envie que em breve entramos em
      contato. Se preferir, poderá entrar em contato através de nosso Chat online ou pelo WhatsApp
      19 X XXXX-XXXX.
    </p>
    <div class="contact-form-select">
      <select>
        <option value="">Selecione o assunto</option>
      </select>
    </div>

    <div class="contact-form-inputs">
      <input v-model="contactForm.nome" class="default-input" type="text" placeholder="Nome*" />
      <input
        v-model="contactForm.sobrenome"
        class="default-input"
        type="text"
        placeholder="Sobrenome*"
      />
      <input v-model="contactForm.email" class="default-input" type="email" placeholder="E-mail*" />
      <input v-model="contactForm.phone" class="default-input" type="tel" placeholder="Celular*" />

      <div class="contact-form-message">
        <textarea v-model="contactForm.mensagem" placeholder="Mensagem:" rows="5"></textarea>
      </div>

      <div class="d-flex justify-content-end w-100">
        <button class="button-primary w-50" @click="sendContactForm">Enviar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

import FetchService from '@/services/FetchService.js'

const contactForm = reactive({
  id: '',
  nome: '',
  sobrenome: '',
  phone: '',
  email: '',
  mensagem: ''
})

const sendContactForm = async () => {
  try {
    const response = await FetchService.postContact(contactForm)

    console.log(response)
  } catch (error) {
    console.log(error)
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

  &-select {
    max-width: 45rem;
    margin: auto;
    margin-bottom: 3rem;
  }

  &-inputs {
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
    padding: 0 4rem;
  }
}
</style>
