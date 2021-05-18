const permute = require('../../algorithm/46-Permutations/permute');

test('Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order', () => {
  const input = [[1, 2, 3], [0, 1], [1]];
  const output = [
    [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ],
    [
      [0, 1],
      [1, 0],
    ],
    [[1]],
  ];
  input.forEach((ele, i) => {
    expect(permute(ele)).toMatchObject(output[i]);
  });
});
