// 一刷时间: 2020-11-09
// 来源: https://leetcode-cn.com/problems/move-zeroes/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const { length } = nums;
  if (!length) return nums;
  let j = -1;
  for (let i = 0; i < length; i++) {
    if (nums[i]) {
      j++;
      nums[j] = nums[i];
    }
  }
  for (let i = j + 1; i < length; i++) {
    nums[i] = 0;
  }
  return nums;
};

module.exports = moveZeroes;
