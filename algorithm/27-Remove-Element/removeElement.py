# 一刷时间: 2019
# 来源: https://leetcode-cn.com/problems/remove-element/

class Solution:
    def removeElement(self, nums, val: int) -> int:
        # @param nums: List[int]
        # @param val: int
        i = 0
        for j in range(0, len(nums)):
            if nums[j] != val:
                nums[i] = nums[j]
                i += 1
            print(nums)
        return i

    def __init__(self, test):
        for item in test:
            print(self.removeElement(item['nums'], item['val']))


test = [{'nums': [3, 2, 2, 3], 'val': 3}, {
    'nums': [0, 1, 2, 2, 3, 0, 4, 2], 'val': 2}, {'nums': [], 'val': 1}]
Solution(test)
