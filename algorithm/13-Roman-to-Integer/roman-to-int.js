// 一刷时间: 2020-02
// 链接：https://leetcode-cn.com/problems/roman-to-integer

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
    CM: 900
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

module.exports = romanToInt;
