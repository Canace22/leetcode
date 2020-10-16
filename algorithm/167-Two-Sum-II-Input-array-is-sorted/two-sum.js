// 一刷时间: 2020-04
// 来源: https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let map = {};
  const len = numbers.length;
  for (let i = 0; i < len; i++) {
    const item = numbers[i];
    const complement = target - item;
    const curItem = map[complement] + 1;
    if (curItem) {
      return [curItem, i + 1];
    }
    map[item] = i;
  }
  return [];
};
module.exports = twoSum;
