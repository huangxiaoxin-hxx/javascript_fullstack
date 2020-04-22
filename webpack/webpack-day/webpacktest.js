const path = require('path');

module.exports = {
  entry: "./index.js",  // 指定打包的入口文件
  output: {   // 指定打包的出口地
    path: path.resolve(__dirname, './build'),
    filename: "lm.js", //打包出来的文件名
  },
}