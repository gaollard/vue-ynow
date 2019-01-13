import { host } from '../config'
import http from '../utils/http'

export default {
  getUserInfo () {
    return http.get(`${host}/user/userInfo`)
  }
}
