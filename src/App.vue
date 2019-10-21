<template>
  <div id="app">
    <b-navbar toggleable="lg" class="bg-light sticky-top" variant="info">
      <b-container>
         <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-navbar-brand  :to="{name: 'home'}"><img class="logo mt-2" src="@/assets/images/appnimals_logo.png"></b-navbar-brand>

          <b-collapse id="nav-collapse" is-nav class="mt-3 justify-content-around" >
            <b-navbar-nav >
              <b-nav-item :to="{name: 'home'}" exact ><mdb-icon icon="home" /> Home</b-nav-item>
              <b-nav-item :to="{name: 'adopta'}"><mdb-icon icon="paw" /> Adopta</b-nav-item>
              <b-nav-item :to="{name: 'protectoras'}"><mdb-icon  icon="hand-holding-heart" /> Protectoras</b-nav-item>
              <b-nav-item @click="logingoogle" v-if="(this.$store.state.user === null || this.$store.state.user === undefined)"><mdb-icon icon="sign-in-alt" /> Login</b-nav-item>
              <b-nav-item :to="{name: 'registro'}" v-if="(this.$store.state.user === null || this.$store.state.user === undefined)"><mdb-icon icon="user-alt" />Registro</b-nav-item>
 
            </b-navbar-nav>
              <b-nav-item-dropdown v-if="(this.$store.state.user != null || this.$store.state.user != undefined)" variant="link" toggle-class="text-decoration-none d-flex justify-content-start" no-caret>
              <template slot="button-content" class="btn dropdown_icon" >
                
                <img :src="this.$store.state.user.photoURL" class="img-fluid rounded-circle z-depth-0 icon_profile" alt="avatar image" >
                
                  </template>
                  <b-dropdown-item class="text-info" :to="{name: 'perfil'}"><mdb-icon icon="user-circle" /> Perfil</b-dropdown-item>
                  <b-dropdown-item class="text-info" :to="{name: 'perfilProtectora'}"><mdb-icon icon="user-circle" /> Perfil Protectora</b-dropdown-item>
                  <b-dropdown-item><mdb-icon far icon="heart" /> Favoritos</b-dropdown-item>
                  <b-dropdown-item @click="logoutgoogle"><mdb-icon icon="user-alt-slash" /> Cerrar Sesión </b-dropdown-item>
            </b-nav-item-dropdown> 
            </b-collapse>
          
      </b-container>
    </b-navbar>
    
    <b-container>
      <router-view></router-view>
    </b-container>
      <footerpage></footerpage>
  </div>
</template>
<script>
import firebase from "firebase"
import footerpage from '@/components/footer.vue'
import router from './router'
import Router from 'vue-router'
import { mdbIcon} from 'mdbvue';

export default {
 data(){
        return{
          
        }
    },
  components: {
    mdbIcon,
      footerpage,
    },

    methods:{
      logingoogle: function() {
      var provider = new firebase.auth.GoogleAuthProvider(); // añadido desde documentación de firebase
      firebase
        .auth()
        .signInWithPopup(provider) // añadido desde doc. de firebase. con esto sale un pop-up para que te autentifiques
        .then(user => {
          console.log("user" + user.displayName);
          if (user) {
            this.$store.commit("setUsers", firebase.auth().currentUser); // En el store mediante el setUsers se guarda nuestros datos de autentificación.
          }
        }).then(() => router.replace('/'))
        ;
        
      console.log("Login");
      },

  logoutgoogle: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$store.state.user = null; // Sign-out successful.
          console.log("Logout");
        })
        .catch(function(error) {
          console.log("Error logout"); // An error happened.
        })
        .then(() => router.replace('/'))
        
      }
    }
}
</script>

<style scoped>
#app{
  overflow-x:hidden;
  }

.dropdown{
    list-style: none;
        width: 100px;
}
.icon_profile{
width: 100%;
}
.bg-black{
  background-color: black !important;
}
.logo{
  width: 150px;
}

.navbar-light .navbar-nav a.nav-link {
     color: #0c85a4!important;
    font-size: 1.2em;
        font-weight: 400;

}
.navbar-light .navbar-nav a.nav-link:hover {
     color: black!important;
    font-size: 1.2em;
        font-weight: 400;

}
@media (max-width: 400px) {
.navbar-light .navbar-nav a.nav-link {
     color: #0c85a4!important;
    font-size: 0.9em;
        font-weight: 400;

}
.navbar-light .navbar-nav a.nav-link:hover {
     color: black!important;
    font-size: 0.9em;
        font-weight: 400;

}

}
</style>
