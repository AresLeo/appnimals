<template>
    <mdb-footer color="grey darken-4" class="page-footer font-small pt-4 mt-4 ">
    <mdb-container class="text-center">
        <mdb-row>
          <mdb-col sm="12" class="d-flex justify-content-center">
            <h5 class="title m-2"><a href="#!"><mdb-icon fab icon="facebook-square" /></a></h5>
            <h5 class="title m-2"><a href="#!"><mdb-icon fab icon="instagram" /></a></h5>
          </mdb-col>
        </mdb-row>
        <mdb-row>
            <mdb-col sm="12" class="d-flex justify-content-center">
              <p class="m-2 light-blue-text">2020 Copyright: </p> <a href="#" class="m-2 font-weight-bold light-blue-text"> Appnimals </a>
            </mdb-col>
        </mdb-row>
    </mdb-container >
    
  </mdb-footer>
  <!-- Footer -->
</template>
<script>

import { mdbFooter, mdbContainer, mdbRow, mdbCol, mdbIcon } from 'mdbvue';
export default {
    data(){
        return{
            name: "footerpage"
        }
    },
    components: {
      mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbIcon
    }
}
</script>
