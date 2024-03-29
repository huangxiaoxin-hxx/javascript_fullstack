const https = require('https');
const http = require('http');
const cheerio = require('cheerio');


function doubanSpider(url, cb) {
  https
    .get(url,
      (res) => {
        let html = '';
        // 流的形式传输
        res.on('data', (chunk) => {
          html += chunk;
        })
        res.on('end', () => {
          // console.log(html);
          //jquery
          const $ = cheerio.load(html);
          let movies = [];
          $('li .item').each(function () {
            // 拿到每一个电影
            const picUrl = $('.pic img', this).attr('src');
            const title = $('.info .title', this).text();
            const star = $('.star .rating_num', this).text();
            const inq = $('.inq', this).text();
            //console.log(this)
            // console.log({
            //   picUrl,
            //   title,
            //   star,
            //   inq
            // })
            movies.push({
              picUrl,
              title,
              star,
              inq
            })
          })
          cb(movies);
        })
      })
}
http.createServer((req, res) =>{
  doubanSpider('https://movie.douban.com/top250',
  (data) => {
    console.log('data', data)
    res.writeHead(200, {
                      // text/plain   纯文本
                      // text/htmlp   html
                      //  都是mime 类型
      'Content-type': 'application/json',
      'Access-Control-Allow-origin': '*'
    })
    res.end(JSON.stringify(data))
  })
}).listen(3000, () => {
  console.log('server is running 3000')
})