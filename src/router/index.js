import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CookiePolicy from "../views/CookiePolicy.Vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cookiepolicy',
    name: 'CookiePolicy',
    component: CookiePolicy
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
