// https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/
// 2022-07-14

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const binarySearch = function (nums, target, lower) {
  let res = nums.length;
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (nums[mid] > target || (lower && nums[mid] >= target)) {
      r = mid - 1;
      res = mid;
    } else {
      l = mid + 1;
    }
  }
  return res;
};
var searchRange = function (nums, target) {
  let res = [-1, -1];
  const firstIndex = binarySearch(nums, target, true);
  const lastIndex = binarySearch(nums, target, false) - 1;
  if (
    firstIndex <= lastIndex &&
    lastIndex < nums.length &&
    nums[firstIndex] === target &&
    nums[lastIndex] === target
  ) {
    res = [firstIndex, lastIndex];
  }
  return res
};

const res = searchRange([5, 7, 7, 8, 8, 10], 8); // [3,4]
console.log(res);
