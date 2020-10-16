const singleNumber = require('../../剑指offer/56-II-数组中数字出现的次数-II');

test('在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。找出那个只出现一次的数字', () => {
  const input = [
    [3, 4, 3, 3],
    [9, 1, 7, 9, 7, 9, 7]
  ];
  const output = [4, 1];

  input.forEach((ele, i) => {
    expect(singleNumber(ele)).toBe(output[i]);
  });
});
