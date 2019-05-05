import { host } from '../config'
import http from '../utils/http'

export default {
  get7nToken () {
    return http.get(`${host}/upload/getToken`)
  },
  // 登录
  login ({ mobile, password }) {
    return http.post(`${host}/user/login`, { mobile, password })
  },
  // 获取用户信息
  getUserInfo () {
    return http.get(`${host}/user/userInfo`)
  },
  updateUserInfo (params) {
    return http.post(`${host}/user/userInfo`, params)
  },
  // 获取当天签到状态
  getCheckinStatus () {
    return http.get(`${host}/checkin`)
  },
  // 签到
  checkin () {
    return http.post(`${host}/checkin`)
  },
  // 获取签到信息
  getCheckinList () {
    return http.get(`${host}/checkin/list`)
  },
  // 查询用户积分
  getPointList () {
    return http.get(`${host}/point/list`)
  },
  // 获取收货地址
  getdeliveryAddressList () {
    return http.get(`${host}/deliveryAddress`)
  },
  // 获取需求列表
  getDemandList () {
    return http.get(`${host}/demand`)
  },

  // 获取闲置商品
  getXzProductList () {
    const argv = arguments[0]
    const categoryId = argv ? (argv.categoryId || '') : ''
    console.log(11, categoryId)
    return http.get(`${host}/xzProduct?categoryId=${categoryId}`)
  },

  // 获取闲置商品详情
  getXzProductItem (itemId) {
    return http.get(`${host}/xzProduct/${itemId}`)
  },

  // 创建 xzProduct
  createXzProduct (params) {
    return http.post(`${host}/xzProduct/`, params)
  },

  updateXzProduct (params) {
    return http.post(`${host}/xzProduct/${params.itemId}`, params)
  },

  // 获取我的 xzProduct
  getMyProduct () {
    return http.get(`${host}/user/xzProduct`)
  },

  // 获取闲置商品分类
  getXzCategorytList () {
    return http.get(`${host}/xzCategory`)
  },
  /**
   *
   * @param param0 typeId = 1 收藏, typeId = 2 喜欢
   */
  getXzProductCollect ({ typeId = 1 }) {
    return http.get(`${host}/xzProductCollect?typeId=${typeId}`)
  },
  // 添加 收藏/喜欢
  createXzProductCollect ({ itemId, typeId = 1 }) {
    return http.post(`${host}/xzProductCollect?typeId=${typeId}`, {
      itemId
    })
  },
  // 删除 收藏/喜欢
  deleteXzProductCollect ({ recordId, itemId, typeId = 1 }) {
    return http.delete(
      `${host}/xzProductCollect/${recordId}?typeId=${typeId}&itemId=${itemId}`
    )
  },
  // 收藏/喜欢 状态查询
  getXzProductCollectState ({ itemId, typeId = 1 }) {
    return http.get(
      `${host}/user/xzProductCollectState/${itemId}?typeId=${typeId}`
    )
  },
  // 获取聊天列表
  getChatList () {
    return http.get(`${host}/chat`)
  },
  // 获取聊天信息
  getChatItem ({ partnerId }) {
    return http.get(`${host}/chat/${partnerId}`)
  },
  getSfCityList () {
    return http.get(`${host}/sfCity`)
  },
  // 添加收货地址
  addAddress ({ mobile, address, street, username, city, province, district, zip }) {
    return http.post(`${host}/deliveryAddress`, {
      mobile,
      address,
      street,
      username,
      city,
      province,
      district,
      zip
    })
  },
  removeAddress ({ id }) {
    return http.delete(`${host}/deliveryAddress/${id}`)
  },
  register ({ mobile, password }) {
    return http.post(`${host}/user/register`, { mobile, password })
  },
  checkLogin () {
    return http.get(`${host}/user/checkLogin`)
  },
  getProductComment (itemId) {
    return http.get(`${host}/xzProductComment?itemId=${itemId}`)
  },
  // 增加评论
  addProductComment ({ itemId, content, talkTo, typeId }) {
    return http.post(`${host}/xzProductComment?itemId=${itemId}`, {
      talkTo,
      typeId,
      content
    })
  },

  // 获取用户介绍信息 ------------------------------------------------------- 用户模块
  getUserProfile ({ uid }) {
    return http.get(`${host}/user/profile?uid=${uid}`)
  },

  // 获取我的关注
  getFollowList () {
    return http.get(`${host}/user/follow`)
  },

  // 添加关注
  addFollow ({ followId }) {
    return http.post(`${host}/user/follow`, {
      followId
    })
  },

  // 取消关注
  removeFollow ({ followId }) {
    return http.delete(`${host}/user/follow/${followId}`)
  },

  // 发布需求 ---------------------------------------------------------------- 需求模块
  createDemand (params) {
    return http.post(`${host}/demand`, {
      ...params
    })
  },

  // 需求详情
  getDemandItem ({ itemId }) {
    return http.get(`${host}/demand/${itemId}`)
  }
}
