let selesOffices = {} // 售楼部
selesOffices.books = [] // 缓存列表，拿来存放订阅者

// 增加订阅者
selesOffices.listen = function(fn) {
  this.books.push(fn)
}

// 发布者
selesOffices.trigger = function(...args) {
  //发布消息
  for (let i = 0, fn; (fn = selesOffices.books[i++]);) {
    fn.apply(this, args)
  }
}

selesOffices.listen(function(price, squareMeter) {
  // 购买者a
  console.log(`价格是：${price}  面积是:${squareMeter}`)
})
selesOffices.listen(function(price, squareMeter) {
  // 购买者b
  console.log(`价格是：${price}  面积是:${squareMeter}`)
})

selesOffices.trigger(2000, 100)