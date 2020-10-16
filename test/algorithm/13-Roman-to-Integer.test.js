const romanToInt = require('../../algorithm/13-Roman-to-Integer/roman-to-int');

test('给定一个罗马数字，将其转换成整数', () => {
  const input = ['III', 'IV', 'IX', 'LVIII', 'MCMXCIV'];
  const output = [3, 4, 9, 58, 1994];
  input.forEach((ele, i) => {
    expect(romanToInt(ele)).toBe(output[i]);
  });
});
