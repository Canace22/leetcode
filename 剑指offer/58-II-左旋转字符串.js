// 一刷时间: 2020-10-15
// 题目来源: https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  return s.substring(n) + s.substring(0, n);
};

module.exports = reverseLeftWords;
