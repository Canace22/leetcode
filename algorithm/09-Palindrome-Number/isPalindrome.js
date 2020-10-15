// 一刷时间: 2020-02
// 链接：https://leetcode-cn.com/problems/palindrome-number

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
