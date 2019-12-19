const tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: {
        val: 5
      },
      right: {
        val: 6,
        left: {
          val: 8
        }
      }
    },
    right: {
      val: 7,
      right: {
        val: 9
      }
    }
  },
  right: {
    val: 3
  }
}
// 遍历
// 爆栈
var preOrder = function(node) {
  if (node) {
    console.log(node.val)
    preOrder(node.left)
    preOrder(node.right)
  }
}

console.log(preOrder(tree))

function loopPreOrder(tree) {
  let stack = []
  let res = []
  let current = tree
  stack.push(tree)
  while(stack.length > 0) {
    while(current) {
      res.push(current.val)
      stack.push(current)
      current = current.left
    }
    current = stack.pop()
    current = current.right
  } 
  return res
}
console.log(loopPreOrder(tree))