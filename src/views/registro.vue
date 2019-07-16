<template>
    <form class="frameform">
    <p class="h4 text-center mb-4">Registro</p>
    <div class="grey-text">
      <mdb-input label="Nombre" icon="user" type="text"/>
      <mdb-input label="Email" icon="envelope" type="email"/>
      <mdb-input label="Confirma tu email" icon="exclamation-triangle" type="text"/>
      <mdb-input label="Contraseña" icon="lock" type="password"/>
    </div>
    <div class="text-center">
      <mdb-btn color="info">Registrar</mdb-btn>
    </div>
  </form>
</template>
<script>
import { mdbInput, mdbBtn } from 'mdbvue';
export default {
    name: "registro",
    components: {
      mdbInput,
      mdbBtn
    }
}
</script>
<style>
.frameform{
  margin: 20px;
}
</style>
