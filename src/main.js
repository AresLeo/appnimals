import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//Bootstrap
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-awesome/icons';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbvue/build/css/mdb.css';
// Register dragscroll globally
import VueDragscroll from 'vue-dragscroll'
Vue.use(VueDragscroll)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
