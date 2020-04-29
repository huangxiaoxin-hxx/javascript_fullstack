# 虚拟dom (virtual dom)
虚拟节点，通过js的object对象模拟DOM中的节点，然后再通过特定的render方法将其渲染成真实的DOM节点

createElement => { type, props, children }
判断基础数据类型用 typeof 判断复杂类型 instanceof

# DOM Diff
dom diff 是通过js层面的计算，返回一个patch（补丁）对象，在通过特定操作解析patch对象，完成页面渲染

dom diff 有三种优化策略
  - 更新只比较平级

差异计算
  - 先序深度优先遍历
   1. 用js对象模拟dom
   2. 把该虚拟的dom转化为真实dom并插入页面中
   3. 如果有事件发生，修改了虚拟dom，那就比较两颗虚拟dom树的差异，得到差异对象
   4. 把差异对象应用到真实的dom树上面

当节点类型相同是，去看一下属性是否相同，产生一个属性的补丁包(type:'ATTRS', attrs: {class: 'list-group'})
新的dom节点不存在{type: 'romove', index:xxxx}
节点类型不同，直接采用替换模式{type:'REPLACE', node: newNode}
文本内容发生变化{type:'TEXT', text:1}