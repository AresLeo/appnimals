<template>
<div>
    <b-row>
        <b-col cols="9">
            <h4 class="mt-4">Para adoptar:</h4>
        </b-col>
         <b-col cols="3" class="d-flex justify-content-end">



    <mdb-btn  class="bt-filters mt-3" color="default" @click.native="login=true"><mdb-icon icon="sliders-h" class="ml-1 "/></mdb-btn>
    <mdb-modal :show="login" @close="login = false">
      <mdb-modal-header class="text-center">
        <mdb-modal-title tag="h4" bold class="w-100">Afinar busqueda</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body class="mx-3 grey-text">
        <h4>Provincia:</h4>
    <b-form-select v-model="selected_prov" class="mb-3">
        <option :value="null">Todas</option>
        <!-- <option :value="Barcelona">Barcelona</option>
        <option :value="Madrid">Madrid</option>
        <option :value="ACoruna">A Coruña</option>
        <option :value="Albacete">Albacete</option>
        <option :value="Cádiz">Cádiz</option> -->
    
    </b-form-select>
         <h4>Sexo:</h4>
    <b-form-select v-model="selected_sex" class="mb-3">
     
        <option :value="null">Todos</option>
        <!-- <option :value="{ H: 'Hembra' }">Hembra</option>
        <option :value="{ M: 'Macho' }">Macho</option> -->
    
    </b-form-select>
         <h4>Tamaño:</h4>
    <b-form-select v-model="selected_size" class="mb-3">
     
        <option :value="null">Todos</option>
        <!-- <option :value="{ XS: 'Mini' }">Mini</option>
        <option :value="{ S: 'Pequeño' }">Pequeño</option>
        <option :value="{ M: 'Mediano' }">Mediano</option>
        <option :value="{ L: 'Grande' }">Grande</option> -->
    
    </b-form-select>
      </mdb-modal-body>
      <mdb-modal-footer center>
        <mdb-btn @click.native="buscar = false">Buscar</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>

        </b-col>
    </b-row>
   
   <!-- <mdb-form-inline class="md-form">
      <mdbIcon icon="search" />
      <mdb-input type="text" placeholder="Buscar" aria-label="Buscar"/>
    </mdb-form-inline> -->
  

  
</div>


</template>
<script>

import { mdbBtn, mdbIcon, mdbFormInline, mdbInput, mdbContainer, mdbModal, mdbModalHeader, mdbModalBody, mdbModalFooter, mdbModalTitle } from 'mdbvue';
export default {
    
    data(){
        return{
            name: "buscador",
            selected_prov: null,
            selected_sex: null,
            selected_size: null,
            login: false,

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
        }
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
