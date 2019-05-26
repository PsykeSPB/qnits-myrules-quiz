<template>
  <div class="discount">
    <div class="discount__label">
      Подарок:
    </div>
    <div class="discount__price">
      <div class="discount__value">{{ $store.state.prize }}</div>
      <div class="discount__symbol">₽</div>
      <price-arrows />
    </div>
  </div>
</template>

<script>
import PriceArrows from '@/components/PriceArrows.vue';

export default {
  name: 'TestSidebarDiscount',
  components: {
    PriceArrows,
  },
};
</script>

<style lang="scss">
@import "~@/assets/sass/shared";

.discount {
  background-color: $secondary-color;
  border: 1px solid $secondary-color-hl;
  box-shadow: 0 3px 10px 0 rgba(255,221,111,0.36);
  border-radius: 3px;
  text-align: center;
  color: #2e2e54;
  height: 56px;
  position: relative;

  &__label {
    font-family: 'Ubuntu', sans-serif;
    font-weight: 500;
    position: absolute;
    left: 15px;
    top: 17px;
    margin: auto 0;
  }

  &__price {
    position: absolute;
    right: 20px;
    top: 12px;
  }

  &__value {
    display: inline-block;
    position: relative;
    font-size: 18px;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 500;
    padding-right: 4px;
  }

  &__symbol {
    display: inline-block;
    font-size: 18px;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 500;
  }
}
</style>
