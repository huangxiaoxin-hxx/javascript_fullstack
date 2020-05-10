'use strict'

const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    index: './src/index.js',
    search: './src/search.js'
  },
  output: {
    path: path.join(__dirname,'dist'),
    filename: '[name]_[chunkhash:8].js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        // 适配 ES语法
        test: /.js$/,
        use: 'babel-loader'
      },
      {
        test: /.css$/,
        use: [  // 链式调用 顺序从右到左
          MiniCssExtractPlugin.loader, // 与 style-loader 互斥
          // 'style-loader',  // 将样式通过 <style> 标签插入到head中
          'css-loader'  // 用于加载 .css 文件，并转换成commonjs对象
        ]
      },
      {
        test: /.less$/,
        use: [  // 链式调用 顺序从右到左
          MiniCssExtractPlugin.loader, // 与 style-loader 互斥
          // 'style-loader',  // 将样式通过 <style> 标签插入到head中
          'css-loader',  // 用于加载 .css 文件，并转换成commonjs对象
          'less-loader', // 增加less的解析
        ]
      },
      {
        test: /.(png|jpg|gif|jpeg$)/,
        // use: 'file-loader'  // 可以解析图片和字体 也可以用 url-loader
        use:  [
          {
            loader: 'url-loader', // 可以解析图片和字体，设置较小文件问base64格式
            options: {
              limit: 10240,
              name: '[name]_[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css'
    })
  ]
}