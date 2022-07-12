// https://leetcode.cn/problems/container-with-most-water/
// 2022-07-12

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let res = 0;
  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    res = Math.max(Math.min(height[i], height[j]) * (j - i), res);
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return res;
};