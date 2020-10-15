// 一刷时间: 2020-09
// 来源: https://leetcode-cn.com/problems/combination-sum-iii/
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  // 二进制（子集）枚举
  let temp = [];
  const ans = [];
  const check = (mask, k, n) => {
    temp = [];
    for (let i = 0; i < 9; ++i) {
      if ((1 << i) & mask) {
        temp.push(i + 1);
      }
    }
    return (
      temp.length === k &&
      temp.reduce((previous, value) => previous + value, 0) === n
    );
  };

  for (let mask = 0; mask < 1 << 9; ++mask) {
    if (check(mask, k, n)) {
      ans.push(temp);
    }
  }
  return ans;
  // 组合枚举
  // const temp = [];
  // const res = [];
  // const dfs = (cur, n, k, sum, res) => {
  //   if (temp.length + (n - cur + 1) < k || temp.length > k) {
  //     return;
  //   }
  //   if (
  //     temp.length === k &&
  //     temp.reduce((previous, value) => previous + value, 0) === sum
  //   ) {
  //     res.push(temp.slice());
  //     return;
  //   }
  //   temp.push(cur);
  //   dfs(cur + 1, n, k, sum, res);
  //   temp.pop();
  //   dfs(cur + 1, n, k, sum, res);
  // };

  // dfs(1, 9, k, n, res);
  // return res;
};

const test = [
  { n: 3, k: 7 },
  { n: 3, k: 9 },
  { n: 2, k: 5 },
  { n: 4, k: 20 }
];

const start = +new Date();
test.forEach((ele) => {
  console.log(combinationSum3(ele.n, ele.k));
  // combinationSum2(ele.candidates, ele.target);
});
console.log(+new Date() - start);
