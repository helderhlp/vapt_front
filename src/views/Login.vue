<template>
  <div class="login">
    <div class="login-header">
      <div class="login-container">
        <h1>MINHA CONTA</h1>
        <h2>
          ENCONTRE EXCURSÕES MARAVILHOSAS. <br />
          REÚNA SUA FAMÍLIA OU AMIGOS E VÁ CURTIR.
        </h2>
      </div>
    </div>
    <div class="login-register-container">
      <div class="login-form">
        <p>Login</p>
        <div class="login-form-inputs">
          <input v-model="loginForm.login" class="default-input" type="text" placeholder="E-mail" />
          <input
            v-model="loginForm.password"
            class="default-input"
            type="password"
            placeholder="Senha"
          />
        </div>
        <div class="d-flex justify-content-end">
          <div class="login-form-submit">
            <button class="button-primary" @click="login">ENTRAR</button>
            <nuxt-link>Esqueci a senha</nuxt-link>
          </div>
        </div>
      </div>
      <div class="register-form">
        <p class="register-form-title">Crie uma conta</p>
        <p class="register-form-subtitle">Cadastro inicial</p>
        <div class="register-form-inputs">
          <input class="default-input" type="text" placeholder="Nome*" />
          <input class="default-input" type="text" placeholder="Sobrenome*" />
          <input class="default-input" type="email" placeholder="E-mail*" />
          <input class="default-input" type="email" placeholder="Confirme o E-mail*" />
          <input class="default-input" type="password" placeholder="Senha*" />
          <input class="default-input" type="password" placeholder="Confirme a Senha*" />
        </div>
        <div class="register-form-checkbox">
          <div>
            <input id="receive-offers" type="checkbox" name="receive-offers" />
            <label for="receive-offers"
              >Quero receber ofertas exclusivas e novidades por e-mail</label
            >
          </div>
          <p>Visualizar Senha</p>
        </div>
        <div class="d-flex justify-content-end">
          <p class="register-form-link">
            Clicando em "Cadastrar" você aceita nossos
            <nuxt-link to="/termos-condicoes">termos de uso</nuxt-link> e
            <nuxt-link to="/politica-privacidade">política de privacidade</nuxt-link>
          </p>
        </div>

        <div class="d-flex justify-content-end">
          <button class="button-primary">
            <nuxt-link to="/perfil">CADASTRAR</nuxt-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import FetchService from '@/services/FetchService.js'

const loginForm = reactive({
  login: '',
  password: ''
})

const login = async () => {
  try {
    const response = await FetchService.login(loginForm)

    console.log(response)
  } catch (error) {
    console.log(error)
  }
}
</script>

<style lang="scss" scoped>
.login {
  margin-top: 1rem;

  &-container {
    max-width: 110rem;
    margin: auto;
  }

  &-header {
    background-image: url('@/assets/images/cadastro_header.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 7rem 0;

    h1 {
      margin-bottom: 0.4rem;
    }
  }
}

.login-form {
  &-inputs {
    display: flex;
    gap: 2rem;

    input {
      flex: 1;
    }
  }

  p {
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 2.4rem;
  }

  &-submit {
    width: 49%;
    margin-top: 1.2rem;
    text-align: center;

    button {
      width: 100%;
      margin-bottom: 0.4rem;
    }
  }
}

.register-form {
  &-title {
    margin-top: 3rem;
    margin-bottom: 2rem;
    font-weight: 600;
    font-size: 1.8rem;
  }

  &-subtitle {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 2.4rem;
  }

  &-inputs {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;

    input {
      width: 47%;
    }
  }

  &-checkbox {
    margin-top: 1.2rem;
    margin-bottom: 1.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    margin-top: 1.8rem;
    width: 48.5%;

    a {
      color: $white;
      text-decoration: none;
    }
  }
}

.login-register-container {
  max-width: 75rem;
  margin: 8rem auto;
}

@media (max-width: 992px) {
  .login {
    &-header {
      padding: 2rem 4rem;
    }

    &-register-container {
      margin-top: 0;
      padding: 2rem;
    }
  }

  .register {
    &-form {
      &-inputs {
        input {
          width: 100%;
        }
      }
    }
  }
}
</style>
