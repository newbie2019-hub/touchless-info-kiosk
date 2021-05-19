import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTilt from 'vue-tilt.js'
import Toast from "vue-toastification";
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'
import VueHorizontal from 'vue-horizontal';

import '@/assets/js/init.js'
import '@/assets/css/style.css'
import '@/assets/css/admin.css'
import 'bootstrap/dist/css/bootstrap.css'
import "vue-toastification/dist/index.css";
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueTilt)
Vue.use(BootstrapVueIcons)
Vue.use(VueHorizontal);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Toast, {
  position: "top-right",
  timeout: 3500,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: false,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: false,
  icon: true,
  rtl: false,
  maxToasts: 1,
  transition: "Vue-Toastification__fade",
  newestOnTop: true,
  filterBeforeCreate: (toast, toasts) => {
  if (toasts.filter(
    t => t.type === toast.type
  ).length !== 0) {
    return false;
  }
  return toast;
}});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
