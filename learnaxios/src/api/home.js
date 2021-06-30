import {instance} from './request.js'

// const getHome = instance({
//   url:'home/multidata',
//   timeout:3000
// })
function getHome() {
  return instance({
    url: '/recommend'
  })
}

export {getHome}

