<template>
	<mdb-container>
		<mdb-row class="d-flex justify-content-center">
			<mdb-col cols="12"  class="col-md-5 mt-3" >
				<mdb-card wide class="d-flex justify-content-center">
					<mdb-view hover cascade >

                            <mdb-card-image flex-center :src="$store.state.user.photoURL" alt="Card image cap"  ></mdb-card-image>
							<mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
			
					</mdb-view>
					<mdb-card-body class="text-center" cascade>
						<mdb-card-title><strong>{{$store.state.user.displayName}}</strong></mdb-card-title>
						
						<mdb-card-text>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</mdb-card-text>
						 <mdb-btn color="info" class="boton">Editar perfil <mdb-icon icon="edit" class="ml-1" /></mdb-btn>
					</mdb-card-body>
				</mdb-card>
			</mdb-col>
            		
		</mdb-row>
	</mdb-container>
</template>

<script>
import firebase from "firebase";
import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardImage, mdbCardHeader, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardUp, mdbCardAvatar, mdbCardGroup, mdbBtn, mdbView, mdbMask, mdbIcon } from 'mdbvue';
var db = firebase.database();
export default {
    data(){
        return{
            name: "perfil",
            user: null,
            photoURL: null,
        }
    },
    components:{
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

    },
     methods:{
         createUser: function(){
             db.ref('/users/ares').set({
                 username: 'Ares',
                 password: "aresito",
                 ciudad: "Barcelona"
             }).then(()=> console.info('Datos usuario añadidos a la DB'))
         }
     },
     created(){
        //  this.createUser();
     }
}
</script>
<style scoped>
.card.card-cascade.wider{
    border: 0!important;
    box-shadow: none!important;
    -webkit-box-shadow: none!important;
}

.view.overlay.view-cascade{
        width: 50%;
    align-self: center;
}
.boton{
    padding: 0.5rem;
    border-radius: 25px;
}
</style>
