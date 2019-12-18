// // const data = {}
// // const element = document.getElementById('myDiv')

// // data[element] = 'xxxx'
// // data['[object HTMLDivElement]']

// const m = new Map()
// const o = {p: 'hello world'}

// m.set(o, 'content') // set() 是 map的一个方法，用来设置或修改实例当中的某个值
// // m.has(o)
// m.delete(o)
// console.log(m.has(o))

// const map = new Map([
//   ['name', 'wn'],
//   ['sex', 'boy']
// ])
// // 等同于
// // const items = [
// //   ['name', 'wn'],
// //   ['sex', 'boy']
// // ]

// // items.forEach(([key, value]) => map.set(key, value))

// console.log(map.size)
// console.log(map)

// // 实际上不仅仅是数组，任何具有Iterator接口，
// // 只要每一个成员都是双元素数组的数据结构，都可以作为Map的参数
// // 所以Set、Map都可以用来生成新的Map

// const set = new Set([
//   ['foo', 1],
//   ['bar', 2]
// ])
// console.log(set);
// const m1 = new Map(set)
// console.log(m1)

// const m2 = new Map([['baz', 3]])
// console.log(m2)
// const m3 = new Map(m2)
// console.log(m3)

// const map = new Map() 
// map.set(1, 'aaa').set(1,'bbb')
// console.log(map)

// const k1 = ['a']
// const k2 = ['a']

// map.set(k1, '111').set(k2, '222')
// console.log(map)

// 相同的值在不同对象的引用，在Map结构中视为两个键

// const map = new Map()
// // map.set('foo', true)
// // map.set('bar', false)

// map.set('abc', 123)
// map.set(22, 'abc')
// map.set(undefined, NaN)

// 遍历
// Map数据结构的遍历顺序一定会按照数据本身的顺序进行
const map = new Map([
  ['foo','no'],
  ['bar', 'yes']
])
// console.log(map.keys())
// for (let key of map) {
//   console.log(key)
// }
// map.forEach((key, value, map) => {
//   console.log(key, value)
// })

// 类型转换

// Map => 对象
function setMapToObj(map) {
  let obj = Object.create(null)
  map.forEach((key, value, map) => {
    obj[key] = value
  })
  return obj
}
const m = setMapToObj(map)
console.log(m)

// 对象 => Map
let obj ={
  yes: true,
  no: false
}
function setObjToMap(obj) {
  let map = new Map()
  for(let item in obj){
    map.set(item, obj[item])
  }
  return map
}

let o = setObjToMap(obj)
console.log(o)