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

const test = [[[1,3],[2]],[[1,2],[3,4]]]

test.forEach(ele => {
  const res = findMedianSortedArrays(ele[0], ele[1]);
  console.log(res);
})

