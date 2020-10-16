const sumNums = require('../../剑指offer/64-求1+2+…+n');

test('求 1+2+...+n ，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）', () => {
  const input = [3, 9];
  const output = [6, 45];

  input.forEach((ele, i) => {
    expect(sumNums(ele)).toBe(output[i]);
  });
});
