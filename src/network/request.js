import axios from 'axios'
export function request(config) {
  const instance = axios.create({
    baseURL :'/api',
    timeout: 5000,
  
  })
  instance.interceptors.request.use(config => {
    return config
  },err=>{

  })
  instance.interceptors.response.use(res => {
    return res.data
    
  },err => {

  } )
  return instance(config)
}