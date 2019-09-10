# leetcode-note

> 每日算法练习记录

1. 找出数组中相加等于目标值的两个元素下标

```python
# 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。

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
            print('complement:', complement)
            print('hashmap:', hashmap)
            if complement in hashmap:
                return [hashmap[complement], i]
            hashmap[val] = i
            print('hashmap x:', hashmap)

    def __init__(self, nums, target):
        print(self.twoSum(nums, target))

nums = [2, 7, 11, 15]
target = 9
Solution(nums, target)
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
        INT_MIN = -2 ** 31
        print(INT_MAX, INT_MIN)
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

    def __init__(self, arr):
        for item in arr:
            print(self.reverse(item))

arr = [123, -123, 120]
Solution(arr)
```

从个位开始从高到低重新排位，最后得到的就是当前整数倒过来的数字

3. 括号匹配

```python
# 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

# 有效字符串需满足：
# 左括号必须用相同类型的右括号闭合。
# 左括号必须以正确的顺序闭合。
# 注意空字符串可被认为是有效字符串。

# 示例 1:
# 输入: "()"
# 输出: true

# 示例 2:
# 输入: "()[]{}"
# 输出: true

# 示例 3:
# 输入: "(]"
# 输出: false

# 示例 4:
# 输入: "([)]"
# 输出: false

# 示例 5:
# 输入: "{[]}"
# 输出: true

# 来源：力扣（LeetCode）
# 链接：https: // leetcode-cn.com/problems/valid-parentheses

class Solution:
    def isValid(self, s):
        # 简洁但是效率低
        # while '{}' in s or '()' in s or '[]' in s:
        #     s = s.replace('{}', '')
        #     s = s.replace('[]', '')
        #     s = s.replace('()', '')
        # return s == ''
        stack = []  # 初始化栈
        mapping = {')': '(', ']': '[', '}': '{'}  # 字典存储所有的匹配类型
        for char in s:  # 遍历字符串
            if (char in mapping):  # 当前字符为闭合符号时
                top_element = stack.pop() if stack else '#'  # 栈顶元素出栈
                if mapping[char] != top_element:  # 没有匹配的类型，返回 false
                    return False
            else:
                stack.append(char)  # 开括号存储到栈里
        return not stack

    def __init__(self, arr):
        for item in arr:
            print(self.isValid(item))

arr = ['()', '()[]{}', "(]", "([)]", "{[]}", '']
Solution(arr)
```

4. 回文数判断

```python
# 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

# 示例 1:
# 输入: 121
# 输出: true

# 示例 2:
# 输入: -121
# 输出: false
# 解释: 从左向右读, 为 - 121 。 从右向左读, 为 121 - 。因此它不是一个回文数。

# 示例 3:
# 输入: 10
# 输出: false
# 解释: 从右向左读, 为 01 。因此它不是一个回文数。

# 来源：力扣（LeetCode）
# 链接：https: // leetcode-cn.com/problems/palindrome-number

class Solution:
    def isPalindrome(self, x: int) -> bool:
        # x 若是 0 或者负数，返回 false
        if (x < 0 or (int(x % 10 == 0) and x != 0)):
            return False
        # 初始化翻转数字
        reverse = 0
        # 若原始数字 x 大于从后面开始翻转的数字，说明已经翻转了后半部分，翻转阶段完成
        while (x > reverse):
            reverse = int(reverse * 10) + int(x % 10)
            x = int(x / 10)
            print('x:', x)
            print('reverse', reverse)
        # 若翻转的后半部分数字 reverse 等于前半部分数字，返回 true，否则返回 false，利用 int 向上取整的特性，当 x 为奇数时，去掉最后一位
        return x == reverse or x == int(reverse / 10)

    def __init__(self, arr):
        for item in arr:
            print(self.isPalindrome(item))

arr = [121, -121, 10]
Solution(arr)
```

5. 获取最长公共前缀

```python
# Write a function to find the longest common prefix string amongst an array of strings.

# If there is no common prefix, return an empty string "".

# Example 1:
# Input: ["flower", "flow", "flight"]
# Output: "fl"

# Example 2:
# Input: ["dog", "racecar", "car"]
# Output: ""
# Explanation: There is no common prefix among the input strings.

# Note:
# All given inputs are in lowercase letters a-z.

# 来源：力扣（LeetCode）
# 链接：https: // leetcode-cn.com/problems/longest-common-prefix

class Solution:
    def longestCommonPrefix(self, strs) -> str:
        if not strs:
            return ''
        r = []
        for item in zip(*strs):  # 将 str 转换为二维矩阵式，遍历每个单元
            # 若二维矩阵式每一项用 set 方式去重，三个都为重复的话，长度将为 1，此时 str 中每个元素该位置的值相同，将 true 添加到结果集合中
            r.append(len(set(item)) == 1)
        # 用于解决全部字符串相等时的情况，在后面加个 0，可以截取整个数组
        r += [0]
        # r.index(0) 表示相同字符串的截取位置，res 则为最长公共前缀
        res = strs[0][:r.index(0)]
        return res

    def __init__(self, arr):
        for item in ex:
            print(self.longestCommonPrefix(item))

ex = [["dog", "racecar", "car"], ["flower", "flow", "flight"], []]
Solution(ex)
```
这道题用到了 python 的一个独有的数据处理能力，把数组转置为矩阵，通过判断矩阵每行的重复数为 1，判别数组中的每个元素的公共前缀。有点曲径通幽处的感觉，很妙。题解是我看了一个老哥的解答之后优化的，那老哥直接用了生成器，两行搞定了，可能理解上需要花点时间，我就按照自己的理解写成了一般式了。


