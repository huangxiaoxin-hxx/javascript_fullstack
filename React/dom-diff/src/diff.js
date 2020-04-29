// 当节点类型相同是，去看一下属性是否相同，产生一个属性的补丁包(type:'ATTRS', attrs: {class: 'list-group'})
// 新的dom节点不存在{type: 'romove', index:xxxx}
// 节点类型不同，直接采用替换模式{type:'REPLACE', node: newNode}
// 文本内容发生变化{type:'TEXT', text:1}
function diff(oldTree, newTree) {
  let patchs = {}  // 补丁包
  let index = 0
  // 递归树，比较后的结果放到补丁包中
  walk(oldTree, newTree, index, patchs)
  return patchs
}

function diffAttr(oldAttrs, newAttrs) {
  let patch = {}
  for (let key in oldAttrs) {
    console.log(key)
    // 判断老的属性中和新的属性的关系
    if (oldAttrs[key] !== newAttrs[key]) {
      patch[key] = newAttrs[key]  // 有可能会出现undefinde
    }
  }

  // 新节点新增属性
  for (let key in newAttrs) {
    // 判断老的属性中和新的属性的关系
    if (oldAttrs.hasOwnProperty(key)) {
      patch[key] = newAttrs[key]
    }
  }
  return patch
}
const ATTRS = 'ATTRS'
function walk(oldNode, newNode, index, patchs) {
  let currentPatch = []
  if (oldNode.type === newNode.type) {
    // 比较属性是否有更改
    let attrs = diffAttr(oldNode.props, newNode.props)
    // console.log(attrs)
    if(Object.keys(attrs).length > 0) {
      currentPatch.push({type: ATTRS, attrs})
    }
  }
  if (currentPatch.length > 0) {  // 当前元素确实有补丁
    // 将元素和补丁对应起来，放到大补丁包中
    patchs[index] = currentPatch
    console.log(patchs)
  }
}

export default diff