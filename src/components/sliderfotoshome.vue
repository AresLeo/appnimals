<template>
  <b-row>
      <b-col cols="12" md="12">

    <mdb-carousel :interval="8000" showControls>
    <mdb-carousel-item img src="https://cdn.pixabay.com/photo/2015/02/21/10/39/dog-644111_1280.jpg" mask="light" alt="First slide">
      <mdb-carousel-caption class="text-slider" animation="fadeInDown" title="Miles de animales abandonados necesitan un nuevo hogar donde ser felices y cuidados" text=""></mdb-carousel-caption>
    </mdb-carousel-item>
    <mdb-carousel-item img src="https://cdn.pixabay.com/photo/2015/02/25/17/56/cat-649164_1280.jpg" mask="light" alt="Second slide">
      <mdb-carousel-caption title="" text=""></mdb-carousel-caption>
    </mdb-carousel-item>
    <mdb-carousel-item img src="https://cdn.pixabay.com/photo/2016/01/19/17/54/dog-1149964_1280.jpg" mask="black-light" alt="Third slide">
      <mdb-carousel-caption animation="fadeInDown" title="Encuentra y adopta en Appnimals a tu futuro compi de aventuras" text=""></mdb-carousel-caption>
    </mdb-carousel-item>
     <mdb-carousel-item img src="https://cdn.pixabay.com/photo/2015/02/01/22/16/parrot-620345_1280.jpg" mask="black-slight" alt="4 slide">
      <mdb-carousel-caption class="text-slider" animation="fadeInDown" title="Adoptar es una responsabilidad para toda su vida" text=""></mdb-carousel-caption>
    </mdb-carousel-item>
     <mdb-carousel-item img src="https://images.unsplash.com/photo-1512087499053-023f060e2cea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" mask="light" alt="Third slide">
      <mdb-carousel-caption animation="fadeInDown" title="" text=""></mdb-carousel-caption>
    </mdb-carousel-item>
  </mdb-carousel>
    </b-col>
  </b-row>
</template>
<script>
  import { mdbCarousel, mdbCarouselItem, mdbCarouselCaption } from 'mdbvue';
  export default {
    name: 'sliderfotoshome',
    components: {
      mdbCarousel,
      mdbCarouselItem,
      mdbCarouselCaption
    }
  }
</script>
<style>
.text-slider .h3-responsive{
    color: #ffffff;
    text-shadow: 0px 0px 9px #0c0d0e;
    font-weight: 400;
}
</style>
