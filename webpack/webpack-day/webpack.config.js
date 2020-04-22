const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  entry: "./index.js",  // 指定打包的入口文件
  output: {   // 指定打包的出口地
    path: path.resolve(__dirname, './build'),
    // publicPath: "https://cdn.baidu.com", //公共路径设置
    filename: "index.js", //打包出来的文件名
  },
  devtool: "source-map",
  module: {
    // 关于模块配置,遇到不认识的模块,就写在这里
    rules: [
      // 模块规则
      // {
      //   test: /\.jpg$/,
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       // name是打包前模块的名称，ext是打包前的模块格式
      //       name: "[name]_[hash].[ext]", // img.jpg
      //       outputPath: "images/"
      //     }
      //   }
      // },
      {
        test: /\.(jpg|png|jpeg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            // name是打包前模块的名称，ext是打包前的模块格式
            name: "[name]_[hash].[ext]", // img.jpg
            outputPath: "images/",
            limit: 20000  // 根据限定模块的体积，判断是否需要转换成base64格式
          }
        }
      },
      {
        test: /\.css$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/, // loader是有执行顺序的，从后往前
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      { 
        template: "./index.html",
        title: "标题-自己取的",
        filename: "index.html"
      }
    ),
    // 在打包之前，先帮我们把上一次生产的目录删除
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ]
}