const longestCommonPrefix = require('../../algorithm/14-Longest-Common-Prefix/longestCommonPrefix');

test('编写一个函数来查找字符串数组中的最长公共前缀', () => {
  const input = [
    ['flower', 'flow', 'flight'],
    ['dog', 'racecar', 'car']
  ];
  const output = ['fl', ''];
  input.forEach((ele, i) => {
    expect(longestCommonPrefix(ele)).toBe(output[i]);
  });
});
