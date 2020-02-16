<template>
  <div id="app" class="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Main from '@/components/Main.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
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
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
  background: $backgroundMask url(assets/images/background.jpg);
  background-blend-mode: darken;

  background-size: cover;
}
</style>
