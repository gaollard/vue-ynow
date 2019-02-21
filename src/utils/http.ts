import qs from 'qs'
import axios from 'axios'
import cookies from 'js-cookie'

axios.interceptors.request.use(function (config) {
  const token = cookies.get('token') || ''
  config.url = `${config.url}?token=${token}`
  if (config.method === 'POST') {
    config.data = qs.stringify(config.data)
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(
  response => {
    let res = response.data
    return res
  },
  error => Promise.reject(error)
)

export default axios