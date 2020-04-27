# 虚拟dom (virtual dom)
虚拟节点，通过js的object对象模拟DOM中的节点，然后再通过特定的render方法将其渲染成真实的DOM节点

createElement => { type, props, children }
判断基础数据类型用 typeof 判断复杂类型 instanceof