const isValid = require('../../algorithm/20-Valid-Parentheses/isValid');

test('括号匹配', () => {
  const input = ['()', '()[]{}', '(]', '([)]', '{[]}'];
  const output = [true, true, false, false, true];
  input.forEach((ele, i) => {
    expect(isValid(ele)).toBe(output[i]);
  });
});
