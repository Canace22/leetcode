/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  this.S = S;
  this.T = T;
};
// 重构字符串
backspaceCompare.prototype.refactorStr = function () {
  const removeStr = (str) => {
    const result = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== '#') {
        result.unshift(str[i]);
      } else {
        result.shift();
      }
    }
    return result.join('');
  };
  const a = removeStr(this.S);
  const b = removeStr(this.T);

  return a === b;
};

backspaceCompare.prototype.doublePointer = function () {
  const evt = (str) => {
    const len = str.length;
    let skip = 0;
    let result = '';

    for (let i = len - 1; i >= 0; i--) {
      if (str[i] === '#') {
        skip += 1;
        continue;
      } else if (skip) {
        skip -= 1;
        continue;
      } else {
        result += str[i];
      }
    }
    return result;
  };

  const a = evt(this.S);
  const b = evt(this.T);

  return a === b;
};
module.exports = backspaceCompare;
