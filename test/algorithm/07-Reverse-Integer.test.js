const reverse = require('../../algorithm/07-Reverse-Integer/reverse-num');

test('给出一个 32 位的有符号整数，将这个整数中每位上的数字进行反转', () => {
  const input = [123, -123, 120];
  const output = [321, -321, 21];
  input.forEach((ele, i) => {
    expect(reverse(ele)).toBe(output[i]);
  });
});
