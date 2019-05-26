<template>
  <div id="test" class="test test--shadow">
    <div class="test-bg"></div>
    <div v-if="!$store.getters.isFinal" class="test-modal">
      <img
        src="~@/assets/img/cross.svg"
        alt="close modal"
        class="test-modal__close"
        @click="$store.commit('toggleDialog')"
      />
      <div class="test-wrapper">
        <div class="row">
          <div class="col-md-8 col-lg-9">
            <div class="questions">
              <div class="questions__title mb-2">
                <img src="~@/assets/img/question.svg" class="questions__title_img">
                <div class="questions__title_text">
                  Пройти тест и получить скидку
                </div>
              </div>
              <div class="progress" style="height: 18px;">
                <div class="progress-bar progress-bar-striped bg-success font-weight-bolder"
                  role="progressbar"
                  :style="`background-size: 3em 3em; width: ${$store.getters.progress}%`"
                >
                  {{ $store.getters.progress }}%
                </div>
              </div>
              <hr class="questions__separator">
              <keep-alive>
                <component v-bind:is="curStep"/>
              </keep-alive>
              <hr class="questions__separator">
              <questions-buttons />
            </div>
          </div>
          <div class="col-md-4 col-lg-3 hidden-sm hidden-xs">
            <test-sidebar />
          </div>
        </div>
      </div>
    </div>
    <final-page v-else/>
  </div>
</template>

<script>
import TestSidebar from '@/components/TestSidebar.vue';
import QuestionsButtons from '@/components/QuestionsButtons.vue';
import FinalPage from '@/components/FinalPage.vue';
import Step0 from '@/components/steps/Step0.vue';
import Step1 from '@/components/steps/Step1.vue';
import Step2 from '@/components/steps/Step2.vue';
import Step3 from '@/components/steps/Step3.vue';
import Step4 from '@/components/steps/Step4.vue';

export default {
  name: 'Test',
  components: {
    TestSidebar,
    QuestionsButtons,
    FinalPage,
    Step0,
    Step1,
    Step2,
    Step3,
    Step4,
  },
  computed: {
    curStep() {
      return `step-${this.$store.state.step}`;
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/sass/shared";

.test {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  bottom: 0;

  &--shadow {
    display: block;
  }

  &-bg {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(25,25,25,0.89);
    position: fixed;
  }

  &-modal {
    width: 1120px;
    background-color: #fff;
    top: 15%;
    left: 0;
    right: 0;
    margin: 0 auto;
    position: absolute;
    padding-bottom: 24px;
    @media (max-width: 1199px) and (min-width: 992px) {
      top: 11%;
      width: 100%;
    }
    @media (max-width: 991px) {
      top: 5%;
      width: 100%;
    }

    &__close {
      width: 16px;
      height: 16px;
      position: absolute;
      right: -25px;
      top: -25px;
      cursor: pointer;
      transition: 0.4s;
      opacity: 0.5;
      @media (max-width: 1199px) and (min-width: 992px) {
        right: 15px;
      }
      @media (max-width: 991px) {
        right: 15px;
      }
    }
  }
}

.questions {
  padding: 30px 30px 25px;
  position: relative;
  min-height: 600px;
  transition: 1s;
  @media (max-width: 1199px) and (min-width: 992px) {
    padding: 30px 15px 25px;
  }
  @media (max-width: 991px) {
    padding: 15px 15px 0;
  }

  &__separator {
    width: 100%;
    @media (max-width: 991px) {
      top: 30px;
    }
  }

  &__title_img {
    width: 18px;
    height: 19px;
    margin-right: 10px;
  }

  &__title_text {
    display: inline-block;
    vertical-align: middle;
    font-size: 16px;
    color: #69748c;
    font-family: 'MuseoCyrlMedium';
  }
}
</style>
