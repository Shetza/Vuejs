<template>
    <div>
        <h1 id="fournisseurs">Liste des fournisseurs</h1>
        <Supplier :name=name :status=status :checked-at=checkedAt /> <!--  :name -> props    =name->variable-->
    </div>
</template>

<script>
    import Supplier from './Supplier.vue'

    export default {
        name: "SuppliersList",
        components:{
            Supplier
        },
        data: function () {
            return {
                name: 'Supplier',
                status: true,// est ce qu'il y a du stock
                checkedAt: new Date().toLocaleString(),// date de la dernière mise à jour du stock
            }
        }

    }
</script>

<style scoped>

</style>