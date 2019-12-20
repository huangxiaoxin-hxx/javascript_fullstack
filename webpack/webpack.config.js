const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,  // 匹配文件
      //   use: ['style-loader', 'css-loader'] // 指明使用什么加载器
      // },
      // {
      //   test: /\.scss$/,  // 匹配文件
      //   use: ['style-loader', 'css-loader', 'sass-loader'] // 指明使用什么加载器
      // },
      {
        test: /\.(sc|c|sa|le)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {sourceMap: true}
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: loader => [
                require('autoprefixer')(),
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {sourceMap: true}
          },
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css', // 最终输出的文件名
      chunkFilename: '[id].css'
    })
  ]
}