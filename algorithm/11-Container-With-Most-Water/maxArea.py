# 一刷时间:2019
# 链接：https://leetcode-cn.com/problems/container-with-most-water

class Solution:
    def maxArea(self, height) -> int:
        # @param height: List[int]
        # 初始化指针 i, j,用于表示坐标的两端,初始化结果 res
        i, j, res = 0, len(height) - 1, 0
        # 按照短柱子截取坐标
        while i < j:
            # 左边的柱子小于右边的，则左边的柱子向右移动一格，存储大的面积
            if height[i] < height[j]:
                res = max(res, height[i] * (j - i))
                i += 1
            # 右边的柱子小于左边的，则右边的柱子向左移动一格，存储大的面积
            else:
                res = max(res, height[j] * (j - i))
                j -= 1
        return res

    def __init__(self, height):
        for item in height:
            print(self.maxArea(item))


Solution([[1, 8, 6, 2, 5, 4, 8, 3, 7], []])
