import axois from 'axios'

const instance = axois.create({
  baseURL:'http://152.136.185.210:7878/api/m5'
})
instance.interceptors.response.use(res => {
  return res.data
})
export {instance}