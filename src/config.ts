export const host = process.env.NODE_ENV !== 'development'
  ? 'http://ynowapi.airtlab.com'
  : 'http://127.0.0.1:8001'

// export const wsHost = process.env.NODE_ENV !== 'development'
//   ? 'ws://ynowapi.airtlab.com'
//   : 'ws://127.0.0.1:8001'

export const wsHost = 'ws://39.108.138.159:8001'
