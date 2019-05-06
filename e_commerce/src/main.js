import Vue from 'vue'
import App from './App.vue'

import SupplierList from './components/SupplierList.vue'
import onMapClick from './components/onMapClick.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/fournisseurs', component: SupplierList},
        {path: '/map', component: onMapClick }
    ]
})

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
