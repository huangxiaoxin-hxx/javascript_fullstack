var tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4
    }
  },
  right: {
    value: 3,
    left: {
      value: 5,
      left: {
        value: 7
      },
      right: {
        value: 8
      }
    },
    right: {
      value: 6
    }
  }
}

//  前序遍历+递归
var preOrder = function(node) {
  if (node) {
    console.log(node.value)
    preOrder(node.left)
    preOrder(node.right)
  }
}
// preOrder(tree)

// 非递归 深度优先
var perOrderUnRecur = function(node) {
  if (!node) {
    throw new Error('Empty Tree')
  }
  var stack = []
  stack.push(node)
  while(stack.length !== 0) {
    node = stack.pop()
    console.log(node.value)
    if(node.right) stack.push(node.right)
    if(node.left) stack.push(node.left)
  }
}

// console.log(perOrderUnRecur(tree))

// 非递归 广度优先

var BreadthFirstUnRecur = function(node) {
  let queue = []
  queue.push(node)
  while(queue.length !== 0) {
    let node = queue.shift()
    console.log(node.value)
    if(node.left) queue.push(node.left)
    if(node.right) queue.push(node.right)
  }
}

// BreadthFirstUnRecur(tree)

let a = 8*1000+10*500+152*100+77*50+10*418
console.log(a)