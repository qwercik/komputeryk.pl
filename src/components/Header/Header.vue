<template>
  <header class="header" v-on-clickaway="hideMobileMenu">
    <div class="title-with-hamburger">
      <SiteTitle class="site-title" />
      <HamburgerButton @click="showMobileMenu = $event" :value="showMobileMenu"/>
    </div>
    <Navigation :showOnMobile="showMobileMenu" />
  </header>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
import SiteTitle from '@/components/Header/SiteTitle.vue'
import Navigation from '@/components/Header/Navigation.vue'
import HamburgerButton from '@/components/Header/HamburgerButton.vue'

export default {
  components: {
    SiteTitle,
    Navigation,
    HamburgerButton
  },
  data () {
    return {
      showMobileMenu: false
    }
  },
  methods: {
    hideMobileMenu () {
      this.showMobileMenu = false
    }
  },
  mixins: [
    clickaway
  ]
}
</script>

<style lang="scss" scoped>
.header {
  grid-row: 1;
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
}

.title-with-hamburger {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@include mq($until: desktop) {
  .header {
    flex-direction: column;
    align-items: center;
    padding: 20px 40px;
  }

  .title-with-hamburger {
    padding: 25px;
  }
}

@include mq($until: tablet) {
  .header {
    padding: 0;
  }

  .title-with-hamburger {
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
  }
}

</style>
