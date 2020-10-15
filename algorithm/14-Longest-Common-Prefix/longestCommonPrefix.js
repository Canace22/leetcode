// 一刷时间: 2020-02
// 链接：https://leetcode-cn.com/problems/longest-common-prefix

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const len = strs.length;
  let lcp = strs[0];
  if (len == 0) return '';
  for (let i = 1; i < len; i++) {
    const prefixLen = strs[i].length;
    let j = 0;
    for (; j < lcp.length && j < prefixLen; j++) {
      if (lcp[j] != strs[i][j]) break;
    }
    lcp = lcp.substr(0, j);
    if (lcp === '') return lcp;
  }
  return lcp;
};

// longestCommonPrefix(['flower', 'flow', 'flight']);
console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
// console.log(longestCommonPrefix(['flower', 'flow', 'fight']));
