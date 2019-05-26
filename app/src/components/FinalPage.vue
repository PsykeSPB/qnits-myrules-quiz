<template>
  <div v-if="isLoading"
    class="w-100 h-100 d-flex flex-column justify-content-center align-items-center"
  >
    <div class="mt-2 position-relative">
      <p class="text-white font-weight-bold">
        👌 Подсчёт результатов...
      </p>
    </div>
    <radial-loader
      :diameter="200"
      :completed-steps="completedSteps"
      :total-steps="totalSteps"
      :animateSpeed="200"
    >
    <p class="mb-0 text-white font-weight-bold">{{ completedSteps }}%</p>
    </radial-loader>
  </div>
  <div v-else class="test-modal">
    <img
      src="~@/assets/img/cross.svg"
      alt="close modal"
      class="test-modal__close"
      @click="$store.commit('toggleDialog')"
    />
    <div class="final-page">
      <div class="last-step mb-2">👏 Отлично, остался последний шаг.</div>
      <div class="progress" style="height: 18px;">
        <div class="progress-bar progress-bar-striped bg-success font-weight-bolder"
          role="progressbar"
          :style="`background-size: 3em 3em; width: ${$store.getters.progress}%`"
        >
          {{ $store.getters.progress }}%
        </div>
      </div>
      <hr class="questions__separator">
      <div class="final-page__text">
        Поздравляем, вы получили максимальную скидку!
        <br>Заполните форму и получите пару носков всего за 199р*
        <p class="final-page__subtitle">
          Цена действительна при заказе 2х упаковок носков.
          После заполнения формы наш менеджер свяжется с Вами и уточнит размер и цвет.
        </p>
      </div>
      <div class="final-page__form">
        <div class="bonus-final">
          <img src="~@/assets/img/curve.svg" class="bonus-final__img">
          <div class="bonus-final__title">Ваши бонусы</div>
            <div class="bonus-final__block">
                <div class="bonus-final__discount">
                    <div class="bonus-final__discount_bg"></div>
                    <div class="bonus-final__discount_text">Подарок:</div>
                    <div class="bonus-final__discount_value">
                      {{ $store.state.prize }}₽
                    </div>
                </div>
            </div>
        </div>
        <final-page-form/>
      </div>
    </div>
  </div>
</template>

<script>
import RadialLoader from '@/components/RadialLoader.vue';
import FinalPageForm from '@/components/FinalPageForm.vue';

export default {
  name: 'FinalPage',
  components: {
    RadialLoader,
    FinalPageForm,
  },
  data: () => ({
    isLoading: true,
    totalSteps: 100,
    completedSteps: 2,
  }),
  methods: {
    simulate() {
      setTimeout(() => {
        if (this.completedSteps < this.totalSteps) {
          this.completedSteps += 1;
          this.simulate();
        } else {
          this.isLoading = false;
        }
      }, Math.random() * 40);
    },
  },
  mounted() {
    this.simulate();
  },
};
</script>

<style lang="scss">
.final-page {
  padding: 70px 206px 0;
  @media (max-width: 991px) and (min-width: 768px) {
    padding: 70px 32px 0;
  }
  @media (max-width: 991px) {
    padding: 15px 15px 0;
  }

  &__text {
    color: #2e2e54;
    font-size: 26px;
    font-family: 'MuseoCyrlMedium';
    @media (max-width: 991px) {
      font-size: 20px;
    }
    @media (max-width: 767px) {
      font-size: 14px !important;
    }
  }

  &__subtitle {
    font-size: 16px;
    color: #69748c;
    margin-top: 10px;
    padding: 0 32px;
    @media (max-width: 991px) {
      padding: 0;
    }
    @media (max-width: 767px) {
      font-size: 13px;
    }
  }

  &__form {
    margin-top: 50px;
    @media (max-width: 991px) {
      margin: 0;
    }
    @media (max-width: 1199px) and (min-width: 768px) {
      text-align: center;
    }
  }
}

.last-step {
  text-align: center;
}

.bonus-final {
  box-shadow: 0 0 13px 0 rgba(0,0,0,0.11);
  padding: 20px 70px 20px 30px;
  border-left: solid 3px #63b723;
  margin: 60px auto;
  position: relative;
  vertical-align: top;
  width: 245px;
  display: inline-block;
  @media (max-width: 991px) {
    margin: 10px auto;
    padding: 9px 20px 0 30px;
  }
  @media (max-width: 767px) {
    display: block;
  }

  &__img {
    position: absolute;
    width: 45px;
    right: 15px;
    bottom: 10px;
    -webkit-transform: scaleX(-1) rotate(180deg);
    transform: scaleX(-1) rotate(180deg);
    @media (max-width: 991px) {
      display: none;
    }
  }

  &__title {
    color: #2e2e54;
    margin-bottom: 8px;
    font-family: 'MuseoCyrlBlack';
    font-size: 16px;
    @media (max-width: 991px) {
      font-size: 14px;
    }
  }

  &__discount {
    height: 60px;
    position: relative;
    padding: 13px 0;
    margin-bottom: 15px;

    &_bg {
      background: url(~@/assets/img/bonus_bg.jpg);
      background-size: 100%;
      opacity: 0.3;
      border-radius: 5px;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
    }

    &_text {
      text-transform: uppercase;
      font-size: 10px;
      text-align: center;
      color: #2e2e54;
      font-family: 'MuseoCyrlBlack';
    }

    &_value {
      text-align: center;
      color: #000;
      font-size: 20px;
      font-family: 'MuseoCyrlBlack';
    }
  }
}
</style>
