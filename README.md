# leetcode-note

> 每日算法练习记录

一、数组

1、找出数组中相加等于目标值的两个元素下标 (simple)

(1) 题目：

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

(2) 题解：

python

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

JavaScript

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
    if (hashMap[complement]) {
      return [hashMap[complement] - 1, index];
    }
    hashMap[element] = index + 1;
  }
  return [];
};
```

遍历列表，目标值与当前元素相减得到符合条件的元素，查找字典，如果存在符合条件的键，返回值，否则把该元素作为键，索引作为值存到字典里，重复以上步骤，直到找到对应的两个元素，返回索引列表,若未找到，返回空数组。对比一下两种语言的执行结果，不难发现，同样的算法，python在内存消耗和执行时间上都优于 JS。

2、 在两个有序数组中，找出中值 (difficult)

(1) 题目:

```md
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log(m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:
nums1 = [1, 3]
nums2 = [2]
The median is 2.0

Example 2:
nums1 = [1, 2]
nums2 = [3, 4]
The median is (2 + 3)/2 = 2.5

来源：力扣（LeetCode）
链接：https: // leetcode-cn.com/problems/median-of-two-sorted-arrays
```

(2) 题解：

```python
class Solution:
    def findMedianSortedArrays(self, A, B) -> float:
        # @param A: List[int]
        # @param B: List[int]
        # m, n 分别为两个数组的长度
        m, n = len(A), len(B)
        if m > n:
            A, B, m, n = B, A, n, m
        # 数组为空返回
        if n == 0:
            raise ValueError
        # 初始化二分查找的最大值、最小值以及中值
        low, high, mid = 0, m, (m + n + 1) / 2
        # 二分查找出左域的最大值，右域的最小值
        while low <= high:
            i = int((low + high) / 2)
            j = int(mid - i)
            if i < m and B[j-1] > A[i]:
                low = i + 1
            elif i > 0 and A[i-1] > B[j]:
                high = i - 1
            else:
                if i == 0:
                    max_of_left = B[j-1]
                elif j == 0:
                    max_of_left = A[i-1]
                else:
                    max_of_left = max(A[i-1], B[j-1])

                if (m + n) % 2 == 1:
                    return max_of_left

                if i == m:
                    min_of_right = B[j]
                elif j == n:
                    min_of_right = A[i]
                else:
                    min_of_right = min(A[i], B[j])

                return (max_of_left + min_of_right) / 2.0

    def __init__(self, nums1, nums2):
        print(self.findMedianSortedArrays(nums1, nums2))


x = Solution([1, 3], [2])
y = Solution([1, 2], [3, 4])
```

这个题解利用的是中值左右两边长度相等，左边的最大值小于右边的最大值的特性来判断中值，局部最大值与最小值的查找用的是二分法

3、 删除数组中的重复项，返回新的长度(simple)

(1) 题目：

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

(2) 题解：

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

4、 数组原地移除目标值(simple)

(1) 题目：

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

(2) 题解：

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

5、 盛最多水的容器(middle)

(1) 题目：

```md
给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点  (i, ai) 。在坐标内画 n 条垂直线，垂直线 i  的两个端点分别为  (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与  x  轴共同构成的容器可以容纳最多的水。

说明：你不能倾斜容器，且  n  的值至少为 2。

图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为  49。

示例:

输入: [1,8,6,2,5,4,8,3,7]
输出: 49
来源：力扣（LeetCode）
链接：https: // leetcode-cn.com/problems/3sum
```

(2) 题解：

```python
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
```

6、三数相加等于 0

(1) 题目

```md
给定一个包含 n 个整数的数组  nums，判断  nums  中是否存在三个元素 a，b，c ，使得  a + b + c = 0 ？找出所有满足条件且不重复的三元组。
注意：答案中不可以包含重复的三元组。
例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，满足要求的三元组集合为：
[
[-1, 0, 1],
[-1, -1, 2]
]
来源：力扣（LeetCode）
链接：https: // leetcode-cn.com/problems/3sum
```

二、其他

1、 反转整数 (simple)

(1) 题目：

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

(2) 题解：

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

2、括号匹配 (simple)

(1) 题目：

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

(2)题解：

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

3、回文数判断 (simple)

(1) 题目：

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

(2) 题解：

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

4、 获取最长公共前缀 (simple)

(1) 题目：

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

(2) 题解：

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

5、 单向列表拼接 (simple)

(1) 题目：

```md
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:
Input: 1 -> 2 -> 4, 1 -> 3 -> 4
Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4

来源：力扣（LeetCode）
链接：https: // leetcode-cn.com/problems/merge-two-sorted-lists

Definition for singly-linked list.
```

(2) 题解：

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

6、两字符串相乘(middle)

(1) 题目

给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

示例 1:

输入: num1 = "2", num2 = "3"
输出: "6"
示例 2:

输入: num1 = "123", num2 = "456"
输出: "56088"
说明：

num1 和 num2 的长度小于110。
num1 和 num2 只包含数字 0-9。
num1 和 num2 均不以零开头，除非是数字 0 本身。
不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/multiply-strings

（2) 题解

我们知道 123 * 123 = 123 * 100 + 123 * 20 + 123 * 3，而 123 = 1 * 10**2 + 2 * 10 ** 1 + 3 * 10 ** 0，这样就把两个数字想转换为了第一个数乘以第二个数的每一位乘以该位上的10的个数了，所以该算法可以分解为：

A. 逆序遍历被乘数，得出每一位上的数字

B. 把结果加起来就是结果了

这里需要注意的是我们输入的是字符串，输出的也是字符串，这里面要考虑变量类型转换的问题，此外为什么这么简单的数字相乘要弄得这么复杂，是因为在计算很大的数字时有些语言的结果可能不对，所以只能用这种曲线救国的方案去调优。

```js
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// 求两字符串相加的和
var sum = function(num1, num2) {
  // 确定num1为长字符串，num2为短字符串
  if (num1.length < num2.length) {
    [num1, num2] = [num2, num1];
  }
  while (num1.length !== num2.length) {
    // 对短的字符串补0
    num2 = "0" + num2;
  }
  //进位变量
  let addOne = 0;
  let result = [];
  //倒序相加
  for (let i = num1.length - 1; i >= 0; i--) {
    let c1 = num1[i] - 0;
    let c2 = num2[i] - 0;

    let sum = c1 + c2 + addOne;
    //若数字相加大于9，则进位
    if (sum > 9) {
      result.unshift(sum - 10);
      addOne = 1;
    } else {
      result.unshift(sum);
      addOne = 0;
    }
  }
  //"99" + "11" => "110"
  //它最后仍然要进位
  if (addOne) {
    result.unshift(addOne);
  }
  //"01" + "01" => "2"
  //而不是"02"，所以移除第一位的"0"
  if (!result[0]) {
    result.splice(0, 1);
  }
  return result.join("");
};
// 求两字符串相乘的积
var multiply = function(num1, num2) {
  let res = "0";
  if (num2.length === 0 || num2.length === 0 || num1 === "0" || num2 === "0") {
    return res;
  }
  if (num1.length < num2.length) {
    [num1, num2] = [num2, num1];
  }
  for (let i = num2.length - 1; i >= 0; i--) {
    const carry = 10 ** i;
    const num = num2[num2.length - 1 - i];
    const newNum = num * carry;
    console.log(newNum * num1 + "");
    const multiplyRes = newNum * num1 + "";
    res = sum(res, multiplyRes);
    // console.log(res, multiplyRes);
  }
  return res;
};
const res = multiply("2", "3");
const res1 = multiply("123456789", "123456789");
const res2 = multiply("0", "123456789");
const res3 = multiply("498828660196", "840477629533");
console.log(res);
console.log(res1);
console.log(res2);
console.log(res3);
```

目前该算法测试前三个用例通过，第四个用例尚未通过，仍需调优