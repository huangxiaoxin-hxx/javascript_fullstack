## babel

1. "@babel/preset-env": "^7.7.7"  智能兼容浏览器版本 与 browserslistrc 配合使用

2. @babel/plugin-transform-runtime  将各自文件的函数放在一个公共的地方(@babel/runtime/helpers)，使用时从公共的地方取出来，避免函数重复

3. @babel/polyfill 浏览器里不支持的语法，用更低版本的语言实现了