from typing import List
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
      num = 0
      res = nums[0]
      for item in nums:
        if num < 0:
          num = 0
        num += item
        res = max(num, res)
      return res

Solution = Solution()
print(Solution.maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))