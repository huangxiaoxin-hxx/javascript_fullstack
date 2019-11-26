var arr = [1,2,3,4,5,6,7]
function RShift (nums, k) {
  return [...nums.slice(nums.length - (k % nums.length)), ...nums.slice(0, nums.length - (k % nums.length))]
}
console.log(RShift(arr, 2))