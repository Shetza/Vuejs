<template>
    <div class="container mt-5 mb-5">
        <div class="row">
            <div class="col d-flex justify-content-center ">
                <GmapMap
                        :center="{lat:46.813878, lng:-71.207981}"
                        :zoom="7"
                        style="width: 100%; height: 800px"
                >
                    <GmapMarker
                            :key="index"
                            v-for="(supplier, index) in suppliers"
                            :position="supplier.position"
                            :clickable="true"
                            :draggable="true"
                            @click="center=supplier.position"
                    />
                </GmapMap>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "map",
        data: function () {
            return {
                suppliers: [
                    {
                        id: 1,
                        position: {
                            lat: 10,
                            lng: 10
                        }
                    },
                    {
                        id: 2,
                        position: {
                            lat: 11,
                            lng: 9.6
                        }
                    }
                ]
            }
        },
    }
</script>

<style scoped>

</style>