import Vue from 'vue'
import App from './App.vue'

import SuplliersList from './components/SuppliersList.vue'
import OnMapClick from './components/OnMapClick.vue'
import Supplier from './components/Supplier.vue'
import Map from './components/Map.vue'

import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAo2Mee8B75RkEXftEAeYVwQByvQ2CXK08',
        libraries: 'places'
    }
})

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/suppliers', component: SuplliersList},
        {path: '/map', component: OnMapClick},
        {path: '/supplier', component: Supplier},
        {path: '/mapSuppliers', component: Map}
    ]
})

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
