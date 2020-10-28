// 一刷时间: 2020-04
// 来源: https://leetcode-cn.com/problems/count-number-of-nice-subarrays/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  nums.push(1);
  const len = nums.length;
  let odd = [-1];
  let ans = 0;
  let j = 1;

  for (let i = 0; i < len; ++i) {
    const num = nums[i];
    if (num % 2) {
      odd.push(i);
      if (odd[k + 1]) {
        ans += (odd[j] - odd[j - 1]) * (odd[k + 1] - odd[k]);
        ++k;
        ++j;
      }
    }
  }
  return ans;
};

module.exports = numberOfSubarrays;


