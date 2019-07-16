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
              <b-nav-item :to="{name: 'login'}" ><mdb-icon icon="sign-in-alt" /> Login</b-nav-item>
              <b-nav-item :to="{name: 'registro'}" ><mdb-icon icon="user-alt" />Registro</b-nav-item>
 
            </b-navbar-nav>
                       <b-nav-item-dropdown variant="link" toggle-class="text-decoration-none d-flex justify-content-start" no-caret>
              <template slot="button-content" class="btn dropdown_icon" >
                
                <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" class="img-fluid rounded-circle z-depth-0 icon_profile" alt="avatar image" >
                
                  </template>
                  <b-dropdown-item class="text-info"><mdb-icon icon="user-circle" /> Perfil</b-dropdown-item>
                  <b-dropdown-item><mdb-icon far icon="heart" /> Favoritos</b-dropdown-item>
                  <b-dropdown-item><mdb-icon icon="user-alt-slash" /> Cerrar Sesión </b-dropdown-item>
            </b-nav-item-dropdown> 
            </b-collapse>
<!--           
          <b-nav-item-dropdown right variant="link" toggle-class="text-decoration-none d-flex justify-content-end" no-caret>
              <template slot="button-content" class="btn dropdown_icon" >
                
                <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" class="img-fluid rounded-circle z-depth-0 icon_profile" alt="avatar image" >
                
                </template>
                <b-dropdown-item class="text-info">Perfil</b-dropdown-item>
                <b-dropdown-item>Favoritos</b-dropdown-item>
 
          </b-nav-item-dropdown>  -->
          
      </b-container>
    </b-navbar>
    
    <b-container>
      <router-view></router-view>
    </b-container>
  </div>
</template>
<script>
import { mdbIcon} from 'mdbvue';

export default {
  components: {
    mdbIcon,
    },
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
