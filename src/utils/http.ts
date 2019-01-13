import qs from 'qs'
import axios from 'axios'

axios.interceptors.request.use(function (config) {
  console.log(config)
  config.url += '?token=2910b2389f7ba85ac901a8c4db01e6c8'
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
