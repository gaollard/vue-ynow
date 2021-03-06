// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './style/base.scss'
import './style/cover.scss'
import 'vant/lib/icon/local.css'

import {
  Cell,
  NavBar,
  CellGroup,
  Tabbar,
  TabbarItem,
  Field,
  Switch,
  Icon,
  Lazyload
} from 'vant'

Vue.use(Cell)
  .use(NavBar)
  .use(CellGroup)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Field)
  .use(Switch)
  .use(Icon)
  .use(Lazyload)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
