# 中等难度题目的题解

### 一、 盛最多水的容器(middle)

**题目：**

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

**题解：**

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

### 二、两字符串相乘(middle)

**题目：**

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

**题解**

我们知道 123 * 123 = 123 * 100 + 123 * 20 + 123 * 3，而 123 = 1 * 10**2 + 2 * 10 ** 1 + 3 * 10 ** 0，这样就把两个数字想转换为了第一个数乘以第二个数的每一位乘以该位上的10的个数了，所以该算法可以分解为：

(1). 逆序遍历被乘数，得出每一位上的数字

(2). 把结果加起来就是结果了

这里需要注意的是我们输入的是字符串，输出的也是字符串，这里面要考虑变量类型转换的问题，此外为什么这么简单的数字相乘要弄得这么复杂，是因为在计算很大的数字时有些语言的结果可能不对，所以只能用这种曲线救国的方案去调优。

1、求两字符串相加的和

```js
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
```

2、求两字符串相乘的积

```js
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
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
