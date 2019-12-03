const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  // img
  // console.log(req.url)
  // if(req.url === '/houbei.png') {
  //   return ''
  // }
  // 当图片 css js 多的时候，上面方法不靠谱
  fs.createReadStream('./index.html').pipe(res)
}).listen(3000, () => {
  console.log('http://localhost:3000')
})