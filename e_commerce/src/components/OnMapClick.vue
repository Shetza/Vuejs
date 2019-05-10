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
        data: function () {
            return {
                suppliers: [
                    {
                        id: 1,
                        position: {
                            latitude: 10,
                            longitude: 10
                        }
                    },
                    {
                        id: 2,
                        position: {
                            latitude: 11,
                            longitude: 9.6
                        }
                    }
                ]
            }
        },
    }
</script>

<style scoped>

</style>