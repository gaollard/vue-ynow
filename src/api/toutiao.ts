import { host } from '../config'
import http from '../utils/http'
const AppKey = 'b765e5c15831eb84509481768ce1742a';

export default {
  // 登录
  login({ mobile, password }) {
    return http.post(`${host}/user/login`, { mobile, password })
  }
}
