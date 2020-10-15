// 一刷时间: 2020-04
// 来源: https://leetcode-cn.com/problems/qi-wang-ge-shu-tong-ji/

/**
 * @param {number[]} scores
 * @return {number}
 */
var expectNumber = function (scores) {
  if (!scores.length) return 0;
  const newArr = [...new Set(scores)];
  return newArr.length;
};
