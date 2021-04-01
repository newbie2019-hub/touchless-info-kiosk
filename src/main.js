import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTilt from 'vue-tilt.js'
import Toast from "vue-toastification";
import config from '@/assets/js/toast-config.js'
import VueSplide from '@splidejs/vue-splide';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import '@/assets/js/init.js'
import '@/assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import "vue-toastification/dist/index.css";
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

Vue.use(VueSplide);
Vue.use(VueTilt)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Toast, {config});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
