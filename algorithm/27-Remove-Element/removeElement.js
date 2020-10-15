// 一刷时间: 2020
// 来源: https://leetcode-cn.com/problems/remove-element/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  if (!nums.length) return 0;

  const len = nums.length;
  let i = 0;

  for (let j = 0; j < len; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};

const test = [
  [[3, 2, 2, 3], 3],
  [[0, 1, 2, 2, 3, 0, 4, 2], 2]
];

test.forEach((ele) => {
  const res = removeElement(ele[0], ele[1]);

  console.log('result:', res);
});
