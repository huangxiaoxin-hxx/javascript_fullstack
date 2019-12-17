global.gc()
console.log(process.memoryUsage())

// 引用技术
let array = new Array(4 * 1024) //[] // + 1

let map = new Map();
map.set(array, 4)  // +1
array = null // -1 计数为: 0 回收
global.gc(); //
console.log(process.memoryUsage())

// global.gc()
// console.log(process.memoryUsage())

// // 引用技术
// let array = new Array(4 * 1024) //[] // + 1

// let map = new WeakMap(); //不被考虑，Array直接回收
// map.set(array, 4)  // +1
// array = null // -1 计数为: 0 回收
// global.gc(); //
// console.log(process.memoryUsage())