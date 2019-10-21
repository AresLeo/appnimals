<template>

<mdb-container >
  <!-- Material form login -->
  <form class="frameform"  @submit.prevent="onSignin">
    <!-- PRUEBA: {{this.$store.state.user.displayName}} 
    PRUEBA TODO: {{this.$store.state.user}} -->

    <p class="h4 text-center mb-4">Iniciar sesión</p>
    <div class="grey-text">
      <mdb-input label="Email" icon="envelope" type="email"/>
      <mdb-input label="Password" icon="lock" type="password"/>
    </div>
     <div class="text-center">
      <mdb-btn color="info" >Login</mdb-btn>
    </div>

  </form>
   <div class="text-center">
      <mdb-btn type="submit" color="default" @click="logingoogle" >Login con google <mdb-icon fab icon="google" class="ml-2" /></mdb-btn>
    </div>
    

</mdb-container>

</template>
<script>

import firebase from "firebase";

import main from "@/main.js"

import { mdbInput, mdbBtn , mdbContainer, mdbIcon} from 'mdbvue';
export default {

  
            components: {
            mdbContainer,
            mdbInput,
            mdbBtn,
            mdbIcon
            },
     data(){
        return{
          name: "login",
          email: "",
          password: "",
            }
           
      },
      methods:{
         logingoogle: function() {
      var provider = new firebase.auth.GoogleAuthProvider(); // añadido desde documentación de firebase
      firebase
        .auth()
        .signInWithPopup(provider) // añadido desde doc. de firebase. con esto sale un pop-up para que te autentifiques
        .then(user => {
          console.log(user);
          if (user) {
            this.$store.commit("setUsers", firebase.auth().currentUser); // En el store mediante el setUsers se guarda nuestros datos de autentificación.
          }
        });
      console.log("login");
      
      },
      // login: function(){
         
      //   var email = this.email.toString().trim();
      //   var password = this.password.toString().trim();
      //   firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      //   // Handle Errors here.
      //   var errorCode = error.code;
      //   var errorMessage = error.message;
      //   console.log(errorCode);
      //   console.log(errorMessage);

  
// });
      onSignin () {
        this.$store.dispatch('loginUser', {email: this.email, password: this.password})
      },
      
      
    
    }
}
</script>
<style scoped>
.frameform{
  margin: 20px;
}
</style>
