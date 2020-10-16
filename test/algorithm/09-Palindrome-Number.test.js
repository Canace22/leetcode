const isPalindrome = require('../../algorithm/09-Palindrome-Number/isPalindrome');

test('判断一个整数是否是回文数', () => {
  const input = [121, -121, 10];
  const output = [true, false, false];
  input.forEach((ele, i) => {
    expect(isPalindrome(ele)).toBe(output[i]);
  });
});
