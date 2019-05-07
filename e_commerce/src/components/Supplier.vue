<template>
    <div>
        <h1>{{name}}</h1>
        <h3 v-if="status" class="text-success">A du stock ? OK</h3>
        <h3 v-else class="text-danger">A du stock ? KO</h3>
        <h5>Date de dernier relevé des stocks : {{checkedAt}}</h5>
    </div>
</template>

<script>
    export default {
        name: 'Supplier',
       props: {
           name: String,
           status: Boolean,
           checkedAt:String
       }
    }


</script>

<style scoped>

</style>