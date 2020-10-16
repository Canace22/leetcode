// 一刷时间: 2020-09
// 来源: https://leetcode-cn.com/problems/combination-sum-ii/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let n = candidates.length;
  let ans = [];
  // 从小到大排序
  candidates = candidates.sort((a, b) => {
    return a - b;
  });
  // 深度优先搜索
  const dfs = (combine, target, idx) => {
    // target 等于 0，说明找到了一个组合, 把该组合放到结果集里
    if (target === 0) {
      ans.push(combine);
      return;
    }
    // 数组枚举
    for (let i = idx; i < n; i++) {
      // 搜索目标值比当前值小，说明目标值不能再分解了，结束搜索
      if (target < candidates[i]) break;
      // 当前值与上一个值一样,直接跳过，搜索下一个
      if (i > idx && candidates[i - 1] === candidates[i]) continue;
      // 把当前值加到组合里
      combine.push(candidates[i]);
      // 继续往下搜索
      dfs([...combine], target - candidates[i], i + 1);
      // 回溯
      combine.pop();
    }
  };
  dfs([], target, 0);

  return ans;
};

module.exports = combinationSum2;
