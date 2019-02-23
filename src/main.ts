// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import router from './router';

import {
  Cell,
  NavBar,
  CellGroup,
  Tabbar,
  TabbarItem,
  Field,
  Switch
} from 'vant';

Vue
  .use(Cell)
  .use(NavBar)
  .use(CellGroup)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Field)
  .use(Switch)

import './style/base.scss';
import './style/cover.scss';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app');
