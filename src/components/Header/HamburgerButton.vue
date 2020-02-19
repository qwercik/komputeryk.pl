<template>
  <button class="hamburger" @click="changeState">
    <HamburgerIcon class="icon" />
  </button>
</template>

<script>
import HamburgerIcon from '@/assets/images/hamburger.svg'
export default {
  components: {
    HamburgerIcon
  },
  methods: {
    changeState () {
      this.$emit('click', !this.value)
    }
  },
  props: {
    value: Boolean
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
  width: 25px;
  height: 25px;
  fill: $mainFont;
  transition-duration: 0.4s;

  &:hover {
    fill: $highlight;
  }
}

</style>
