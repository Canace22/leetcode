// 一刷时间: 2020-02
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
console.log('2:', climbStairs(2));
console.log('3:', climbStairs(3));
console.log('5:', climbStairs(5));
