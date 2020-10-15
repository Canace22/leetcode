// 一刷时间: 2020
// 来源: https:leetcode-cn.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const len = nums.length;
  if (!len) return 0;

  let i = 0;

  for (let j = i; j < len; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

const test = [
  [1, 1, 2],
  [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
];

test.forEach((ele) => {
  const res = removeDuplicates(ele);
  console.log('result:', res);
  console.log(ele.slice(0, res));
});
