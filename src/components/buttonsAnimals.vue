<template>
   <b-row>
      <b-col cols="12" md="12" class="d-flex flex-row flex-wrap justify-content-between">
        <b-col cols="auto">
          <b-form-checkbox v-model="checkedPerro" name="check-button" button button-variant="info" class="checkbox_animals m-2" size="normal">
            <img class="icons_animals mt-2" src="@/assets/images/dog.png">
            <br><b>Perro</b>
            <!-- Perro(Check: {{ checkedPerro }}) https://image.flaticon.com/icons/svg/194/194177.svg -->
          </b-form-checkbox>
        </b-col>

        <b-col cols="auto">           
          <b-form-checkbox v-model="checkedGato"  name="check-button" button button-variant="info" class="checkbox_animals m-2" size="normal">
            <img class="icons_animals  mt-2" src="https://image.flaticon.com/icons/svg/802/802353.svg"><br><b>Gato</b>
          </b-form-checkbox>
         </b-col>

        <b-col cols="auto">
          <b-form-checkbox v-model="checkedConejo" name="check-button" button button-variant="info" class="checkbox_animals m-2" size="normal">
            <img class="icons_animals mt-2" src="https://image.flaticon.com/icons/svg/1642/1642933.svg"><br><b>Conejo</b>
          </b-form-checkbox>
         </b-col>

        <b-col cols="auto">
          <b-form-checkbox v-model="checkedCobaya" name="check-button" button button-variant="info" class="checkbox_animals m-2" size="normal">
            <img class="icons_animals mt-2" src="@/assets/images/guinea_pig.svg"><br><b>Cobaya</b>
          </b-form-checkbox>
        </b-col>
        <b-col cols="auto">
          <b-form-checkbox v-model="checkedAve" name="check-button" button button-variant="info" class="checkbox_animals m-2" size="normal">
            <img class="icons_animals mt-2" src="https://image.flaticon.com/icons/svg/1864/1864474.svg"><br><b>Ave</b>
          </b-form-checkbox>
        </b-col>
        <b-col cols="auto">
          <b-form-checkbox v-model="checkedRoedor" name="check-button" button button-variant="info" class="checkbox_animals m-2" size="normal">
            <img class="icons_animals mt-2" src="@/assets/images/roedor.svg"><br><b>Roedor</b>
          </b-form-checkbox>
        </b-col>
        <b-col cols="auto">
          <b-form-checkbox v-model="checkedTortuga" name="check-button" button button-variant="info" class="checkbox_animals m-2" size="normal">
            <img class="icons_animals mt-2" src="https://image.flaticon.com/icons/svg/720/720885.svg">
            <br><b>Tortuga</b>
          </b-form-checkbox>
        </b-col>



    </b-col>
  </b-row>
</template>

<script>
  export default {
    data() {
      return {
        name: "buttonAnimals",
        checkedPerro: false,
        checkedGato: false,
        checkedConejo: false,
        checkedCobaya: false,
        checkedAve: false,
        checkedRoedor: false,
        checkedTortuga: false,
      }
    }
  }
</script>

<style>
.checkbox_animals{
width: 100px;

}
.icons_animals{
  width: 55px;
}
</style>
