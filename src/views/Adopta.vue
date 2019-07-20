<template>
    <div>
        <modalfiltros></modalfiltros>
        <!-- <buttonsAnimals></buttonsAnimals> -->
        <fichaanimales></fichaanimales>

    </div>
</template>
<script>
import buttonsAnimals from '@/components/buttonsAnimals.vue'
import modalfiltros from '@/components/modalfiltros.vue'
import fichaanimales from '@/components/fichaanimales.vue'

export default {
    name: "adopta",
    components: {
    buttonsAnimals,
    modalfiltros,
    fichaanimales
    },
}
</script>