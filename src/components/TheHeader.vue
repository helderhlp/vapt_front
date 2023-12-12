<template>
  <header>
    <nav v-if="!isMobileScreen" class="menu">
      <ul class="d-flex justify-content-center gap-7">
        <li><router-link :to="{ name: 'home' }"> Vaptou </router-link></li>
        <li><router-link :to="{ name: 'destinies' }"> Destinos </router-link></li>
        <li><router-link :to="{ name: 'all-excursions' }"> Todas Excursões </router-link></li>
        <li><router-link :to="{ name: 'contact' }"> Contato </router-link></li>
      </ul>
    </nav>
    <nav v-else class="mobile-menu">
      <div v-if="!isMenuOpen" class="mobile-menu-open-icon">
        <img src="@/assets/images/hamburguer-icon.png" @click="toogleMenu" />
      </div>

      <ul v-if="isMenuOpen" class="mobile-menu-links">
        <li><router-link :to="{ name: 'destinies' }"> Destinos </router-link></li>
        <li><router-link :to="{ name: 'all-excursions' }"> Todas Excursões </router-link></li>
        <li><router-link :to="{ name: 'contact' }"> Contato </router-link></li>
        <li>
          <router-link :to="{ name: 'excursionist-register' }">
            Cadastrar como Excursionista
          </router-link>
        </li>
        <li><router-link :to="{ name: 'login' }"> Entrar </router-link></li>
        <li><router-link :to="{ name: 'login' }"> Cadastre-se </router-link></li>
      </ul>

      <div v-if="isMenuOpen" class="mobile-menu-close-icon">
        <img src="@/assets/images/close-hamburguer-icon.png" @click="toogleMenu" />
      </div>
    </nav>
    <div class="actions-bar d-flex align-items-center justify-content-between">
      <div class="search-bar d-flex align-items-center justify-content-between">
        <router-link :to="{ name: 'home' }">
          <img src="@/assets/images/logo.png" alt="Logo Vaptou" />
        </router-link>

        <!-- <input
          v-model="city"
          class="green-input search-bar-input"
          type="text"
          placeholder="Selecione sua cidade"
        /> -->
      </div>

      <div class="actions-bar-buttons">
        <button class="button-secondary excursionist-button">
          <div class="d-flex align-items-center gap-1">
            <img src="@/assets/images/user-tag.png" />
            <p>
              <router-link :to="{ name: 'excursionist-register' }">
                Cadastrar como Excursionista
              </router-link>
            </p>
          </div>
        </button>

        <button
          v-if="!isMobileScreen"
          class="button-gray"
          :class="{ 'remover-border-radius': isDropdownOpen }"
          @click="tooggleAccountDropdown"
        >
          <div class="d-flex align-items-center gap-1">
            <img src="@/assets/images/user.png" />
            <div>
              Minha Conta / Cadastre-se
              <span class="arrow" :class="{ up: isDropdownOpen, down: !isDropdownOpen }"></span>
            </div>
          </div>
        </button>
        <div v-if="isDropdownOpen" class="actions-bar-buttons-account-dropdown">
          <p><router-link :to="{ name: 'login' }"> Entrar </router-link></p>
          <p><router-link :to="{ name: 'login' }"> Cadastre-se </router-link></p>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useUtils } from '@/composables/useUtils'

const router = useRouter()

const { isMobileScreen } = useUtils()

const city = ref('')
const isDropdownOpen = ref(false)
const isMenuOpen = ref(false)

const tooggleAccountDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const toogleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

router.beforeResolve(() => {
  toogleMenu()
})
</script>

<style lang="scss" scoped>
.menu {
  background: $light-green;
  padding: 1.2rem 0;
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background: $light-green;

  &-open-icon {
    display: flex;
    justify-content: flex-end;
    padding: 1.2rem 4rem 1.2rem 0;

    img {
      cursor: pointer;
    }
  }

  &-close-icon {
    display: flex;
    justify-content: center;

    img {
      cursor: pointer;
      padding: 2rem;
    }
  }

  &-links {
    text-align: right;
    padding: 4rem 4rem 0 4rem;

    li {
      padding-bottom: 1rem;
      padding-top: 1rem;
      border-bottom: 1px solid #707070;

      a {
        text-decoration: none;
        font-size: 1.2rem;
        font-style: italic;
      }
    }
  }
}

.actions-bar {
  max-width: 100rem;
  margin: auto;
  padding: 2rem;
  flex-wrap: wrap;
  position: relative;

  &-buttons {
    &-account-dropdown {
      width: 22.7rem;
      padding: 0.7rem 1.2rem 1.6rem 0;
      position: absolute;
      background-color: $body-color;
      color: $white;
      text-align: right;
      right: 2rem;
      z-index: 1;

      p {
        font-size: 1.5rem;
        font-style: italic;
        margin-bottom: 0.4rem;

        a {
          color: $white;
          text-decoration: none;
        }
      }
    }
  }
}

.excursionist-button {
  p {
    font-size: 1.2rem;
    font-style: italic;

    a {
      color: $white;
      text-decoration: none;
    }
  }
}

.search-bar {
  &-input {
    margin-left: 10rem;
  }
}

.excursionist-button {
  margin-right: 2rem;
}

a {
  color: $body-color;

  &:hover {
    color: $primary;
  }
}

.remover-border-radius {
  border-bottom-left-radius: unset;
  border-bottom-right-radius: unset;
}

@media (max-width: 992px) {
  .search-bar {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 2rem;

    &-input {
      margin-left: 0;
    }
  }

  .actions-bar-buttons {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .excursionist-button {
    width: 100%;
    margin-right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
