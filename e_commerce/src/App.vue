<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <!--  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
        <div id="choix">
            <div class="row mt-5">
                <div class="col">
                    <h1>Bienvenue sur votre site E-commerce</h1>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col mb-5">
                    <router-link to="/fournisseurs" ><button class="btn btn-outline-success " v-on:click="onSuppliersListClick">Consulter la liste des
                        fournisseurs
                    </button>   </router-link>
                    <router-link to="/map" ><button class="btn btn-outline-success ml-5" v-on:click="onMapClick">Voir la carte</button></router-link>
                </div>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    //import HelloWorld from './components/HelloWorld.vue'
    import supplierList from './components/supplierList.vue'
    import onMapClick from './components/onMapClick'
    import supplier from './components/supplier.vue'

    export default {
        name: 'app',
        components: {
            //HelloWorld,
            supplierList,
            onMapClick,
            supplier
        },
        methods: {
            onSuppliersListClick: function () {
            },
            onMapClick: function () {
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
