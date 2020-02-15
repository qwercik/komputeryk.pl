<template>
  <header class="header">
    <SiteTitle />
    <div class="space"></div>
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
  padding: 20px 50px;
}

.space {
  flex: 1;
}
</style>
