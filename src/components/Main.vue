<template>
  <main class="main">
    <transition
      name="change"
      mode="out-in"
    >
      <router-view/>
    </transition>
  </main>
</template>

<style lang="scss" scoped>
.main {
  grid-row: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;

  @include mq($until: tablet) {
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px 10px;
    margin: 0;
  }
}

.change-enter-active,
.change-leave-active {
  transition-duration: 0.4s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.change-enter,
.change-leave-active {
  opacity: 0;
}
</style>
