import Vue from 'vue'
import Router from 'vue-router'

import Welcome from '../views/welcome/index.vue'
import Account from '../views/account/index.vue'
import Product from '../views/product/index.vue'

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
      path: '/Product',
      name: 'Product',
      component: Product
    }
  ]
})
