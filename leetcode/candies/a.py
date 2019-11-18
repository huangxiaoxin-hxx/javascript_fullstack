from typing import List

class Solution:
  def distributeCandies(self, candies:List[int]) -> int:
    # min 函数式 内置函数
    return min(len(candies)>>1, len(set(candies)))

x = Solution()
print("最大的种类数",x.distributeCandies([1,1,2,2,3,3]))