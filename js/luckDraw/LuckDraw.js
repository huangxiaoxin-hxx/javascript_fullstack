// 抽奖总数
var count = 1

function luckDraw () {
  if(count === 10) {
    console.log('恭喜你中奖了')
    count = 1
  } else {
    let random = Math.ceil(Math.random()*100)
    if (random === 100) {
      console.log('恭喜你中奖了')
    } else {
      console.log('很遗憾没中奖')
    }
    count++
  }
}


for (let i = 1; i <= 20; i++) {
  console.log(`第${i}次抽奖`)
  luckDraw()
}