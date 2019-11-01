class Event {
  constructor() {
    // this.listener = [];
    this.listener = {};
  }
  on(key, fn) {
    // this.listener.push(fn)
    if (!this.listener[key]) {
      this.listener[key] = []
    }
    this.listener[key].push(fn)
    console.log(this.listener)
  }
  emit(key) {
    // for(let fn of this.listener){
    //   fn()
    // }
    for (let i = 0; i < this.listener[key].length; i++) {
      this.listener[key][i]()
    }
  }
}
const subPub = {
  'price': [
    () => { console.log(3) },
    () => { console.log(4) }
  ]
}
// console.log(subPub)
for (let el of subPub.price) {
  el()
}

const ev = new Event();
ev.on('foo', () => {
  console.log(1)
})
ev.on('foo', () => {
  console.log(2)
})
ev.emit('foo'); //执行的