<template>
<!--     
  <mdb-container>
    <b-nav-item @click="login=true" :class="p-0">Login<mdb-icon icon="user-alt" /></b-nav-item>
    <mdb-modal :show="login" @close="login = false">
      <mdb-modal-header class="text-center">
        <mdb-modal-title tag="h4" bold class="w-100">Sign in</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body class="mx-3 grey-text">
        <mdb-input label="Your email" icon="envelope" type="email" class="mb-5"/>
        <mdb-input label="Your password" icon="lock" type="password"/>
      </mdb-modal-body>
      <mdb-modal-footer center>
        <mdb-btn @click.native="login = false">Login</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
  </mdb-container> -->
<mdb-container >
  <!-- Material form login -->
  <form class="frameform">
    <p class="h4 text-center mb-4">Iniciar sesión</p>
    <div class="grey-text">
      <mdb-input label="Email" icon="envelope" type="email"/>
      <mdb-input label="Password" icon="lock" type="password"/>
    </div>
    <div class="text-center">
      <mdb-btn color="info">Login</mdb-btn>
    </div>
  </form>
      <button @click="logingoogle" color="default">Login con google</button>

</mdb-container>

</template>
<script>
import firebase from "firebase";
import { mdbInput, mdbBtn , mdbContainer, mdbIcon} from 'mdbvue';
export default {

    name: "login",
            components: {
            mdbContainer,
            mdbInput,
            mdbBtn,
            mdbIcon
            },
     data(){
        return{
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
            this.$store.commit("setUsers", firebase.auth().currentUser); // En el store mediante el setUsers se guards nuestros datos de autentificación.
          }
        });
      console.log("login");
      
      },
      
    
    }
}
</script>
<style scoped>
.frameform{
  margin: 20px;
}
</style>
