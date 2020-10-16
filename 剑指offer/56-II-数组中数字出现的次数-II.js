// 一刷时间: 2020-10-15
// 题目来源: https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  const map = {};
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]] = 3;
    }
  }

  for (let i = 0; i < len; i++) {
    if (map[nums[i]] === 1) {
      return nums[i];
    }
  }
  return res;
};

module.exports = singleNumber;
