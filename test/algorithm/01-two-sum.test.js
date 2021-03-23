const twoSum = require('../../algorithm/01-two-sum/two-sum');

const input = [
  { nums: [2, 7, 11, 15], target: 9 },
  { nums: [2, 7, 11, 15], target: 0 },
];
const output = [[0, 1], []];
test('暴力破解法', () => {
  input.forEach((ele, i) => {
    expect(twoSum.bruteForce(ele.nums, ele.target)).toEqual(output[i]);
  });
});

test('两遍哈希', () => {
  input.forEach((ele, i) => {
    expect(twoSum.twoPassHash(ele.nums, ele.target)).toEqual(output[i]);
  });
});

test('一遍哈希', () => {
  input.forEach((ele, i) => {
    expect(twoSum.onePassHash(ele.nums, ele.target)).toEqual(output[i]);
  });
});
