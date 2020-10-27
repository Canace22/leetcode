// 一刷时间: 2020-10-27
// 来源: https://leetcode-cn.com/problems/transpose-matrix/
// 考察数组的遍历
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
  const cLen = A.length;
  const rLen = A[0].length;
  const result = [];
  for (let i = 0; i < rLen; i++) {
    const item = [];
    for (let j = 0; j < cLen; j++) {
      item.push(A[j][i]);
    }
    result.push(item);
  }

  return result;
};

module.exports = transpose;
