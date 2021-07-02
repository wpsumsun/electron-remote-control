const env = process.env

const config = {
  host: '',
  baseUrl: '',
  VUE_APP_ENV: undefined
}

Object.assign(config, env)

// if (env.NODE_ENV === 'development') {
//   config.VUE_APP_ENV = 'test'
// }

if (config.VUE_APP_ENV === 'development') {
  config.host = 'http://192.168.148.174:8080'
} else if (config.VUE_APP_ENV === 'test') {
  config.host = 'http://192.168.148.175:8080'
} else if (config.VUE_APP_ENV === 'production') {
  config.host = 'http://192.168.148.176:8080'
}

console.log(env)

export default config
