// 一刷时间: 2021-05-18
// 来源: https://leetcode-cn.com/problems/permutations/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];
  const map = {}
  const backtrack = (path=[]) => {
    if (path.length === nums.length) return res.push([...path]);
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i]
      if (map[num]) continue;
      path.push(num);
      map[num] = 1
      backtrack(path);
      map[num] = 0;
      path.pop();
    }
  };
  backtrack();
  return res;
};

module.exports = permute;
