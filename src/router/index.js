import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CookiePolicy from "../views/CookiePolicy.vue";
import PrivacyPolicy from "@/views/PrivacyPolicy";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cookies',
    name: 'CookiePolicy',
    component: CookiePolicy
  },
  {
    path: '/privacy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
