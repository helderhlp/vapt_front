<template>
  <div>
    <div class="city-info">
      <div class="city-info-content">
        <div class="city-info-content-text">
          <h3 class="city-info-content-title">{{ data.titulo }}</h3>
          <div class="city-info-content-rating">
            <star-rating read-only :rating="4" :star-size="24" :show-rating="false" />
            <span class="ml-4">02 avaliações</span>
          </div>
          <p>{{ data.detalhes }}</p>
        </div>
        <city-carousel class="city-info-content-carousel" />
      </div>

      <hr />
    </div>

    <div class="reviews">
      <div class="reviews-review">
        <p class="reviews-title">Avaliações e comentários</p>
        <div v-for="comment in data.comentarios" :key="comment.id" class="comments">
          <div class="d-flex align-items-center reviews-review-item">
            <div class="reviews-reviewer">
              <!-- <img :src="comment.avatar" /> -->
              <!-- <p class="reviews-name">{{ comment.name }}</p> -->
            </div>
            <div>
              <div class="d-flex align-items-center gap-2">
                <p class="reviews-date">Data: {{ convertDate(comment.data) }}</p>

                <star-rating
                  read-only
                  :rating="convertRating(comment.avaliacao)"
                  :star-size="24"
                  :show-rating="false"
                />
              </div>
              <p class="reviews-content">{{ comment.text }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="reviews-make-review">
        <p class="reviews-make-review-title">Fazer uma avaliação</p>

        <star-rating
          class="reviews-make-review-rating"
          :read-only="false"
          :rating="0"
          :star-size="24"
          :show-rating="false"
          @update:rating="setRating"
        />

        <textarea
          v-model="ratingText"
          rows="4"
          placeholder="Conte às pessoas sua experiência com esse destino. Descreva o
lugar ou atividades e faça recomendação para os turistas."
        ></textarea>
        <span class="reviews-make-review-textarea-message"
          >*para fazer uma avaliação, você precisa ser cadastrado na plataforma e estar
          logado(a).</span
        >
        <div class="reviews-make-review-checkbox">
          <div class="d-flex align-items-start">
            <input
              id="review-confirmation"
              type="checkbox"
              name="review-confirmation"
              v-model="isReviewConfirmed"
            />
            <label for="review-confirmation"
              >Certifico que essa avaliação é baseada em minha própria experiência e é minha opinião
              sincera sobre o destino, e não sobre a excursão no geral. Não possuo nenhuma relação
              pessoal ou comercial com as empresas, não tendo recebido incentivo ou pagamento algum
              da empresas para escrevê-la. Compreendo que o Vaptvou possui tolerância zero em
              relação a avaliações falsas.</label
            >
          </div>

          <div class="d-flex justify-content-center reviews-make-review-button">
            <button :disabled="!isReviewConfirmed" class="button-primary" @click="sendRating">
              Envie sua Avaliação
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUtils } from '@/composables/useUtils'
import { useToastStore } from '@/stores/toastStore'
import FetchService from '@/services/FetchService.js'

import CityCarousel from './CityCarousel.vue'
import StarRating from 'vue-star-rating'

const toastStore = useToastStore()

const { convertDate } = useUtils()

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const isReviewConfirmed = ref(false)

const convertRating = (rating) => Number(rating)

const commentRating = ref('')
const setRating = (rating) => (commentRating.value = rating)

const ratingText = ref('')
const sendRating = async () => {
  const payload = {
    usuarios_id: 1,
    destino_viagem_id: 1,
    avaliacao: commentRating.value,
    text: ratingText.value,
    tipo: 'viagem'
  }

  try {
    await FetchService.postRating(payload)

    toastStore.setToastInfo({
      showToast: true,
      message: 'Avaliação enviada com sucesso!',
      kind: 'success'
    })
  } catch (error) {
    toastStore.setToastInfo({
      showToast: true,
      message: 'Erro ao enviar avaliação',
      kind: 'danger'
    })
  }
}
</script>

<style lang="scss" scoped>
.city-info {
  margin-top: 4rem;

  hr {
    max-width: 100%;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  &-content {
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    p {
      font-size: 1.6rem;
      margin-bottom: 2rem;
    }

    &-title {
      font-weight: 1.6rem;
      font-weight: 600;
      color: #707070;
    }

    &-rating {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 23rem;
      margin-bottom: 2rem;

      span {
        margin-top: 3px;
      }
    }

    &-carousel {
      width: 50%;
    }
  }
}

.reviews {
  display: flex;
  max-width: 110rem;
  margin: auto;
  gap: 2rem;

  &-review {
    width: 50%;

    &-item {
      padding-bottom: 1.2rem;
      padding-top: 1.2rem;
      border-bottom: 1px solid #707070;
    }
  }

  &-reviewer {
    margin-right: 4rem;
  }

  &-title {
    font-weight: 600;
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }

  &-name {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 0.4rem;
  }

  &-date {
    font-size: 1.2rem;
    margin-top: 0.3rem;
  }

  &-content {
    margin-top: 0.4rem;
    font-size: 1.5rem;
  }

  &-make-review {
    width: 50%;

    &-title {
      font-size: 1.6rem;
      text-align: center;
      font-weight: 600;
      margin-bottom: 1.2rem;
    }

    &-rating {
      margin-left: 19.5rem;
      margin-bottom: 1.2rem;
    }

    &-textarea-message {
      font-size: 1.1rem;
      margin-bottom: 0.8rem;
      width: 100%;
    }

    &-checkbox {
      margin-top: 1rem;

      input[type='checkbox'] {
        margin-top: 0;
      }
    }

    label {
      font-size: 1.2rem;
    }

    &-button {
      margin-top: 1.5rem;
      margin-bottom: 2.5rem;
    }
  }
}

@media (max-width: 992px) {
  .city-info {
    hr {
      display: none;
    }

    &-content {
      flex-direction: column;

      &-carousel {
        width: 100%;
      }

      &-text {
        padding: 0 4rem;
      }
    }
  }

  .reviews {
    flex-direction: column;
    padding: 3rem 4rem;

    &-review {
      width: 100%;
    }

    &-make-review {
      width: 100%;

      &-rating {
        margin: 0;
        margin-bottom: 1rem;
        display: flex;
        justify-content: center;
      }

      &-button {
        margin-bottom: 0;
      }
    }
  }
}
</style>
