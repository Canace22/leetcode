const longestPalindrome = require('../../algorithm/05-Longest-Palindromic-Substring/longestPalindrome');

test('给定一个字符串 s，找到 s 中最长的回文子串', () => {
  const input = ['babad', 'cbbd'];
  const output = [['bab', 'aba'], ['bb']];
  input.forEach((ele, i) => {
    expect(output[i]).toContain(longestPalindrome(ele));
  });
});
