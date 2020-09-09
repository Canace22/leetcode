/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const ans = [];
  const dfs = (target, combine, idx) => {
    if (idx === candidates.length) {
      return;
    }
    if (target === 0) {
      ans.push(combine);
      return;
    }
    // 直接跳过
    dfs(target, combine, idx + 1);
    // 选择当前数
    if (target - candidates[idx] >= 0) {
      dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
    }
  };

  dfs(target, [], 0);
  return ans;
};

const test = [
  { candidates: [2, 3, 6, 7], target: 7 },
  { candidates: [2, 3, 5], target: 8 },
];

test.forEach((ele) => {
  console.log(combinationSum(ele.candidates, ele.target));
});
