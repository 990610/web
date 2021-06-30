import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'


createApp(App).mount('#app')

// //使用全局配置进行网络请求
// axios.defaults.baseURL = 'http://152.136.185.210:7878/api/m5'

// axios({
//   // url: 'http://123.207.32.32:8000/home/multidata',
//   url: '/home/multidata'
//   //默认请求是get,或者使用method来改变方式
//   // method: 'post'
  
// }).then(res => {
//   console.log(res);
// })




// //使用创建对应的axios实例
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })

// //使用实例
// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })

// //使用实例
// instance1({
//   url:'/home/data',
//   //params参数，page页数
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })

//使用封装request模块
// import {request} from "@/network/request";

// request({
//   url: '/home/multidata'
// }, res => {

// }) 

// request({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })