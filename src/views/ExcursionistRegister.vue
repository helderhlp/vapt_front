<template>
  <div class="register">
    <div class="register-header">
      <div class="register-container">
        <h1>CADASTRO DE EXCURSIONISTA</h1>
        <h2>
          CONTROLE E FATURE MAIS COM AS SUAS EXCURSÕES OU <br />
          SE TORNE UM(A) EXCURSIONISTA PARA TER UMA RENDA EXTRA.
        </h2>
      </div>
    </div>
    <div class="register-form">
      <p class="register-form-title">Dados de Login</p>
      <div class="register-form-inputs">
        <input v-model="registerForm.nome" class="default-input" type="text" placeholder="Nome*" />
        <input
          v-model="registerForm.sobrenome"
          class="default-input"
          type="text"
          placeholder="Sobrenome*"
        />
        <input
          v-model="registerForm.email"
          class="default-input"
          type="email"
          placeholder="E-mail*"
        />
        <input
          class="default-input"
          v-model="registerForm.email"
          type="email"
          placeholder="Confirme o E-mail*"
        />
        <input
          class="default-input"
          v-model="registerForm.senha"
          type="password"
          placeholder="Senha*"
        />
        <input
          v-model="registerForm.senha"
          class="default-input"
          type="password"
          placeholder="Confirme a Senha*"
        />
        <div class="d-flex justify-content-end w-100">
          <p>Visualizar Senha</p>
        </div>
      </div>
      <div class="register-form-radio">
        <input id="PF" type="radio" name="tipo_pessoa" value="PF" v-model="registerForm.tipo" />
        <label for="PF">Pessoa Física</label>
        <input id="PJ" type="radio" name="tipo_pessoa" value="PJ" v-model="registerForm.tipo" />
        <label for="PJ">Pessoa Jurídica</label>
      </div>
      <div class="d-flex justify-content-between gap-1">
        <input
          v-model="registerForm.cpf"
          class="default-input w-50"
          type="text"
          placeholder="CPF / CNPJ*"
        />
        <input
          v-model="registerForm.data_nascimento"
          class="default-input w-25"
          type="date"
          placeholder="Data Nasc."
        />
        <select class="w-25" v-model="registerForm.sexo">
          <option value="">Sexo</option>
          <option value="M">Masc.</option>
          <option value="F">Fem.</option>
        </select>
      </div>
      <div class="d-flex justify-content-between gap-1 mt-2">
        <input
          v-model="registerForm.nome_fantasia"
          class="default-input w-50"
          type="text"
          placeholder="Nome Fantasia*"
        />
        <input
          v-model="registerForm.razao_social"
          class="default-input w-50"
          type="text"
          placeholder="Razão Social*"
        />
      </div>
      <div class="d-flex justify-content-between gap-1 mt-2">
        <input class="default-input w-50" type="text" placeholder="Inscrição Estadual*" />
        <input class="default-input w-50" type="text" placeholder="Inscrição Municipal*" />
      </div>
      <div class="d-flex justify-content-between gap-1 mt-2 mb-3">
        <input
          v-model="registerForm.tel_celular"
          class="default-input w-50"
          type="tel"
          placeholder="Celular*"
        />
        <input
          v-model="registerForm.tel_fixo"
          class="default-input w-50"
          type="tel"
          placeholder="Telefone"
        />
      </div>
      <p class="register-form-title mb-3">Endereço</p>
      <div class="d-flex justify-content-between gap-1">
        <input
          v-model="registerForm.cep"
          class="default-input w-30"
          type="text"
          placeholder="CEP*"
        />
        <input
          v-model="registerForm.endereco"
          class="default-input w-70"
          type="text"
          placeholder="Logradouro"
        />
      </div>
      <div class="d-flex justify-content-between gap-1 mt-2">
        <input
          v-model="registerForm.numero"
          class="default-input w-25"
          type="text"
          placeholder="Número*"
        />
        <input
          v-model="registerForm.complemento"
          class="default-input w-25"
          type="text"
          placeholder="Complem."
        />
        <input class="default-input w-50" type="text" placeholder="Bairro*" />
      </div>
      <div class="d-flex gap-1 mt-2 mb-3">
        <input
          v-model="registerForm.cidade"
          class="default-input w-50"
          type="text"
          placeholder="Cidade*"
        />
        <input
          v-model="registerForm.uf"
          class="default-input w-25"
          type="text"
          placeholder="Estado*"
        />
      </div>
      <p class="register-form-title mb-3">Dados Bancários</p>
      <div class="d-flex justify-content-between gap-1">
        <input
          v-model="registerForm.id_banco"
          class="default-input w-50"
          type="text"
          placeholder="Banco*"
        />
        <input
          v-model="registerForm.tipo_conta"
          class="default-input w-50"
          type="text"
          placeholder="Tipo de Conta*"
        />
      </div>
      <div class="d-flex justify-content-between gap-1 mt-2 mb-3">
        <input
          v-model="registerForm.agencia_conta"
          class="default-input w-25"
          type="text"
          placeholder="Agência*"
        />
        <input
          v-model="registerForm.numero_conta"
          class="default-input w-50"
          type="text"
          placeholder="Conta*"
        />
        <input
          v-model="registerForm.digito_conta"
          class="default-input w-25"
          type="text"
          placeholder="Dígito*"
        />
      </div>
      <p class="register-form-title mb-3">PIX</p>
      <div class="d-flex justify-content-between gap-1">
        <select class="w-30" v-model="registerForm.pix_tipo">
          <option value="">Tipo</option>
          <option value="CPF/CNPJ">CPF/CNPJ</option>
        </select>
        <input
          v-model="registerForm.pix_chave"
          class="default-input w-70"
          type="text"
          placeholder="Chave"
        />
      </div>
      <div class="register-form-checkbox">
        <div>
          <input id="receive-offers" type="checkbox" name="receive-offers" />
          <label for="receive-offers"
            >Quero receber ofertas exclusivas e novidades por e-mail</label
          >
        </div>
      </div>
      <p class="register-form-link">
        Clicando em "Cadastrar" você aceita nossos
        <router-link to="/termos-condicoes">termos de uso</router-link> e
        <router-link to="/politica-privacidade">política de privacidade</router-link>
      </p>
      <div class="d-flex justify-content-end">
        <button class="button-primary" @click="registerExcursionist">CADASTRAR</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import FetchService from '@/services/FetchService.js'

