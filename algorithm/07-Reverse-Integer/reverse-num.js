// 一刷时间: 2020-02
// 链接：https://leetcode-cn.com/problems/reverse-integer

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
