// https://leetcode-cn.com/problems/two-sum
// 2022-07-11

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
   const map = new Map();
   if (!nums?.length) {
     return []
   }
   for (let i = 0; i < nums.length; i++) {
     if (map.has(target-nums[i])) {
      return [map.get(target-nums[i]),i]
     }
     map.set(nums[i],i)
   }
};