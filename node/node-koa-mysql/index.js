const Koa = require('koa')
const path = require('path')
const bodyParser = require('koa-bodyparser')  // 解析表单的中间件
const ejs = require('ejs')
const session = require('koa-session-minimal');
const MysqlStore = require('koa-mysql-session');
const koaRouter = require('koa-router')
const views = require('koa-views')
// const koaStatic = require('koa-static')
const staticCache = require('koa-static-cache')
const config = require('./config/default.js');

const app = new Koa()
const router = new koaRouter()

router.get('*', (ctx, next) => {
  ctx.body = {
    data: 'hello world',
    code: 200
  }
})

//缓存
app.use(staticCache(path.join(__dirname, './public'),
{ dynamic: true },
{ maxAge: 365 * 24 * 60 * 60}
))
app.use(staticCache(path.join(__dirname, './images'),
{ dynamic: true },
{ maxAge: 365 * 24 * 60 * 60}
))

// 配置服务器端模版渲染引擎中间件
app.use(views(path.join(__dirname, './views'),
{
  extension: 'ejs'
}))

app.listen(3000)
console.log('http://localhost:3000/')