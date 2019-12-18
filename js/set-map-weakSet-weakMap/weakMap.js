// const wm = new WeakMap()
// const key = {foo: 1}
// wm.set(key, 2)
// console.log(wm)

const k1 = [1,2,3]
const k2 = [1,2,3]
const wm2 = new WeakMap([
  [k1,'foo'],
  [k2,'bar']
])
console.log(wm2)

// WeakMap 能接受的key只能是对象,不接受其他类型的值作为键名(null除外)
// WeakMap是弱引用，是对key 而不是 value
// WeakMap 没有size,没有forEach,没有clear

let myElement = document.getElementById('logo')
let myWeakmap = new WeakMap()

myWeakmap.set(myElement, {timersClicked: 0})
myElement.addEventListener('click', function() {
  let logoData = myWeakmap.get(myElement)
  logoData.timersClicked++
})