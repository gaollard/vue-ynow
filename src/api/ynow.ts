import { host } from '../config'
import http from '../utils/http'

export default {
  // 登录
  login ({ mobile, password }) {
    return http.post(`${host}/user/login`, { mobile, password })
  },
  // 获取用户信息
  getUserInfo () {
    return http.get(`${host}/user/userInfo`)
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
    return http.get(`${host}/xzProduct`)
  },
  // 获取闲置商品详情
  getXzProductItem (itemId) {
    return http.get(`${host}/xzProduct/${itemId}`)
  }
}
