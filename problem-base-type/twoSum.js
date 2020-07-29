/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (nums, target) => {
  const len = nums.length;
  // 暴力破解法
  // for (let i = 0; i < len; i++) {
  //   for (let j = i + 1; j < len; j++) {
  //     if (nums[j] === target - nums[i]) {
  //       return [i, j];
  //     }
  //   }
  // }
  // return [];
  // 两遍哈希表
  // const map = new Map();
  // for (let i = 0; i < len; i++) {
  //   map.set(nums[i], i);
  // }
  // for (let i = 0; i < len; i++) {
  //   const complement = target - nums[i];
  //   if (map.has(complement) && map.get(complement) !== i) {
  //     return [i, map.get(complement)];
  //   }
  // }
  // return [];
  // 一遍哈希表
  const map = new Map();
  for (let i = 0; i < len; i++) {
    const complement = target - nums[i];
    if (map.has(complement) && map.get(complement) !== i) {
      return [map.get(complement), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};

var res = twoSum([2, 7, 11, 15], 0);
console.log('result:', res);