import Vue from 'vue'
import Vuex from 'vuex'

import chat from './module/chat'
import user from './module/user'
import xzProduct from './module/xzProduct'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    chat,
    user,
    xzProduct
  }
})
