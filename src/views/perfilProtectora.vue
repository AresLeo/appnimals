<template>
      <mdb-container>
    <mdb-row>
      <mdb-col>
        <mdb-view hover cascade >
            <mdb-card-image flex-center :src="protectoras/lavedruna.jpg" alt="Card image cap"  ></mdb-card-image>
			<mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
			
		</mdb-view>
		<mdb-card-body class="text-center" cascade>
			<mdb-card-title><strong>{{this.$store.state.user.displayName}}</strong></mdb-card-title>
        </mdb-card-body>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>
<script>
import firebase from "firebase";
import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardImage, mdbCardHeader, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardUp, mdbCardAvatar, mdbCardGroup, mdbBtn, mdbView, mdbMask, mdbIcon } from 'mdbvue';
export default {
     data(){
        return{
          name: "perfilProtectora"
        }
    },
  components: {
mdbContainer,
			mdbRow,
			mdbCol,
			mdbCard,
			mdbCardImage,
			mdbCardHeader,
			mdbCardBody,
			mdbCardTitle,
			mdbCardText,
			mdbCardFooter,
			mdbCardUp,
			mdbCardAvatar,
			mdbCardGroup,
			mdbBtn,
			mdbView,
			mdbMask,
			mdbIcon
  }
}
</script>
