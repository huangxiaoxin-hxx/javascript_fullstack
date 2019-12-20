class Dep { // 订阅者
  constructor () {
    // 用来存放 watcher 对象的数组
    this.subs = []
  }
  // 在subs中添加watcher对象
  addSub (sub) {
    this.subs.push(sub)
  }

  // 通知所有的wathcer对象更新视图
  notify () {
    this.subs.forEach((sub) => {
      sub.update()
    })
  }
}

class Watcher { //观察者
  constructor () {
    // 在new一个watcher对象时，将该对象辅助给Dep，在get中会用到
    Dep.target = this
  }

  // 更新视图的方法
  update() {
    console.log('视图更新了')
  }
}

Dep.target = null

function defineReactive (obj, key, val) {
  // Dep类对象
  const dep = new Dep()
  Object.defineProperty(obj, key, {
    enumerable: true, //是否检测可枚举属性
    configurable: true,
    get: function reactiveGetter() {
      dep.addSub(Dep.target)
      return val
    },
    set: function reactiveSetter(newVal) {
      if (newVal === val) return
      // 触发dep中的notify方法通知所以的 watcher 对象更新视图
      dep.notify()
    }
  })
}


function observer(value) {
  console.log('start')
  if (!value || typeof value !== 'object') {
    return
  }
  console.log('end')
  Object.keys(value).forEach((key) => {
    defineReactive (value, key, value[key])
  })
}

class Vue {
  constructor(options) {
    this._data = options.data
    observer(this._data)
    // 新建一个观察者对象,
    new Watcher()
    // 模拟render的过程, 为了触发test属性的get函数
    console.log('render--', this._data.test)
  }
}

let o = new Vue({
  data: {
    test: 'I am test'
  }
})

o._data.test = 'df二连'