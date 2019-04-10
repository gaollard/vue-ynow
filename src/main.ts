// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueg from 'vueg'

import './style/base.scss'
import './style/cover.scss'
import 'vant/lib/icon/local.css'

Vue.use(vueg, router, {
})

import {
  Cell,
  NavBar,
  CellGroup,
  Tabbar,
  TabbarItem,
  Field,
  Switch,
  Icon
} from 'vant'

Vue.use(Cell)
  .use(NavBar)
  .use(CellGroup)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Field)
  .use(Switch)
  .use(Icon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
