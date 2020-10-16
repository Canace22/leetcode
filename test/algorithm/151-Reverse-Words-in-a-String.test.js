const reverseWords = require('../../algorithm/151-Reverse-Words-in-a-String/reverseWords');

test('给定一个字符串，逐个翻转字符串中的每个单词', () => {
  const input = [
    'the sky is blue',
    '  hello world!  ',
    'a good   example',
    '  Bob    Loves  Alice   ',
    'Alice does not even like bob'
  ];
  const output = [
    'blue is sky the',
    'world! hello',
    'example good a',
    'Alice Loves Bob',
    'bob like even not does Alice'
  ];
  input.forEach((ele, i) => {
    expect(reverseWords(ele)).toBe(output[i]);
  });
});
