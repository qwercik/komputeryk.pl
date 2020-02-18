<template>
  <div class="site-title">
    <h1>
      <router-link to="/">komputeryk.pl</router-link>
    </h1>
  </div>
</template>

<style lang="scss" scoped>
.site-title {
  & > h1 {
    font-size: 1.7em;
    margin: 0;

    & > a {
      color: inherit;
      text-decoration: none;

      transition-duration: 0.5s;

      &:hover {
        color: $highlight;
        text-decoration: underline;
      }
    }

    @include mq($until: tablet) {
      font-size: 1.5em;
    }
  }
}
</style>
