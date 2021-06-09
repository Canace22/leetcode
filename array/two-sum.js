// https://leetcode-cn.com/problems/two-sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  if (nums == null) return [];
  if (nums.length < 2) return [];
  // 暴力破解
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (target - nums[i] === nums[j]) {
  //       return [i, j];
  //     }
  //   }
  // }
  // 哈希表
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
};

const output1 = twoSum([2, 7, 11, 15], 9);
// output: [0, 1];
const output2 = twoSum([3, 2, 4], 6);
// output: [1, 2];
const output3 = twoSum([3, 3], 6);
//output:[0,1]
console.log('output1:', output1);
console.log('output2:', output2);
console.log('output3:', output3);
