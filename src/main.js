import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from "vue-resource"
import { BootstrapVue, IconsPlugin } from "bootstrap-vue"

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
