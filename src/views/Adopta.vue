<template>
    <div>
        <modalfiltros></modalfiltros>
        <!-- <p>Vista adopta: {{selectsize}}</p> -->
        <!-- <buttonsAnimals></buttonsAnimals> -->
        <fichaanimales></fichaanimales>

    </div>
</template>
<script>
import buttonsAnimals from '@/components/buttonsAnimals.vue'
import modalfiltros from '@/components/modalfiltros.vue'
import fichaanimales from '@/components/fichaanimales.vue'
import firebase from "firebase";

export default {
    data(){
        return{
            name: "adopta",
        
        };
    },
    components: {
            buttonsAnimals,
            modalfiltros,
            fichaanimales
            },

    methods:{
            getData(){
            //   if(this.select_size === null || this.select_size === undefined){
                this.$store.dispatch("getData")
                //  }

            },

            
        //  searchFilter() {
        //         return this.$store.getters.getAnimalsData.filter(animal => {
       
        //             let selectFilter =
        //             this.select_size.includes(animal.size) ||
        //             this.select_size.length == 0 ||
        //             this.select_size == null;
        //             console.log('searchfilter', selectFilter)
        //             return selectFilter;
        //         });
        // }
    },
        created(){
            this.getData();
            
                // this.searchFilter();
        },
    }
 
</script>