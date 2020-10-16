// 一刷时间: 2020
// 来源: https://leetcode-cn.com/problems/remove-element/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  if (!nums.length) return 0;

  const len = nums.length;
  let i = 0;

  for (let j = 0; j < len; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};

module.exports = removeElement;