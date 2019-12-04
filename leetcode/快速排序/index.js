let x = [1,3,9,7,2,4,8,5]
// 1.选择一个元素做为基准  中间数
// 2.将所有小于基准的元素，都移到基准的左边，将所有大于基准的元素，都移到基准的右边
// 3.对基准左右两边的子集，重复1,2步骤

var quickSort = function (arr) {
  if(arr.length <= 1) {
    return arr
  }
  let left = []
  let right = []
  var pivotIndex = arr.length >> 1
  var pivot = arr.splice(pivotIndex, 1)[0]
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}
console.log(quickSort(x))