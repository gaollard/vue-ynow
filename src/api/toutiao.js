import { host } from '../config'
import http from '../utils/http.js'

export default {
  // 登录
  login({ mobile, password }) {
    return http.post(`${host}/user/login`, { mobile, password })
  }
}
