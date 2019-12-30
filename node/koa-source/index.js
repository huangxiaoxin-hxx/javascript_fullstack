// node 服务
// const http = require('http')
// const server = http.createServer((req, res) => {
//   res.end('Hello world')
// })
// server.listen(8888, () => {
//   console.log('服务器启动')
// })

// Koa 服务
// const Koa = require('koa')
// const app = new Koa()

// app.use((ctx, next) => {
//   ctx.body = 'hello world==='
// }).listen(8888)

// 自己的 Koa
let myKoa = require('./lib/application')
let app = new myKoa()

app.use((ctx,next) => {
  // console.log(ctx.req.url)
  // console.log(ctx.request.req.url)
  // console.log(ctx.response.req.url)
  // console.log(ctx.request.url)
  // console.log(ctx.response.url)
  // console.log(ctx.url)
  // console.log(ctx.path)
  ctx.body = {
    name: 'hxx',
    age: '18'
  }
  next()
})

app.use((ctx, next) => {
  ctx.body = 'hello'
  next()
  console.log(2)
})

app.use((ctx, next) => {
  console.log(3)
  next()
  console.log(4)
})

app.listen(3000)