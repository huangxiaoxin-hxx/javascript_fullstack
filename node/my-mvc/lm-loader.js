// 读取目录和文件
const fs = require('fs')
const path = require('path')
const Router = require('koa-router')

// 读取目录和文件
function load (dir, cb) {
  // 获取绝对路径
  const url = path.resolve(__dirname, dir)
  // 读取目录
  const files = fs.readdirSync(url)
  // 遍历
  files.forEach(filename => {
    //  去除扩展名
    filename = filename.replace('.js', '')
    const file = require(url + '/' + filename)
    cb(filename, file)
  })
}

// load('routes', (filename, file) => console.log(filename))

// 加载路由

function initRouter (app) {
  const router = new Router()
  load('routes', (filename, routes) => {
    routes = typeof routes === 'function' ? routes(app) : routes
    const prefix = filename === 'index' ? '' : `/${filename}`
    Object.keys(routes).forEach(key => {
      const [method, path] = key.split(' ')
      console.log(`正在映射地址：${method.toLocaleUpperCase()} ${prefix} ${path}`)

      // 注册路由
      // app.get('/', ctx => {})
      router[method](prefix + path, routes[key])
    })
  })
  return router
}

function initController () {
  const controllers = {}
  load('controller', (filename, controller) => {
    controllers[filename] = controller
    // console.log(filename, controllers)
  })
  return controllers
}

initController()

module.exports = {
  initRouter,
  initController
}

// initRouter()