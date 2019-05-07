<template>
    <div>
        <h1>Fournisseur 1</h1>
        <h3 v-if="status" class="text-success">A du stock ? OK</h3>
        <h3 v-else class="text-danger">A du stock ? KO</h3>
        <h5>Date de dernier relevé des stocks : {{date = checkedAt.toLocaleString()}}</h5>
    </div>


</template>

<script>
    export default {
        data: function () {
            return {
                name: 'supplier',
                status: true,// est ce qu'il y a du stock
                checkedAt: new Date() // date de la dernière mise à jour du stock
            }
        }
    }


</script>

<style scoped>

</style>