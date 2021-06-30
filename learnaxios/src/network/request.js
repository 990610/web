// import axios from 'axios'


// //最终方案(通过promise的方式，省略了promise)
// export function request(config) {
//   //1.创建axios的实例
//   const instance = axios.create({
//     baseURL: 'http://152.136.185.210:7878/api/m5',
//     timeout: 300
//   })
//   //2.使用拦截器
//   //全局使用axios.interceptors.request.use( , )
//   //添加请求拦截器,
//   instance.interceptors.request.use(config => {
//     // 在发送之前做点什么
//     console.log(config);
//     //还要原封返回
//     return config;
//   }, err => {
//     // 对请求错误做点什么
//     console.log(err);
//   })
//   //添加响应拦截，response
//   instance.interceptors.response.use(res => {
//     // 对相应数据做点什么（返回我们需要的数据data）
//     return res.data
//   },err => {
//     console.log(err)
//   })


//   //3.发送真正的网络请求
//   return instance(config)//相当于 return promise
// }



// //多种方法
// // export function request(config, success, failure) {
// //   //创建axios的实例
// //   const instance = axios.create({
// //     baseURL: 'http://123.207.32.32:8000',
// //   })
// //   instance(config)
// //      .then(res => {
// //        console.log(res);
// //        success(res)
// //      })
// //      .catch(err => {
// //        console.log(err);
// //        failure(err)
// //      })
// // };

