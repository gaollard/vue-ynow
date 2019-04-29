export const host = process.env.NODE_ENV !== 'development'
  ? 'http://ynowapi.airtlab.com'
  : 'http://127.0.0.1:8001'

export const wsHost = process.env.NODE_ENV !== 'development'
  ? 'ws://ynowapi.airtlab.com:8001'
  : 'ws://127.0.0.1:8001'

export const tradeWay = [{
  name: '邮寄',
  id: 1
}, {
  name: '自提',
  id: 2
}, {
  name: '同城面交',
  id: 3
}]
