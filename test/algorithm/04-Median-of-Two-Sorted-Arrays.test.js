const findMedianSortedArrays = require('../../algorithm/04-Median-of-Two-Sorted-Arrays/findMedianSortedArrays');

test('给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。找出并返回这两个正序数组的中位数', () => {
  const input = [
    { nums1: [1, 3], nums2: [2] },
    { nums1: [1, 2], nums2: [3, 4] },
    { nums1: [0, 0], nums2: [0, 0] },
    { nums1: [], nums2: [1] },
    { nums1: [2], nums2: [] }
  ];
  const output = [2, 2.5, 0.0, 1.0, 2.0];

  input.forEach((ele, i) => {
    expect(findMedianSortedArrays(ele.nums1, ele.nums2)).toBe(output[i]);
  });
});
