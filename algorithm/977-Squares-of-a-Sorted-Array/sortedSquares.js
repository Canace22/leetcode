// 一刷时间: 2020-10-16
// 来源: https://leetcode-cn.com/problems/squares-of-a-sorted-array/
// 考察数组的排序

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  const len = A.length;
  const result = [];
  for (let i = 0, j = len - 1, pos = len - 1; i <= j; ) {
    if (A[i] * A[i] > A[j] * A[j]) {
      result[pos] = A[i] * A[i];
      ++i;
    } else {
      result[pos] = A[j] * A[j];
      --j;
    }
    --pos;
  }

  return result;
};
module.exports = sortedSquares;
