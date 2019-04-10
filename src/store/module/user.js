// import store from 'store'
import ynowApi from '../../api/ynow'
// import { Toast } from 'vant'

export default {
  namespaced: true,
  state: () => {
    return {
      userInfo: null
    }
  },
  mutations: {
    getUserInfo (state, data) {
      state.userInfo = data
    }
  },
  actions: {
    async getUserInfo ({ commit }) {
      try {
        let ret = await ynowApi.getUserInfo()
        commit('getUserInfo', +ret.retCode === 0 ? ret.data : null)
      } catch (error) {
        commit('getUserInfo', null)
      }
    }
  }
}
