<template>

<mdb-container>
    <mdb-row class="d-flex justify-content-center" >
      <!-- <mdb-col col="sm" class="p-2" v-for="(item, index) in searchFilters" :key="index"> -->
        <mdb-card class="fichas m-4" v-for="(item, index) in $store.getters.getAnimalsData" :key="index">
		<mdb-view hover>
			<a href="#!">
			
                <img class="objetfit"  :src="item.foto">            
				<mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                
			</a>
		</mdb-view>         
        
        <mdb-view  gradient="blue" cascade>
        <mdb-card-footer color="black" class="lighten-3 p-2 text-center d-flex nowrap justify-content-around">
			<h4 class="pr-2">{{item.estado}}  </h4> 
		</mdb-card-footer>
		<mdb-card-body >
			<mdb-card-title class="d-flex justify-content-between">{{item.nombre}} 
                <mdb-icon v-if="(item.sexo === 'Macho')" icon="mars" />
                <mdb-icon v-else icon="venus" />                
            </mdb-card-title>

			<mdb-card-text class="m-2 d-flex justify-content-between"> {{item.protectora}} - {{item.ciudad}}   
                <mdb-badge v-if="(item.urgencia === true)"  pill color="danger" class="p-2">Urgente </mdb-badge> </mdb-card-text>
            
		</mdb-card-body>

        </mdb-view>
        </mdb-card>
    </mdb-row>
  </mdb-container>
  
</template>
<script>
import firebase from "firebase";

import { mdbRow, mdbIcon,mdbBadge, mdbCol, mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn, mdbView, mdbMask, mdbContainer, mdbCardFooter, } from 'mdbvue';
    
    export default {
        
        name: 'fichaanimales',
      
		components: {
			mdbCard,
			mdbCardImage,
			mdbCardBody,
			mdbCardTitle,
			mdbCardText,
			mdbBtn,
			mdbView,
            mdbMask,
            mdbContainer,
            mdbRow,
            mdbCol,
            mdbCardFooter,
            mdbIcon,
            mdbBadge
        },
        methods:{

        },
  
        created(){

        },
       computed:{
           
        }
    
    }
    
</script>
<style scoped>
.fichas{
    width: 300px;
    height: 460px;
    color: white;
}
.card .card-body .card-text {
    color: white;
}
.objetfit{
	width: 300px;
	height: 300px;
	object-fit: cover;
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

ul.list-unstyled.list-inline.font-small.mt-3{
    margin: 0;
    font-size: 1.2rem;
}
</style>
