<template>
<b-row>
 <sliderfotoshome></sliderfotoshome>
   
  <b-row>
    <b-col cols="12" class="d-flex justify-content-center flex-wrap ">
      <h2 class="mt-4">Adopta o acoge y dales una segunda oportunidad.</h2>
      <b-col cols="12" class="d-flex justify-content-center">
    <img class="logo mt-2" src="@/assets/images/appnimals_logo.png">
      </b-col>
        <b-col cols="12"  class="d-flex justify-content-center">
        <h2>¡Appsnimals te ayudará a encontrar a tu compi ideal!</h2>
         </b-col>

         <mdb-view class="img_hamster zoom overlay " src="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80" alt="zoom">
        <mdb-mask flex-center class="d-flex align-items-end" text="¡No compres, adopta!" />
      </mdb-view>
        <b-row>
          <b-col cols="12">
        <h3 class="mt-4">Acercamos protectoras, asociaciones y perreras con posibles adoptantes de toda España. </h3>
      </b-col>
      </b-row>
      

    </b-col>
  </b-row>

 
</b-row>
 

  

</template>

<script>
import sliderHome from '@/components/sliderHome.vue'
import sliderfotoshome from '@/components/sliderfotoshome.vue'
import { mdbView, mdbMask, mdbBtn, mdbIcon, mdbFormInline, mdbInput, mdbContainer, mdbModal, mdbModalHeader, mdbModalBody, mdbModalFooter, mdbModalTitle } from 'mdbvue';

export default {

  name: "home",
    components: {
    sliderHome,
    sliderfotoshome,
    mdbView, mdbMask, 
    mdbBtn, 
    mdbIcon, 
    mdbFormInline, 
    mdbInput, 
    mdbContainer, 
    mdbModal, 
    mdbModalHeader, 
    mdbModalBody, 
    mdbModalFooter, 
    mdbModalTitle
    },
}
</script>
<style scoped>
#app{
  overflow-x:hidden;
  }
.logo{
  width: 45%;
}
p{
  text-align: center;
}
.img_hamster{
  width: 350px;
}
@media (max-width: 400px) {
.logo{
  width: 65%;
}
h2{
    font-size: 1.5rem;
    text-align: center;
}

}

</style>
