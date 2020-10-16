const combinationSum = require('../../algorithm/39-Combination-Sum/combinationSum');

test('给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合', () => {
  const input = [
    { candidates: [2, 3, 6, 7], target: 7 },
    { candidates: [2, 3, 5], target: 8 }
  ];
  const output = [
    [[7], [2, 2, 3]],
    [
      [3, 5],
      [2, 3, 3],
      [2, 2, 2, 2]
    ]
  ];
  input.forEach((ele, i) => {
    expect(combinationSum(ele.candidates, ele.target)).toMatchObject(output[i]);
  });
});
