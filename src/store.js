import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    database:[],
  },
  getters:{
    getDatabase(state){
      return state.database;
    }
  },
  mutations: {
    setDatabase(state, value){
      state.database = value;
    },
    
  },
  mounted:{

  },
  actions: {
    getData(context){
      fetch('https://api.myjson.com/bins/cptcf')
      .then(res => res.json())
      .then(json => {
        context.commit("setDatabase", json);
        console.log(json);
      });      
    },
  }
})
