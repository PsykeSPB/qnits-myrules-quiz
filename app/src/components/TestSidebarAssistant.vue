<template>
  <div class="assistant">
    <div class="assistant__person">
      <div class="assistant__avatar">
        <img src="~@/assets/img/sergey.png"
          class="assistant__avatar-img"
          width="75px" height="75px"
        >
        <div class="assistant__avatar-badge"></div>
      </div>
      <div class="assistant__name">
        <p class="assistant__title">
          Сергей<br>Бодров
        </p>
        <p class="assistant__subtitle">
          Отдел качества<br>My Rules
        </p>
      </div>
    </div>
    <div class="assistant__block">
      <div class="assistant__text-arrow"></div>
      <component v-bind:is="currentStep" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestSidebarAssistant',
  data: () => ({
    currentStep: null,
  }),
  computed: {
    step() {
      return this.$store.state.step;
    },
  },
  watch: {
    step(newValue) {
      this.currentStep = () => import(`@/components/comments/Comment${newValue}.vue`);
    },
  },
  mounted() {
    this.currentStep = () => import('@/components/comments/Comment0.vue');
  },
};
</script>

<style lang="scss">
@import "~@/assets/sass/shared";

.assistant {
  margin-top: 45px;
  margin-bottom: 10px;

  &__block {
    position: relative;
    margin-top: calc(1.6rem - 1px);
  }

  &__avatar {
    position: relative;
    display: inline-block;
    vertical-align: top;

    &-img {
      border-radius: 35px;
    }

    &-badge {
      position: absolute;
      content: '';
      top: 54px;
      left: 54px;
      background-color: $highlight-color;
      border: 2px solid #fff;
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
  }

  &__name {
    display: inline-block;
    margin-left: 10px;
  }

  &__title {
    font-family: 'Ubuntu', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #2e2e54;
    line-height: 1.2;
    margin-bottom: 0;
  }

  &__subtitle {
    font-size: 12px;
    line-height: 1.2;
    color: #69748c;
  }

  &__text {
    font-family: 'Ubuntu', sans-serif;
    font-weight: 500;
    background-color: #fff;
    padding: 5px 10px;
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.1);
    border-radius: 4px;
    font-size: 13px;
    color: #2e2e49;
  }

  &__text-arrow {
    position: absolute;
    width: 0.6rem;
    top: calc((1.3rem + 1px) * -1);
    left: 24px;

    &:before {
      position: absolute;
      content: '';
      border: 0.7rem solid transparent;
      border-bottom-color: #fff;
    }
  }
}
</style>
