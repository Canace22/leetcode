/**
 * 归并排序(分治算法思想)
 * 此合并方法以二路合并为例，这种排序算法往往需要申请较大的辅助空间，这个辅助空间和待排序原始序列空间一样多。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
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

const test = [
  [[1, 3], [2]],
  [
    [1, 2],
    [3, 4],
  ],
];

test.forEach((ele) => {
  const res = findMedianSortedArrays(ele[0], ele[1]);
  console.log(res);
});
