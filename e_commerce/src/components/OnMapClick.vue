<template>
    <div>
        <h1>Carte des fournisseurs</h1>
        <section v-if="errored">
            <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
        </section>
        <section v-else>
            <div v-if="loading">Loading...</div>
            <div v-else class="container mt-5 mb-5">
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
                                    :position="{lat: parseFloat(supplier.latitude), lng: parseFloat(supplier.longitude) }"
                                    :clickable="true"
                                    :draggable="true"
                                    @click="center=supplier.position"
                            />
                        </GmapMap>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "OnMapClick",
        data() {
            return {
                suppliers: [],
                loading: true,
                errored: false,
            }
        },
        mounted() {
            axios.get('https://api-suppliers.herokuapp.com/api/suppliers')
                .then(response => {
                    this.suppliers = response.data;
                })
                .catch(error => {
                    console.log(error);
                    this.errored = true;
                })
                .finally(() => this.loading = false)
        },
    }
</script>

<style scoped>

</style>