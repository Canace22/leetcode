/*
一刷时间: 2019
二刷时间: 2020
三刷时间：2021-03-23
链接：https://leetcode-cn.com/problems/two-sum
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 暴力破解法
// - 枚举在数组中所有的不同下标组合，比如这样: 2:[7,11,15,9], 7: [11,15,9]……
// - 逐个检查所对应的数之和是否为 target
var bruteForce = (nums, target) => {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[j] === target - nums[i]) {
        return [i, j];
      }
    }
  }
  return [];
};
// 两遍哈希表
var twoPassHash = (nums, target) => {
  const len = nums.length;
  const map = new Map();
  for (let i = 0; i < len; i++) {
    map.set(nums[i], i);
  }
  for (let i = 0; i < len; i++) {
    const complement = target - nums[i];
    if (map.has(complement) && map.get(complement) !== i) {
      return [i, map.get(complement)];
    }
  }
  return [];
};
// 一遍哈希表
var onePassHash = (nums, target) => {
  const len = nums.length;
  const map = new Map();
  for (let i = 0; i < len; i++) {
    const complement = target - nums[i];
    if (map.has(complement) && map.get(complement) !== i) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
};
module.exports = {
  bruteForce,
  twoPassHash,
  onePassHash,
};
