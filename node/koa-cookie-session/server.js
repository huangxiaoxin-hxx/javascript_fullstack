const Koa = require('koa')
const KoaStatic = require('koa-static')
const Router = require('koa-router');
const app = new Koa()
const router = new Router()

app.use(KoaStatic(__dirname+'/static'))
let sessionTable = []

router.get('/login', (ctx, next) => {
  // ctx.router available
  // 后端 通过 Set-Cookie
  // 验证通过，存入用户的登录状态 session
  // http 无状态
  sessionTable = [{
    sessionId: 0001,
    uid: 001,
    isLogin: true
  }]
  ctx.cookies.set('sessionId', 0001, {
    maxAge: 1000 * 60
  })
  ctx.body = { code: 0 }
});

router.get('/isLogin', async (ctx) => {
  // 通过 cookie
  // cookie 会自动 附加到请求头里面
  const sid = ctx.cookies.get('sessionId')
  const session = sessionTable.find(s => s.sessionId == sid)
  if (session) {
    const uid = session.uid
    ctx.body = {
      code: 0,
      uid: uid
    }
  } else {
    ctx.body = {
      code: 1,
      meg: '未登录'
    }
  }
  
})

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => {
  console.log('loaclhost:3000 启动了')
})