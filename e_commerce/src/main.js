import Vue from 'vue'
import App from './App.vue'

import SuplliersList from './components/SuppliersList.vue'
import OnMapClick from './components/OnMapClick.vue'
import Supplier from './components/Supplier.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/suppliers', component: SuplliersList},
        {path: '/map', component: OnMapClick },
        {path: '/supplier', component: Supplier }
    ]
})

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
