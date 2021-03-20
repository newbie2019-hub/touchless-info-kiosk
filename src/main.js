import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/js/init.js'
import '@/assets/css/style.css'
import VueTilt from 'vue-tilt.js'
import VueCarousel from 'vue-carousel';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(VueTilt)
Vue.use(VueCarousel);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
