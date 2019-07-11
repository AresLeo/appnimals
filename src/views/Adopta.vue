<template>
    <v-content>
        <h2>Especie</h2>
    <buttonsAnimals></buttonsAnimals>
    <buscador></buscador>
    </v-content>
</template>
<script>
import buttonsAnimals from '@/components/buttonsAnimals.vue'
import buscador from '@/components/buscador.vue'

export default {
    name: "adopta",
    components: {
    buttonsAnimals,
    buscador,
    },
}
</script>