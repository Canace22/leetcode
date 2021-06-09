// https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  // 暴力破解
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i+1; j < nums.length; j++) {
  //     if (nums[i] === nums[j]) {
  //       return nums[j]
  //     }
  //   }
  // }
  // 哈希查找
  const map = []
  for (let i = 0; i < nums.length; i++) {
    if (map.includes(nums[i])) {
      return nums[i]
    }
    map.push(nums[i])
  }
  return -1
};

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));