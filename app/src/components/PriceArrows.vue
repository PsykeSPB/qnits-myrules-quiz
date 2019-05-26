<template>
  <div class="arrows">
    <price-arrows-part />
    <price-arrows-part />
  </div>
</template>

<script>
import PriceArrowsPart from '@/components/PriceArrowsPart.vue';

export default {
  name: 'PriceArrows',
  components: {
    PriceArrowsPart,
  },
};
</script>

<style lang="scss">
@import "~@/assets/sass/shared";

.arrows {
  width: 9px;
  height: 6px;
  grid-gap: 2px;
  position: absolute;
  top: -2px;
  right: -11px;
  display: grid;
  -webkit-animation: move-up 1s infinite;
  animation: move-up 1s infinite;
}

@-webkit-keyframes move-up {
  0% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }

  50% {
    -webkit-transform: translateY(60%);
    transform: translateY(60%);
  }

  to {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
}

@keyframes move-up {
  0% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }

  50% {
    -webkit-transform: translateY(60%);
    transform: translateY(60%);
  }

  to {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
}
</style>
