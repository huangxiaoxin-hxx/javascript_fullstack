let data = [
  { value: '周杰伦的听妈妈的话好好听！', time: 5, color: 'red', speed: 1, fontSize: 22 },
  { value: 'bilibili 干杯', time: 10, color: 'red', speed: 1, fontSize: 18 },
  { value: 'wdnmd', time: 11, color: 'red', speed: 1, fontSize: 18 },
  { value: '邓志坚你可真是个脑残', time: 20, color: 'green', speed: 1, fontSize: 40 },
  { value: '弹幕怎么变颜色啊', time: 16 }
]

//  获取所有需要的 dom 结构
let canvas = document.getElementById('canvas')
let video = document.getElementById('video')
let $txt = document.getElementById('text')
let $btn = document.getElementById('btn')
let $color = document.getElementById('color')
let $range = document.getElementById('range')

class CanvasBarrage {
  constructor(canvas, video, opts = {}) {
    // 如果canvas 和 video 都没传的话
    if (!canvas || !video) {
      return
    }

    //增加两个属性，挂载到this上
    this.video = video
    this.canvas = canvas

    this.canvas.width = video.width
    this.canvas.height = video.height

    //获取画布
    this.ctx = canvas.getContext('2d')

    //设置默认参数,如果没有传参就使用默认参数
    let defOpts = {
      color: '#e91e63',
      speed: 1.5,
      opacity: 0.5,
      fontSize: 20,
      data: []
    }

    // 合并对象全部挂载到this实例上
    Object.assign(this, defOpts, opts)
    //  添加一个，判断当前视频播放状态，默认true是暂停
    this.isPaused = true
    //  获取所有的弹幕消息
    this.barrages = this.data.map(item => new Barrage(item, this))
    //  渲染弹幕
    this.render()
  }
  render() {
    //先清除原有的画布
    this.clear()
    //渲染弹幕
    this.randerBarrage()
    //如果没有暂停的话，就继续渲染
    if (this.isPaused == false) {
      requestAnimationFrame(this.render.bind(this))
    }
  }
  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
  randerBarrage() {
    // 根据视频播放的时间和弹幕展示的时间做比较，来判断是否展示弹幕
    let time = this.video.currentTime
    this.barrages.forEach(barrage => {
      // 只有在视频的播放时间大于等于弹幕展示的时间才做处理
      if (!barrage.flag && time >= barrage.time) {
        //判断当前弹幕是否初始化
        if (!barrage.isInit) {
          barrage.init()
          barrage.isInit = true
        }
        // 弹幕从右往左渲染，所以x坐标减去当前弹幕的速度speed
        barrage.x -= barrage.speed
        barrage.render()

        //如果当前弹幕的x坐标比自身宽度还小，就表示渲染结束
        if (barrage.x < -barrage.width) {
          barrage.flag = true
        }
      }
    })
  }
  add(obj) {
    this.barrages.push(new Barrage(obj, this))
  }
}
// 创建Barrage类，用来实例化每一条弹幕
class Barrage {
  constructor(obj, ctx) {
    this.value = obj.value
    this.time = obj.time
    this.obj = obj
    this.context = ctx
  }
  // 初始化
  init() {
    //如果数据里面没有涉及到以下值，就取默认值
    this.color = this.obj.color || this.context.color
    this.speed = this.obj.speed || this.context.speed
    this.opacity = this.obj.opacity || this.context.opacity
    this.fontSize = this.obj.fontSize || this.context.fontSize

    let p = document.createElement('p')
    p.style.fontSize = this.fontSize + 'px'
    p.innerHTML = this.value
    document.body.appendChild(p)
    this.width = p.clientWidth
    document.body.removeChild(p)

    //设置弹幕出现的位置
    this.x = this.context.canvas.width
    this.y = this.context.canvas.height * Math.random()

    if (this.y < this.fontSize) {
      this.y = this.fontSize
    } else if (this.y > this.context.canvas.height - this.fontSize) {
      this.y = this.context.canvas.height - this.fontSize
    }
  }

  //渲染每一条弹幕
  render() {
    //设置画布/字体
    this.context.ctx.font = `${this.fontSize}px Arial`
    //设置画布颜色
    this.context.ctx.fillStyle = this.color
    // 绘制文字
    this.context.ctx.fillText(this.value, this.x, this.y)

  }
}

let canvasBarrage = new CanvasBarrage(canvas, video, { data })
video.addEventListener('play', () => {
  canvasBarrage.isPaused = false
  canvasBarrage.render() //触发弹幕
})

//发送弹幕的方法
function send(){
  let value = $txt.value
  let time = video.currentTime
  let color = $color.value
  let fontSize = $range.value
  let obj = {value, time, color, fontSize}
  canvasBarrage.add(obj)
}

$btn.addEventListener('click', send)