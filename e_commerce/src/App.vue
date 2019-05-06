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
        <div class="col">
          <button class="btn btn-outline-success " v-on:click="onSuppliersListClick">Consulter la liste des fournisseurs</button>
          <button class="btn btn-outline-success ml-5" v-on:click="onMapClick">Voir la carte</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import SupplierList from './components/SupplierList.vue'
import onMapClick from './components/onMapClick'

export default {
  name: 'app',
  components: {
   // HelloWorld
    SupplierList,
    onMapClick
  },
  methods:{
    onSuppliersListClick: function(){
      alert('Click sur les fournisseurs')
    },
    onMapClick: function () {
      alert('Click sur la map')
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
