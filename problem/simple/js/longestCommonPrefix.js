// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:
// 输入: ["flower","flow","flight"]
// 输出: "fl"

// 示例 2:
// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。
// 说明:

// 所有输入只包含小写字母 a-z 。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/longest-common-prefix

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
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
