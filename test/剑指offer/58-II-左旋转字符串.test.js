const reverseLeftWords = require('../../剑指offer/58-II-左旋转字符串');

test('定义一个函数实现字符串左旋转操作的功能', () => {
  const input = [
    { s: 'abcdefg', k: 2 },
    { s: 'lrloseumgh', k: 6 }
  ];
  const output = ['cdefgab', 'umghlrlose'];

  input.forEach((ele, i) => {
    expect(reverseLeftWords(ele.s, ele.k)).toBe(output[i]);
  });
});
