import { host } from '../config'
import http from '../utils/http'

export default {
  getUserInfo () {
    return http.get(`${host}/user/userInfo`)
  },
  getdeliveryAddressList () {
    return http.get(`${host}/deliveryAddress`)
  },
  getDemandList () {
    return http.get(`${host}/demand`)
  }
}
