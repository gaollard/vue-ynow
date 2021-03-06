import Vue from 'vue'
import Router from 'vue-router'

import Account from '../views/account'
import DeliveryAddress from '../views/deliveryAddress'
const Login = () => import('../views/login/index.vue')
const Point = () => import('../views/point/index.vue')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: () => import('../views/welcome'),
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
      // 闲置分类
      path: '/category',
      name: 'category',
      component: () => import('../views/category'),
      meta: {
        tabbar: true
      }
    },
    {
      // 签到页面
      path: '/checkin',
      name: 'checkin',
      component: () => import('../views/checkin')
    },
    {
      // 闲置商品列表页面
      path: '/xzProduct',
      name: 'xzProduct',
      component: () => import('../views/xzProduct'),
      meta: {
        tabbar: true
      }
    },
    {
      // 闲置商品详情页面
      path: '/xzProductItem/:itemId',
      name: 'xzProductItem',
      component: () => import('../views/xzProductItem')
    },
    {
      // 闲置商品详情页面
      path: '/auction',
      name: 'auction',
      component: () => import('../views/auction'),
      meta: {
        tabbar: true
      }
    },
    {
      // 用户信息
      path: '/userInfo',
      name: 'userInfo',
      component: () => import('../views/userInfo')
    },
    {
      // 我的收藏
      path: '/collect',
      name: 'collect',
      component: () => import('../views/collect')
    },
    {
      // 我的收藏
      path: '/xzProductCreate',
      name: 'xzProductCreate',
      component: () => import('../views/xzProductCreate')
    },
    {
      // 我的收藏
      path: '/chat',
      name: 'chat',
      component: () => import('../views/chat'),
      meta: {
        tabbar: true
      }
    },
    {
      // 我的收藏
      path: '/chatItem/:partnerId',
      name: 'chatItem',
      component: () => import('../views/chatItem')
    },
    {
      path: '/addAddress',
      name: 'addAddress',
      component: () => import('../views/addAddress')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/register')
    },
    {
      // 我的关注
      path: '/follow',
      name: 'follow',
      component: () => import('../views/follow')
    },
    {
      // 我的关注
      path: '/user/profile/:userId',
      name: 'userProfile',
      component: () => import('../views/userProfile')
    },
    {
      // 我的宝贝
      path: '/user/product',
      name: 'userProduct',
      component: () => import('../views/userProduct')
    },
    // 需求模块
    {
      path: '/demand/create',
      name: 'demandCreate',
      component: () => import('../views/demandCreate')
    },
    {
      path: '/demand/:itemId',
      name: 'demandItem',
      component: () => import('../views/demandItem')
    },
    {
      path: '/demand',
      name: 'demand',
      component: () => import('../views/demand')
    },
    {
      // 我的收藏
      path: '*',
      component: () => import('../views/v404')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
