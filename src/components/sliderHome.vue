<template>
  <b-row>
      <b-col cols="12" md="12">

    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      fade
      indicators
      background="white"
      img-width="1124"
      img-height="350"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption=""                
        img-src="https://cdn.pixabay.com/photo/2015/02/21/10/39/dog-644111_1280.jpg"
      >
      <h3>Miles de animales abandonados necesitan un nuevo hogar donde ser felices.</h3>
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://cdn.pixabay.com/photo/2015/02/25/17/56/cat-649164_1280.jpg">
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide 
      caption=""
        text=""
      img-src="https://cdn.pixabay.com/photo/2016/01/19/17/54/dog-1149964_1280.jpg">
      <h3>Encuentra y adopta en Appnimals a tu compi de aventuras</h3>
      </b-carousel-slide>

      <b-carousel-slide 
      caption=""
      img-src="https://cdn.pixabay.com/photo/2015/02/01/22/16/parrot-620345_1280.jpg">
      <h3>No olvides que es una responsabilidad para toda su vida</h3>
      </b-carousel-slide>
      
      <b-carousel-slide 
      caption=""
      img-src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80">
   
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
¡

      <b-carousel-slide img-src="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80">
        <h3>Desde el más grande al más pequeño todos merecen una segunda oportunidad</h3>
      </b-carousel-slide>
      
    </b-carousel>
<!-- 
    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
       {{ imgs_slider}}
    </p> -->
   </b-col>
  </b-row>
</template>

<script>
  export default {
    data() {
      return {
        name: "sliderHome",
        slide: 0,
        sliding: null,
        imgs_slider: require ("../assets/images/slider_1.jpg"),
      }
    },
    
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>

h3{
  font-size: 2em; 
}

@media (max-width: 400px) {
h3{
  font-size: 1rem;
  }

/* .carousel .carousel-indicators li {
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    cursor: pointer;
} */
}
</style>
