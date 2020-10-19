const backspaceCompare = require('../../algorithm/844-Backspace-String-Compare/backspaceCompare');

describe('Given two strings S and T, return if they are equal when both are typed into empty text editors', () => {
  const input = [
    { S: 'ab#c', T: 'ad#c' },
    { S: 'ab##', T: 'c#d#' },
    { S: 'a##c', T: '#a#c' },
    { S: 'a#c', T: 'b' },
    { S: 'bxj##tw', T: 'bxj###tw' }
  ];

  const output = [true, true, true, false, false];

  input.forEach((ele, i) => {
    const instance = new backspaceCompare(ele.S, ele.T);
    test(`测试重构字符串法${i + 1}`, () => {
      expect(instance.refactorStr()).toBe(output[i]);
    });

    test(`测试双指针法${i + 1}`, () => {
      expect(instance.doublePointer()).toBe(output[i]);
    });
  });
});
