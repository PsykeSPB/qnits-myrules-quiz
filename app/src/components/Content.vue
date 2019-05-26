<template>
  <div class="content">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-3">
          <img class="content-image" src="~@/assets/img/product.png" alt="My rules white sock">
        </div>
        <div class="col-12 col-md-9">
          <div class="content-wrapper">
            <h1 class="content-title">
              My Rules -
              <span class="content-subtitle">
                новый уровень комфорта
              </span>
              для твоих ног
            </h1>
            <content-advantages />
            <content-offer />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentAdvantages from '@/components/Advantages.vue';
import ContentOffer from '@/components/Offer.vue';

export default {
  name: 'Content',
  components: {
    ContentAdvantages,
    ContentOffer,
  },
};
</script>

<style lang="scss">
@import "~@/assets/sass/shared";

.container {
  @media (max-width: 767px) {
    max-width: 100%;
  }
}

.content {
  margin-top: 10px;
  position: relative;

  &-image {
    width: 568px;
    position: absolute;
    top: 100px;
    z-index: 1;
    @media (max-width: 1199px) and (min-width: 992px) {
      width: 475px;
    }
    @media (max-width: 991px) and (min-width: 768px) {
      width: 300px;
      top: 232px;
    }
    @media (max-width: 767px) {
      display: none;
    }
  }

  &-wrapper {
    padding: 24px 24px 48px 240px;
    border: 5px solid $secondary-color-hl;
    position: relative;
    @media (max-width: 1199px) and (min-width: 992px) {
      padding: 0 24px 24px 148px;
    }
    @media (max-width: 991px) and (min-width: 768px) {
      padding: 0 24px 24px 36px;
    }
    @media (max-width: 767px) {
      text-align: center;
      padding: 0 12px 24px;
    }
  }

  &-title {
    font-size: 45px;
    font-family: 'MuseoCyrlBlack';
    margin-bottom: 20px;
    @media (max-width: 1199px) and (min-width: 992px) {
      font-size: 42px;
    }
    @media (max-width: 991px) and (min-width: 768px) {
      font-size: 35px;
    }
    @media (max-width: 767px) {
      font-size: 20px;
    }
  }

  &-subtitle {
    color: #63b723;
  }
}
</style>
