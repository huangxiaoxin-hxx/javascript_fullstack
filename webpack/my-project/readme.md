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
- 多入口配置
```
  output: {
    filename: '[name].js'
    path: __dirname+'/dist'
  }
```

# 核心概念 Loaders

- webpack 开箱即用只支持JS和JSON两种文件类型，通过Loaders去支持其它的文件类型并且把他们转化成有效的模块，并且可以添加到依赖图中

- 本身是一个函数，接受源文件作文参数，返回转换的结果

1. test 指定匹配规则
2. use 指定使用的 loader 名称

# 核心概念 Plugins

插件用于 bundle 文件的优化， 资源管理和环境变量注入

作用于整理整个构建过程

# 核心概念 Mode

Mode 用来指定当前的构建环境是： production、development 还是 none

设置 mode 可以使用 webpack 内置的函数，默认值为 production

# webpack 中的文件监听

文件监听是在发现源码发生变化时，自动重构出新的文件

webpack 开启监听模式， 有两种方式:
- 启动 webpack 命令时，带上 --watch 参数
- 在配置 webpack.config.js 中设置 watch: true

# 热更新: webpack-dev-server

WDS 不刷新浏览器
WDS 不输出文件，而是放在内存中
使用 HotModuleReplaceMentPlugin插件

