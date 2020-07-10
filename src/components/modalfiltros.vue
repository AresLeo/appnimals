<template>
<div>
    <b-row>
        <b-col cols="9">
            <h4 class="mt-4">Para adoptar:</h4>
        </b-col>
         <b-col cols="3" class="d-flex justify-content-end">

    <mdb-btn  class="bt-filters mt-3" color="default" @click.native="showfilters=true"><mdb-icon icon="sliders-h" class="ml-1 "/></mdb-btn>
    <mdb-modal :show="showfilters" @close="showfilters = false">
      <mdb-modal-header class="text-center">
        <mdb-modal-title tag="h4" bold class="w-100">Afinar busqueda</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body class="mx-3 grey-text">
        <h4>Provincia:</h4>
    <b-form-select v-model="filtros.select_prov" class="mb-3" >
        <option :value="null">Todas</option>
        <option v-for="(item, index) in $store.getters.getProvincias" :key="index"  :value="item.nprov">{{item.nprov}}</option>

    
    </b-form-select>
     <h4>Especie:</h4>
    <b-form-select v-model="filtros.select_esp" class="mb-3">
     
        <option :value="null">Todas</option>
        <option v-for="(item, index) in $store.getters.getEspecies" :key="index"  :value="item.especie">{{item.especie}}</option>
    
    </b-form-select>

         <h4>Sexo:</h4>
    <b-form-select v-model="filtros.select_sex" class="mb-3">
     
        <option :value="null" selected="selected">Todos</option>
        <option :value="'Hembra'">Hembra</option>
        <option :value="'Macho'">Macho</option>
    
    </b-form-select>
         <h4>Tamaño:</h4>
    <b-form-select v-model="filtros.select_size" class="mb-3">     
        <option :value="null">Todos</option>
        <option v-for="(item, index) in $store.getters.getSize" :key="index"  :value="item.tamaño">{{item.tamaño}}</option>
     </b-form-select>
      </mdb-modal-body>
      <mdb-modal-footer center>
        <mdb-btn @click="filter">Buscar</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>

        </b-col>
    </b-row>
<!--    
   <p>{{arrayFiltros}}</p> 
   <p>modal  - {{filtros.select_esp}} - {{filtros.select_prov}}  - {{filtros.select_sex}} - {{filtros.select_size}} </p>

    <b>filtros {{filtros}} </b>

  -->


</div>


</template>
<script>

import { mdbBtn, mdbIcon, mdbFormInline, mdbInput, mdbContainer, mdbModal, mdbModalHeader, mdbModalBody, mdbModalFooter, mdbModalTitle } from 'mdbvue';
export default {

    data(){
        return{
            name: "modalfiltros",
            filtros:{
                select_prov: null,
                select_esp: null,
                select_sex: null,
                select_size: null,
            },
   
            showfilters: false,
            provincias: "",
            status: "",
           
            
        };

    },
    
    components: {
        mdbIcon,
        mdbBtn,
        mdbFormInline,
        mdbInput,
        mdbContainer,
        mdbModal,
        mdbModalHeader,
        mdbModalBody,
        mdbModalFooter,
        mdbModalTitle,
        },
    methods: {
      filter(){
        var selectFilters = {filtros:this.filtros} //creamos la variable selecFilters, con la variable size y sex

     },
    },

    computed:{
    

    },
    mounted(){

    },
}
</script>

<style>
.bt-filters{
    background-color: white!important;
    color:grey;
    border-radius: 12px;
   -webkit-box-shadow: none!important;
    box-shadow: none!important;
    padding: 10px;
    padding-right: 12px;
}
.bt-filters:hover{
    background-color:#33b5e5  !important;
     background-color:#83b0c5 !important;
}
.bt-filters:focus{
    -webkit-box-shadow: 0 0 0 0.1rem rgba(0, 123, 255, 0.25);
    box-shadow: 0 0 0 0.1rem rgba(0, 123, 255, 0.25);
}

.btn-default:not([disabled]):not(.disabled):active{
      background-color:#83b0c5 !important;
}
</style>
