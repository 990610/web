// 配置文件

//通过直接输入webpack来进行自动打包
//这一行依赖node，需要输入  npm init来建立package.json
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')



module.exports = {
  entry:'./src/main.js',
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename:'bundle.js',

    // publicPath:'dist/'      /*  （当index.html不在dist文件目录下时） 处理URL引用的问题 {，会执行dist文件下的资源，，如图片} */
  },
  module: {
    rules: [
      {
        test: /\.css$/,

        //使用loader时，是从右向左
        use: ['style-loader','css-loader' ]
      }

    ]
  },
  plugins:[
    new HtmlWebpackPlugin()
  ],
  devServer:{
    contentBase:'./dist',
    inline:true,
    port:'8080'
  }

}