const combinationSum2 = require('../../algorithm/40-Combination-Sum-II/combinationSum2');

test('给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合,candidates 中的每个数字在每个组合中只能使用一次', () => {
  const input = [
    { candidates: [10, 1, 2, 7, 6, 1, 5], target: 8 },
    { candidates: [2, 5, 2, 1, 2], target: 5 }
  ];
  const output = [
    [
      [1, 1, 6],
      [1, 2, 5],
      [1, 7],
      [2, 6]
    ],
    [[1, 2, 2], [5]]
  ];
  input.forEach((ele, i) => {
    expect(combinationSum2(ele.candidates, ele.target)).toMatchObject(
      output[i]
    );
  });
});
