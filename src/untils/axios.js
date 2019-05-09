import axios from 'axios';
import { Toast } from 'mint-ui'

const mobileService = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 1000
})

mobileService.interceptors.request.use(config => {
  config.headers['Accept'] =  'application/json';
  if (config.header) {
    for(let [key, value] of Object.entries(config.header)) {
      config.headers[key] = value
    }
  }
  return config
}, error => {
  console.log(error)
})

mobileService.interceptors.response.use(response => {
  const res = response.data
  if (!res.status) {
    switch(res.code) {
      case 102:
        Toast(res.message)
        break;
      case 103:
        Toast(res.message)
        break;
    }
    return Promise.reject(res)
  } else {
    return Promise.resolve(res.result)
  }
}, error => {
  console.log(error)
})


export default mobileService