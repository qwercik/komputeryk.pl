<template>
  <header class="header">
     <div class="site-title">
        <h1><router-link to="/">komputeryk.pl</router-link></h1>
      </div>
      <nav class="nav">
        <ol>
          <li v-for="(link, index) in navLinks" :key="index">
            <router-link :to="link.path" active-class="active">{{ link.title }}</router-link>
          </li>
        </ol>
      </nav>
  </header>
</template>

<script>
import routes from '@/router/routes'

export default {
  computed: {
    navLinks () {
      return routes
        .filter(route => route.path !== '/')
        .map(route => ({
          path: route.path,
          title: route.title
        }))
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  grid-row: 1;

  display: flex;
  padding: 20px;
}

.site-title {
  flex: 1;
  margin-left: 50px;

  & > h1 {
    margin: 0;

    & > a {
      color: inherit;
      text-decoration: none;

      transition-duration: 0.5s;

      &:hover {
        color: white;
        text-decoration: underline;
      }
    }
  }
}

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
  font-weight: bold;
}
</style>
