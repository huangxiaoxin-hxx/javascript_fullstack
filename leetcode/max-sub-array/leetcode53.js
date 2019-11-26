// let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
let nums = [-2, -3, -1, -5]
var maxSubArray1 = function (nums) {
  let i, k
  let thisSum
  let maxSum
  for (i = 0; i < nums.length; i++) {
    for (k = i; k < nums.length; k++) {
      // end: k start: i
      thisSum = 0;
      for (j = i; j < k; j++) {
        thisSum += nums[j]
      }
      if (thisSum > maxSum) {
        maxSum = thisSum
      }
    }
  }
};
// [-2, 1, -3, 4, -1, 2, 1, -5, 4]
var maxSubArray = function (nums) {
  let num = 0
  let res = nums[0]
  for (let i = 0; i < nums.length; i++) {
    if(num < 0) {
      num = 0
    }
    num += nums[i]
    // console.log('num',num)
    res = num > res ? num : res
    // console.log('res',res)
  }
  return res
}

console.log(maxSubArray(nums))