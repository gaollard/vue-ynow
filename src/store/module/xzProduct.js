import ynowApi from '../../api/ynow'
import store from 'store'

export default {
  namespaced: true,
  state: () => {
    return {
      token: '',
      userInfo: null,
      loading: false,
      showLoginPop: false,
      isValidLogin: false
    }
  },
  mutations: {
    setUserInfo (state, data) {
      state.userInfo = data
      store.set('userInfo', data)
      if (data) {
        state.isValidLogin = true
      } else {
        state.isValidLogin = false
      }
    }
  },
  actions: {
    /**
     * 获取用户信息
     * @param {*} param0
     */
    async getUserInfo ({ commit }) {
      try {
        let ret = await ynowApi.getUserInfo()
        commit('setUserInfo', +ret.retCode === 0 ? ret.data : null)
      } catch (error) {
        commit('setUserInfo', null)
      }
    },

    async doLike () {
    },

    async doCollect () {
    }
  }
}
