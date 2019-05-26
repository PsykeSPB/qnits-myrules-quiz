<template>
  <div class="questions__buttons">
    <button
      v-if="$store.state.step > 0"
      class="prev-button"
      @click="$store.dispatch('prev')"
    >
      <img class="prev-button__img" src="~@/assets/img/arrow.svg">
      <span class="prev-button__text">Назад</span>
    </button>
    <button
      :disabled="$store.getters.isDisabled"
      class="next-button"
      @click="next()"
    >
      <img class="next-button__img" src="~@/assets/img/ok.svg">
      <span class="next-button__text">Далее</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'QuestionsButtons',
  methods: {
    next() {
      this.$store.dispatch('next')
        .then()
        .catch();
    },
  },
};
</script>


<style lang="scss">
@import "~@/assets/sass/shared";

.next-button {
  height: 43px;
  background-color: $action-color;
  padding: 10px 30px;
  -webkit-border-radius: 24px;
  outline: none;
  border-radius: 24px;
  border: none;
  float: right;
  box-shadow: 0 3px 21px 0 $action-color;
  position: relative;
  overflow: hidden;
  transition: 0.5s;

  &:hover {
    background-color: $action-color-active;
  }

  &:focus {
    outline: none;
  }

  &[disabled] {
    opacity: 0.8;
    cursor: not-allowed;
  }

  &:enabled:after {
    content: '';
    position: absolute;
    background: linear-gradient(
      90deg,
      rgba(255,255,255,0.1) 10%,
      rgba(255,255,255,0.2) 20%,
      rgba(255,255,255,0.6)
    );
    -webkit-transform: skewX(-45deg);
    transform: skewX(-45deg);
    width: 20px;
    height: 100%;
    left: -20%;
    top: 0;
    bottom: 0;
    -webkit-animation: blick 4s infinite;
    animation: blick 4s infinite;
  }

  &__img {
    height: 18px;
  }

  &__text {
    color: #fff;
    font-size: 16px;
    font-family: 'MuseoCyrlMedium';
    vertical-align: middle;
    margin-left: 3px;
  }
}

@-webkit-keyframes blick {
    15%, to {
        left: 110%;
    }
}

@keyframes blick {
    15%, to {
        left: 110%;
    }
}

.prev-button {
  box-shadow: 0 3px 13px 0 rgba(0,0,0,0.13) !important;
  height: 43px;
  background-color: transparent;
  padding: 10px 30px;
  -webkit-border-radius: 24px;
  outline: none;
  border-radius: 24px;
  border: none;
  transition: 0.5s;

  &:focus {
    outline: none;
  }

  &__img {
    width: 20px;
    height: 15px;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  &__text {
    color: #4a505e;
    margin-left: 3px;
    font-size: 16px;
    font-family: 'MuseoCyrlMedium';
    vertical-align: middle;
  }

  &:hover {
    background: rgba(255,221,111,0.36);
  }
}
</style>
