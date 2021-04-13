// 一刷时间: 2021-04
// 来源: https://leetcode-cn.com/problems/binary-search/

var search = function (nums, target) {
  var len = nums.length;
  var L = 0;
  var R = len - 1;

  while (L <= R) {
    var M = Math.floor((L + R) / 2);
    if (nums[M] === target) return M;
    if (nums[M] < target) {
      L = M + 1;
    } else {
      R = M - 1;
    }
  }
  return -1;
};

module.exports = { search };
