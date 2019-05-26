<template>
  <div class="offer">
    <div class="offer__text">Пройди тест и забери пару всего за 199 рублей*</div>
    <button tag="button"
      class="offer__btn"
      id="offerBtn"
      @click="$store.commit('toggleDialog')"
    >
      пройти тест
    </button>
    <div class="offer__subtitle">*действительно при заказе двух упаковок</div>
  </div>
</template>

<script>
export default {
  name: 'Offer',
};
</script>

<style lang="scss">
@import "~@/assets/sass/shared";

.offer {
  margin-top: 25px;
  @media (max-width: 1199px) and (min-width: 992px) {
    margin-top: 0;
  }
  @media (max-width: 991px) and (min-width: 768px) {
    margin-top: 0;
  }
  @media (max-width: 767px) {
    margin-top: 10px;
  }

  &__text {
    font-family: 'MuseoCyrlBlack';
    color: #333;
    font-size: 20px;
    text-align: center;
  }

  &__btn {
    position: relative;
    width: 400px;
    outline: none;
    border: none;
    display: block;
    border-radius: 5px;
    border-bottom: 4px solid $action-color-sec;
    font-size: 20px;
    font-family: 'MuseoCyrlBlack';
    text-align: center;
    background-color: $action-color;
    color: #fff;
    text-transform: uppercase;
    padding: 15px 50px;
    margin-top: 20px;
    transition: 0.4s;
    text-decoration: none !important;
    @media (max-width: 767px) {
      margin: 15px auto;
      width: 100%;
      padding: 10px 50px;
    }

    &:hover {
      background-color: $action-color-active;
    }

    &:after {
      content: '';
      position: absolute;
      background: linear-gradient(to right, rgba(255,255,255,0) 0, rgba(255,255,255,0.3) 100%);
      left: 0;
      top: 0;
      width: 15%;
      height: 100%;
      -webkit-transform: skewX(-25deg);
      transform: skewX(-25deg);
      -webkit-animation: shadow infinite 2s;
      animation: shadow infinite 2s;
    }
  }

  &__subtitle {
    font-size: 16px;
    text-align: center;
    margin-top: 5px;
  }
}

@-webkit-keyframes shadow {
  from {
    left: -100px;
  }
  50% {
    opacity: 1;
  }
  to {
    left: 450px;
    opacity: 0;
  }
}
@keyframes shadow {
  from {
    left: -100px;
  }
  50% {
    opacity: 1;
  }
  to {
    left: 450px;
    opacity: 0;
  }
}
</style>
