let findMedianSortedArrays = function(nums1, nums2) {
  let len1 = nums1.length, len2 = nums2.length
  // 先算出中位数的位置
  let mid = (len1 + len2) >> 1
  // console.log('mid',mid)
  // 用来保存中位数
  let midNum
  // 考虑两种情况
  let n1,n2
  // 需要两个数组下标
  let i = 0, j = 0
  while(i < len1 || j < len2) {
    if(j === len2 || nums1[i] < nums2[j]) { // 如果 nums1[i] < nums2[j] 则把nums1放下
      midNum = nums1[i]
      // console.log('i',i,midNum)
      i++
    } else { // nusm1[i] > nusm2[j] 或 相等 则把nusm2放下
      midNum = nums2[j]
      // console.log('j',j,midNum)
      j++
    }
    if(i + j == mid) {
      // console.log('mid',mid)
      n1 = midNum
    }
    if (i + j == mid + 1) {
      // console.log('mid+1',mid+1)
      n2 = midNum
      break;
    }
  }
  return (len1 + len2) % 2 === 0 ? (n1 + n2)/2 : n2
};

console.log(findMedianSortedArrays([0,0],[0,0]))