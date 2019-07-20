import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase";



// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/database");


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   typeuser:"",
    user: null,
    loadedAnimals:[],
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
      {"tamaño": "Mini"},
      {"tamaño": "Pequeño"},
      {"tamaño": "Mediano"},
      {"tamaño": "Grande"},

    ]
  },
  getters:{
  getAnimalsData(state){
    console.log(state.loadedAnimals); 
  return state.loadedAnimals
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
}

  },

  methods: {
 
    },
  
 
  actions: {
    getData(context){
      firebase.database().ref('animales').once("value", data => {
          // console.log(data.val());
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
  }
  },



  
})
