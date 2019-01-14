import qs from 'qs'
import axios from 'axios'

axios.interceptors.request.use(function (config) {
  console.log(config)
  config.url += '?token=2a4040c921ec81b0964c5784652bc4c1'
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
