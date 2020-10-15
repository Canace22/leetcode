# 一刷时间: 2019
# 链接：https: // leetcode - cn.com / problems / remove - duplicates - from - sorted - array


class Solution:
    def removeDuplicates(self, nums) -> int:
        # @param nums: List[int]
        # 数组为空，返回长度为 0
        if not len(nums):
            return 0
        # 初始化索引 i
        i = 0
        # 遍历数组，判断 nums[i] 是否等于 item，若等于，则跳过，否则，把 item 赋值给 nums[i + 1]
        for item in nums:
            if item != nums[i]:
                i += 1
                nums[i] = item
        return i + 1
        # pre, cur = 0, 1
        # while cur < len(nums):
        #     if nums[pre] == nums[cur]:
        #         nums.pop(cur)
        #     else:
        #         pre, cur = pre+1, cur+1
        # return len(nums)

    def __init__(self, nums):
        for item in nums:
            print('res:', self.removeDuplicates(item))


Solution([[1, 1, 2], [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], []])
