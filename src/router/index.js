import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import Entertainment from '../views/Entertainment.vue'
import Draw from '../views/entertainment/Draw.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu,
  },
  {
    path: '/entertainment',
    name: 'Entertainment',
    component: Entertainment,
  },
  {
    path: '/entertainment/draw',
    name: 'Draw',
    component: Draw,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
