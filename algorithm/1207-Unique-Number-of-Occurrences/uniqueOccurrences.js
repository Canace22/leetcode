// 一刷时间: 2020-10-28
// 来源: https://leetcode-cn.com/problems/unique-number-of-occurrences/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const { length } = arr;
  const map = new Map();

  for (let i = 0; i < length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], 1);
    } else {
      map.set(arr[i], map.get(arr[i]) + 1);
    }
  }

  return [...new Set(map.values())].length === [...new Set(arr)].length;
};

module.exports = uniqueOccurrences;
