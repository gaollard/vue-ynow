export const host = process.env.NODE_ENV !== 'development'
  ? 'http://ynowapi.airtlab.com'
  : 'http://127.0.0.1:8001'

export const wsHost = process.env.NODE_ENV !== 'development'
  ? 'ws://ynowapi.airtlab.com:8001'
  : 'ws://127.0.0.1:8001'
