<template>
  <button class="hamburger">
    <HamburgerIcon class="icon" />
  </button>
</template>

<script>
import HamburgerIcon from '@/assets/images/hamburger.svg'
export default {
  components: {
    HamburgerIcon
  }
}
</script>

<style lang="scss">
.hamburger {
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;

  @include mq($from: tablet) {
    display: none;
  }
}

.icon {
  width: 40px;
  height: 40px;
  fill: $mainFont;
  transition-duration: 0.4s;

  &:hover {
    fill: $highlight;
  }
}

</style>
