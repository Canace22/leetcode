const twoSum = require('../../algorithm/01-two-sum/two-sum');

test('给定一个整数数组 nums 和一个目标值 target，找出该数组中和为目标值的那两个整数，并返回他们的数组下标。', () => {
  const input = [
    { nums: [2, 7, 11, 15], target: 9 },
    { nums: [2, 7, 11, 15], target: 0 }
  ];
  const output = [[0, 1], []];
  input.forEach((ele, i) => {
    expect(twoSum(ele.nums, ele.target)).toEqual(output[i]);
  });
});
