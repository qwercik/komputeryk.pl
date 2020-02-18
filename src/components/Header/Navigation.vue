<template>
  <div>
    <SmoothReflow>
      <nav v-if="!isMobile || showOnMobile" class="nav">
        <ol>
          <li v-for="(link, index) in navLinks" :key="index">
            <router-link :to="link.path" active-class="active">{{ link.title }}</router-link>
          </li>
        </ol>
      </nav>
    </SmoothReflow>
  </div>
</template>

<script>
import { vueWindowSizeMixin } from 'vue-window-size'
import SmoothReflow from '@/components/SmoothReflow.vue'
import routes from '@/router/routes'

export default {
  components: {
    SmoothReflow
  },
  props: {
    showOnMobile: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    navLinks () {
      return routes
        .filter(route => !('notRenderInNavbar' in route))
        .map(route => ({
          path: route.path,
          title: route.title
        }))
    },
    isMobile () {
      const maxMobileWidth = 740
      return this.windowWidth < maxMobileWidth
    }
  },
  mixins: [
    vueWindowSizeMixin
  ]
}
</script>

<style lang="scss" scoped>
.nav {
  & > ol {
    padding: 0;
    margin: 0;
    list-style-type: none;
    text-align: center;
    display: flex;

    @include mq($until: tablet) {
      flex-direction: column;
      text-align: center;
    }

    & > li {
      padding: 10px 20px;
      margin: 0 10px;

      & > a {
        color: inherit;
        text-decoration: none;

        transition-duration: 0.2s;

        &:hover {
          color: $highlight;
          text-decoration: underline;
        }
      }
    }
  }
}

.active {
  text-shadow: 1px 0 0 $highlight;
  color: $highlight !important;
}

</style>
