const combinationSum3 = require('../../algorithm/216-Combination-Sum-III/combinationSum3');

test('找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字', () => {
  const input = [
    { k: 3, n: 7 },
    { k: 3, n: 9 }
  ];
  const output = [
    [[1, 2, 4]],
    [
      [1, 2, 6],
      [1, 3, 5],
      [2, 3, 4]
    ]
  ];
  input.forEach((ele, i) => {
    expect(combinationSum3(ele.k, ele.n)).toMatchObject(output[i]);
  });
});
