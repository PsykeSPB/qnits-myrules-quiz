<template>
  <div class="header">
    <div class="container">
      <div class="row">
        <div class="col-sm-3 col-md-3 col-lg-2">
          <img class="logo" src="~@/assets/img/logo.png" alt="My rules logo">
        </div>
        <div class="col-sm-5 col-md-6 col-lg-8"></div>
        <div class="col-sm-4 col-md-3 col-lg-2">
          <div class="header__title">
            My Rules - новый уровень комфорта для твоих ног
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss">
@import "~@/assets/sass/shared";

.header {
  padding-top: 20px;
  @media (max-width: 767px) {
    text-align: center;
    padding: 0 0 10px;
  }

  &__title {
    text-align: right;
    font-size: 16px;
    font-family: 'MuseoCyrlMedium';
    margin: 20px 0;
    @media (max-width: 767px) {
      text-align: center;
      margin: 0;
    }
  }
}
</style>
