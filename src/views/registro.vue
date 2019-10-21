<template> 
<mdb-container >
     <form class="frameform" @submit.prevent="onSignup">
    <p class="h4 text-center mb-4">Registro</p>
    <div class="grey-text">
      <mdb-input label="Nombre" icon="user" v-model="nombre" type="text"/>
      <mdb-input label="Email" icon="envelope" v-model="email" type="email"/>
      <mdb-input label="Confirma tu email" icon="exclamation-triangle" type="text"/>
      <mdb-input label="Contraseña" icon="lock" type="password" v-model="password"/>
  </div>
      <div class="text-center">
      <mdb-btn color="info"  type="submit">Registrar</mdb-btn>
    </div>
  </form>



    </mdb-container>
</template>
<script>
import { mdbInput, mdbBtn, mdbContainer } from 'mdbvue';

import firebase from "firebase"


export default {
   data(){
        return{
    name: "registro",
    nombre:"",
    email: "",
    password: "",
    }
    },
    components: {
      mdbInput,
      mdbBtn,
      mdbContainer
    },
    methods:{

      onSignup () {
        this.$store.dispatch('registrarUser', {nombre: this.nombre, email: this.email, password: this.password})
      },
      // REGISTRAR FIREBASE ANTERIOR
      // registrar: function() {
      //   var email = this.email.toString().trim();
      //   var password = this.password.toString().trim();
      //     firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      //       // Handle Errors here.
      //       var errorCode = error.code;
      //       var errorMessage = error.message;
      //       // ...
      //       console.log(errorCode);
      //       console.log(errorMessage);
      //     });
      // }
    }
}
</script>
<style>
.frameform{
  margin: 20px;
}
</style>
