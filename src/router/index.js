import Vue from 'vue'
import Router from 'vue-router'

import Welcome from '../views/welcome/index.vue'
import Account from '../views/account/index.vue'
import Product from '../views/product/index.vue'
import DeliveryAddress from '../views/deliveryAddress/index.vue'
import Demand from '../views/demand/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/Account',
      name: 'Account',
      component: Account
    },
    {
      path: '/DeliveryAddress',
      name: 'DeliveryAddress',
      component: DeliveryAddress
    },
    {
      path: '/Demand',
      name: 'Demand',
      component: Demand
    },
    {
      path: '/Product',
      name: 'Product',
      component: Product
    }
  ]
})
