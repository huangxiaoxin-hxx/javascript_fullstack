arr = [1,2,3,4,5,6,7,8,9,10]

function search(arr, item) {
  let low = 0
  let heigh = arr.length - 1
  let mid
  let element
  while (low <= heigh) {
    mid = (low + heigh) >> 1
    element = arr[mid]
    if (element < item) {
      low = mid + 1
    } else if (element > item) {
      heigh = mid - 1
    } else {
      return mid
    }
  }
}
