import ynowApi from '../../api/ynow'
import cookies from 'js-cookie'
import store from 'store'
import { Toast } from 'vant'

export default {
  namespaced: true,
  state: () => {
    return {
      token: '',
      userInfo: null,
      loading: false
    }
  },
  mutations: {
    setUserInfo (state, data) {
      state.userInfo = data
      store.set('userInfo', data)
    },
    setToken (state, data) {
      state.token = data
      cookies.set('token', data)
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

    /**
     * 用户登录
     * @param {*} param0 mobile 账户名
     * @param {*} param1 password 登录密码
     * @param { Function } param2 登录成功后回调 onSuccess
     */
    async login ({ commit }, { mobile, password, onSuccess }) {
      if (this.loading) {
        return
      }
      this.loading = true
      try {
        let ret = await ynowApi.login({ mobile, password })
        if (+ret.retCode === 0) {
          commit('setToken', ret.data.token)
          commit('setUserInfo', ret.data)
          onSuccess && onSuccess()
        } else {
          throw ret.errMsg
        }
      } catch (error) {
        Toast(error.toString())
      }
      this.loading = false
    },

    /**
     * 用户注册
     * @param {*} param0 mobile 账户名
     * @param {*} param1 password 登录密码
     */
    async register ({ commit }, { mobile, password, onSuccess }) {
      if (this.loading) {
        return
      }
      this.loading = true
      try {
        let ret = await ynowApi.register({ mobile, password })
        if (+ret.retCode === 0) {
          commit('setToken', ret.data.token)
          commit('setUserInfo', ret.data)
          onSuccess && onSuccess()
        } else {
          throw ret.errMsg
        }
      } catch (error) {
        Toast(error.toString())
      }
      this.loading = false
    }
  }
}
