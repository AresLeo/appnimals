<template>
  <b-row>
      <b-col cols="12" md="12">
    <!-- <img  src="@/assets/images/slider_1.jpg"> -->
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      fade
      indicators
      background="#ababab"
      img-width="1024"
      img-height="400"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="Miles de animales abandonados necesitan un nuevo hogar donde ser felices ¿Se lo darás tu?"
        text="¡Appnimals te ayudará!"        
        img-src="https://cdn.pixabay.com/photo/2015/02/21/10/39/dog-644111_1280.jpg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://cdn.pixabay.com/photo/2015/02/25/17/56/cat-649164_1280.jpg">
        <h1>Dales la oportunidad de llenar tu vida de amor y pelitos</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide 
      caption="Encuentra y adopta en Appnimals a tu compi de aventuras"
        text=""
      img-src="https://cdn.pixabay.com/photo/2016/01/19/17/54/dog-1149964_1280.jpg"></b-carousel-slide>

      <b-carousel-slide 
      caption="No olvides que es una responsabilidad para toda su vida"
      img-src="https://cdn.pixabay.com/photo/2015/02/01/22/16/parrot-620345_1280.jpg"></b-carousel-slide>
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
          alt="image slot"
        >
      </b-carousel-slide>

           <b-carousel-slide img-src="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80">
        <h1>Desde el más grande al más pequeño todos merecen una segunda oportunidad</h1>
      </b-carousel-slide>
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80"
          alt="image slot"
        >
      </b-carousel-slide>
    </b-carousel>

    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
       {{ imgs_slider}}
    </p>
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