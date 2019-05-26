<template>
  <section class="main">
    <main-header />
    <main-content />
    <test v-if="$store.state.isDialog"/>
  </section>
</template>

<script>
import MainHeader from './components/Header.vue';
import MainContent from './components/Content.vue';
import Test from './components/Test.vue';

export default {
  name: 'app',
  components: {
    MainHeader,
    MainContent,
    Test,
  },
};
</script>

<style lang="scss">
body {
  font-family: 'MuseoCyrlRegular' !important;
  overflow-x: hidden;
  line-height: 1.42857143;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
  color: black;
}

.main {
  background: url(~@/assets/img/bg.jpg) center no-repeat fixed;
  background-size: cover;
  min-height: 100vh;
}

.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
</style>
