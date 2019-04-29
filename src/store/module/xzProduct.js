import ynowApi from '../../api/ynow'
import { Toast } from 'vant'

export default {
  namespaced: true,
  state: () => {
    return {
      category: {
        list: [],
        loading: false
      }
    }
  },
  mutations: {
    setCategoryList (state, data) {
      state.category.list = data
    },
    setCategoryLoading (state, data) {
      state.category.loading = data
    }
  },
  actions: {
    /**
     * 获取分类
     */
    async getCategory ({ commit }) {
      commit('setCategoryLoading', true)
      try {
        let ret = await ynowApi.getXzCategorytList()
        if (+ret.retCode === 0) {
          commit('setCategoryList', ret.data.list)
        } else {
          Toast(ret.errMsg)
        }
      } catch (error) {
        console.log(error)
      }
      commit('setCategoryLoading', false)
    },

    // 下架
    async doDelete () {
      // let ret = await ynowApi
    },
    // 点赞
    async doLike () {
    },
    // 收藏
    async doCollect () {
    }
  }
}
