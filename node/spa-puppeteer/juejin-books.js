const puppeteer = require('puppeteer');
const $ = require('cheerio')
const nodeSchedule = require('node-schedule')

async function run() {
  const browser = await puppeteer.launch({
    headless: false
  })
  const page = await browser.newPage();
  await page.goto('https://juejin.im/books', {
    waitUntil: 'networkidle0'
  })
  const html = await page.content()
  const books = $('.info', html)
  let totalSold = 0;
  let totalSale = 0;
  books.each(function () {
    const book = $(this)
    const price = $(book.find('.price-text')).text().replace('￥','')
    // console.log(price)
    const count = $(book.find('.message')).last().find('span').text().replace('人已购买','')
    totalSale += Number(price) * Number(count)
    totalSold += Number(count)
  })
  console.log('totalSold:',totalSold)
  console.log('totalSale:',totalSale)
}
setInterval(() => {
  run()
}, 5000);

// Promise.all([promise1, promise2])  返回一个  Promise
//定时任务
// const date = new Date(2019, 11, 20, 21, 10, 0)
// const rule = new nodeSchedule.RecurrenceRule()
// rule.dayOfWeek = [0,1,2,3,4,5,6]
// rule.hour = 21;
// rule.minute = 15
// const job = nodeSchedule.scheduleJob(rule, () => {
//   run()
// })
