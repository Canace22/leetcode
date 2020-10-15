//  一刷时间: 2019
//  链接：https: // leetcode-cn.com/problems/valid-parentheses

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let valid = true;
  let stack = [];
  let map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  const F = Object.keys(map);

  for (let i in s) {
    let value = s[i];

    const outStack = () => {
      const peak = stack.pop();
      if (value !== map[peak]) {
        valid = false;
      }
    };
    F.indexOf(value) !== -1 ? stack.push(value) : outStack();
  }
  if (stack.length > 0) return false;
  return valid;
};
