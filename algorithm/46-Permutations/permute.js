// 一刷时间: 2021-05-18
// 来源: https://leetcode-cn.com/problems/permutations/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const list = [];
  const len = nums.length
  const map = {}
  const backtrack = (path=[]) => {
    if (path.length === len) return list.push([...path]);
    for (let i = 0; i < len; i++) {
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
  return list;
};

module.exports = permute;
