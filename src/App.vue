<template>
  <vue100vh id="app" class="app">
    <Header />
    <Main />
    <Footer />
  </vue100vh>
</template>

<script>
import vue100vh from 'vue-100vh'
import Header from '@/components/Header/Header.vue'
import Main from '@/components/Main.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    vue100vh,
    Header,
    Main,
    Footer
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  color: $mainFont;
}

.app {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: auto;
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
  background: $backgroundMask url(assets/images/background.jpg);
  background-blend-mode: darken;

  background-size: cover;
}

</style>
