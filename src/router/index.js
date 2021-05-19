import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import Draw from '../views/entertainment/Draw.vue'
import Intro from '../views/Intro.vue'
import Entertainment from '../views/Entertainment.vue'
import Login from '../views/admin/auth/Login.vue'
import Register from '../views/admin/auth/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Intro',
    component: Intro
  },
  {
    path: '/home',
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
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
