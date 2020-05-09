# npm i webpack webpack-cli --save-dev

# entry
- 单入口: entry 是一个字符串
- 多入口: entry 是一个对象

# Output
- 单入口配置
```
  output: {
    filename: 'bundle.js'
    path: __dirname+'/dist'
  }
```
- 单入口配置
```
  output: {
    filename: '[name].js'
    path: __dirname+'/dist'
  }
```

# 核心概念 Loaders

- webpack 开箱即用只支持JS和JSON两种文件类型，通过Loaders去支持其它的文件类型并且把他们转化成有效的模块，并且可以添加到依赖图中

本身是一个函数，接受源文件作文参数，返回转换的结果

test 指定匹配规则
use 指定使用的 loader 名称

# 核心概念 Plugins

插件用于 bundle 文件的优化， 资源管理和环境变量注入

作用于整理整个构建过程

# 核心概念 Mode

Mode 用来指定当前的构建环境是： production、development 还是 none

设置 mode 可以使用 webpack 内置的函数，默认值为 production