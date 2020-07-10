import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)


const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};
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
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "formlogin" */ './views/formlogin.vue')
    },
    {
      path: '/registro',
      name: 'registro',
      component: () => import(/* webpackChunkName: "registro" */ './views/registro.vue')
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: () => import(/* webpackChunkName: "perfil" */ './views/perfil.vue')
    },
    {
      path: '/perfilProtectora',
      name: 'perfilProtectora',
      component: () => import(/* webpackChunkName: "perfil" */ './views/perfilProtectora.vue')
    }
  ]
})
