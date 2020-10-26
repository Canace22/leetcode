/*
一刷时间: 2020-10-26
链接：https://leetcode-cn.com/problems/how-many-numbers-are-smaller-than-the-current-number/
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {};
smallerNumbersThanCurrent.bruteForce = (nums) => {
  const { length } = nums;
  const result = Array(length).fill(0);
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (nums[j] < nums[i]) {
        result[i]++;
      }
    }
  }
  return result;
};
smallerNumbersThanCurrent.sort = (nums) => {
  const { length } = nums;
  const data = new Array(length).fill(0).map((v) => new Array(2).fill(0));
  for (let i = 0; i < length; ++i) {
    data[i][0] = nums[i];
    data[i][1] = i;
  }
  data.sort((a, b) => a[0] - b[0]);

  const result = new Array(length);
  let prev = -1;
  for (let i = 0; i < length; ++i) {
    if (prev == -1 || data[i][0] !== data[i - 1][0]) {
      prev = i;
    }
    result[data[i][1]] = prev;
  }
  return result;
};

module.exports = smallerNumbersThanCurrent;
