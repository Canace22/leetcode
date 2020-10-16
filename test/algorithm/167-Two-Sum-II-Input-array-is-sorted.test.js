const twoSum = require('../../algorithm/167-Two-Sum-II-Input-array-is-sorted/two-sum');
test('给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数', () => {
  const input = [{ numbers: [2, 7, 11, 15], target: 9 }];
  const output = [[1, 2]];
  input.forEach((ele, i) => {
    expect(twoSum(ele.numbers, ele.target)).toEqual(output[i]);
  });
});
