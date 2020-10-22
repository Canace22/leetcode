// 一刷时间: 2020-10-22
// 链接：https://leetcode-cn.com/problems/partition-labels/

/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
  const last = new Array(26);
  const length = S.length;
  const codePointA = 'a'.codePointAt(0);
  // 记录每个字符的 end pos
  for (let i = 0; i < length; i++) {
    last[S.codePointAt(i) - codePointA] = i;
  }
  const partition = [];
  let start = 0,
    end = 0;
  for (let i = 0; i < length; i++) {
    // 记录所有字符的最大 end pos
    end = Math.max(end, last[S.codePointAt(i) - codePointA]);
    // 遍历到当前最大 end pos,切割字符串
    if (i == end) {
      partition.push(end - start + 1);
      start = end + 1;
    }
  }
  return partition;
};

module.exports = partitionLabels;
