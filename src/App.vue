<template>
  <div id="app">
    <b-navbar toggleable="lg" class="bg-light sticky-top" variant="info">
      <b-container>
         <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-navbar-brand  :to="{name: 'home'}"><img class="logo mt-2" src="@/assets/images/appnimals_logo.png"></b-navbar-brand>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item :to="{name: 'home'}" exact>Home</b-nav-item>
              <b-nav-item :to="{name: 'adopta'}">Adopta</b-nav-item>
              <b-nav-item :to="{name: 'protectoras'}">Protectoras</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
          
          <b-nav-item-dropdown right variant="link" toggle-class="text-decoration-none d-flex justify-content-end" no-caret>
              <template slot="button-content" class="btn dropdown_icon" >
                
                <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" class="img-fluid rounded-circle z-depth-0 icon_profile" alt="avatar image" >
                
                </template>
                <b-dropdown-item class="text-info">Perfil</b-dropdown-item>
                <b-dropdown-item>Favoritos</b-dropdown-item>
 
          </b-nav-item-dropdown> 
          
      </b-container>
    </b-navbar>
    
    <b-container>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<style scoped>


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
     color: #0c85a4;
    font-size: 1.3em;
}
</style>
