// let notSure:any = 4 // "4"
// notSure = 'wn'

//1. let value: any
// value = true
// value = 1
// value = "hello"
// value = Symbol('type')
// value = {}
// value = []
// // -----
// value.foo.bar
// value()
// new value()
// value[1]

//2. let val: unknown
// val = true
// val = 1
// val = "hello"
// val = Symbol('type')
// val = {}
// val = []
// -----
// val.foo.bar
// val()
// new val()
// val[1]

//3. never 是任何类型的子类型, 也可以赋值给任何类型
// 然而没有类型是never的子类型，或赋值给never类型
function error(message: string): never {
  throw new Error(message)
}
const empty: never[] = []
// empty.push(1)

//4. Array
const list: number[] = [1,2,3,4]
const list2: Array<number> = [1,2,3,4] // 泛型

//5. Tuple 元组
let x: [number, string]
x = [1, '12']
// x = ['hello']
// x = ['12', 1]
// const list3: Array<string | number> = [1,2,3,'123']
// interface Tuple extands Array<String | number> {
//   0: string,
//   1: number,
//   lenght: 2
// }

//6. object
enum Direction {
  center = 1
}

let value: object

value = Direction
value = [1]
value = [1, 'hello']
value = {}