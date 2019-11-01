const Events = require('events')
const ev = new Events()

// 订阅者
ev.on('price', () => {
  console.log('123')
})

// 发布者
ev.emit('price')