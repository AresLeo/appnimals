<template>
<b-row>
 <sliderfotoshome></sliderfotoshome>
   
  <b-row>
    <b-col cols="12" class="d-flex justify-content-center flex-wrap ">
      <h2 class="mt-4">¿Les darás tu el mejor hogar posible?</h2>
      <b-col cols="12" class="d-flex justify-content-center">
    <img class="logo mt-2" src="@/assets/images/appnimals_logo.png">
      </b-col>
        <b-col cols="12"  class="d-flex justify-content-center">
        <h2>¡Appsnimals te ayudará!</h2>
         </b-col>
        <b-row>
          <b-col cols="12">
        <p class="mt-4">Acercamos protectoras y perreras con posibles adoptantes de toda España</p>
      </b-col>
      </b-row>
    </b-col>
  </b-row>

 
</b-row>
 

  

</template>

<script>
import sliderHome from '@/components/sliderHome.vue'
import sliderfotoshome from '@/components/sliderfotoshome.vue'

export default {

  name: "home",
    components: {
    sliderHome,
    sliderfotoshome
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
