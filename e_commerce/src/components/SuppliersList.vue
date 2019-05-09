<template>
    <div>
        <h1>Liste des fournisseurs</h1>
        <Supplier v-for="item in suppliers" v-bind:name=item.name v-bind:status=item.status v-bind:checkedAt=item.checkedAt /><!--  :name -> props    =name->variable-->
    </div>
</template>

<script>
    import Supplier from './Supplier.vue'
    import {format, render, cancel, register} from 'timeago.js'; // import du package timeago

    export default {
        name: "SuppliersList",
        components: {
            Supplier
        },
        data: function () {
            return {
                suppliers: [
                    {
                        id: 1,
                        name: "Fournisseur 1",
                        status: true,
                        checkedAt: format(new Date(), 'en_US', '2019-05-05')
                    },
                    {
                        id: 2,
                        name: "Fournisseur 2",
                        status: false,
                        checkedAt: format(new Date(), 'fr_FR', '2019-05-05')
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>

