// 一刷时间: 2020-10-15
// 题目来源: https://leetcode-cn.com/problems/qiu-12n-lcof/
/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function (n) {
  return n && (n += sumNums(n - 1));
};

module.exports = sumNums;
