const fs = require('fs');

fs.readFile('./index.html', (err, data) => {
  // data 内存
  // 一次性读写
  fs.writeFile('.index-copy.html', data, (err, res) => {
    if (!err) {
      console.log('wirted!')
    }
  })
})
// stream
// 读一点，写一点
fs.createReadStream('./music.js')
  .pipe(
    fs.WriteStream('./music-copy.js')
  )