import { createElement, render, renderDom } from './element'
import diff from './diff'

let vertualDom1 = createElement('ul', {class: 'list'},[
  createElement('li', {class: 'item'}, ['aaa']),
  createElement('li', {class: 'item'}, ['bbb']),
  createElement('li', {class: 'item'}, ['ccc'])
])

let vertualDom2 = createElement('ul', {class: 'list-item'},[
  createElement('li', {class: 'item'}, ['aaa']),
  createElement('li', {class: 'item'}, ['222']),
  createElement('li', {class: 'item'}, ['333'])
])

let patchs = diff(vertualDom1, vertualDom2)
// console.log(vertualDom)

// 将虚拟dom转化为真实dom，渲染到页面上
// let el = render(vertualDom)
// renderDom(el, window.root)

// console.log(el)

// DOM Diff 用来比较来个虚拟DOM区别，比较两个对象的区别，找出发生变化的那条属性
// 作用 根据两个虚拟对象创建出来补丁，描述改变的内容，将这个补丁用来更新dom
