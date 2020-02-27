// 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

// 示例 1:
// 输入: 121
// 输出: true

// 示例 2:
// 输入: -121
// 输出: false
// 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。

// 示例 3:
// 输入: 10
// 输出: false
// 解释: 从右向左读, 为 01 。因此它不是一个回文数。
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/palindrome-number

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
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
