# leetcode-note

> 每日算法练习记录

1. 找出数组中相加等于目标值的两个元素下标

```python
# 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

# 示例:

# 给定 nums = [2, 7, 11, 15], target = 9

# 因为 nums[0] + nums[1] = 2 + 7 = 9
# 所以返回 [0, 1]

# 来源：力扣（LeetCode）
# 链接：https://leetcode-cn.com/problems/two-sum


class Solution:
    def twoSum(self, nums, target):
        hashmap = {}
        for i, val in enumerate(nums):
            complement = target - val
            if complement in hashmap:
                return [hashmap[complement], i]
            hashmap[val] = i
    def _init_(self):
       return self.twoSum([2, 7, 11, 15], 22)



x = Solution()
print(x))
```

遍历列表，目标值与当前元素相减得到符合条件的元素，查找字典，如果存在符合条件的键，返回值，否则把该元素作为键，索引作为值存到字典里，重复以上步骤，直到找到对应的两个元素，返回索引列表

2. 反转整数

```python
# 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

# 示例 1:

# 输入: 123
# 输出: 321
#  示例 2:

# 输入: -123
# 输出: -321
# 示例 3:

# 输入: 120
# 输出: 21
# 注意:

# 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231, 231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

# 来源：力扣（LeetCode）
# 链接：https: // leetcode-cn.com/problems/reverse-integer

class Solution:
    def reverse(self, x):
        INT_MAX = 2**31
        INT_MIN = -2**31
        cur = 0
        while x != 0:
            if (x < 0):
                pop = int(x % -10)
            else:
                pop = int(x % 10)
            if cur > INT_MAX / 10 or (cur == INT_MAX / 10 and pop > 7):
                return 0
            if cur < INT_MIN / 10 or (cur == INT_MIN / 10 and pop < -8):
                return 0
            cur = cur * 10 + pop
            x = int(x/10)
        return cur

    def _init_(self):
        print(res.reverse(-123))
        return self.reverse(-123)

res = Solution()
res._init_()
```