const registerForm = reactive({
  id: '1',
  id_status: '2',
  id_tipo: '1',
  usuarios_id: '32',
  data_nascimento: '',
  tel_celular: '',
  tel_fixo: '',
  tipo: '',
  cpf: '',
  confirmado: '1',
  id_banco: '',
  nome_titular: '',
  agencia_conta: '',
  numero_conta: '',
  digito_conta: '',
  tipo_conta: '',
  nome_fantasia: '',
  razao_social: '',
  endereco: '',
  complemento: '',
  cidade: '',
  uf: '',
  cep: '',
  numero: '',
  nome: '',
  sexo: '',
  id_recebedor: 're_ckdta27i304g52c6fcfv86vrj',
  executivo: '0',
  excursao: '1',
  pix_tipo: '',
  pix_chave: '',
  email: '',
  senha: ''
})

const registerExcursionist = async () => {
  try {
    const response = await FetchService.registerExcursionist(registerForm)

    console.log(response)
  } catch (error) {
    console.log(error)
  }
}
</script>

<style lang="scss" scoped>
.register {
  margin-top: 1rem;

  &-container {
    max-width: 110rem;
    margin: auto;
  }

  &-header {
    background-image: url('@/assets/images/excursionista_header.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 7rem 0;

    h1 {
      margin-bottom: 0.4rem;
    }
  }

  &-form {
    max-width: 75rem;
    margin: 6rem auto;

    &-title {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1.6rem;
    }

    &-inputs {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 1.4rem;

      input {
        width: 47%;
      }
    }

    &-radio {
      margin-bottom: 1.6rem;

      label {
        display: inline;
        font-weight: 600;
      }
    }

    &-checkbox {
      margin-top: 1.2rem;
      margin-bottom: 1.4rem;

      label {
        display: inline;
      }
    }
  }
}

@media (max-width: 992px) {
  .register {
    &-header {
      padding: 2rem 4rem;
    }

    &-form {
      margin-top: 0;
      margin-bottom: 0;
      padding: 2rem;

      &-inputs {
        input {
          width: 100%;
        }
      }
    }
  }
}
</style>
