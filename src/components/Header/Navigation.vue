<template>
  <nav class="nav">
    <ol>
      <li v-for="(link, index) in navLinks" :key="index">
        <router-link :to="link.path" active-class="active">{{ link.title }}</router-link>
      </li>
    </ol>
  </nav>
</template>

<script>
import routes from '@/router/routes'

export default {
  computed: {
    navLinks () {
      return routes
        .filter(route => !('notRenderInNavbar' in route))
        .map(route => ({
          path: route.path,
          title: route.title
        }))
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  flex: 1;

  & > ol {
    margin: 0;
    list-style-type: none;
    display: flex;

    & > li {
      padding: 10px 20px;
      margin: 0 10px;

      & > a {
        color: inherit;
        text-decoration: none;

        transition-duration: 0.2s;

        &:hover {
          color: white;
          text-decoration: underline;
        }
      }
    }
  }
}

.active {
  /* font-weight: bold; */
  text-shadow: 1px 0 0 white;
  color: white !important;
}
</style>
