import Vue from 'vue'
import Router from 'vue-router'

import Account from '../views/account/index.vue'
import Product from '../views/product/index.vue'
import DeliveryAddress from '../views/deliveryAddress/index.vue'
import Demand from '../views/demand/index.vue'
const Login = () => import('../views/login/index.vue')
const Point = () => import('../views/point/index.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: () => import('../views/xzProduct'),
      meta: {
        tabbar: true
      }
    },
    {
      path: '/Welcome',
      name: 'Welcome',
      component: () => import('../views/welcome')
    },
    {
      path: '/Account',
      name: 'Account',
      component: Account,
      meta: {
        tabbar: true
      }
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
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Point',
      name: 'Point',
      component: Point
    },
    {
      // 签到页面
      path: '/checkin',
      name: 'checkin',
      component: import('../views/checkin')
    },
    {
      // 闲置商品列表页面
      path: '/xzProduct',
      name: 'xzProduct',
      component: () => import('../views/xzProduct')
    },
    {
      // 闲置商品详情页面
      path: '/xzProductItem/:itemId',
      name: 'xzProductItem',
      component: () => import('../views/xzProductItem')
    },
    {
      // 闲置商品详情页面
      path: '/userInfo',
      name: 'userInfo',
      component: () => import('../views/userInfo')
    }
  ]
})
