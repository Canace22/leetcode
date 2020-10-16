const removeDuplicates = require('../../algorithm/26-Remove-Duplicates-from-Sorted-Array/removeDuplicates');

test('原地删除排序数组中的重复项', () => {
  const input = [
    [1, 1, 2],
    [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
  ];
  const output = [2, 5];
  input.forEach((ele, i) => {
    expect(removeDuplicates(ele)).toBe(output[i]);
  });
});
