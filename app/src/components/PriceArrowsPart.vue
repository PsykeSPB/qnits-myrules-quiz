<template>
  <div class="arrows-parts">
    <div class="arrow arrows-parts__left"></div>
    <div class="arrow arrows-parts__right"></div>
  </div>
</template>

<script>
export default {
  name: 'PriceArrowPart',
};
</script>

<style lang="scss">
@import "~@/assets/sass/shared";

.arrows-parts {
  grid-template-columns: 50% 50%;
  display: grid;

  &__left {
    transform: rotate(-45deg);
    transform-origin: right;
  }

  &__right {
    transform: rotate(45deg);
    transform-origin: left;
  }
}

.arrow {
  height: 2px;
  background: $highlight-color;
  width: 100%;
}
</style>
