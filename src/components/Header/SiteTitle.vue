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
  }
}
</style>
