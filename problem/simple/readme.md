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
var twoSum = function (nums, target) {
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

**题目**

```
# 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

# 示例 1:
# 输入: 123
# 输出: 321

#  示例 2:
# 输入: -123
# 输出: -321

# 示例 3:
# 输入: 120
# 输出: 21
# 注意:

# 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231, 231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

# 来源：力扣（LeetCode）
# 链接：https: // leetcode-cn.com/problems/reverse-integer
```

**思路**

1、 确定最大边界值和最小边界值

2、 当数字不等于 0 时，执行以下操作：

(1) 获取当前位数字（整数）

(2) 获取去掉当前位数字后，余下的数字（整数）

(3) 按位与边界值比较，若当前位数字大于最大边界值去掉最高位或者当前位数字等于最大边界值去掉最高位而且接下来要添加的数字大于 7，则溢出，返回 0，这里 7 作为下一位的判断值，是因为最大边界值的最后一位是 7

(4) 按位与边界值比较，若当前位数字小于于最小边界值去掉最高位或者当前位数字等于最小边界值去掉最高位而且接下来要添加的数字小于 -8，则溢出，返回 0，这里 -8 作为下一位的判断值，是因为最小边界值的最后一位是 8

(5) 否则，数字反转

**题解**

js 题解

```js
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const edge = 2 ** 31;
  const INT_MAX = edge - 1;
  const INT_MIN = -edge;

  let rev = 0;
  while (x !== 0) {
    const pop = ~~(x % 10);

    x = ~~(x / 10);
    if (rev > INT_MAX / 10 || (rev === INT_MAX / 10 && pop > 7)) return 0;
    if (rev < INT_MIN / 10 || (rev === INT_MIN / 10 && pop < -8)) return 0;
    rev = rev * 10 + pop;
  }
  return rev;
};

console.log('123:', reverse(123));
console.log('-123:', reverse(-123));
```

python 题解

```python
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

python 题解：

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

js 题解：

```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // 当 x 为 负数或者 x 的最后一位为 0 时，不满足条件，返回 false
  if (~~x < 0 || (~~x % 10 === 0 && x !== 0)) {
    return false;
  }
  let rev = 0;
  // x 的 前半部分大于后半部分反转值，继续推出 x 后一位，推入 rev
  while (~~x > rev) {
    rev = rev * 10 + (~~x % 10);
    x /= 10;
  }
  //  当 x 为 偶数位时，满足回文的条件是前半部分等于后半部分反转数，当 x 为奇数时，x 的前半部分数字等于中值后面数字的反转值
  return ~~x === rev || ~~x === ~~(rev / 10);
};
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
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
var climbStairs = function (n) {
  return climb_stairs(0, n);
};

var climb_stairs = function (i, n) {
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
var climbStairs = function (n) {
  const memo = [];
  return climb_stairs(0, n, memo);
};

var climb_stairs = function (i, n, memo) {
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

### 十、罗马数字转整数

**题目**

```js
// 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。

// 字符          数值
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// 例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

// 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

// I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
// X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
// C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
// 给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/roman-to-integer
```

**思路**

1. 把罗马数字对应整数的规则存到哈希表里进行映射

2. 罗马数字分两种情况，一种是正常的一个一个相加的，一种是小的数字在前面，需要用后一个数字减去前面一个数字，这种情况

3. 遍历罗马数字
   - 如果跟后一个数字组合，不在哈希表里，则直接跟上一次的结果相加，跳到下一个数字
   - 如果跟后一个数字组合，结果在哈希表里，则跟该组合的值跟上一次的结果相加，跳到下下个数字

**题解**

```js
/**
 * @param {string}
 * @return {number}
 */
var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  const { length } = s;
  let res = 0;

  for (let i = 0; i < length; ) {
    if (map[s[i] + s[i + 1]]) {
      res += map[s[i] + s[i + 1]];
      i += 2;
    } else {
      res += map[s[i]];
      i += 1;
    }
  }
  return res;
};

// romanToInt('III');
// romanToInt('IV');
// romanToInt('MCMXCIV');
// romanToInt('MCDLXXVI');

console.log('III', romanToInt('III'));
console.log('IV', romanToInt('IV'));
console.log('IX', romanToInt('IX'));
console.log('LVIII', romanToInt('LVIII'));
console.log('MCMXCIV', romanToInt('MCMXCIV'));
console.log('MCDLXXVI', romanToInt('MCDLXXVI'));
console.log('MMCDXXV', romanToInt('MMCDXXV'));
console.log('CMLII', romanToInt('CMLII'));
```

### 十一、生成指定范围的随机数组

**题目**

```md
输入范围，输出随机组成的数组，比如输入 minNum、maxNum、option，返回 minNum 与 maxNum 间的随机数组构成的 option 长度的数组
```

**思路**

1. 求出随机数的范围 maxNum - minNum + 1

2. 指定范围的随机数算法 Math.random() \* len

3. 遍历 option,若生成的随机数不在 minNum 与 maxNum 范围内，则重新计算，否则，添加随机数到数组

4. 返回随机数组成的数组

**题解**

```js
function MakeRandomList(minNum, maxNum, option) {
  let res = [];
  const len = maxNum - minNum + 1;

  for (let i = 0; i < option; i++) {
    const random = Math.floor(Math.random() * len);
    if (random < minNum || random > maxNum) {
      i--;
      continue;
    }
    res.push(random);
  }

  return res;
}

const test = MakeRandomList(2, 6, 5);
console.log(test);
```
