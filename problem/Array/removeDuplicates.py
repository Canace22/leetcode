# Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

# Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

# Example 1:
# Given nums = [1, 1, 2],

# Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

# It doesn't matter what you leave beyond the returned length.
# Example 2:
# Given nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],

# Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

# It doesn't matter what values are set beyond the returned length.

# 来源：力扣（LeetCode）
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
