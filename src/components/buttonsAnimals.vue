<template>
   <b-row> 
      <b-col cols="12" md="12" class="justify-content-center big-box oh grab-bing"  v-dragscroll:nochilddrag
            v-on:dragscrollstart="eventTrigged('dragscrollstart')" v-on:dragscrollend="eventTrigged('dragscrollend')"
            v-on:dragscrollmove="eventTrigged('dragscrollmove', $event)">
       <div class="bg_drop" data-dragscroll>
           <b-form-checkbox v-model="checkedTodos" name="check-button" button button-variant="info" class="checkbox_animals m-2" size="normal">
            <img class="icons_animals mt-2" src="@/assets/images/todos.svg">
            <br><b>Todos</b>
          </b-form-checkbox>

          <b-form-checkbox v-model="checkedPerro" name="check-button" button button-variant="info" class="checkbox_animals m-2" size="normal">
            <img class="icons_animals mt-2" src="@/assets/images/dog.png">
            <br><b>Perro</b>
            <!-- Perro(Check: {{ checkedPerro }}) https://image.flaticon.com/icons/svg/194/194177.svg -->
          </b-form-checkbox>

          <b-form-checkbox v-model="checkedGato"  name="check-button" button button-variant="info" class="checkbox_animals m-2" size="normal">
            <img class="icons_animals  mt-2" src="https://image.flaticon.com/icons/svg/802/802353.svg"><br><b>Gato</b>
          </b-form-checkbox>
        
          <b-form-checkbox v-model="checkedConejo" name="check-button" button button-variant="info" class="checkbox_animals m-2" size="normal">
            <img class="icons_animals mt-2" src="https://image.flaticon.com/icons/svg/1642/1642933.svg"><br><b>Conejo</b>
          </b-form-checkbox>
         
          <b-form-checkbox v-model="checkedCobaya" name="check-button" button button-variant="info" class="checkbox_animals m-2" size="normal">
            <img class="icons_animals mt-2" src="@/assets/images/guinea_pig.svg"><br><b>Cobaya</b>
          </b-form-checkbox>
       
          <b-form-checkbox v-model="checkedAve" name="check-button" button button-variant="info" class="checkbox_animals m-2" size="normal">
            <img class="icons_animals mt-2" src="https://image.flaticon.com/icons/svg/1864/1864474.svg"><br><b>Ave</b>
          </b-form-checkbox>
      
          <b-form-checkbox v-model="checkedRoedor" name="check-button" button button-variant="info" class="checkbox_animals m-2" size="normal">
            <img class="icons_animals mt-2" src="@/assets/images/roedor.svg"><br><b>Roedor</b>
          </b-form-checkbox>
       
          <b-form-checkbox v-model="checkedReptil" name="check-button" button button-variant="info" class="checkbox_animals m-2" size="normal">
            <img class="icons_animals mt-2" src="https://image.flaticon.com/icons/svg/720/720885.svg">
            <br><b>Reptil</b>
          </b-form-checkbox>

          <b-form-checkbox v-model="checkedCerdo" name="check-button" button button-variant="info" class="checkbox_animals m-2" size="normal">
            <img class="icons_animals mt-2" src="@/assets/images/pig.png">
            <br><b>Cerdo</b>
          </b-form-checkbox>

          <b-form-checkbox v-model="checkedOtros" name="check-button" button button-variant="info" class="checkbox_animals m-2" size="normal">
            <img class="icons_animals mt-2" src="@/assets/images/hedgehog.svg">
            <br><b>Otros</b>
          </b-form-checkbox>
        </div>

    </b-col>
  </b-row>

</template>

<script>
import { dragscroll } from 'vue-dragscroll'
  export default {
    data() {
      return {
        name: "buttonAnimals",
        checkedTodos: false,
        checkedPerro: false,
        checkedGato: false,
        checkedConejo: false,
        checkedCobaya: false,
        checkedAve: false,
        checkedRoedor: false,
        checkedReptil: false,
        checkedCerdo: false,
        checkedOtros: false,
        eventTrigged:"",
        directives: {
        'dragscroll': dragscroll,
        
        },
      }
    }
  }
</script>

<style>
.big-box::-webkit-scrollbar {
    /* width: 8px;     Tamaño del scroll en vertical */
    /* height: 8px;   Tamaño del scroll en horizontal */
    display: none;  /* Ocultar scroll */
}
.big-box::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 4px;
    display: none;
}

.big-box::-webkit-scrollbar-thumb:active {
    background-color: #999999;
       display: none; 
}

.icons_animals{
  width: 55px;
}
label.btn.btn-info.btn-normal{
   background-color:#83b0c5 !important;
 border-radius: 20px;
}
.grab-bing {
    cursor: -webkit-grab;
    cursor: -moz-grab;
    cursor: -o-grab;
    cursor: grab;
}
.grab-bing:active {
      cursor : -webkit-grabbing;
      cursor : -moz-grabbing;
      cursor : -o-grabbing;
      cursor : grabbing;
    }
.oh {
    overflow: hidden;
}
.big-box {
    width: 400px;
  /* overflow-x: scroll; */
  overflow-y: hidden;
  white-space: nowrap;
}

.bg_drop{
  width: 1100px;
  height: 145px;
}
</style>

