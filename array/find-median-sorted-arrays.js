// https://leetcode.cn/problems/median-of-two-sorted-arrays/
// 2022-07-11

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const mulArr = [].concat(nums1, nums2).sort((a, b) => a - b);
  if (mulArr.length === 1) return mulArr[0];
  if (mulArr.length % 2 === 0) {
    return (mulArr[mulArr.length / 2] + mulArr[mulArr.length / 2 - 1]) / 2;
  }
  return mulArr[Math.floor(mulArr.length / 2)];
};
