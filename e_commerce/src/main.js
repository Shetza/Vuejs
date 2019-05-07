import Vue from 'vue'
import App from './App.vue'

import supplierList from './components/supplierList.vue'
import onMapClick from './components/onMapClick.vue'
import supplier from './components/supplier.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/fournisseurs', component: supplierList},
        {path: '/map', component: onMapClick },
        {path: '/fournisseur', component: supplier }
    ]
})

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
