/*
一刷时间: 2020
来源:https://leetcode-cn.com/problems/median-of-two-sorted-arrays/
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // brute force
  // 归并排序
  const merged = [];
  let i = 0;
  let j = 0;
  const [lenA, lenB] = [nums1.length, nums2.length];
  while (i < lenA && j < lenB) {
    if (nums1[i] < nums2[j]) {
      merged.push(nums1[i]);
      i++;
    } else {
      merged.push(nums2[j]);
      j++;
    }
  }
  while (i < lenA) {
    merged.push(nums1[i]);
    i++;
  }
  while (j < lenB) {
    merged.push(nums2[j]);
    j++;
  }

  const { length } = merged;
  return length % 2 === 1
    ? merged[Math.floor(length / 2)]
    : (merged[length / 2] + merged[length / 2 - 1]) / 2;
};

module.exports = findMedianSortedArrays;