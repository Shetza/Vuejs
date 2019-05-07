<template>
    <div>
        <h1>Liste des fournisseurs</h1>
        <Supplier v-for="item in suppliers" v-bind:name=item.name v-bind:status=item.status v-bind:checkedAt=item.checkedAt /><!--  :name -> props    =name->variable-->
    </div>
</template>

<script>
    import Supplier from './Supplier.vue'

    export default {
        name: "SuppliersList",
        components:{
            Supplier
        },
        data() {
            return {
                suppliers: [
                    {
                        id: 1,
                        name: "Fournisseur 1",
                        status: true,
                        checkedAt: new Date().toLocaleString()
                    },
                    {
                        id: 2,
                        name: "Fournisseur 2",
                        status: false,
                        checkedAt: new Date().toLocaleString()
                    }

                ]
            }
        }

    }
</script>

<style scoped>

</style>

