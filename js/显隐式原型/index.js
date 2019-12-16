// function Person(name) {
//   this.name = name
// }

// let p = new Person('wn')
// // p.__proto__ = Person.prototype
// console.log(p.__proto__)
// console.log(Person.__proto__)
// console.log(Function.__proto__)

// var foo = {}
// var foo = new Object()
// var F = function() {}
// Object.prototype.a = 'valA'
// Function.prototype.b = 'valB'

// console.log(foo.a)
// console.log(foo.b)
// console.log(F.a)
// console.log(F.b)

Array.prototype.methods = function() {}
var myArray = [1,2,3,4,5,6,7]
myArray.name = 'wn'
for (let index of myArray) {
  console.log(index)
}

// for in
// 1. index是索引，不能直接进行几何运算
// 2. 遍历的顺序可能不是按照实际数组的内部顺序进行的
// 3. 使用for in 会遍历数组的所有可枚举属性，包括原型

// for of
// 1.遍历的是数组的元素，遍历不包括数组的原型和索引