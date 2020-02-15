import Vue from 'vue'
import VuePageTitle from 'vue-page-title'
import App from '@/App.vue'
import router from '@/router'

Vue.config.productionTip = false
Vue.use(VuePageTitle, { router })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
