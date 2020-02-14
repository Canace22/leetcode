# 简单题目的题解

### 一、找出数组中相加等于目标值的两个元素下标 (simple)

**题目：**

```md
给定一个整数数组 nums  和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum
```

**题解：**

1、 python

```python
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
```

2、 JavaScript

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const hashMap = {};

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    const complement = target - element;
    if (hashMap[complement] + 1) {
      return [hashMap[complement], index];
    }
    hashMap[element] = index;
  }
  return [];
};
const res = twoSum([2, 7, 11, 15], 9);
```

遍历列表，目标值与当前元素相减得到符合条件的元素，查找字典，如果存在符合条件的键，返回值，否则把该元素作为键，索引作为值存到字典里，重复以上步骤，直到找到对应的两个元素，返回索引列表,若未找到，返回空数组。对比一下两种语言的执行结果，不难发现，同样的算法，python 在内存消耗和执行时间上都优于 JS。

### 二、 删除数组中的重复项，返回新的长度(simple)

**题目：**

```md
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example 1:
Given nums = [1, 1, 2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.
Example 2:
Given nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],

Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.

来源：力扣（LeetCode）
链接：https: // leetcode - cn.com / problems / remove - duplicates - from - sorted - array
```

**题解：**

```python
class Solution:
    def removeDuplicates(self, nums) -> int:
        # @param nums: List[int]
        # method 1:
        if not len(nums):
            return 0
        i = 0
        for item in nums:
            if item != nums[i]:
                i += 1
                nums[i] = item
        return i + 1
        # method 2:
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
```

解这道题主要用的是双指针，首先排除数组为空的状况返回长度 0，然后初始化一个指针 i，遍历数组，若 item 等于 num[i]， 则跳过，否则，将 item 的值赋给 nums[i+1]，i 自增 1。

### 三、 数组原地移除目标值(simple)

**题目：**

```md
Given an array nums and a value val, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Example 1:
Given nums = [3, 2, 2, 3], val = 3,
Your function should return length = 2, with the first two elements of nums being 2.
It doesn't matter what you leave beyond the returned length.

Example 2:
Given nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2,
Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.
Note that the order of those five elements can be arbitrary.
It doesn't matter what values are set beyond the returned length.

来源：力扣（LeetCode）
链接：https: // leetcode-cn.com/problems/remove-element
```

**题解：**

```python
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
```

这题跟上一题解法异曲同工，也是用了双指针，把与目标值相同的节点移到末尾，最后前面的 i 位就不是我们要找的元素了，截取前面 i 位则为剔除查找元素后的新数组

### 四、反转整数 (simple)

**题目：**

```md
给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例  1:
输入: 123
输出: 321
  示例 2:
输入: -123
输出: -321

示例 3:
输入: 120
输出: 21

注意:
假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为  [−231, 231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

来源：力扣（LeetCode）
链接：https: // leetcode-cn.com/problems/reverse-integer
```

**题解：**

```python
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

### 五、括号匹配 (simple)

**题目：**

```md
给定一个只包括 '('，')'，'{'，'}'，'['，']'  的字符串，判断字符串是否有效。

有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:
输入: "()"
输出: true

示例  2:
输入: "()[]{}"
输出: true

示例  3:
输入: "(]"
输出: false

示例  4:
输入: "([)]"
输出: false

示例  5:
输入: "{[]}"
输出: true

来源：力扣（LeetCode）
链接：https: // leetcode-cn.com/problems/valid-parentheses
```

**题解：**

```python
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

### 六、回文数判断 (simple)

**题目：**

```md
判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

示例 1:
输入: 121
输出: true

示例  2:
输入: -121
输出: false
解释: 从左向右读, 为 - 121 。 从右向左读, 为 121 - 。因此它不是一个回文数。

示例 3:
输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。

来源：力扣（LeetCode）
链接：https: // leetcode-cn.com/problems/palindrome-number
```

**题解：**

```python
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

### 七、 获取最长公共前缀 (simple)

**题目：**

```md
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: ["flower", "flow", "flight"]
Output: "fl"

Example 2:
Input: ["dog", "racecar", "car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Note:
All given inputs are in lowercase letters a-z.

来源：力扣（LeetCode）
链接：https: // leetcode-cn.com/problems/longest-common-prefix
```

**题解：**

```python
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

### 八、 单向列表拼接 (simple)

**题目：**

```md
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:
Input: 1 -> 2 -> 4, 1 -> 3 -> 4
Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4

来源：力扣（LeetCode）
链接：https: // leetcode-cn.com/problems/merge-two-sorted-lists

Definition for singly-linked list.
```

**题解：**

```python
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def mergeTwoLists(self, l1, l2):
        prehead = ListNode(-1)

        prev = prehead
        while l1 and l2:
            if l1.val <= l2.val:
                prev.next = l1
                l1 = l1.next
            else:
                prev.next = l2
                l2 = l2.next
            prev = prev.next
        prev.next = l1 if l1 is not None else l2

        return prehead.next

    def __init__(self, arr1, arr2):
        n1 = ListNode(arr1[0])
        x1 = ListNode(arr2[0])
        self.mergeTwoLists(n1, x1)
        print(self.mergeTwoLists(n1, x1).val)

Solution([1, 2, 4], [1, 3, 4])
```

通过比较两个列表节点的大小，替换节点的方式，拼接出一个由小到大排序的有序单向列表，这题对于我来说，难点在于列表的实现，由于之前没怎么接触过链表，还得慢慢去理解。

### 九、爬楼梯

**题目**

```md
假设你正在爬楼梯。需要 n  阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1：

输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。

1.  1 阶 + 1 阶
2.  2 阶

示例 2：

输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。

1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/climbing-stairs
```

**题解**

(1) 暴力破解法，动态规划，把问题缩小为 1 阶和 2 阶问题，这种写法的问题是效率太低，提交之后没通过，因为超时了。

```js
var climbStairs = function(n) {
  return climb_stairs(0, n);
};

var climb_stairs = function(i, n) {
  if (i > n) {
    return 0;
  }
  if (i === n) {
    return 1;
  }
  return climb_stairs(i + 1, n) + climb_stairs(i + 2, n);
};
```

(2) 记忆化递归，优化了上述算法，每次递归之后吧值存起来，减少冗余

```js
var climbStairs = function(n) {
  const memo = [];
  return climb_stairs(0, n, memo);
};

var climb_stairs = function(i, n, memo) {
  if (i > n) {
    return 0;
  }
  if (i === n) {
    return 1;
  }
  if (memo[i] > 0) {
    return memo[i];
  }

  memo[i] = climb_stairs(i + 1, n, memo) + climb_stairs(i + 2, n, memo);

  return memo[i];
};
```
