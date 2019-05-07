<template>
    <div class="container border border-dark mt-4 ">
        <h2>{{name}}</h2>
        <h4 v-if="status" class="text-success">A du stock ? OK</h4>
        <h4 v-else class="text-danger">A du stock ? KO</h4>
        <h6>Date de dernier relevé des stocks : {{checkedAt}}</h6>
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