# 一刷时间: 2019
# 链接：https://leetcode-cn.com/problems/two-sum

class Solution:
    def twoSum(self, nums, target):
        hashmap = {}
        for i, val in enumerate(nums):
            complement = target - val
            if complement in hashmap:
                return [hashmap[complement], i]
            hashmap[val] = i
        return []

    def __init__(self, nums, target):
        print(self.twoSum(nums, target))


nums = [2, 7, 11, 15]
target = 9
Solution(nums, target)
