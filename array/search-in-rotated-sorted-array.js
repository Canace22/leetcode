// https://leetcode.cn/problems/search-in-rotated-sorted-array/
// 2022-07-13

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums == null) return -1;
  const len = nums.length;
  if (len === 1) nums[0] === target ? 0 : -1;
  let l = 0,
    r = len - 1;

  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] >= nums[l]) {
      if (target >= nums[l] && target < nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      if (target <= nums[r] && target > nums[mid]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return -1;
};
const res = search([4, 5, 6, 7, 0, 1, 2], 0);
console.log('res:', res);
