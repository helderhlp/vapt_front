<template>
  <div class="my-account">
    <div class="my-account-header">
      <div class="my-account-container">
        <h1>MINHA CONTA</h1>
        <h2>CONFIRA SEUS PEDIDOS E MANTENHA SEUS DADOS ATUALIZADOS</h2>
      </div>
    </div>
    <div class="my-account-data">
      <div class="my-account-data-avatar d-flex align-items-center gap-2">
        <img src="@/assets/images/minha_conta_avatar.png" />
        <p class="my-account-data-avatar-name">João Francisco Souza</p>
      </div>
      <div class="my-account-data-accordions">
        <div class="my-account-data-accordions-item">
          <div
            class="d-flex align-items-center gap-1 cursor-pointer"
            @click="toggleAccordion('excursion')"
          >
            <img src="@/assets/images/excursion-icon.png" />
            <p>Excursões</p>
          </div>

          <div v-if="accordionsOptions.excursion" class="my-account-data-accordions-item-content">
            <my-excursion-accordion />
          </div>
        </div>
        <div class="my-account-data-accordions-item">
          <div
            class="d-flex align-items-center gap-1 cursor-pointer"
            @click="toggleAccordion('myData')"
          >
            <img src="@/assets/images/my-data-icon.png" />
            <p>Meus Dados</p>
          </div>

          <div v-if="accordionsOptions.myData" class="my-account-data-accordions-item-content">
            <my-data-accordion />
          </div>
        </div>
        <div class="my-account-data-accordions-item">
          <div
            class="d-flex align-items-center gap-1 cursor-pointer"
            @click="toggleAccordion('myAdress')"
          >
            <img src="@/assets/images/map-pin-icon.png" />
            <p>Meu Endereço</p>
          </div>

          <div v-if="accordionsOptions.myAdress" class="my-account-data-accordions-item-content">
            <my-address-accordion />
          </div>
        </div>
        <div class="my-account-data-accordions-item">
          <div
            class="d-flex align-items-center gap-1 cursor-pointer"
            @click="toggleAccordion('myCards')"
          >
            <img src="@/assets/images/my-cards-icon.png" />
            <p>Meus Cartões</p>
          </div>

          <div v-if="accordionsOptions.myCards" class="my-account-data-accordions-item-content">
            <my-cards-accordion />
          </div>
        </div>
        <div class="my-account-data-accordions-item">
          <div
            class="d-flex align-items-center gap-1 cursor-pointer"
            @click="toggleAccordion('notifications')"
          >
            <img src="@/assets/images/notification-icon.png" />
            <p>Notificações</p>
          </div>

          <div
            v-if="accordionsOptions.notifications"
            class="my-account-data-accordions-item-content fs-15"
          >
            - Sua excursão para Aparecida do Norte está confirmada para o dia 29/09/2020 com saída
            no Largo do Pará na Av. Aquidaban, 1582 - Centro - Campinas/SP ás 3:00 AM. Chegue 15
            minutos Mais cedo para o embarque. Desejamos uma boa viagem.
          </div>
        </div>
        <div class="my-account-data-accordions-item">
          <div
            class="d-flex align-items-center gap-1 cursor-pointer"
            @click="toggleAccordion('discount')"
          >
            <img src="@/assets/images/discount-icon.png" />
            <p>Cupons de Desconto</p>
          </div>

          <div v-if="accordionsOptions.discount" class="my-account-data-accordions-item-content">
            <my-discounts-accordion />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MyExcursionAccordion from '@/components/MyExcursionAccordion.vue'
import MyDataAccordion from '@/components/MyDataAccordion.vue'
import MyAddressAccordion from '@/components/MyAddressAccordion.vue'
import MyCardsAccordion from '@/components/MyCardsAccordion.vue'
import MyDiscountsAccordion from '@/components/MyDiscountsAccordion.vue'

import { reactive } from 'vue'
const accordionsOptions = reactive([
  {
    excursion: false
  },
  {
    myData: false
  },
  {
    myAdress: false
  },
  {
    myCards: false
  },
  {
    notifications: false
  },
  {
    discount: false
  }
])

const toggleAccordion = (name) => {
  accordionsOptions[name] = !accordionsOptions[name]
}
</script>

<style lang="scss" scoped>
.my-account {
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

  &-data {
    max-width: 100rem;
    margin: 10rem auto;

    &-avatar {
      margin-bottom: 4rem;

      &-name {
        font-size: 1.8rem;
        font-weight: 600;
      }
    }

    &-accordions {
      &-item {
        padding: 1.6rem 3.2rem;
        border-top: 1px solid #707070;

        &:last-child {
          border-bottom: 1px solid #707070;
        }

        p {
          font-size: 1.5rem;
          font-weight: 600;
        }

        &-content {
          padding-top: 1rem;
        }
      }
    }
  }
}

@media (max-width: 992px) {
  .my-account {
    &-header {
      padding: 2rem 4rem 4rem 4rem;
    }

    &-data {
      margin-top: 0;
      margin-bottom: 2rem;
      padding: 2rem 4rem;

      &-accordions {
        &-item {
          padding: 1.6rem 0;
        }
      }
    }
  }
}
</style>
