<template>
    <mdb-footer color="light" class="font-small pt-4 mt-4">
    <mdb-container class="text-left">
      <mdb-row>

        <mdb-col sm="12" class="d-flex flex-row justify-content-center">
          <h5 class="title"><a href="#!"><mdb-icon fab icon="facebook-square" /></a></h5>
          <h5 class="title"><a href="#!"><mdb-icon fab icon="instagram" /></a></h5>
           
        </mdb-col>
      </mdb-row>
    </mdb-container >
    
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2019 Copyright: <a href="https://www.MDBootstrap.com"> Appnimals </a>
      </mdb-container>
    </div>
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
