<template>
  <header class="header">
    <SiteTitle />
    <Navigation />
  </header>
</template>

<script>
import SiteTitle from '@/components/Header/SiteTitle.vue'
import Navigation from '@/components/Header/Navigation.vue'

export default {
  components: {
    SiteTitle,
    Navigation
  }
}
</script>

<style lang="scss" scoped>
.header {
  grid-row: 1;
  display: flex;
  padding: 20px;
}
</style>
