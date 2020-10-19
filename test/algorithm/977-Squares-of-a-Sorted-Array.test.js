const sortedSquares = require('../../algorithm/977-Squares-of-a-Sorted-Array/sortedSquares');

test('给定一个按非递减顺序排序的整数数组 A，返回每个数字的平方组成的新数组，要求也按非递减顺序排序', () => {
  const input = [
    [-4, -1, 0, 3, 10],
    [-7, -3, 2, 3, 11]
  ];
  const output = [
    [0, 1, 9, 16, 100],
    [4, 9, 9, 49, 121]
  ];
  input.forEach((ele, i) => {
    expect(sortedSquares(ele)).toEqual(output[i]);
  });
});
