<template>
    <div>
        <buscador></buscador>
        <buttonsAnimals></buttonsAnimals>
    
    </div>
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