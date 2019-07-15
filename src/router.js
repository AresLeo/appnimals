import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/adopta',
      name: 'adopta',
      component: () => import(/* webpackChunkName: "adopta" */ './views/Adopta.vue')
    },
    {
      path: '/protectoras',
      name: 'protectoras',
      component: () => import(/* webpackChunkName: "protectoras" */ './views/Protectoras.vue')
    }
  ]
})
