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

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase";

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),

  created() {


 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyD40Gp7rNG-eclTezyCtyZEswNDIGSuUAU",
  authDomain: "appnimals-vue.firebaseapp.com",
  databaseURL: "https://appnimals-vue.firebaseio.com",
  projectId: "appnimals-vue",
  storageBucket: "",
  messagingSenderId: "114348419512",
  appId: "1:114348419512:web:c2c305c7eb18245f"
};
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 


    // para mantenerse logeado
    firebase.auth().onAuthStateChanged(user => { //hacemos esto para que al recargar no se desconecte el user
      if (user) {
        console.log("Hay usuario");
        this.$store.commit("setUsers", firebase.auth().currentUser);
      } else {
        console.log("No user")
        this.$store.commit("setUsers", null);

      }
    })
   


  },


}).$mount('#app')
