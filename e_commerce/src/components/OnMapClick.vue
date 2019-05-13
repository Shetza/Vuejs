<template>
    <div>
        <h1>Carte des fournisseurs</h1>
        <Map/>
    </div>
</template>

<script>
    import Map from './Map.vue'

    export default {
        name: "OnMapClick",
        components:{
            Map
        },
    }
</script>

<style scoped>

</style>