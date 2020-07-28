/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // brute force Runtime: 112 ms 37MB
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++){
      if (nums[j] === target - nums[i]) {
        return [i,j]
      }
    }
  }
  // two-pass hash table Runtime: 72 ms 37.9MB
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i],i)
  }
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (map.has(complement) && map.get(complement) !== i) {
      return [i, map.get(complement)];
    }
  }
  throw 'No two sum solution';
};

const res = twoSum([2, 7, 11, 15],9);
console.log('result:',res);