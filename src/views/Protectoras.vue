<template>
      <mdb-container>
        <b-row>

            <b-col cols="12">
           <h4  class="mt-4">Listado Protectoras y Asociaciones: </h4>
           </b-col>
    </b-row>

        <mdb-row class="d-flex flex-row justify-content-center" >
        

        <mdb-col sm="2" col="md-3" class="p-2" v-for="(item, index) in $store.getters.getProtectorasData" :key="index">
            <mdb-card cascade class="fichas" >
            <mdb-view hover >
                                
                <a href="#!">			
                    <img class="objetfit" :src="item.logo">            
                    <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                    
                </a>
                </mdb-view> 
                <mdb-view  class="fondoficha" cascade>
                <mdb-card-body >
                            <mdb-card-title class="d-flex justify-content-between black-text">{{item.nombre}}</mdb-card-title>
                            <mdb-card-text class="m-2 d-flex justify-content-between">{{item.ciudad}}</mdb-card-text>
                        
                </mdb-card-body>
                </mdb-view>
                </mdb-card>
                </mdb-col>
        </mdb-row>
    </mdb-container>
</template>
<script>
import firebase from "firebase";
import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardImage, mdbCardHeader, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardUp, mdbCardAvatar, mdbCardGroup, mdbBtn, mdbView, mdbMask, mdbIcon } from 'mdbvue';
export default {
     data(){
        return{
          name: "protectoras"
        }
    },
  components: {
mdbContainer,
			mdbRow,
			mdbCol,
			mdbCard,
			mdbCardImage,
			mdbCardHeader,
			mdbCardBody,
			mdbCardTitle,
			mdbCardText,
			mdbCardFooter,
			mdbCardUp,
			mdbCardAvatar,
			mdbCardGroup,
			mdbBtn,
			mdbView,
			mdbMask,
			mdbIcon
  },
  methods:{
    getDataProtes(){
       
        this.$store.dispatch("getProtectorasData")
      
            }
        },
  
        created(){
            this.getDataProtes();
        },
}
</script>
<style scoped>
h4.d-flex.justify-content-between.card-title {
    font-size: 1.2rem;
}
.fichas{
    width: 230px;
    height: 380px;
    color: white;
     background-color: #0c85a4!important;
}
.objetfit{
	width: 230px;
	height: 220px;
	object-fit: cover;
}

.view.gradient-card-header.blue-gradient.view-cascade {
    height: 150px;
}
.card .card-body .card-text {
    color: white;
}
.card{
        border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    background: none;
            border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
}

.view.overlay{
        border-top-left-radius: 25px;
    border-top-right-radius: 25px;
}

.view.gradient-card-header.blue-gradient.view-cascade{
        border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
}
.urgente.view.view-cascade{
        border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
}
</style>
