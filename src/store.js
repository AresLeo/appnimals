import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import Router from 'vue-router'
import firebase from "firebase";
import "firebase/auth";
import "firebase/database";


// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/database");


Vue.use(Vuex, Router, router)

export default new Vuex.Store({
  state: {
    rol: null,
    user: null,
    photoURL: null,
    loadedAnimals:[],
    loadedProtectoras:[],
    provincias:[  
      {"nprov": "Alava"},
      {"nprov": "Albacete"},
      {"nprov": "Alicante"},
      {"nprov": "Almería"},
      {"nprov": "Asturias"},
      {"nprov": "Ávila"},
      {"nprov": "Badajoz"},
      {"nprov": "Barcelona"},
      {"nprov": "Burgos"},
      {"nprov": "Cáceres"},
      {"nprov": "Cádiz"},
      {"nprov": "Cantabria"},
      {"nprov": "Castellón"},
      {"nprov": "Ciudad Real"},
      {"nprov": "Córdoba"},
      {"nprov": "La Coruña"},
      {"nprov": "Cuenca"},
      {"nprov": "Gerona"},
      {"nprov": "Granada"},
      {"nprov": "Guadalajara"},
      {"nprov": "Guipúzcoa"},
      {"nprov": "Huelva"},
      {"nprov": "Huesca"},
      {"nprov": "Islas Baleares"},
      {"nprov": "Jaén"},
      {"nprov": "León"},
      {"nprov": "Lérida"},
      {"nprov": "Lugo"},
      {"nprov": "Madrid"},
      {"nprov": "Málaga"},
      {"nprov": "Murcia"},
      {"nprov": "Navarra"},
      {"nprov": "Orense"},
      {"nprov": "Palencia"},
      {"nprov": "Las Palmas"},
      {"nprov": "Pontevedra"},
      {"nprov": "La Rioja"},
      {"nprov": "Salamanca"},
      {"nprov": "Segovia"},
      {"nprov": "Sevilla"},
      {"nprov": "Soria"},
      {"nprov": "Tarragona"},
      {"nprov": "Santa Cruz de Tenerife"},
      {"nprov": "Teruel"},
      {"nprov": "Toledo"},
      {"nprov": "Valencia"},
      {"nprov": "Valladolid"},
      {"nprov": "Vizcaya"},
      {"nprov": "Zamora"},
      {"nprov": "Zaragoza"}
      ],
    pesos:[
      {"peso": "< 1 kg"},
      {"peso": "Entre 1 - 5 kg"},
      {"peso": "Entre 5- 10 kg"},
      {"peso": "Entre 10 - 15 kg"},
      {"peso": "Entre 15 - 20 kg"},
      {"peso": "Entre 20 - 30 kg"},
      {"peso": "Entre 30 - 40 kg"},
      {"peso": " + 40 kg"}
      ],
    especies:[
      {"especie": "Perro"},
      {"especie": "Gato"},
      {"especie": "Conejo"},
      {"especie": "Cobaya"},
      {"especie": "Ave"},
      {"especie": "Roedor"},
      {"especie": "Cerdo"},
      {"especie": "Reptil"},
      {"especie": "Otros"},
      ],
    size: [
      {tamaño: "Mini"},
      {tamaño: "Pequeño"},
      {tamaño: "Mediano"},
      {tamaño: "Grande"},
      ]
  },
  getters:{
  getAnimalsData(state){
    //console.log("dentro de animals data del getter" + state.loadedAnimals); 
    return state.loadedAnimals
  },
  getProtectorasData(state){
    //console.log(state.loadedProtectoras); 
  return state.loadedProtectoras
  },

  getProvincias(state){
    return state.provincias
  },
  getEspecies(state){
    return state.especies
  },
  getSize(state){
    return state.size
  }
  },
 
  mutations: { // son sets, modifican el state sin tocarlo
    setUsers(state, value) {
      state.user = value // le digo que la variable global user va a pasar a ser un valor.
    },
    
  setAnimalesData(state, value){
  state.loadedAnimals = value
  // console.log("clg value dentro de setAnimalsData"+ value)
  ;
},
setProtectorasData(state, value) {
  state.loadedProtectoras = value ;
},

  },

  methods: {
      filterAnimalesData: function () {

      }
    },
  
 
  actions: {
    getData(context){
      firebase.database().ref('animales').once("value", data => {
          const animales = [];
          const db= data.val();
          for (let key in db){
              animales.push({
                  id:db[key].id,                  
                  protectora:  db[key].protectora,
                  especie:  db[key].especie,
                  codigo: db[key].codigo,
                  nombre: db[key].nombre,
                  sexo: db[key].sexo,
                  edad: db[key].edad,
                  tamaño: db[key].tamaño,
                  peso: db[key].peso,
                  ciudad: db[key].ciudad,
                  descripcion: db[key].descripción,
                  vacunacion: db[key].vacunacion,
                  microchip: db[key].microchip,
                  esterilizacion: db[key].esterilizacion,
                  desparasitacion: db[key].desparasitacion,
                  foto: db[key].foto,
                  estado: db[key].estado,
                  urgencia: db[key].urgencia

              })
          };
          // console.log("console animales dentro de getData" + animales);
          context.commit('setAnimalesData', animales)
      ;
      })
  },
  getProtectorasData(context){
    firebase.database().ref('protectoras').once("value", data => {
        //console.log(data.val());
        const protectoras = [];
        const db= data.val();
        for (let key in db){
            protectoras.push({
                id:db[key].id,                  
                email:  db[key].email,
                typeuser:  db[key].typeuser,
                nombre: db[key].nombre,
                provincia: db[key].provincia,
                ciudad: db[key].ciudad,
                logo: db[key].logo,
                informacion: db[key].informacion,
                website: db[key].website,
                facebook: db[key].facebook,
                instagram: db[key].instagram,
               tasasdopcion: db[key].tasasdopcion,
                requisitosadopcion: db[key].requisitosadopcion,
                ayuda: db[key].ayuda
            

            })
        };
        //console.log("console protectoras dentro de getData " + protectoras);
        context.commit('setProtectorasData', protectoras)
    ;
    })
},

  registrarUser ({commit}, value) {

    firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(
        user => {
          
          const newUser = {
            id: user.uid,
            displayName: value.nombre,
            animales: [],
            favoritos: [],
            rol:[]
          }
          commit('setUsers', newUser)
        }
      )
      .catch(
        error => {
     
          commit('setError', error)
          console.log(error)
        }
      )
  },
  loginUser ({commit}, value) {

    commit('clearError')
    firebase.auth().signInWithEmailAndPassword(value.email, value.password)
  
      .catch(
        error => {
      var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        }
      )
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
        .then(() => router.replace('home'))
        
      }
  },



  
})
