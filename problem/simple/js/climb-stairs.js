// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 注意：给定 n 是一个正整数。

// 示例 1：

// 输入： 2
// 输出： 2
// 解释： 有两种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶
// 2.  2 阶
// 示例 2：

// 输入： 3
// 输出： 3
// 解释： 有三种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶 + 1 阶
// 2.  1 阶 + 2 阶
// 3.  2 阶 + 1 阶

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/climbing-stairs

/**
 * @param {number} n
 * @return {number}
 */

// 暴力破解法，超时
// var climbStairs = function(n) {
//   return climb_stairs(0, n);
// };

// var climb_stairs = function(i, n) {
//   if (i > n) {
//     return 0;
//   }
//   if (i === n) {
//     return 1;
//   }
//   return climb_stairs(i + 1, n) + climb_stairs(i + 2, n);
// };

// 记忆化递归
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
console.log('2:', climbStairs(2));
console.log('3:', climbStairs(3));
console.log('5:', climbStairs(5));
