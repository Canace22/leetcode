// 一刷时间: 2020-11-09
// 来源: https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const { length } = nums;
  if (length < 3) return length;
  let j = 0;
  const k = 2;
  for (let i = 0; i < length; i++) {
    if (j < k || nums[i] !== nums[j - k]) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
};

const input = [
  [1, 1, 1, 2, 2, 3],
  [0, 0, 1, 1, 1, 1, 2, 3, 3],
];
const output = [5, 7];

input.forEach((ele, i) => {
  console.log(`测试${i+1}`,removeDuplicates(ele));
})
