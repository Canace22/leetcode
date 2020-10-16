// 一刷时间: 2020-04
// 来源: https://leetcode-cn.com/problems/reverse-words-in-a-string/

/**
 * @param {string} s
 * @return {string}
 */
// trim 实现
String.prototype.trim = function () {
  let str = this;
  const whitespace =
    ' \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000';
  const len = str.length;
  for (let i = 0; i < len; i++) {
    if (whitespace.indexOf(str.charAt(i)) === -1) {
      str = str.substring(i);
      break;
    }
  }
  for (i = len - 1; i >= 0; i--) {
    if (whitespace.indexOf(str.charAt(i)) === -1) {
      str = str.substring(0, i + 1);
      break;
    }
  }
  return whitespace.indexOf(str.charAt(0)) === -1 ? str : '';
};
var reverseWords = function (s) {
  const str = s.trim();
  const arr = str.split(/\s+/);
  const len = arr.length - 1;
  let res = [];

  for (let i = len; i >= 0; i--) {
    const item = arr[i];
    res.push(item);
  }
  return res.join(' ');
};

module.exports = reverseWords;

