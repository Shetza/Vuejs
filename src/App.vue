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
                    <router-link to="/suppliers">
                        <button class="btn btn-outline-success ">Suppliers List
                        </button>
                    </router-link>
                    <router-link to="/map">
                        <button class="btn btn-outline-success ml-5">Suppliers Map</button>
                    </router-link>
                </div>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    //import HelloWorld from './components/HelloWorld.vue'
    export default {
        name: 'app',
        components: {
            //HelloWorld,
        },
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
