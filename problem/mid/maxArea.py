# 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

# 说明：你不能倾斜容器，且 n 的值至少为 2。

# 图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

# 示例:
# 输入: [1,8,6,2,5,4,8,3,7]
# 输出: 49

# 来源：力扣（LeetCode）
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
