<template>
    <div>
        <h1>Liste des fournisseurs</h1>
        <section v-if="errored">
            <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
        </section>
        <section v-else>
            <div v-if="loading">Loading...</div>

           <Supplier class="supplier" v-else v-for="supplier in suppliers" v-bind:key=supplier.id v-bind:name=supplier.name
                                     v-bind:status=supplier.status v-bind:checked-at="myformat(supplier.checkedAt)" /> <!--  :name -> props    =name->variable-->
        </section>
    </div>
</template>

<script>
    import Supplier from './Supplier.vue'
    import axios from 'axios'
    import { format } from 'timeago.js'; // import du package timeago

    export default {
        name: "SuppliersList",
        components: {
            Supplier
        },
        data(){
            return{
                suppliers:[],
                loading: true,
                errored: false,
            }
        },
        mounted () {
            axios.get('https://api-suppliers.herokuapp.com/api/suppliers')
                .then(response => {
                    this.suppliers = response.data
                })
                .catch(error => {
                    console.log(error);
                    this.errored = true;
                })
                .finally(() => this.loading = false)
        },
        methods: {
            myformat: function (date) {
                return format(date, 'en_US');
            }
        }
    }
</script>

<style scoped>

</style>

